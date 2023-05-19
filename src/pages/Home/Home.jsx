import useTitle from "../../hooks/useTitle";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import NewArrivals from "./NewArrivals/NewArrivals";
import TabSection from "./TabSection/TabSection";


const Home = () => {

    useTitle('Home')

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabSection></TabSection>
            <NewArrivals></NewArrivals>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;