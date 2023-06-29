import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.45808849548867&lng=73.79149809479713&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log({ json })
        // Optional Chaining
        setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    }

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
    ) : (
        <div className=" body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button
                        onClick={() => {
                            //Filter the restaurant cards and update the UI
                            //searchText
                            console.log(searchText)

                            const filteredRestaurant = listOfRestaurant.filter((res) => res.data.name.toLowerCase().includes(searchText));
                            setFilteredRestaurant(filteredRestaurant)
                        }}
                    >Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setListOfRestaurant(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;