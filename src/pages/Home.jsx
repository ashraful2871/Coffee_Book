import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      {/* heading */}
      <Heading
        title="Browse Coffees by Category"
        subTitle="Choose your desired coffee category to browse through specific coffees that fit in your taste.

"
      ></Heading>
      {/* categories tab section */}
      <Categories categories={categories}></Categories>
      {/* dynamic nested components */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
