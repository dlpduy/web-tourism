import './contents.css'; // Import your css file
import src1 from './image/a1.jpg'; // Import your image
import src2 from './image/a2.jpg'; // Import your image
import src3 from './image/a3.jpg'; // Import your image
const Contents = () => {
    const cards = [
        {
            title: "Pavilions & Villas",
            description: "From their curving roofs peeping above the treeline to their latticed windows and discreet natural materials.",
            imgSrc: src1, // Replace with your image path
        },
        {
            title: "Residences",
            description: "Residences offer the space and facilities to bring together family, friends or colleagues in one unforgettable location.",
            imgSrc: src2, // Replace with your image path
        },
        {
            title: "Wellness Villas",
            description: "Aman’s two Wellness Pool Villas combine an exceptional standard of accommodation with integrated spa and wellbeing facilities",
            imgSrc: src3, // Replace with your image path
        },
        {
            title: "Wellness Villas",
            description: "Aman’s two Wellness Pool Villas combine an exceptional standard of accommodation with integrated spa and wellbeing facilities.",
            imgSrc: src3, // Replace with your image path
        },
        {
            title: "Wellness Villas",
            description: "Aman’s two Wellness Pool Villas combine an exceptional standard of accommodation with integrated spa and wellbeing facilities.",
            imgSrc: src3, // Replace with your image path
        },
        {
            title: "Wellness Villas",
            description: "Aman’s two Wellness Pool Villas combine an exceptional standard of accommodation with integrated spa and wellbeing facilities.",
            imgSrc: src3, // Replace with your image path
        },
        {
            title: "Wellness Villas",
            description: "Aman’s two Wellness Pool Villas combine an exceptional standard of accommodation with integrated spa and wellbeing facilities.",
            imgSrc: src3, // Replace with your image path
        },
        {
            title: "Wellness Villas",
            description: "Aman’s two Wellness Pool Villas combine an exceptional standard of accommodation with integrated spa and wellbeing facilities.",
            imgSrc: src3, // Replace with your image path
        },
        {
            title: "Wellness Villas",
            description: "Aman’s two Wellness Pool Villas combine an exceptional standard of accommodation with integrated spa and wellbeing facilities.",
            imgSrc: src3, // Replace with your image path
        },
    ];

    return (
        <div
            className="container"
        >
            <h1>Our Offerings</h1>
            <div className="card-container">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.imgSrc} alt={card.title} className="card-image" />
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                        <button className="discover-button">Discover more</button>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Contents;