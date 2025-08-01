import "./Card.css"

interface Card {
    id: number;
    cover: string;
    title: string;
    price: number;
    type: string;
    releaseDate: number;
    pagesCount: number;
}

const Card = ({ cover, title, price, type, releaseDate, pagesCount }: Card) => {
    return (
        <div className="card">
            <div className="card__up">
                <img src={cover} className="card__image" />
                <div className="card__up__content">
                    <h3 className="card__title">{title}</h3>
                    <span className="card__info">{releaseDate} ● {pagesCount} pages</span>
                </div>
            </div>
            <hr />
            <div className="card__down">
                <div className="card__down__up">
                    <span className="card__down__up__type">{type}</span>
                    <div className="card__down__up__prices">
                        <span className="card__down__up__price">${price}.99</span>
                        <del className="card__down__up__price__del">$47.99</del>
                    </div>
                </div>
                <div className="card__down__down">
                    <button className="card__down__down__btn">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
};

export default Card;