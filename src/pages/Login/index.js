import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { SignIn } from "~/components/Forms";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("title")}>Đăng nhập</div>
            <SignIn />
            <div className={cx("option")}>
                <div><Link to="./identify">Quên mật khẩu?</Link></div>
                <div>Chưa có tài khoản? <Link to="/register" >Đăng ký ngay</Link></div> 
            </div>
        </div>
    );
}

export default Login;