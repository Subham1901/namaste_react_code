import { useEffect, useState } from "react";

export default useRestaurant = (resId) => {
  const [headerInfo, setHeaderInfo] = useState({});
  const [menuDetails, setMenuDetails] = useState([]);

  const getMenuDetails = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4698577&lng=78.3578246&restaurantId=${resId}`
    );
    const menu = await data.json();

    setHeaderInfo(menu?.data?.cards[0]?.card?.card?.info);
    setMenuDetails(
      menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };
  useEffect(() => {
    getMenuDetails();
  }, []);
  return [headerInfo, menuDetails, true];
};
