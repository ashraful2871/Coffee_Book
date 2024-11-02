import toast from "react-hot-toast";

// get all coffees from local storage
const getAllFavorites = () => {
  const all = localStorage.getItem("favorites");
  if (all) {
    const favorites = JSON.parse(all);
    return favorites;
  } else {
    return [];
  }
};
// add a coffee to local storage
const addFavorite = (coffee) => {
  const favorites = getAllFavorites();
  const isExist = favorites.find((item) => item.id == coffee.id);
  if (isExist) {
    toast.error("already exit");
    return;
  }
  console.log(favorites);
  favorites.push(coffee);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("successfully added");
};
// remove from local storage
const removeFavorite = (id) => {
  const favorites = getAllFavorites();
  const remaining = favorites.filter((coffee) => coffee.id != id);
  localStorage.setItem("favorites", JSON.stringify(remaining));
  toast.success("successfully removed");
};
//
export { addFavorite, getAllFavorites, removeFavorite };
