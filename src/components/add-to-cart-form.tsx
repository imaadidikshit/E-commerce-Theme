
"use client";

import { useState, useMemo, useCallback } from 'react';
import type { Product, Variant, ProductOption } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

function VariantSelector({ option, selectedOptions, setSelectedOptions }: { option: ProductOption, selectedOptions: { [key: string]: string }, setSelectedOptions: React.Dispatch<React.SetStateAction<{ [key: string]: string }>> }) {
  const isColor = option.name.toLowerCase() === 'color';

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold">{option.name}</h3>
      <div className="flex flex-wrap gap-3">
        {option.values.map(value => {
          const isActive = selectedOptions[option.name] === value;
          return (
            <button
              key={value}
              onClick={() => setSelectedOptions(prev => ({ ...prev, [option.name]: value }))}
              className={cn(
                "px-4 py-2 rounded-full border text-sm font-medium transition-colors",
                isActive ? "bg-primary text-primary-foreground border-primary" : "bg-background hover:bg-secondary",
                isColor ? 'w-10 h-10 p-0 flex items-center justify-center' : ''
              )}
              aria-pressed={isActive}
              title={value}
            >
              {isColor ? (
                <span className="w-6 h-6 rounded-full border" style={{ backgroundColor: value.toLowerCase() === 'white gold' ? '#E5E7EB' : value.toLowerCase() === 'yellow gold' ? '#FBBF24' : value.toLowerCase() === 'rose gold' ? '#FBCFE8' : value.toLowerCase() === 'black' ? '#1A1A1A' : value.toLowerCase() === 'cognac' ? '#964B00' : value.toLowerCase() === 'heather grey' ? '#D1D5DB' : value.toLowerCase() === 'camel' ? '#C19A6B' : value.toLowerCase() === 'onyx' ? '#1A1A1A' : value.toLowerCase() === 'champagne' ? '#F7E7CE' : 'transparent' }}></span>
              ) : (
                value
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}


export function AddToCartForm({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const initialOptions = useMemo(() => {
    const options: { [key: string]: string } = {};
    product.options.forEach(option => {
      options[option.name] = option.values[0];
    });
    return options;
  }, [product.options]);

  const [selectedOptions, setSelectedOptions] = useState(initialOptions);

  const selectedVariant = useMemo(() => {
    return product.variants.find(variant => {
      return Object.entries(selectedOptions).every(([name, value]) => {
        if (name.toLowerCase() === 'color') return variant.color === value;
        if (name.toLowerCase() === 'size') return variant.size === value;
        return false;
      });
    });
  }, [product.variants, selectedOptions]);

  const handleAddToCart = () => {
    if (selectedVariant) {
      if (selectedVariant.availableForSale) {
        addToCart(product, selectedVariant, 1);
        toast({
          title: "Added to cart",
          description: `${product.name} (${selectedVariant.title}) has been added to your cart.`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Sold Out",
          description: "This variant is currently unavailable.",
        });
      }
    } else if (product.variants.length > 0 && product.options.length > 0) {
       toast({
        variant: "destructive",
        title: "Unavailable",
        description: "This combination of options is not available.",
      });
    } else if (product.variants.length > 0 && product.options.length === 0) {
        // Case for products with one variant and no options
        const variant = product.variants[0];
        if (variant.availableForSale) {
            addToCart(product, variant, 1);
            toast({
                title: "Added to cart",
                description: `${product.name} has been added to your cart.`,
            });
        } else {
            toast({
                variant: "destructive",
                title: "Sold Out",
                description: "This product is currently unavailable.",
            });
        }
    }
  };
  
  const isAddToCartDisabled = product.variants.length > 0 && !selectedVariant || !selectedVariant?.availableForSale;

  return (
    <div id="add-to-cart-form" className="space-y-8">
      {product.options.map(option => (
        <VariantSelector
          key={option.name}
          option={option}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      ))}
      
      <Button size="lg" className="w-full" onClick={handleAddToCart} disabled={isAddToCartDisabled}>
        {selectedVariant?.availableForSale === false ? "Sold Out" : "Add to Cart"}
      </Button>
    </div>
  );
}
