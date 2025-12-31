
import Image from "next/image";
import { AetherLogo } from "@/components/icons";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Story",
  description: "Learn about the philosophy and craftsmanship behind Aether.",
};

export default function AboutPage() {
  const image1 = PlaceHolderImages.find(p => p.id === "philosophy-1");
  const image2 = PlaceHolderImages.find(p => p.id === "craftsmanship-1");
  const image3 = PlaceHolderImages.find(p => p.id === "sustainability-1");

  return (
    <div className="bg-background">
      <header className="py-24 md:py-32 text-center container mx-auto px-4">
        <AetherLogo className="w-24 h-24 mx-auto mb-6 text-primary" />
        <h1 className="text-4xl md:text-6xl font-headline tracking-tighter">Less, but better.</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Aether was founded on a simple yet profound principle: to create objects of enduring beauty and exceptional quality. In a world of fleeting trends, we choose the path of radical minimalism, believing that true luxury lies in the perfection of form, material, and craftsmanship.
        </p>
      </header>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg">
                 {image1 && (
                    <Image
                        src={image1.imageUrl}
                        alt={image1.description}
                        width={800}
                        height={1000}
                        className="h-full w-full object-cover object-center"
                        data-ai-hint={image1.imageHint}
                    />
                 )}
            </div>
            <div className="max-w-xl">
                <p className="text-primary font-semibold tracking-wide">Our Philosophy</p>
                <h2 className="text-3xl md:text-4xl font-headline mt-2">Radical Minimalism</h2>
                <p className="text-muted-foreground mt-4 text-lg">
                    We pare everything back to its essential qualities. No extraneous details, no unnecessary embellishments. This philosophy guides every decision we make, from the initial sketch to the final polish. We design for longevity, creating pieces that are timeless, not trendy, and intended to be cherished for a lifetime.
                </p>
                <p className="text-muted-foreground mt-4 text-lg">
                    Each item is a quiet statement of quality, a testament to the idea that the most beautiful things are often the most simple.
                </p>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl md:order-2">
                <p className="text-primary font-semibold tracking-wide">Craftsmanship</p>
                <h2 className="text-3xl md:text-4xl font-headline mt-2">The Artisan's Hand</h2>
                <p className="text-muted-foreground mt-4 text-lg">
                    We partner with master artisans who share our obsession with quality. From Italian tanneries with generations of history to small, family-owned jewelers in Paris, our network of makers is the heart of Aether. They employ age-old techniques, blending them with modern precision to create pieces that are both classic and contemporary.
                </p>
                <p className="text-muted-foreground mt-4 text-lg">
                    The hand of the maker is evident in every stitch, every setting, and every seam.
                </p>
            </div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg md:order-1">
                 {image2 && (
                    <Image
                        src={image2.imageUrl}
                        alt={image2.description}
                        width={800}
                        height={1000}
                        className="h-full w-full object-cover object-center"
                        data-ai-hint={image2.imageHint}
                    />
                 )}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg">
                 {image3 && (
                    <Image
                        src={image3.imageUrl}
                        alt={image3.description}
                        width={800}
                        height={1000}
                        className="h-full w-full object-cover object-center"
                        data-ai-hint={image3.imageHint}
                    />
                 )}
            </div>
            <div className="max-w-xl">
                <p className="text-primary font-semibold tracking-wide">Sustainability</p>
                <h2 className="text-3xl md:text-4xl font-headline mt-2">A Considered Approach</h2>
                <p className="text-muted-foreground mt-4 text-lg">
                    Luxury that costs the earth is no luxury at all. We are committed to responsible sourcing and mindful production. Our materials—from Grade-A Mongolian cashmere to full-grain Italian leather—are chosen for their quality, durability, and sustainable origins. We produce in small batches to minimize waste and ensure every piece meets our exacting standards.
                </p>
                <p className="text-muted-foreground mt-4 text-lg">
                    We believe in creating a legacy of beauty, not a legacy of waste.
                </p>
                 <Button asChild variant="link" className="mt-4 p-0 text-lg">
                    <Link href="/sustainability">
                        Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline">Explore the Collection</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Discover the pieces that embody our philosophy of radical minimalism.
        </p>
        <Button asChild size="lg" className="mt-8 group">
          <Link href="/collections/all">
            Shop Now <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
