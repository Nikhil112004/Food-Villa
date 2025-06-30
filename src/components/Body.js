import { useEffect, useState } from "react";
import { restaurantList } from "./contants";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => 
        restaurant.name.includes(searchText)

    );
    return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
     const [searchText, setSearchText] = useState("");  

     useEffect(() => {
        getRestaurants();
     },[]);

    async function getRestaurants() {
  const res = await fetch("");
  const json = await res.json();
  setRestaurants(json.restaurants);
}

if (!restaurants?.length === 0) 
    return <h1>No restaurants match your filter!!</h1>
    return  (restaurants.length === 0) ? <Shimmer /> : (
        <>
        <div className="search-container">
            <input type="text" 
            className="search-input" 
            placeholder="Search" 
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}
            />
            <button className="search-btn"
            onClick={() => {
              const data =  filterData(searchText, restaurants);
              setRestaurants(data);
            }}
            >Search</button>
        </div>
        <div className="restaurant-list">
              {restaurants.map((restaurant, index) => {
                return (
                 <RestrauntCard key={index} restaurant={restaurant} />
                );
            })}
        </div>
        </>
    )
}

export default Body;

