import Banner from "../../components/Banner/Banner";
import BestSellers from "../../components/BestSellers/BestSellers";
import Genres from "../../components/Genres/Genres";
import Header from "../../components/Header/Header";
import Latest from "../../components/Latest/Latest";
import SubHeader from "../../components/SubHeader/SubHeader";

const Home = () => {
    return (
        <>
            <Header />
            <SubHeader />
            <Banner />
            <BestSellers />
            <Latest />
            <Genres />
        </>
    )
};

export default Home;