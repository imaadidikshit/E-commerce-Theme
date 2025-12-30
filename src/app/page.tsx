import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AetherLogo } from "@/components/icons";

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');

  return (
    <div className="flex flex-col">
      <section className="relative h-[60dvh] md:h-[80dvh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center gap-6 px-4">
          <div className="bg-black/50 p-4 rounded-full backdrop-blur-sm">
            <AetherLogo className="w-24 h-24 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-headline tracking-tighter">
            Invisible Technology, Visible Luxury
          </h1>
          <p className="max-w-2xl text-lg text-neutral-200">
            A curated collection of high-end clothing, jewelry, and accessories for the discerning individual.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-neutral-200">
            <Link href="/collections/all">Shop The Collection</Link>
          </Button>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
