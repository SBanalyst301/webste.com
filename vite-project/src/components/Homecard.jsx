import { LuWashingMachine } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import React from "react";
import { CiGlobe } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
const cardData = [
    { title: "Free Website Builder", price: "$0", subtitle: "and up", button: "Start for free", icon: <LuWashingMachine />,icon2:<CiShoppingCart />    },
    { title: "Professional Hosting", price: "$1", subtitle: "/Email box", button: "get email", icon: <FaRegEnvelope /> ,icon2:<CiShoppingCart />    },
    { title: "Custom Domains", price: "$0.01", subtitle: "/first year", button: "buy domain", icon: <CiGlobe /> ,icon2:<CiShoppingCart />    },
    { title: "E-commerce Solutions", price: "$0", subtitle: "and up", button: "Get Scheduling", icon: <CiCalendar />  ,icon2:<CiShoppingCart />    },
    { title: "Advanced SEO Tools", price: "$0", subtitle: "and up", button: "Sell Products", icon: <CiShop />  ,icon2:<CiShoppingCart />    },                   
  ];

const Homecard = () => {
  return (
    <div className="homecardmain">
      <div className="secmain">
        {cardData.map((card, index) => (
          <div className="texticon" key={index}>
            <div className="text-icon-container">
              <p className="tittle">{card.title}</p>
              <LuWashingMachine className="icon" />
            </div>
            <div className="leftall2">
              <span className="price">{card.price}</span>
              <span className="subtitle">{card.subtitle}</span>
            </div>
            <div className="one-left-all">
              <button className="card-button"> <span>{card.icon2}</span> <span>{card.button}</span></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homecard;
