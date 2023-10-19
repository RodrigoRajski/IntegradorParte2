import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img
                    src={
                        process.env.REACT_APP_STRIPE_APP_DEV_URL +
                        data.image.data[0].attributes.url
                    } alt=""
                />
            </div>
            <div className="prod-details">
                <span className="nombre">{data.title}</span>
                <span className="precio">{data.price}</span>
            </div>
        </div>
    );
};

export default Product;