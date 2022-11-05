/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { FlxConatiner, Input, Select } from "./Card.style";
import { Card } from "./Card";

export const Main = () => {
  let [product, setproduct] = useState([]);
  const [sortType, setSortType] = useState("albums");
  const [search, setNewSearch] = useState("");
  const dataRed = useSelector((state) => state);
  console.log(dataRed.productReducer.list, "datre");

  async function fetchData() {
    let response = await axios(`https://dummyjson.com/products?limit=100`);
    let user = await response.data;
    setproduct(user?.products);
    console.log(product);
  }

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? product
    : product.filter(
        (item) =>
          item.brand.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase())
      );

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        rating: "rating",
        discount: "discount",
        price: "price",
      };
      const sortProperty = types[type];
      const sorted = [...product].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setproduct(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <>
      <div style={{ width: "100vw", height: "40px" }}></div>

      <Input
        placeholder="search by category or brand"
        type="text"
        value={search}
        onChange={handleSearchChange}
      />
      <Select onChange={(e) => setSortType(e.target.value)}>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
        <option value="price">Price</option>
      </Select>
      <FlxConatiner>
        {filtered?.map((e, i) => (
          <Card data={e} />
        ))}
      </FlxConatiner>
    </>
  );
};
