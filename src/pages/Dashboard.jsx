import { useEffect, useState } from "react";
import Heading from "../Components/Heading";
import { getAllFavorites, removeFavorite } from "../Components/utils";
import Card from "../Components/Card";

const Dashboard = () => {
  console.log(location);

  const [coffee, setCoffees] = useState([]);
  useEffect(() => {
    const favorite = getAllFavorites();
    setCoffees(favorite);
  }, []);
  const handleRemove = (id) => {
    removeFavorite(id);
    const favorite = getAllFavorites();
    setCoffees(favorite);
  };
  return (
    <>
      <Heading
        title="Welcome to Dashboard"
        subtitle="Manage coffees that you have previously added as favorite. You can view or remove them from here."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffee.map((coffee) => (
          <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
