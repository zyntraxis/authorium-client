import Card from "../Card/Card";
import "./Latest.css"

const Latest = () => {
    return (
        <div className="latest container">
            <h2 className="section-title">Latest Titles</h2>
            <p className="section-subtitle">Explore the latest titles from Authorium</p>
            <ul className="latest__list">
                <Card id={1} cover="/the_infinite_now.png" title="The Infinite Now" price={14} type="eBook" releaseDate={2025} pagesCount={419} />
                <Card id={2} cover="/i_am_all.png" title="I AM ALL" price={11} type="eBook" releaseDate={2025} pagesCount={369} />
                <Card id={3} cover="/eternal_cpp.png" title="ETERNAL C++" price={27} type="PaperPack" releaseDate={2025} pagesCount={549} />
                <Card id={3} cover="https://m.media-amazon.com/images/I/61Ij8nLooNL.jpg" title="The Power Of Now" price={3} type="eBook" releaseDate={2023} pagesCount={796} />
                <Card id={3} cover="https://m.media-amazon.com/images/I/61w1TWJ-NcL.jpg" title="The Art Of Being" price={14} type="PaperPack" releaseDate={1937} pagesCount={224} />
            </ul>
        </div>
    )
};

export default Latest;