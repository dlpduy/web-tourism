import './footer.css'; // Import the CSS file for styling
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Thông tin liên hệ</h3>
                    <p>Số điện thoại: <a href="tel:+4733378901">+84939123456</a></p>
                    <p
                    >Email :<a href="lethihuynhanh@gmail.com">lethihuynhanh@gmail.com</a></p>
                </div>
                <div className="footer-section">
                    <h3>Mạng xã hội</h3>
                    <p>
                        <a href="https://facebook.com" target='new'>Facebook</a>
                    </p>
                    <p>
                        <a href="https://instagram.com" target='new'>Instagram</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;