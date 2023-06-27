import classNames from "classnames/bind";
import styles from "./SignIn.module.scss"
import Button from "~/components/Common/Button";
import { Input } from "~/components/Forms/ImputForm";
import { useContext, useEffect, useState } from "react";
import { ERROR } from "~/constant";
import Message from "~/components/Portal/Message";
import { createPortal } from "react-dom";
import axios from "axios";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { UserContext } from "~/store";
import { userActions } from "~/store/actions";

const cx = classNames.bind(styles);

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useContext(UserContext)[1];
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showMessage, setShowMessage] = useState('');


    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowMessage('')
        }, 2000);

        return () => clearTimeout(timerId);
    }, [showMessage]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/login', {email, password}, { withCredentials: true })
            .then((response) => {
                if (response.data.status !== 'ERROR') {
                    const cookies = new Cookies();
                    cookies.set('ecommerceToken', response.data.token, { path: '/' });
                    dispatch(userActions.login(response.data.user));
                    response.data.user.role ? navigate('/admin') : navigate('/');
                }
                else {
                    setShowMessage({
                        type: ERROR,
                        isShow: true,
                        message: response.data.message
                    });
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className={cx("wrapper")}>
            <form onSubmit={handleSubmit} className={cx("user-form")}>
                <Input value={email} handleChange={setEmail} type="email" id="email" label="Email" />
                <Input value={password} handleChange={setPassword} type="password" id="password" label="Mật khẩu" />
                <Button primary>Đăng nhập</Button>
            </form>

            {showMessage.isShow && createPortal(
                <Message type={showMessage.type} message={showMessage.message} />,
                document.body
            )}
        </div>
    );
}

export default SignIn;