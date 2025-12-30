"use client";

import { useState, useMemo } from 'react';
import type { Product } from '@/lib/types';
import { ProductCard } from './product-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Button } from './ui/button';

export default function CollectionView({ products }: { products: Product[] }) {
  const [filters, setFilters] = useState<{ color: string[], size: string[] }>({
    color: [],
    size: [],
  });

  const availableColors = useMemo(() => {
    const colors = new Set<string>();
    products.forEach(p => p.variants.forEach(v => v.color && colors.add(v.color)));
    return Array.from(colors);
  }, [products]);

  const availableSizes = useMemo(() => {
    const sizes = new Set<string>();
    products.forEach(p => p.variants.forEach(v => v.size && sizes.add(v.size)));
    return Array.from(sizes);
  }, [products]);

  const handleFilterChange = (type: 'color' | 'size', value: string) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[type].includes(value)) {
        newFilters[type] = newFilters[type].filter(f => f !== value);
      } else {
        newFilters[type].push(value);
      }
      return newFilters;
    });
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const colorMatch = filters.color.length === 0 || product.variants.some(v => v.color && filters.color.includes(v.color));
      const sizeMatch = filters.size.length === 0 || product.variants.some(v => v.size && filters.size.includes(v.size));
      return colorMatch && sizeMatch;
    });
  }, [products, filters]);
  
  const hasActiveFilters = filters.color.length > 0 || filters.size.length > 0;

  return (
    <div className="flex gap-8">
      <aside className="w-1/4 lg:w-1/5 hidden md:block">
        <div className="sticky top-24">
            <div className="flex justify-between items-center mb-4">
                 <h2 className="text-lg font-bold">Filters</h2>
                 {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={() => setFilters({ color: [], size: [] })}>Clear</Button>
                 )}
            </div>
            <Accordion type="multiple" defaultValue={['color', 'size']} className="w-full">
            <AccordionItem value="color">
                <AccordionTrigger>Color</AccordionTrigger>
                <AccordionContent>
                <div className="space-y-2">
                    {availableColors.map(color => (
                    <div key={color} className="flex items-center space-x-2">
                        <Checkbox 
                            id={`color-${color}`} 
                            checked={filters.color.includes(color)}
                            onCheckedChange={() => handleFilterChange('color', color)}
                        />
                        <Label htmlFor={`color-${color}`}>{color}</Label>
                    </div>
                    ))}
                </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="size">
                <AccordionTrigger>Size</AccordionTrigger>
                <AccordionContent>
                 <div className="space-y-2">
                    {availableSizes.map(size => (
                    <div key={size} className="flex items-center space-x-2">
                        <Checkbox 
                            id={`size-${size}`}
                            checked={filters.size.includes(size)}
                            onCheckedChange={() => handleFilterChange('size', size)}
                         />
                        <Label htmlFor={`size-${size}`}>{size}</Label>
                    </div>
                    ))}
                </div>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
      </aside>
      <main className="flex-1">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-headline">No products found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}
