import classNames from "classnames/bind";
import styles from "./SignIn.module.scss"
import Button from "~/components/Common/Button";
import { Input } from "~/components/Forms/ImputForm";
import { useState } from "react";

const cx = classNames.bind(styles);

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={cx("wrapper")}>
            <form className={cx("user-form")}>
                <Input value={username} handleChange={setUsername} type="text" id="username" label="Tên tài khoản" />
                <Input value={password} handleChange={setPassword} type="password" id="password" label="Mật khẩu" />
                <Button primary>Đăng nhập</Button>
            </form>
        </div>
    );
}

export default SignIn;