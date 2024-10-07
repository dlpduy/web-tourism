import { useParams } from "react-router-dom"
import './css/page.css'
const DesnitationDetail = () => {
    const { id } = useParams<{ id: string }>()
    if (id === 'thac-ban-gioc') {
        return (
            <div
                className="container-detail"
            >
                <h1>Lên thác Bản Giốc Cao Bằng đắm mình trong kiệt tác thiên nhiên</h1>
                <p>
                    Chẳng phải là một kiến trúc nhân tạo hoành tráng hay một công trình mới lạ và đầy ấn tượng, thác Bản Giốc Cao Bằng khiến du khách say mê bởi vẻ đẹp thuần khiết nhất. Đến nơi đây, bạn sẽ được đắm mình trong không gian trong lành và tĩnh lặng để lắng nghe thanh âm núi rừng, tiếng thác đổ, tiếng chim hoan ca. Cùng bỏ túi kinh nghiệm du lịch Thác Bản Giốc ngay sau đây để có một chuyến đi trọn vẹn nhé!
                </p>
                <h2>Thác Bản Giốc Cao Bằng nằm ở đâu?</h2>
                <p>
                    Nằm ở xã Đàm Thủy, huyện Trùng Khánh, Cao Bằng, thác Bản Giốc được biết đến là thắng cảnh nổi tiếng với dòng suối tự nhiên trắng xóa. Đồng thời, đây cũng là một trong những thác nước xuyên quốc gia lớn nhất trên thế giới. Thác Bản Giốc Cao Bằng không chỉ mang vẻ đẹp hùng vĩ của thiên nhiên, mà còn là niềm tự hào của người dân vùng biên cương. Một trong những nét đẹp của thác Bản Giốc là phần thác chính không chảy trực tiếp từ trên xuống mà được chia tách thành nhiều tầng, tạo thành những mảng trắng đan xen màu sắc của hoa lá rất ấn tượng.
                </p>
                <div className="image-container">
                    <img src="https://ik.imagekit.io/tvlk/blog/2023/08/thac-ban-gioc-cao-bang.jpg?tr=dpr-2,w-675" alt="Vẻ đẹp hùng vĩ của Thác Bản Giốc ở Cao Bằng" />
                </div>
                <h2>Thời điểm thích hợp du lịch Thác Bản Giốc Cao Bằng</h2>
                <p>Với địa hình đón gió, khí hậu cận nhiệt đới ẩm, Cao Bằng có 2 mùa mưa khô rõ rệt. Cảnh sắc ở thác Bản Giốc vào mùa nào cũng đẹp, mỗi mùa lại mang một nét quyến rũ riêng. Từ tháng 6 đến tháng 9, thác Bản Giốc Cao Bằng đón mưa rào, dòng nước chảy mạnh, bọt tung trắng xóa, rất lý tưởng để chiêm ngưỡng vẻ đẹp hùng vĩ của thiên nhiên.</p>
                <br />
                <p> Từ tháng 9 trở đi, Thác Bản Giốc sẽ bước vào mùa thu, thời tiết khá mát mẻ, dễ chịu, khô ráo. Đặc biệt đầu tháng 10 còn có lễ hội thác Bản Giốc cực kỳ sôi nổi của người dân Cao Bằng. Cuối thu, đầu đông cây cối ở đây vào mùa thay lá, không khí trong lành, sắc đỏ sắc vàng quyến rũ, sẽ khiến bạn cực kỳ hài lòng khi đến đây.</p>
                <div className="image-container">
                    <img src="https://ik.imagekit.io/tvlk/blog/2023/08/thac-ban-gioc-cao-bang-1.jpg?tr=dpr-2,w-675" alt="Thác Bản Giốc Cao Bằng vào mùa thu" />
                </div>

                <h2>Hướng dẫn di chuyển về Thác Bản Giốc Cao Bằng</h2>
                <p>Thác Bản Giốc Cao Bằng nằm cách Hà Nội 335km, đi ô tô, xe khách mất tầm 7 giờ đồng hồ. Những du khách từ các tỉnh miền Trung, Nam có thể đi máy bay ra Hà Nội sau đó bắt xe để di chuyển về Cao Bằng. Nếu muốn tự mình đi xe máy đến Thác Bản Giốc Cao Bằng, bạn có thể đi theo hướng QL1A đến cao tốc Bắc Giang Lạng Sơn. Sau đó đi theo QL4A để đến thị trấn Đông Khê, đi tiếp theo ĐT208 đến thị trấn Hòa Thuận rẽ trái vào QL3. Từ đây bạn đi thêm khoảng 21,3km nữa rồi rẽ phải lên Đàm Thủy là đến thác.</p>
                <h2>Những hoạt động thú vị tại Thác Bản Giốc Cao Bằng</h2>
                <p>Ngồi thuyền ngắm cảnh thác nước: Đến Bản Giốc, ngồi thuyền máy ngắm nhìn dòng thác chảy xiết từ độ cao mấy chục mét là một trong những trải nghiệm không thể bỏ lỡ. Từng khối nước lớn đổ ầm xuống dòng sông phẳng lặng sẽ khiến bạn cảm nhận được sức sống mãnh liệt và hoang dại của thiên nhiên giữ đất trời yên bình, cỏ cây xanh thắm.</p>
                <div className="image-container">
                    <img src="https://ik.imagekit.io/tvlk/blog/2023/08/thac-ban-gioc-cao-bang-2.jpg?tr=dpr-2,w-675" alt="Trải nghiệm ngồi thuyền ngắm cảnh thác nước" />
                </div>
                <p>Cắm trại: Tổ chức picnic trong ngày hay cắm trại qua đêm ngay bên cạnh thác nước cũng là một hoạt động được nhiều du khách lựa chọn khi đến đây. Cùng bạn đồng hành ngắm nhìn khung cảnh rừng núi, thác nước đẹp như mơ, nhâm nhi ly rượu cay sẽ khiến bạn cảm thấy sảng khoái, yên bình hơn bao giờ hết.</p>
                <br />
                <p>Check in sống ảo: Còn gì đẹp hơn khi đứng trước background cực xịn sò là dòng thác chảy trắng xóa, xen lẫn là cây cỏ xanh mướt. Bạn nhất định phải chụp những bức ảnh đẹp tại Thác Bản Giốc Cao Bằng để lưu lại làm kỉ niệm nhé.</p>
                <div className="image-container">
                    <img src="https://ik.imagekit.io/tvlk/blog/2023/08/thac-ban-gioc-cao-bang-3.jpg?tr=dpr-2,w-675" alt="Check in sống ảo tại Thác Bản Giốc Cao Bằng" />
                </div>
                <h2>Những điểm tham quan hấp dẫn gần Thác Bản Giốc Cao Bằng</h2>
                <p>Chùa Phật Tích Trúc Lâm Bản Giốc: Nằm cách thác khoảng chừng 500m, bạn có thể ghé tham quan chùa trong hành trình du lịch của mình. Đứng ở Chùa Phật Tích Trúc Lâm Bản Giốc, bạn cũng có thể ngắm được toàn cảnh thác đổ và có ngay những bức ảnh cực đẹp.</p>
                <br />
                <p>Hồ Thang Hen: Nằm giữa lòng núi rừng Đông Bắc, hồ Thang Hen có hình thoi rất độc đáo được quanh bởi các núi đá, rừng cây, tạo nên cảnh quan hùng vĩ, hoàn mỹ. Nếu yêu thích khám phá những điều mới lạ, bạn nhất định không thể bỏ qua địa điểm thú vị này.</p>
                <div className="image-container">
                    <img src="https://ik.imagekit.io/tvlk/blog/2023/08/thac-ban-gioc-cao-bang-4.jpg?tr=dpr-2,w-675" alt="Hồ Thang Hen có hình dáng vô cùng độc đáo" />
                </div>
                <p>Di tích cách mạng Pác Bó - suối Lê Nin: Đến đây, bạn có thể tham quan một số di tích nổi tiếng như: hang Cốc Bó, suối Nậm, suối Lê Nin, hang Bo Bam, hang Lũng Lạn… Đứng ở nơi đây, du khách sẽ có nhiều hình dung cụ thể về những trang sử hào hùng của dân tộc.</p>
                <h2>Ẩm thực Cao Bằng nhất định phải thử khi du lịch Thác Bản Giốc</h2>
                <p>Cá trầm hương nướng: Đến Thác Bản Giốc Cao Bằng mà bỏ qua món đặc sản cá trầm hương thì thật là một thiếu sót. Cá được người dân đánh bắt trực tiếp, sau đó sơ chế sạch, nhét thêm một vài loại rau, gia vị, bọc lá chuối và nướng trên bếp than. Mùi cá thơm nức mũi, thịt cá vừa chắc vừa ngon sẽ làm hài lòng những thực khách khó tính nhất.</p>
                <div className="image-container">
                    <img src="https://ik.imagekit.io/tvlk/blog/2023/08/thac-ban-gioc-cao-bang-5.jpg?tr=dpr-2,w-675" alt="Cá nướng Cao Bằng thơm nức mũi" />
                </div>
                <p>Vịt quay 7 vị: Một món ăn được chế biến khéo léo, kết hợp cùng 7 gia vị truyền thống, nướng trên than hoa sẽ khiến cho thực khách nhớ mãi không quên hương vị rất lạ, rất riêng này.</p>
                <br />
                <p>Bánh khảo: Món bánh này được làm ra từ những nguyên liệu quen thuộc như: gạo nếp, lạc, mè, mỡ, đường phèn lại được rất nhiều khách du lịch yêu thích và mua về làm quà cho người thân.</p>
                <br />
                <br />
                <p>Trên đây là những kinh nghiệm du lịch Thác Bản Giốc Cao Bằng mà chúng tôi muốn chia sẻ đến bạn. Hy vọng, với những thông tin trên có thể giúp bạn lên lịch trình khám phá Thác Bản Giốc trong thời gian sắp tới</p>
            </div>

        );
    }


}

export default DesnitationDetail