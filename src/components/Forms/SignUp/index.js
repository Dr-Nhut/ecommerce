import classNames from "classnames/bind";
import styles from "./SignUp.module.scss"
import Button from "~/components/Button";
import { Input } from "~/components/Forms/ImputForm";
import { useState } from "react";

const cx = classNames.bind(styles);

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className={cx("wrapper")}>
            <form className={cx("user-form")}>
                <div className={cx("col-2")}>
                    <Input value={firstName} handleChange={setFirstName} type="text" id="firstName" label="Họ" />
                    <Input value={lastName} handleChange={setLastName} type="text" id="lastName" label="Tên" />
                </div>
                <Input value={email} handleChange={setEmail} type="email" id="email" label="Email" />
                <Input value={phone} handleChange={setPhone} type="phone" id="phone" label="Số điện thoại" />
                <Input value={password} handleChange={setPassword} type="password" id="password" label="Mật khẩu" />
                <Input value={confirmPassword} handleChange={setConfirmPassword} type="password" id="confirmPassword" label="Xác nhận mật khẩu" />
                <Button primary>Đăng ký</Button>
            </form>
        </div>
    );
}

export default SignUp;