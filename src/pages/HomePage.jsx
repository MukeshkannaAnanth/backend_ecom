import React from 'react';
import Header from "../components/Layouts/Header.jsx";
import Home from "../components/Route/Hero/Hero"
import Categories from "../components/Route/Categories/Categories.jsx"
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx"
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct.jsx"
import Events from "../components/Events/Events.jsx"
import Sponsored from "../components/Route/Sponsored.jsx"
import Footer from "../components/Layouts/Footer.jsx"


const HomePage = () => {
  return (
    <div>
        <Header activeHeding={1}/>
        <Home />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProduct />
        <Sponsored />
        <Footer />
    
    </div>
  )
}

export default HomePage
