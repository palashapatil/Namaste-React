import React from "react";
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({img, resName, cuisine, star, time}) => {
    return (
        <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={img}
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{star}</h4>
            <h4>{time}</h4>

        </div>
    )
}

const Body = () => {
    return (
        <div className=" body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard
                    img="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ohrsgt7k6q8hmbb3uged"
                    resName="Meghana Foods"
                    cuisine="Biryani, North Indian, Asian"
                    star="4.4 star"
                    time="38 minutes"
                />
                <RestaurantCard
                    img="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kt0vzw4bzztarxnl0wcl"
                    resName="KFC"
                    cuisine="Burger, Fast Food"
                    star="3.9 star"
                    time="22 minutes"
                />

            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)