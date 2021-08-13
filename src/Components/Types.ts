/**
 * =========================================================
 * ProductInfo Types
 * =========================================================
 */

export type ImageType = {
  image_id: number;
  image_url: string;
};

export type SubItemType = {
  id: number;
  image_id: number;
  image_url: string;
  name: string;
  price: number;
  stock: number;
  count: number;
  discount: number;
};

export type Product = {
  id: number;
  name: string;
  detail: string;
  price: number;
  stock: number;
  count: number;
  shipping_fee: number;
  discount: number;
  minimum_free: number;
  imageList: ImageType[];
  subItemList: SubItemType[];

  currentImageUrl: string;
  subItemAddList: number[];
};

export type ProductType = 'main' | 'sub';

/**
 * =========================================================
 * Main Types
 * =========================================================
 */
export type BestType = {
  product_id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
};

export type CategoryTitleType =
  | 'HASH_TAG_EYE_PRODUCT'
  | 'HASH_TAG_FOCUS_ON_PRODUCT'
  | 'HASH_TAG_GROWTH_PRODUCT'
  | 'HASH_TAG_SKIN_PRODUCT';

export type ReviewType = {
  gender: boolean;
  product_image: string;
  product_name: string;
  review_id: number;
  updated_at: string;
  uploaded_at: string;
  user_account: string;
  user_age: number;
  user_review: string;
  user_review_image: string;
};
