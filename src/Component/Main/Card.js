/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { CardBody, Context, Image, Title, Button, Span } from "./Card.style";
import { useDispatch } from "react-redux";
import { Creators } from "../redux/action";

export const Card = (props) => {
  const [prod, setProd] = useState([]);
  const prop = props.data;
  const dispatch = useDispatch();

  const addProduct = (item) => {
    if (item.stock <= 50) {
      alert("hurry! only a few items left");
    }
    dispatch(Creators.setProduct(item));
  };

  return (
    <CardBody>
      <Image>
        <img
          style={{ width: "280px", height: "180px" }}
          src={props.data.images[0]}
          alt="image"
        />
      </Image>
      <Context>
        <Title>{prop.title}</Title> <Span> Price : {prop.price}</Span>
        <br />
        <Span> Rating : {prop.rating}</Span>
        <br />
        <Span>Discount :{prop.discountPercentage}%</Span>
        <br />
        <Button onClick={() => addProduct(prop)}>Add Product</Button>
      </Context>
    </CardBody>
  );
};
