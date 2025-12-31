
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

import type { Product } from "@/lib/types";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, setIsCartOpen } = useCart();
  const [activeImage, setActiveImage] = useState(product.featuredImage);
  const secondImage = product.images[1];

  const handleQuickAdd = () => {
    // For simplicity, adds the first variant. A real implementation
    // would require a size/variant selector pop-up.
    const defaultVariant = product.variants[0];
    if (defaultVariant) {
      addToCart(product, defaultVariant, 1);
      setIsCartOpen(true);
      setTimeout(() => setIsCartOpen(false), 1500);
    }
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => secondImage && setActiveImage(secondImage)}
      onMouseLeave={() => setActiveImage(product.featuredImage)}
    >
      <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-secondary">
        <Link href={`/products/${product.handle}`}>
          <Image
            src={activeImage.url}
            alt={activeImage.altText}
            width={activeImage.width}
            height={activeImage.height}
            className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
            data-ai-hint={activeImage.hint}
          />
        </Link>
        <div className="absolute top-3 left-3 flex gap-2">
          {product.tags.includes("featured") && (
            <span className="rounded-full bg-background/70 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-end justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex gap-2">
              {product.variants
                .filter(
                  (v, i, a) => a.findIndex((t) => t.color === v.color) === i && v.color
                )
                .map((variant) => {
                  const imageForVariant = product.images.find(img => img.id === variant.imageId);
                  return (
                    <button
                      key={variant.id}
                      onMouseEnter={() => imageForVariant && setActiveImage(imageForVariant)}
                      className="h-6 w-6 rounded-full border-2 border-background shadow-md"
                      style={{ backgroundColor: variant.colorHex }}
                      aria-label={`Select color ${variant.color}`}
                    />
                  );
                })}
            </div>
            {product.variants.length > 0 && (
              <Button
                size="icon"
                className="h-9 w-9 rounded-full bg-background text-foreground hover:bg-white/80"
                onClick={handleQuickAdd}
                aria-label={`Quick add ${product.name} to cart`}
              >
                <Plus className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-semibold">
            <Link href={`/products/${product.handle}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
