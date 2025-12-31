
"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/cart-context';
import type { Product, Variant } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
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
  const { addToCart } = useCart();
  const { toast } = useToast();
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
      toast({
        title: "Added to cart",
        description: `${product.name} (${selectedVariant.title}) has been added to your cart.`,
      });
    } else {
        toast({
            variant: "destructive",
            title: "Please select a variant",
            description: "You must choose a size and/or color before adding to cart."
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
                <SelectItem key={variant.id} value={variant.id}>{variant.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
             <div className="flex-1 min-w-0">
                <p className="font-bold truncate">{product.name}</p>
                <p className="text-sm">{formatPrice(product.price)}</p>
            </div>
        )}
        <Button onClick={handleAddToCart} className="flex-shrink-0">Add to Cart</Button>
      </div>
    </div>
  );
}
