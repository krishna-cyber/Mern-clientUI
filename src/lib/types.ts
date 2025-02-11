export interface Resturants {
  _id: string;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  _id: string;
  name: string;
}

export interface ProductType {
  _id: string;
  name: string;
  description: string;
  image: string[];
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}
