
import type { Product, Collection, MegaMenu, Lookbook } from './types';
import { PlaceHolderImages } from './placeholder-images';
import allProducts from '@/data/products.json';
import allCollections from '@/data/collections.json';
import LookbookData from './lookbook.json';

const products: Product[] = allProducts as Product[];

const collections: Collection[] = allCollections.map(collection => ({
  ...collection,
  products: products.filter(p => collection.productIds.includes(p.id))
}));


const megaMenu: MegaMenu = {
  title: 'Shop',
  href: '/collections/all',
  columns: [
    {
      heading: 'By Category',
      links: [
        { title: 'Clothing', href: '/collections/clothing' },
        { title: 'Jewelry', href: '/collections/jewelry' },
        { title: 'Accessories', href: '/collections/accessories' },
        { title: 'View All', href: '/collections/all' },
      ]
    },
    {
      heading: 'New Arrivals',
      links: [
        { title: 'The Aurora Ring', href: '/products/the-aurora-ring' },
        { title: 'Silk Slip Dress', href: '/products/silk-slip-dress' },
      ]
    }
  ],
  image: {
    src: PlaceHolderImages.find(p => p.id === 'menu-promo-1')?.imageUrl!,
    alt: 'Woman wearing elegant jewelry',
    href: '/collections/jewelry',
    hint: 'elegant jewelry'
  }
}

// Simulate API calls
export async function getProducts(query?: string): Promise<Product[]> {
  if (query) {
    const lowerCaseQuery = query.toLowerCase();
    return Promise.resolve(products.filter(p => p.name.toLowerCase().includes(lowerCaseQuery) || p.description.toLowerCase().includes(lowerCaseQuery) || p.tags.some(t => t.toLowerCase().includes(lowerCaseQuery))));
  }
  return Promise.resolve(products);
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const product = products.find(p => p.handle === handle);
  return Promise.resolve(product || null);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const featured = products.filter(p => p.tags.includes('featured'));
  return Promise.resolve(featured);
}

export async function getCollections(): Promise<Omit<Collection, 'products'>[]> {
  return Promise.resolve(collections.map(({ products, ...rest }) => rest));
}

export async function getCollectionByHandle(handle: string): Promise<Collection | null> {
  const collection = collections.find(c => c.handle === handle);
  return Promise.resolve(collection || null);
}

export async function getMegaMenu(): Promise<MegaMenu> {
  return Promise.resolve(megaMenu);
}

export async function getLookbook(): Promise<Lookbook> {
    const lookbookWithProducts = {
        ...LookbookData.lookbook,
        hotspots: LookbookData.lookbook.hotspots.map(hotspot => ({
            ...hotspot,
            product: products.find(p => p.id === hotspot.productId)
        })).filter(hotspot => hotspot.product) // Filter out hotspots where product is not found
    };
    return Promise.resolve(lookbookWithProducts as Lookbook);
}
