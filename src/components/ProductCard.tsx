import React, {FC} from "react";
import Button from "./Button";


interface ProductCardProps {
    img: string;
    price: number;
    title: string;
    handleAddToCart: () => void;
}

const ProductCard:FC<ProductCardProps> = ({ img, price, title, handleAddToCart }) => {
    return (
        <div className="col mb-4 d-flex flex-column product__card">
            <img className="product__img" src={img} alt="" />
            <div className="d-block">
                <h3 className="h5">{title}</h3>
                <p>{price}€</p>
                <Button onClick={handleAddToCart}>Add to cart</Button>
            </div>
        </div>
    );
}

export default ProductCard;
