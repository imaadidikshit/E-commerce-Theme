import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductByHandle, getFeaturedProducts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formatPrice } from '@/lib/utils';
import { ProductCard } from '@/components/product-card';
import { StickyAddToCart } from '@/components/sticky-add-to-cart';

export async function generateMetadata({ params }: { params: { handle: string } }) {
  const product = await getProductByHandle(params.handle);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProductByHandle(params.handle);
  const relatedProducts = (await getFeaturedProducts()).filter(p => p.id !== product?.id).slice(0, 4);

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="grid grid-cols-1 gap-4">
             {product.images.map((image, index) => (
              <div key={image.id} className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-secondary">
                <Image
                  src={image.url}
                  alt={image.altText}
                  width={image.width}
                  height={image.height}
                  className="h-full w-full object-cover object-center"
                  priority={index === 0}
                  data-ai-hint={image.hint}
                />
              </div>
            ))}
          </div>
          
          <div className="md:sticky md:top-24 h-fit">
            <h1 className="text-3xl md:text-4xl font-headline mb-2">{product.name}</h1>
            <p className="text-2xl mb-6">{formatPrice(product.price)}</p>
            
            <p className="text-muted-foreground mb-8">{product.description}</p>
            
            {/* Variant selectors would go here. For this example, we keep it simple. */}
            
            <Button size="lg" className="w-full" id="main-add-to-cart">Add to Cart</Button>

            <Accordion type="single" collapsible className="w-full mt-8">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm dark:prose-invert" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>
                  <p>Our products are made with the highest quality, sustainably sourced materials. Please refer to the product tag for specific care instructions.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <p>We offer complimentary shipping on all orders over $100. Returns are accepted within 30 days of purchase. See our full policy for details.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      
      {relatedProducts.length > 0 && (
        <div className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-headline text-center mb-12">Complete the Look</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
            </div>
        </div>
      )}

      <StickyAddToCart product={product} />
    </>
  );
}
