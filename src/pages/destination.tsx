import { Link } from "react-router-dom";
import './css/destination.css';
interface Destination {
    id: number;
    key: string;
    title: string;
    description: string;
    imgSrc: string;
}

const Destination = () => {
    const cards = [
        // Mien Bac
        {
            id: 1,
            key: "co-to",
            title: "Cô Tô - Viên ngọc xanh giữa trời Đông Bắc",
            description: "Nằm ở vùng biển phía Bắc Việt Nam, nổi tiếng với vẻ đẹp biển tuyệt đẹp và sở hữu nhiều bãi biển tuyệt đẹp như bãi biển Hồng Vàn, bãi tắm Vụng Tiên, và bãi Vàn Chảy, nơi du khách có thể thả mình vào làn nước biển trong xanh và tận hưởng sự thư giãn. ",
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/11/du-lich-mien-bac-3.jpg?tr=dpr-2,w-675", // Replace with your image path
        },
        {
            id: 2,
            key: "sa-pa",
            title: "Sapa - Vùng đất 4 mùa mây",
            description: "Sapa - Vùng đất 4 mùa mây, nằm tại tỉnh Lào Cai. Thành phố Sapa nổi tiếng với cảnh quan núi non đẹp đến mê hồn. Với độ cao 1600m so với mực nước biển, Sapa thừa hưởng một khí hậu mát mẻ quanh năm và bao quanh bởi những cánh rừng xanh tươi.",
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/11/du-lich-mien-bac-4-1024x622.jpg?tr=dpr-2,w-675", // Replace with your image path
        },
        {
            id: 3,
            key: "moc-chau",
            title: "Mộc Châu - Vùng đất của sắc màu",
            description: "Tọa lạc tại vùng cao Sơn La, Mộc Châu đón nhận món quà quý giá từ thiên nhiên - khí hậu độc đáo. Với không khí se lạnh trong làn sương mù dày đặc hòa quyện với cảnh quan kỳ vĩ, những đồi chè xanh mướt và những ngôi làng ven đường, tạo nên một bức tranh tuyệt đẹp.",
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/11/du-lich-mien-bac-5-1024x686.jpg?tr=dpr-2,w-675", // Replace with your image path

        },
        {
            id: 4,
            key: "thac-ban-gioc",
            title: "Thác Bản Giốc - kiệt tác thiên nhiên Cao Bằng",
            description: "Thác Bản Giốc, đẹp như chuyện cổ tích, nằm giữa vùng đất cao Bắc Bộ, là điểm du lịch miền Bắc Việt Nam hấp dẫn. Khám phá vẻ đẹp miền Bắc, thác tựa dải lụa trắng mềm mại giữa núi rừng, là niềm tự hào của người Việt, đồng thời là điểm đến tuyệt vời.",
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/12/du-lich-mien-bac-18-1024x682.jpg?tr=dpr-2,w-675", // Replace with your image path  
        },
        {
            id: 5,
            key: "vinh-ha-long",
            title: "Vịnh Hạ Long - Di sản thiên nhiên thế giới",
            description: "Vịnh Hạ Long nổi tiếng với cảnh quan thiên nhiên hùng vĩ, huyền bí. Đây là một trong những điểm đến du lịch miền Bắc Việt Nam hấp dẫn nhất, thu hút hàng triệu lượt du khách mỗi năm.",
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/12/du-lich-mien-bac-9.jpg?tr=dpr-2,w-675" // Replace with your image path

        },

        // Mien Trung
        {
            id: 6,
            key: "ba-na-hills",
            title: "Bà Nà Hills - Thiên đường nghỉ dưỡng",
            description: "Nằm ở xã Hòa Bình, huyện Hòa Vang, Đà Nẵng. Được ví như là “Châu Âu thu nhỏ giữa lòng Đà Nẵng”. Sự kết hợp hài hòa giữa cảnh quan lãng mạn và những công trình kiến trúc độc đáo mang đến cho Bà Nà Hills một vẻ quyến rũ rất riêng.",
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-mien-trung-1.jpg?tr=dpr-2,w-675" // Replace with your image path

        },
        {
            id: 7,
            key: "phong-nha-ke-bang",
            title: "Phong Nha Kẻ Bàng  - Hang động kỳ vĩ",
            description: " Đây đã trở thành địa điểm du lịch miền Trung mà nhiều người muốn khám phá. Nổi tiếng với những hang động dài và đẹp cùng núi non hữu tình, sông nước mênh mông, nơi đây không chỉ thu hút đông đảo khách du lịch trong nước mà còn hấp dẫn cả du khách quốc tế.",
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-mien-trung-4.jpg?tr=dpr-2,w-675" // Replace with your image path
        },
        {
            id: 8,
            key: "pho-co-hoi-an",
            title: "Phố cổ Hội An - Kiệt tác kiến trúc cổ",
            description: "Hội An, một trong những điểm đến du lịch miền Trung không thể bỏ qua. Với những ngôi nhà cổ, những con đường nhỏ xinh, những cây cầu cổ kính, Hội An mang trong mình vẻ đẹp kiến trúc cổ điển và sự yên bình của một thị trấn cổ.",
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-mien-trung-6.jpg?tr=dpr-2,w-675" // Replace with your image path
        },
        {
            id: 9,
            key: "eo-gio",
            title: "Eo Gió - Thắng cảnh hùng vĩ của Quy Nhơn",
            description: "Nằm cách trung tâm thành phố Quy Nhơn khoảng 20km về phía Đông, Eo Gió là một trong những điểm đến du lịch miền Trung Việt Nam hấp dẫn. Với cảnh quan hùng vĩ, nơi đây thu hút nhiều du khách đến tham quan và check-in.",
            imgSrc: "https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-mien-trung-11.jpg?tr=dpr-2,w-675" // Replace with your image path
        },
        {
            id: 10,
            key: "mui-ne",
            title: "Mũi Né - Thủ đô resort biển",
            description: "Không chỉ là khu nghỉ dưỡng hoàn hảo mà còn là khu vui chơi lý tưởng được nhiều du khách săn đón. Những bờ cát trắng, những hàng dừa xanh, bờ biển êm đềm kết hợp hài hòa với nhau đã vẽ nên một khung cảnh hoàn hảo cho Mũi Né, để nơi đây trở thành điểm đến thú vị cho những trải nghiệm đáng nhớ.",
            imgSrc: "https://i1-dulich.vnecdn.net/2022/04/03/Mui-Ne-VNExpress40-8446-154218-2128-8648-1648973998.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=D9am6tEhaTPMkaRKY6y2KA" // Replace with your image path

        },
        // Mien Nam
        {
            id: 11,
            key: "nam-cat-tien",
            title: "Nam Cát Tiên - Khu dự trữ sinh quyển",
            description: "Nằm ở huyện Tân Phú, Đồng Nai, Nam Cát Tiên là một trong những điểm đến du lịch miền Nam Việt Nam hấp dẫn. Với cảnh quan thiên nhiên phong phú, Nam Cát Tiên là nơi lý tưởng cho những chuyến du lịch sinh thái và khám phá thiên nhiên.",
            imgSrc: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1695030579/eiygmsmowb8gjlyl0a41.webp" // Replace with your image path
        },
        {
            id: 12,
            key: "dia-dao-cu-chi",
            title: "Địa đạo Củ Chi - Thành phố dưới lòng đất",
            description: "Nằm ở huyện Củ Chi, thành phố Hồ Chí Minh, Địa đạo Củ Chi là một trong những điểm đến du lịch miền Nam Việt Nam hấp dẫn. Địa đạo Củ Chi là một trong những di tích lịch sử kháng chiến chống Mỹ còn nguyên vẹn, là điểm đến thu hút nhiều du khách trong và ngoài nước.",
            imgSrc: "https://mia.vn/media/uploads/blog-du-lich/dia-dao-cu-chi-cua-ham-1692574055.jpg" // Replace with your image path
        },
        {
            id: 13,
            key: "dao-phu-quoc",
            title: "Đảo Phú Quốc - Ngọc ngà của biển Đông",
            description: "Nổi tiếng với bãi biển xinh đẹp và làng chài Hàm Ninh, quần thể Phú Quốc United Center... Đến Phú Quốc vào dịp hè, bạn có thể trải nghiệm nhiều hoạt động lý thú bên các bãi biển như Bãi Sao, Bãi Dài, thăm thú vườn tiêu, ghé các khu vui chơi nổi tiếng như Safari Phú Quốc và thưởng thức nhiều món đặc sản độc đáo.",
            imgSrc: "https://i1-dulich.vnecdn.net/2022/04/08/shutterstock-1492074758-1641-1-7552-3298-1649405356.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=04hLfh8nziv-hqDOwvkaBQ" // Replace with your image path
        },
        {
            id: 14,
            key: "cho-noi-cai-rang",
            title: "Chợ Nổi Cái Răng - Chợ nổi lớn nhất ĐBSCL",
            description: "Nằm ở quận Cái Răng, thành phố Cần Thơ, là một trong những điểm đến du lịch miền Nam Việt Nam hấp dẫn. Chợ nổi Cái Răng nổi tiếng với nhiều loại hải sản tươi ngon, rau củ sạch, trái cây tươi ngon và nhiều sản phẩm đặc sản khác.",
            imgSrc: "https://mia.vn/media/uploads/blog-du-lich/dia-diem-du-lich-30-4-mien-nam-9-1713866340.jpg" // Replace with your image path
        },
        {
            id: 15,
            key: "rung-tram-tra-su",
            title: "Rừng Tràm Trà Sư - Khu rừng ngập nước",
            description: "Đây là rừng ngập nước tiêu biểu của vùng sông Hậu, có tác dụng quan trọng đối với môi trường nước và điều hòa khi hậu cho cả vùng Bảy Núi. Rừng còn là nơi sinh sống của nhiều loài động, thực vật quý thuộc hệ thống rừng đặc dụng Việt Nam.",
            imgSrc: "https://i1-dulich.vnecdn.net/2023/10/18/TS11-8180-1697622340.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=Yd4OyPJ2_Ff9dlD5Znylzw" // Replace with your image path
        }
    ];
    return (
        <div
            className="container"
        >
            <h1>Our Offerings</h1>
            <div className="card-container">
                {cards.map(card => (
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
                ))
                }
            </div>
        </div>

    );
};

export default Destination;
