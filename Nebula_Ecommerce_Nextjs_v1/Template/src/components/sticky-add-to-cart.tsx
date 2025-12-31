
"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/cart-context';
import type { Product, Variant } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { XCircle } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function StickyAddToCart({ product }: { product: Product }) {
  const [isVisible, setIsVisible] = useState(false);
  const mainButtonRef = useRef<HTMLElement | null>(null);
  const { addToCart, setIsCartOpen } = useCart();
  const [alertState, setAlertState] = useState<{ open: boolean; title: string; description: string; isError: boolean }>({ open: false, title: '', description: '', isError: false });
  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>(product.variants[0]);

  useEffect(() => {
    // We look for the AddToCartForm component, not a single button
    mainButtonRef.current = document.getElementById('add-to-cart-form');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the main form is NOT visible, show the sticky one.
        setIsVisible(!entry.isIntersecting);
      },
      { rootMargin: "0px 0px -100% 0px" } // Trigger when form is off-screen
    );

    if (mainButtonRef.current) {
      observer.observe(mainButtonRef.current);
    }

    return () => {
      if (mainButtonRef.current) {
        observer.unobserve(mainButtonRef.current);
      }
    };
  }, []);
  
  const handleAddToCart = () => {
     if (selectedVariant) {
      addToCart(product, selectedVariant, 1);
      setIsCartOpen(true);
      setTimeout(() => setIsCartOpen(false), 1500);
    } else {
        setAlertState({
            open: true,
            title: "Please select a variant",
            description: "You must choose a size and/or color before adding to cart.",
            isError: true,
        })
    }
  }

  const handleVariantChange = (variantId: string) => {
    const variant = product.variants.find(v => v.id === variantId);
    setSelectedVariant(variant);
  }

  if (product.variants.length === 0) {
      return null;
  }

  return (
    <>
      <div className={cn(
        "fixed bottom-0 left-0 right-0 bg-background/80 border-t backdrop-blur-lg p-4 transform transition-transform duration-300 ease-in-out md:hidden",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}>
        <div className="flex items-center justify-between gap-4">
          {product.variants.length > 1 ? (
            <Select onValueChange={handleVariantChange} defaultValue={selectedVariant?.id}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select variant" />
              </SelectTrigger>
              <SelectContent>
                {product.variants.map(variant => (
                  <SelectItem key={variant.id} value={variant.id} disabled={!variant.availableForSale}>
                    {variant.title}{!variant.availableForSale && " (Sold Out)"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
              <div className="flex-1 min-w-0">
                  <p className="font-bold truncate">{product.name}</p>
                  <p className="text-sm">{formatPrice(product.price)}</p>
              </div>
          )}
          <Button onClick={handleAddToCart} className="flex-shrink-0" disabled={!selectedVariant?.availableForSale}>
            {selectedVariant?.availableForSale ? 'Add to Cart' : 'Sold Out'}
          </Button>
        </div>
      </div>
       <AlertDialog open={alertState.open} onOpenChange={(open) => setAlertState(s => ({ ...s, open }))}>
        <AlertDialogContent className="text-center">
          <AlertDialogHeader className="items-center">
            <XCircle className="w-12 h-12 text-destructive" />
            <AlertDialogTitle className="pt-4">{alertState.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertState.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogAction onClick={() => setAlertState({ open: false, title: '', description: '', isError: false })}>
            Close
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
