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
  updatedAt: string;
  createdAt: string;
  attributes: string[];
}

interface ConfigurationOptions {
  [key: string]: {
    avilableOptions: [key: string];
    _id: string;
  };
}

export interface ProductType {
  _id: string;
  name: string;
  description: string;
  priceConfiguration: ConfigurationOptions;
  image: string[];
  categoryId: Category;
  createdAt: string;
  updatedAt: string;
}
