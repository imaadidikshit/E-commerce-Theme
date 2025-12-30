"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/cart-context';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

export function StickyAddToCart({ product }: { product: Product }) {
  const [isVisible, setIsVisible] = useState(false);
  const mainButtonRef = useRef<HTMLElement | null>(null);
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    mainButtonRef.current = document.getElementById('main-add-to-cart');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the main button is NOT visible, show the sticky one.
        setIsVisible(!entry.isIntersecting);
      },
      { rootMargin: "0px 0px -100% 0px" } // Trigger when button is off-screen
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
    const defaultVariant = product.variants[0];
     if (defaultVariant) {
      addToCart(product, defaultVariant, 1);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  }

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 bg-background/80 border-t backdrop-blur-lg p-4 transform transition-transform duration-300 ease-in-out md:hidden",
      isVisible ? "translate-y-0" : "translate-y-full"
    )}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="font-bold truncate">{product.name}</p>
          <p className="text-sm">{formatPrice(product.price)}</p>
        </div>
        <Button onClick={handleAddToCart} className="flex-shrink-0">Add to Cart</Button>
      </div>
    </div>
  );
}
