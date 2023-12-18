import classNames from "classnames/bind";
import styles from "./CheckoutSuccess.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Button from "~/components/Common/Button";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { productActions } from "~/store/actions";
import { ProductContext } from "~/store";

const cx = classNames.bind(styles);

function CheckoutSuccess() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const dispatch = useContext(ProductContext)[1];
    const session_id = searchParams.get('session_id');
    const id = localStorage.getItem('stripe_checkout_id');
    useEffect(() => {
        if(!state && !(id === session_id)) {
            navigate("/");
        }
        else {
            dispatch(productActions.clearCart());
        }
        localStorage.clear();
    }, []);

    if (!state && !(id === session_id)) {
        return null;
    }
    else {
        return (
            <div className={cx("wrapper")}>
                <div className={cx('box')}>
                    <div className={cx("header")}>
                        <div className={cx('header-content')}>
                            <p className={cx('icon')}><FontAwesomeIcon icon={faCircleCheck} /></p>
                            <h3>Đặt hàng thành công</h3>
                        </div>
                    </div>
                    <div className={cx("container")}>
                        <div>
                            <h3>Cám ơn bạn đã ủng hộ Astronaut</h3>
                            <p>Đơn hàng của bạn đang được chuẩn bị</p>
                        </div>
                        <Button rounded primary to="/product">Tiếp tục mua sắm</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckoutSuccess;