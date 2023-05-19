import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import NewArrivals from "./NewArrivals/NewArrivals";
import TabSection from "./TabSection/TabSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabSection></TabSection>
            <NewArrivals></NewArrivals>
        </div>
    );
};

export default Home;