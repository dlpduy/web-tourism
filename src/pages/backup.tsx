import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

interface Destination {
    id: number;
    key: string;
    title: string;
    description: string;
    imgSrc: string;
}

const Destination = () => {
    const { data } = useQuery({
        queryKey: ['fetchDestination'],
        queryFn: (): Promise<Destination[]> =>
            fetch('http://localhost:8000/destination').then((res) =>
                res.json(),
            ),
    })
    return (
        <div
            className="container"
        >
            <h1>Our Offerings</h1>
            <div className="card-container">
                {data?.map(card => (
                    card.id % 3 === 0 ? (
                        <Link
                            to={`/destination/${card.key}`}
                            style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}
                        >
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
                        </Link>
                    ) : (null)
                ))


                }
            </div>
        </div>

    );
};

export default Destination;
