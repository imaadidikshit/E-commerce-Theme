
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts, getCollections, getLookbook } from "@/lib/data";
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
import { ArrowRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { Product } from "@/lib/types";

// A server component to fetch product data
async function LookbookProductCard({ productId }: { productId: string }) {
  const products = await getFeaturedProducts(); // Or a more specific fetch
  const product = products.find(p => p.id === productId);
  if (!product) return null;
  return (
      <div className="w-64">
        <ProductCard product={product as Product} />
      </div>
  );
}

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();
  const collections = (await getCollections()).filter(c => c.handle !== 'all');
  const lookbook = await getLookbook();
  
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');
  const philosophyImage = PlaceHolderImages.find(p => p.id === 'philosophy-1');
  const lookbookImage = PlaceHolderImages.find(p => p.id === lookbook.imageId);

  const testimonials = [
    {
      quote: "The quality is simply unmatched. My Aurora Ring is a work of art, and I receive compliments on it constantly.",
      name: "Eleanor Vance",
      handle: "@eleanorvance",
    },
    {
      quote: "Aether has redefined my wardrobe. The cashmere sweater is the softest, most luxurious piece I own. Worth every penny.",
      name: "James Fitzgerald",
      handle: "@jamesfitz",
    },
    {
      quote: "I love the minimalist aesthetic and the story behind the brand. The Onyx Tote is my everyday companion – stylish and functional.",
      name: "Sophia Chen",
      handle: "@sophiachen",
    },
  ];

  const categoryImages: {[key: string]: string | undefined} = {
    'jewelry': PlaceHolderImages.find(p => p.id === 'cat-jewelry')?.imageUrl,
    'clothing': PlaceHolderImages.find(p => p.id === 'cat-clothing')?.imageUrl,
    'accessories': PlaceHolderImages.find(p => p.id === 'cat-accessories')?.imageUrl,
  }

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

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline">Shop by Category</h2>
            <p className="text-muted-foreground mt-2">Explore our curated collections.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link href={`/collections/${collection.handle}`} key={collection.id} className="group relative">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-lg">
                  {categoryImages[collection.handle] && (
                     <Image
                        src={categoryImages[collection.handle]!}
                        alt={`A collection of ${collection.title}`}
                        width={400}
                        height={500}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={collection.title.toLowerCase()}
                      />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-headline text-primary-foreground">{collection.title}</h3>
                  <p className="text-sm text-primary-foreground/80 mt-1">View Collection</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {lookbook && lookbookImage && (
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline">{lookbook.title}</h2>
              <p className="text-muted-foreground mt-2">{lookbook.description}</p>
            </div>
            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden">
              <Image
                src={lookbookImage.imageUrl}
                alt={lookbookImage.description}
                fill
                className="object-cover"
                data-ai-hint={lookbookImage.imageHint}
              />
              {lookbook.hotspots.map((hotspot, index) => (
                <Popover key={index}>
                  <PopoverTrigger asChild>
                    <button 
                      className="absolute w-6 h-6 rounded-full bg-background/50 backdrop-blur-sm animate-pulse"
                      style={{ 
                        left: `${hotspot.position.x}%`, 
                        top: `${hotspot.position.y}%`,
                        transform: 'translate(-50%, -50%)' 
                      }}
                      aria-label={`Show product ${hotspot.product.name}`}
                    >
                      <span className="relative flex h-full w-full">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-6 w-6 bg-primary/50 border-2 border-primary-foreground"></span>
                      </span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="center" side="top" className="p-2 rounded-lg">
                    <LookbookProductCard productId={hotspot.product.id} />
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </div>
        </section>
      )}


      <section className="py-16 md:py-24 bg-background">
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

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg">
                 {philosophyImage && (
                    <Image
                        src={philosophyImage.imageUrl}
                        alt={philosophyImage.description}
                        width={600}
                        height={750}
                        className="h-full w-full object-cover object-center"
                        data-ai-hint={philosophyImage.imageHint}
                    />
                 )}
            </div>
            <div className="max-w-xl">
                <p className="text-primary font-semibold tracking-wide">Our Philosophy</p>
                <h2 className="text-3xl md:text-4xl font-headline mt-2">Less, but better.</h2>
                <p className="text-muted-foreground mt-4 text-lg">
                    At Aether, we believe in radical minimalism. We pare everything back to its essential qualities, creating pieces that are timeless, not trendy. Our focus is on impeccable craftsmanship, the finest materials, and sustainable practices. 
                </p>
                <p className="text-muted-foreground mt-4 text-lg">
                    Each item in our collection is designed to be a quiet statement of quality, intended to be loved and worn for years to come.
                </p>
                 <Button asChild variant="link" className="mt-4 p-0 text-lg">
                    <Link href="#">
                        Read Our Story <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline">From Our Community</h2>
            <p className="text-muted-foreground mt-2">What our customers are saying.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-primary/50 mb-4" />
                  <p className="flex-1 text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="mt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}