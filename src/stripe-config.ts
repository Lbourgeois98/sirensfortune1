export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  priceId: string;
  productId: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  icon: string;
  mode: 'payment';
}

export const products: Product[] = [
  {
    id: 'seashells',
    name: 'Seashells',
    description: 'Beautiful ocean seashells collected from pristine beaches around the world',
    price: 5.00,
    priceId: 'price_1SChE33xHLWv8lmEuLedQvLI',
    productId: 'prod_T8zCNDHY8xOTyT',
    rarity: 'Common',
    icon: 'https://files.stripe.com/links/MDB8YWNjdF8xUnlGUXczeEhMV3Y4bG1FfGZsX2xpdmVfMHk0S0JDcmNiV3N6UEpKR3U3elNlTEI500pNHqCv3Y',
    mode: 'payment'
  },
  {
    id: 'coral',
    name: 'Coral',
    description: 'Vibrant coral pieces from tropical reef systems',
    price: 10.00,
    priceId: 'price_1SChEV3xHLWv8lmERU1qRNHQ',
    productId: 'prod_T8zCRuXvQlvB8R',
    rarity: 'Common',
    icon: 'https://files.stripe.com/links/MDB8YWNjdF8xUnlGUXczeEhMV3Y4bG1FfGZsX2xpdmVfMVgxS01GT3pGeGUwMmxDdzlibmJ5WWJP00DqCg2Mz6',
    mode: 'payment'
  },
  {
    id: 'sand-dollars',
    name: 'Sand Dollars',
    description: 'Pristine sand dollars from deep ocean floors',
    price: 25.00,
    priceId: 'price_1SChFN3xHLWv8lmEW1UtNEX0',
    productId: 'prod_T8zDXHKUi0q7pk',
    rarity: 'Rare',
    icon: 'https://files.stripe.com/links/MDB8YWNjdF8xUnlGUXczeEhMV3Y4bG1FfGZsX2xpdmVfc3BuZWNrY2RWeVNmNDBiMU5YT3dVMTBS00BtgFD15w',
    mode: 'payment'
  },
  {
    id: 'aquamarines',
    name: 'Aquamarines',
    description: 'Stunning aquamarine gems from the deepest ocean trenches',
    price: 30.00,
    priceId: 'price_1SChFl3xHLWv8lmEQbpNqGTp',
    productId: 'prod_T8zETIjETUNFYC',
    rarity: 'Rare',
    icon: 'https://files.stripe.com/links/MDB8YWNjdF8xUnlGUXczeEhMV3Y4bG1FfGZsX2xpdmVfWDFlQUtoNXRVckZtZHJQVFBYcm9aSXNw00X7JPFY4s',
    mode: 'payment'
  },
  {
    id: 'sea-urchins',
    name: 'Sea Urchins',
    description: 'Exotic sea urchins with intricate spinal patterns',
    price: 40.00,
    priceId: 'price_1SChGB3xHLWv8lmE2G2o1Dj5',
    productId: 'prod_T8zEUrhryeFsyI',
    rarity: 'Epic',
    icon: 'https://files.stripe.com/links/MDB8YWNjdF8xUnlGUXczeEhMV3Y4bG1FfGZsX2xpdmVfSHJRUDhDVkRBbzZNeEZ2OGJFSHJkdk5Q00TeUeQ1NL',
    mode: 'payment'
  },
  {
    id: 'shipwreck-treasures',
    name: 'Shipwreck Treasures',
    description: 'Ancient treasures recovered from sunken ships',
    price: 50.00,
    priceId: 'price_1SChGf3xHLWv8lmEc9RH5bh0',
    productId: 'prod_T8zFvk6Jdz8TKF',
    rarity: 'Epic',
    icon: 'https://files.stripe.com/links/MDB8YWNjdF8xUnlGUXczeEhMV3Y4bG1FfGZsX2xpdmVfSVhlZlRwUVB0SXAzVjQwNXdFbUF1MDZt00P6y7y1NR',
    mode: 'payment'
  },
  {
    id: 'pearls',
    name: 'Pearls',
    description: 'Lustrous pearls cultivated in the deepest ocean waters',
    price: 100.00,
    priceId: 'price_1SChGx3xHLWv8lmE48xIhP45',
    productId: 'prod_T8zFGM0tZXFv0v',
    rarity: 'Legendary',
    icon: 'https://files.stripe.com/links/MDB8YWNjdF8xUnlGUXczeEhMV3Y4bG1FfGZsX2xpdmVfaHd1VlhQMXcwYWdZWEdJWVpOa1FYV1c400q19J5oNK',
    mode: 'payment'
  }
];