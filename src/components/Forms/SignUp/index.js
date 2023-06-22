import classNames from "classnames/bind";
import styles from "./SignUp.module.scss"
import Button from "~/components/Common/Button";
import { Input } from "~/components/Forms/ImputForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { ERROR } from "~/constant";
import Message from "~/components/Portal/Message";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function SignUp() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showMessage, setShowMessage] = useState('');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowMessage('')
        }, 2000);

        return () => clearTimeout(timerId);
    }, [showMessage]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setConfirmPassword('');
            return;
        }
        const user = {
            firstName,
            lastName,
            email,
            phone,
            password
        }

        axios.post('http://localhost:5000/api/auth/register', { user })
            .then((response) => {
                if (response.data.status !== 'ERROR') {
                    navigate('/login');
                }
                else {
                    setShowMessage({
                        type: ERROR,
                        isShow: true,
                        message: response.data.message
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={cx("wrapper")}>
            <form onSubmit={handleSubmit} className={cx("user-form")}>
                <div className={cx("col-2")}>
                    <Input value={firstName} handleChange={setFirstName} type="text" id="firstName" label="Họ" />
                    <Input value={lastName} handleChange={setLastName} type="text" id="lastName" label="Tên" />
                </div>
                <Input value={email} handleChange={setEmail} type="email" id="email" label="Email" />
                <Input value={phone} handleChange={setPhone} type="phone" id="phone" label="Số điện thoại" />
                <Input value={password} handleChange={setPassword} type="password" id="password" label="Mật khẩu" />
                <Input value={confirmPassword} handleChange={setConfirmPassword} type="password" id="confirmPassword" label="Xác nhận mật khẩu" />
                <Button type="submit" primary>Đăng ký</Button>
            </form>

            {showMessage.isShow && createPortal(
                <Message type={showMessage.type} message={showMessage.message} />,
                document.body
            )}
        </div>
    );
}

export default SignUp;