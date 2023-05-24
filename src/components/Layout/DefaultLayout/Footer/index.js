import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons"
import { faSquareFacebook, faSquareInstagram, faSquareYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("ft-info")}>
                    <h3 className={cx("title")}>Thông tin liên hệ</h3>
                    <ul>
                        <li className={cx("ft-item")}>
                            <FontAwesomeIcon className={cx("ft-icon")} icon={faLocationDot} />
                            <span>Địa chỉ: Khu đô thị Tây Sông Hậu, phường Mỹ Phước, TP Long Xuyên, An Giang</span>
                        </li>
                        <li className={cx("ft-item")}>
                            <FontAwesomeIcon className={cx("ft-icon")} icon={faMobileScreenButton} />
                            <span>Số điện thoại: 0123456789</span>
                        </li>

                        <li className={cx("ft-item")}>
                            <FontAwesomeIcon className={cx("ft-icon")} icon={faEnvelope} />
                            <span>Email: lmnhut1612@gmail.com</span>
                        </li>
                    </ul>
                </div>

                <div className={cx("ft-info")}>
                    <h3 className={cx("title")}>Chính sách</h3>
                    <ul>
                        <li className={cx("ft-item")}>
                            <span>Chính sách bán hàng</span>
                        </li>
                        <li className={cx("ft-item")}>
                            <span>Chính sách giao hàng</span>
                        </li>

                        <li className={cx("ft-item")}>
                            <span>Chính sách đổi trả</span>
                        </li>
                    </ul>
                </div>

                <div className={cx("ft-info")}>
                    <h3 className={cx("title")}>Hỗ trợ khách hàng</h3>
                    <ul>
                        <li className={cx("ft-item")}>
                            <span>Liên hệ</span>
                        </li>
                        <li className={cx("ft-item")}>
                            <span>Câu hỏi thường gặp</span>
                        </li>

                        <li className={cx("ft-item")}>
                            <span>Hệ thống cửa hàng</span>
                        </li>
                    </ul>
                </div>

                <div className={cx("ft-info")}>
                    <h3 className={cx("title")}>Theo dõi cửa hàng</h3>
                    <ul className={cx("social")}>
                        <li className={cx("ft-item")}>
                            <FontAwesomeIcon icon={faSquareFacebook} />
                        </li>
                        <li className={cx("ft-item")}>
                            <FontAwesomeIcon icon={faSquareInstagram} />
                        </li>
                        <li className={cx("ft-item")}>
                            <FontAwesomeIcon icon={faSquareYoutube} />
                        </li>
                        <li className={cx("ft-item")}>
                            <FontAwesomeIcon icon={faTiktok} />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;