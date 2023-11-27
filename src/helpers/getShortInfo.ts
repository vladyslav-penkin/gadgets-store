import { Phone } from "@/types/Phone";
import { Product } from "@/types/Product";

export const getShortInfo = (product: Phone): Product => {
  return {
    "id": product.productId,
    "category": 'category',
    "phoneId": product.id,
    "itemId": product.id,
    "name": product.name,
    "fullPrice": product.priceRegular,
    "price": product.priceDiscount,
    "screen": product.screen,
    "capacity": product.capacity,
    "color": product.color,
    "ram": product.ram,
    "year": 2023,
    "image": product.images[0],
  };
};