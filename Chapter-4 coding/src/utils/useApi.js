import { useState, useEffect } from "react";

export default function useApi() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  //get restraurants
  const getRestaurants = async () => {
    setLoading(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4698577&lng=78.3578246&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setLoading(false);
  };
  useEffect(() => {
    //API Call
    console.log("inside useeffect");
    getRestaurants();
  }, []);

  return [allRestaurants, filteredRestaurant, setFilteredRestaurant, loading];
}
