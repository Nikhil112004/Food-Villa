import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const params = useParams();
    const [restaurant, setRestaurant] = useState({})

    useEffect(() => {
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.44250&lng=81.85170&restaurantId=1053976&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
    }

     return (
        <div>
            <h1>Restauurant id: 123 </h1>
            <h2>{restaurant.name}</h2>
        </div>
    );
};

export default RestaurantMenu;