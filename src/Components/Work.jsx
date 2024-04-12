import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: " Effortless meal ordering;-sign in, pick dishes, add to cart, done! ",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Eat our tasty meals whenever you want - weekly or monthly, we've got you covered. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Deliveries are lightning-fast.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Whether it's a weekly treat or a monthly indulgence, we're here to accommodate your preferences and ensure you never miss out on the opportunity to savor our delicious meals.

        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;