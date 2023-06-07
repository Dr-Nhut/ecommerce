import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { SignUp } from "~/components/Forms";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("title")}>Đăng ký tài khoản</div>
            <SignUp />
            <div className={cx("option")}>
                <div><Link to="/login">Đăng nhập</Link></div>
                <div><Link to="/">Quay lại trang chủ</Link></div>
            </div>
        </div>
    );
}

export default Register;