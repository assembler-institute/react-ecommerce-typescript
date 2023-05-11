import {CartItem} from "../interfaces/products.interface";

 export const loadItems = (): CartItem[] => {
    const items = localStorage.getItem("products");

    if (items) {
        try {
            return JSON.parse(items);
        } catch (error) {
            return [];
        }
    } else {
        return [];
    }
}
