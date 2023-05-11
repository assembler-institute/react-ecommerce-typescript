


export interface Product {
    id: number,
    title: string,
    price: number,
    img: string
}

export interface CartItem extends Product {
    quantity: number
}
