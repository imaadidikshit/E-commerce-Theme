
"use client";

import { useState, useMemo } from 'react';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import { cn } from '@/lib/utils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { CheckCircle, XCircle } from 'lucide-react';

function VariantSelector({ option, selectedOptions, setSelectedOptions }: { option: { name: string, values: string[] }, selectedOptions: { [key: string]: string }, setSelectedOptions: React.Dispatch<React.SetStateAction<{ [key: string]: string }>> }) {
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
  const { addToCart, setIsCartOpen } = useCart();
  const [alertState, setAlertState] = useState<{ open: boolean; title: string; description: string; isError: boolean }>({ open: false, title: '', description: '', isError: false });

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
        // This logic needs to be more robust if option names change
        const variantOption = variant.title.split(' / ').find(v => option.values.includes(v.trim()));
        return variant.title.split(' / ').includes(value);
      });
    });
  }, [product.variants, selectedOptions, product.options]);

  const handleAddToCart = () => {
    if (selectedVariant) {
      if (selectedVariant.availableForSale) {
        addToCart(product, selectedVariant, 1);
        setIsCartOpen(true);
        setTimeout(() => setIsCartOpen(false), 1500);
      } else {
        setAlertState({ open: true, title: 'Sold Out', description: 'This variant is currently unavailable.', isError: true });
      }
    } else if (product.variants.length > 0 && product.options.length > 0) {
       setAlertState({ open: true, title: 'Unavailable', description: 'This combination of options is not available.', isError: true });
    } else if (product.variants.length > 0 && product.options.length === 0) {
        // Case for products with one variant and no options
        const variant = product.variants[0];
        if (variant.availableForSale) {
            addToCart(product, variant, 1);
            setIsCartOpen(true);
            setTimeout(() => setIsCartOpen(false), 1500);
        } else {
            setAlertState({ open: true, title: 'Sold Out', description: 'This product is currently unavailable.', isError: true });
        }
    }
  };
  
  const isAddToCartDisabled = product.variants.length > 0 && !selectedVariant || (selectedVariant && !selectedVariant.availableForSale);

  return (
    <>
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

      <AlertDialog open={alertState.open} onOpenChange={(open) => setAlertState(s => ({ ...s, open }))}>
        <AlertDialogContent className="text-center">
          <AlertDialogHeader className="items-center">
            {alertState.isError ? (
                <XCircle className="w-12 h-12 text-destructive" />
            ) : (
                <CheckCircle className="w-12 h-12 text-green-500" />
            )}
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
