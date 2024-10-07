import { Link } from 'react-router-dom';
import './css/home.css'; // Import your css file
const Coupon = () => {
    const cards = [
        // Mien Bac
        {
            id: 1,
            key: "khuyen-mai-1",
            title: "Khuyến Mãi 1 - Ăn bánh xèo",
            description: "Được đi ăn bánh xèo",
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/11/du-lich-mien-bac-3.jpg?tr=dpr-2,w-675", // Replace with your image path
        },
        {
            id: 2,
            key: "khuyen-mai-2",
            title: "Khuyến Mãi 2 - Ăn 2 cái bánh xèo",
            description: "Được đi ăn bánh xèo",
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/11/du-lich-mien-bac-4-1024x622.jpg?tr=dpr-2,w-675", // Replace with your image path
        },
        {
            id: 3,
            key: "khuyen-mai-3",
            title: "Khuyến Mãi 2 - Ăn 3 cái bánh xèo",
            description: "Được đi ăn bánh xèo",
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/11/du-lich-mien-bac-5-1024x686.jpg?tr=dpr-2,w-675", // Replace with your image path

        }
    ];
    return (
        <div
            className="container"
        >
            <h1>Khuyến Mãi</h1>
            <div className="card-container">
                {cards.map(card => (
                    <div
                        className="card"

                    >
                        <img
                            src={card.imgSrc}
                            alt={card.title}
                            className="card-image"
                        />
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                ))
                }
            </div>
        </div>

    );
};

export default Coupon;