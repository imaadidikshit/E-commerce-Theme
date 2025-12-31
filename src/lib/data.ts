import type { Product, Collection, MegaMenu, Lookbook } from './types';
import { PlaceHolderImages } from './placeholder-images';
import LookbookData from './lookbook.json';

const products: Product[] = [
  {
    id: 'prod_1',
    handle: 'the-aurora-ring',
    name: 'The Aurora Ring',
    description: 'A masterpiece of craftsmanship, The Aurora Ring features a stunning center diamond surrounded by a halo of smaller, brilliant-cut stones. Set in 18k white gold, its timeless elegance is unmatched.',
    descriptionHtml: '<p>A masterpiece of craftsmanship, The Aurora Ring features a stunning center diamond surrounded by a halo of smaller, brilliant-cut stones. Set in 18k white gold, its timeless elegance is unmatched.</p><p>Perfect for engagements, anniversaries, or as a statement of self-love.</p>',
    price: 2400,
    featuredImage: { url: PlaceHolderImages.find(p => p.id === 'ring-1')?.imageUrl!, width: 800, height: 1000, altText: 'The Aurora Ring', hint: 'diamond ring' },
    images: [
      { id: 'img_r1_1', url: PlaceHolderImages.find(p => p.id === 'ring-1')?.imageUrl!, width: 800, height: 1000, altText: 'Front view of The Aurora Ring', hint: 'diamond ring' },
      { id: 'img_r1_2', url: PlaceHolderImages.find(p => p.id === 'ring-2')?.imageUrl!, width: 800, height: 1000, altText: 'Side view of The Aurora Ring', hint: 'jewelry lifestyle' },
      { id: 'img_r1_3', url: PlaceHolderImages.find(p => p.id === 'ring-3')?.imageUrl!, width: 800, height: 1000, altText: 'The Aurora Ring on a model', hint: 'ring model' },
    ],
    options: [
      { name: 'Color', values: ['White Gold', 'Yellow Gold', 'Rose Gold'] },
      { name: 'Size', values: ['5', '6', '7', '8'] },
    ],
    variants: [
      { id: 'var_r1_wg_5', title: 'White Gold / 5', price: 2400, imageId: 'img_r1_1', color: 'White Gold', colorHex: '#E5E7EB', size: '5' },
      { id: 'var_r1_yg_6', title: 'Yellow Gold / 6', price: 2450, imageId: 'img_r1_1', color: 'Yellow Gold', colorHex: '#FBBF24', size: '6' },
      { id: 'var_r1_rg_7', title: 'Rose Gold / 7', price: 2450, imageId: 'img_r1_1', color: 'Rose Gold', colorHex: '#FBCFE8', size: '7' },
    ],
    tags: ['jewelry', 'ring', 'featured'],
  },
  {
    id: 'prod_2',
    handle: 'onyx-leather-tote',
    name: 'Onyx Leather Tote',
    description: 'The Onyx Leather Tote is the epitome of functional luxury. Crafted from full-grain Italian leather, its minimalist silhouette is designed to carry your essentials with effortless style. Features a magnetic closure and an interior zip pocket.',
    descriptionHtml: '<p>The Onyx Leather Tote is the epitome of functional luxury. Crafted from full-grain Italian leather, its minimalist silhouette is designed to carry your essentials with effortless style.</p><ul><li>Full-grain Italian leather</li><li>Magnetic closure</li><li>Interior zip pocket</li></ul>',
    price: 750,
    featuredImage: { url: PlaceHolderImages.find(p => p.id === 'tote-1')?.imageUrl!, width: 800, height: 1000, altText: 'Onyx Leather Tote', hint: 'leather tote' },
    images: [
      { id: 'img_t1_1', url: PlaceHolderImages.find(p => p.id === 'tote-1')?.imageUrl!, width: 800, height: 1000, altText: 'Front view of Onyx Leather Tote', hint: 'leather tote' },
      { id: 'img_t1_2', url: PlaceHolderImages.find(p => p.id === 'tote-2')?.imageUrl!, width: 800, height: 1000, altText: 'Detail of Onyx Leather Tote', hint: 'bag detail' },
    ],
    options: [
      { name: 'Color', values: ['Black', 'Cognac'] },
    ],
    variants: [
      { id: 'var_t1_b', title: 'Black', price: 750, imageId: 'img_t1_1', color: 'Black', colorHex: '#1A1A1A' },
      { id: 'var_t1_c', title: 'Cognac', price: 750, imageId: 'img_t1_2', color: 'Cognac', colorHex: '#964B00' },
    ],
    tags: ['accessories', 'bag', 'featured'],
  },
  {
    id: 'prod_3',
    handle: 'cashmere-crewneck-sweater',
    name: 'Cashmere Crewneck',
    description: 'Experience unparalleled softness with our 100% Grade-A Mongolian Cashmere Crewneck. A timeless classic, this sweater offers a relaxed fit for versatile layering. Sustainably sourced and expertly crafted.',
    descriptionHtml: '<p>Experience unparalleled softness with our 100% Grade-A Mongolian Cashmere Crewneck. A timeless classic, this sweater offers a relaxed fit for versatile layering. Sustainably sourced and expertly crafted.</p>',
    price: 320,
    featuredImage: { url: PlaceHolderImages.find(p => p.id === 'sweater-1')?.imageUrl!, width: 800, height: 1000, altText: 'Cashmere Crewneck in Heather Grey', hint: 'cashmere sweater' },
    images: [
      { id: 'img_s1_1', url: PlaceHolderImages.find(p => p.id === 'sweater-1')?.imageUrl!, width: 800, height: 1000, altText: 'Heather Grey sweater', hint: 'cashmere sweater' },
      { id: 'img_s1_2', url: PlaceHolderImages.find(p => p.id === 'sweater-2')?.imageUrl!, width: 800, height: 1000, altText: 'Camel sweater', hint: 'camel sweater' },
    ],
    options: [
      { name: 'Color', values: ['Heather Grey', 'Camel'] },
      { name: 'Size', values: ['S', 'M', 'L', 'XL'] },
    ],
    variants: [
      { id: 'var_s1_hg_m', title: 'Heather Grey / M', price: 320, imageId: 'img_s1_1', color: 'Heather Grey', colorHex: '#D1D5DB', size: 'M' },
      { id: 'var_s1_c_m', title: 'Camel / M', price: 320, imageId: 'img_s1_2', color: 'Camel', colorHex: '#C19A6B', size: 'M' },
    ],
    tags: ['clothing', 'sweater', 'featured'],
  },
  {
    id: 'prod_4',
    handle: 'celestial-pendant-necklace',
    name: 'Celestial Pendant',
    description: 'A delicate 14k gold chain holds a mesmerizing moonstone pendant, known for its calming energy and connection to the moon. The Celestial Pendant is a subtle yet enchanting addition to any look.',
    descriptionHtml: '<p>A delicate 14k gold chain holds a mesmerizing moonstone pendant, known for its calming energy and connection to the moon. The Celestial Pendant is a subtle yet enchanting addition to any look.</p>',
    price: 450,
    featuredImage: { url: PlaceHolderImages.find(p => p.id === 'necklace-1')?.imageUrl!, width: 800, height: 1000, altText: 'Celestial Pendant Necklace', hint: 'gold necklace' },
    images: [
        { id: 'img_n1_1', url: PlaceHolderImages.find(p => p.id === 'necklace-1')?.imageUrl!, width: 800, height: 1000, altText: 'Celestial Pendant Necklace', hint: 'gold necklace' },
        { id: 'img_n1_2', url: PlaceHolderImages.find(p => p.id === 'necklace-2')?.imageUrl!, width: 800, height: 1000, altText: 'Celestial Pendant on model', hint: 'necklace model' },
    ],
    options: [],
    variants: [
        { id: 'var_n1_def', title: 'Default Title', price: 450, imageId: 'img_n1_1' },
    ],
    tags: ['jewelry', 'necklace', 'featured'],
  },
  {
    id: 'prod_5',
    handle: 'silk-slip-dress',
    name: 'Silk Slip Dress',
    description: 'Cut on the bias from lustrous 100% silk charmeuse, this slip dress drapes beautifully over the body. Featuring a subtle V-neck and adjustable spaghetti straps, it\'s the essence of minimalist elegance.',
    descriptionHtml: '<p>Cut on the bias from lustrous 100% silk charmeuse, this slip dress drapes beautifully over the body. Featuring a subtle V-neck and adjustable spaghetti straps, it\'s the essence of minimalist elegance.</p>',
    price: 480,
    featuredImage: { url: PlaceHolderImages.find(p => p.id === 'dress-1')?.imageUrl!, width: 800, height: 1000, altText: 'Silk Slip Dress in Black', hint: 'silk dress' },
    images: [
      { id: 'img_d1_1', url: PlaceHolderImages.find(p => p.id === 'dress-1')?.imageUrl!, width: 800, height: 1000, altText: 'Black dress', hint: 'silk dress' },
      { id: 'img_d1_2', url: PlaceHolderImages.find(p => p.id === 'dress-2')?.imageUrl!, width: 800, height: 1000, altText: 'Champagne dress', hint: 'champagne dress' },
    ],
    options: [
      { name: 'Color', values: ['Onyx', 'Champagne'] },
      { name: 'Size', values: ['XS', 'S', 'M', 'L'] },
    ],
    variants: [
      { id: 'var_d1_o_s', title: 'Onyx / S', price: 480, imageId: 'img_d1_1', color: 'Onyx', colorHex: '#1A1A1A', size: 'S' },
      { id: 'var_d1_c_s', title: 'Champagne / S', price: 480, imageId: 'img_d1_2', color: 'Champagne', colorHex: '#F7E7CE', size: 'S' },
    ],
    tags: ['clothing', 'dress'],
  }
];

const collections: Collection[] = [
    {
        id: 'coll_1',
        handle: 'all',
        title: 'All Products',
        description: 'Browse our entire curated selection of luxury goods.',
        products: products,
    },
    {
        id: 'coll_2',
        handle: 'jewelry',
        title: 'Jewelry',
        description: 'Exquisite rings, necklaces, and bracelets crafted from the finest materials.',
        products: products.filter(p => p.tags.includes('jewelry')),
    },
    {
        id: 'coll_3',
        handle: 'clothing',
        title: 'Clothing',
        description: 'Timeless apparel made from luxurious fabrics like cashmere and silk.',
        products: products.filter(p => p.tags.includes('clothing')),
    },
     {
        id: 'coll_4',
        handle: 'accessories',
        title: 'Accessories',
        description: 'The finishing touches. Discover our collection of leather goods and more.',
        products: products.filter(p => p.tags.includes('accessories')),
    },
];

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
export async function getProducts(): Promise<Product[]> {
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

export async function getCollections(): Promise<Collection[]> {
  return Promise.resolve(collections);
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