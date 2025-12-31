
import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Journal",
    description: "Stories, musings, and inspiration from the world of Aether.",
};

export default async function JournalPage() {
    const posts = [
        {
            id: 1,
            title: "The Art of Minimalism: A Design Philosophy",
            excerpt: "Explore the principles that guide our creative process, where less is not just more—it's everything.",
            href: "#",
            imageId: "philosophy-1",
        },
        {
            id: 2,
            title: "Behind the Seams: Crafting Our Cashmere",
            excerpt: "A journey to Mongolia, meeting the artisans who transform the world's finest fibers into our signature sweaters.",
            href: "#",
            imageId: "craftsmanship-1",
        },
         {
            id: 3,
            title: "A Considered Approach: Our Sustainability Pledge",
            excerpt: "Learn how our commitment to the planet informs every decision we make, from sourcing to small-batch production.",
            href: "/sustainability",
            imageId: "sustainability-1",
        }
    ];

    const featuredProducts = (await getFeaturedProducts()).slice(0,2);

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline">The Journal</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Stories, musings, and inspiration from the world of Aether.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
            {posts.map((post, index) => {
                const image = PlaceHolderImages.find(p => p.id === post.imageId);
                return (
                    <article key={post.id} className="group">
                        <Link href={post.href}>
                             <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                                {image && (
                                     <Image
                                        src={image.imageUrl}
                                        alt={image.description}
                                        width={800}
                                        height={450}
                                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                        data-ai-hint={image.imageHint}
                                    />
                                )}
                            </div>
                            <h2 className="text-2xl md:text-3xl font-headline group-hover:text-primary transition-colors">{post.title}</h2>
                            <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                            <span className="mt-4 inline-block font-semibold text-primary">Read More</span>
                        </Link>
                    </article>
                )
            })}
        </div>

        <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
                <div>
                    <h3 className="text-xl font-headline mb-4">Featured Products</h3>
                    <div className="space-y-6">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
                 <div>
                    <h3 className="text-xl font-headline mb-4">Subscribe</h3>
                    <p className="text-muted-foreground text-sm">Join our mailing list for updates on new arrivals and journal entries.</p>
                </div>
            </div>
        </aside>

      </div>
    </div>
  );
}
