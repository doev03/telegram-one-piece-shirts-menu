export interface ProductModel {
  id: string;
  title: string;
  price: number;
  images: string[];
  params: ProductParameter[];
}

export interface ProductParameter {
  type: ProductParameterType;
  title: string;
  items: string[] | ProductParameterColorData[];
}

export enum ProductParameterType {string, color}

export interface ProductParameterColorData {
  label: string;
  color: string;
}

export interface CartItemModel {
  id: string;
}
