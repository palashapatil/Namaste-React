import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    console.log("Header render")

    //if no dependancy array => useEffect is called on every render
    //if the dependancy array is empty = [] => useEffect is called on initial render and just once
    //if dependancy array is [btnNameReact] => called everytime btnNameReact is updated

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Login" ?
                            setBtnNameReact("Logout")
                            :
                            setBtnNameReact("Login")
                    }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;