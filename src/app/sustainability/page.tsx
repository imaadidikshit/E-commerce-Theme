
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function SustainabilityPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'sustainability-hero');
    return (
         <div className="bg-background">
            <div className="relative h-[50vh] bg-secondary/50">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={heroImage.imageHint}
                    />
                )}
                 <div className="absolute inset-0 bg-gradient-to-t from-background" />
            </div>
            <div className="container mx-auto px-4 -mt-24 relative z-10">
                <div className="bg-background p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-headline text-center">A Considered Approach</h1>
                    <div className="prose dark:prose-invert max-w-none mx-auto mt-8 text-lg">
                        <p>
                            We believe that true luxury is not disposable. It is enduring, thoughtful, and conscious of its impact on the world. Our commitment to sustainability is woven into every aspect of our brand, from the materials we select to the partners we work with.
                        </p>
                        
                        <h2>Mindful Materials</h2>
                        <p>
                            Our journey begins with the raw materials. We meticulously source fabrics and metals that meet our stringent standards for both quality and environmental responsibility.
                        </p>
                        <ul>
                            <li><strong>Grade-A Cashmere:</strong> Sourced from Mongolian herders who practice sustainable grazing, ensuring the well-being of their animals and the preservation of the grasslands.</li>
                            <li><strong>Italian Leather:</strong> Our leather comes from tanneries that are members of the Leather Working Group, guaranteeing they adhere to strict environmental protocols for water usage, waste management, and chemical handling.</li>
                            <li><strong>Recycled Gold:</strong> All our 14k and 18k gold pieces are crafted from certified recycled gold, reducing the demand for new mining and its associated environmental impact.</li>
                        </ul>

                        <h2>Small-Batch Production</h2>
                        <p>
                            In an era of mass production, we choose a different path. By producing in small, considered batches, we minimize waste and ensure that every single item receives the attention to detail it deserves. This approach not only reduces our environmental footprint but also allows us to maintain an unparalleled level of quality control. It means that the piece you own is not just one of thousands, but one of a select few, crafted with intention.
                        </p>

                        <h2>Lasting Quality</h2>
                        <p>
                           The most sustainable product is the one you already own. We design our pieces to be timeless, transcending seasonal trends. By focusing on classic silhouettes, impeccable construction, and durable materials, we create items that are meant to be worn, loved, and passed down. We encourage a culture of care and repair, believing that investing in quality is an investment in a more sustainable future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
