import { getCollectionByHandle } from "@/lib/data";
import { notFound } from "next/navigation";
import CollectionView from "@/components/collection-view";

export async function generateMetadata({ params }: { params: { handle: string } }) {
  const collection = await getCollectionByHandle(params.handle);
  if (!collection) {
    return {
      title: "Collection Not Found"
    }
  }
  return {
    title: collection.title,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: { params: { handle:string } }) {
  const collection = await getCollectionByHandle(params.handle);

  if (!collection) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline">{collection.title}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">{collection.description}</p>
      </div>
      <CollectionView products={collection.products} />
    </div>
  );
}
