import classNames from "classnames/bind";
import styles from "./Checkouts.module.scss";
import Logo from "~/components/Common/Logo";
import ShipmentDetail from "~/components/Forms/ShipmentDetail";
import { useContext, useEffect, useState } from "react";
import { ProductContext, UserContext } from "~/store";
import Delivery from "~/components/Forms/Delivery";
import CheckoutDetail from "~/components/Common/CheckoutDetail";
import axios from "axios";

const cx = classNames.bind(styles);

function Checkouts() {
    const [user] = useContext(UserContext);
    const idCart = user.cart;
    const [state] = useContext(ProductContext);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(user.address !== undefined ? false : true);
    const [method, setMethod] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/cart/${idCart}/products`)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => console.error(error));
    }, [state.cart, idCart])
    return (
        <div className={cx('wrapper')}>
            <div className={cx('shipment-detail')}>
                <div className={cx("logo")}><Logo title='Astronaut' /></div>
                {page ?
                    <div className={cx('container')}>
                        <h2>Thông tin giao hàng</h2>
                        <ShipmentDetail onChange={setPage} />
                    </div>
                    :
                    <div className={cx('container')}>
                        <h2>Thanh Toán</h2>
                        <Delivery products={products} onChange={setPage} method={method} setMethod={setMethod} />
                    </div>
                }
            </div>
            <div className={cx('checkout-detail')}>
                <CheckoutDetail method={method} products={products} />
            </div>
        </div>
    );
}

export default Checkouts;