import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import { Col, Row } from "antd";
import Item from "../components/Item";
import "../resources/items.css";
import { useDispatch } from "react-redux";

const Homepage = () => {
  const dispatch = useDispatch();
  const [itemsData, setItemsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Chocolates");

  const categories = [
    {
      name: "Chocolates",
      imageURL: "https://i.ytimg.com/vi/xGG0vKQePmA/maxresdefault.jpg",
    },
    {
      name: "Dairy Products",
      imageURL: "https://i.ytimg.com/vi/4cB8iVD99lE/maxresdefault.jpg",
    },

    {
      name: "Cold Drink",
      imageURL:
        "https://us.123rf.com/450wm/monticello/monticello1804/monticello180400224/103002401-poznan-poland-apr-6-2018-bottles-of-global-soft-drink-brands-including-products-of-coca-cola-company.jpg?ver=6",
    },

    {
      name: "Ice-cream",
      imageURL: "https://pbs.twimg.com/media/D6CrUw2W4AAIXon.jpg",
    },
  ];

  const getAllItems = () => {
    dispatch({ type: "showLoading" });
    axios
      .get("/api/items/get-all-items")
      .then((response) => {
        dispatch({ type: "hideLoading" });
        setItemsData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        dispatch({ type: "hideLoading" });
        console.log(error);
      });
  };

  useEffect(() => {
    getAllItems();
  }, []);
  //antD grid system is used similar to grid in bootstrap
  return (
    <DefaultLayout>
      <div className="d-flex categories">
        {categories.map((category) => {
          return (
            <div
              onClick={() => setSelectedCategory(category.name)}
              className={`d-flex category ${
                selectedCategory === category.name && "selected-category"
              }`}
            >
              <h4>{category.name}</h4>
              <img src={category.imageURL} alt=" " height="60" width="80" />
            </div>
          );
        })}
      </div>

      <Row gutter={20}>
        {itemsData
          .filter((i) => i.category === selectedCategory)
          .map((item) => {
            return (
              <Col xs={24} lg={6} md={12} sm={6}>
                <Item item={item} />
              </Col>
            );
          })}
      </Row>
    </DefaultLayout>
  );
};

export default Homepage;
