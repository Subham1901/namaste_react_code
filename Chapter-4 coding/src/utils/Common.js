//!filter
export function filterRestauant(searchData, restaurant) {
  const filter = restaurant.filter((res) => {
    return res.data.name.toLowerCase().includes(searchData.toLowerCase());
  });

  return filter;
}
