import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AetherLogo } from "@/components/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center pb-16 md:pb-24 px-4">
          <div className="bg-background/50 p-4 rounded-full backdrop-blur-sm mb-4">
            <AetherLogo className="w-16 h-16 md:w-24 md:h-24 text-foreground" />
          </div>
          <h1 className="text-4xl md:text-6xl font-headline tracking-tighter text-foreground">
            Radical Minimalism
          </h1>
          <p className="max-w-2xl text-lg text-foreground/80 mt-4">
            A curated collection of high-end clothing, jewelry, and accessories for the discerning individual.
          </p>
          <Button asChild size="lg" className="mt-8 group">
            <Link href="/collections/all">
              Shop The Collection <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline">Featured Products</h2>
            <p className="text-muted-foreground mt-2">Discover our most popular items.</p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:inline-flex" />
            <CarouselNext className="hidden lg:inline-flex" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
