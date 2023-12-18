import classNames from "classnames/bind";
import styles from "~/pages/Admin/Product/Product.module.scss";
import HeaderComponent from "~/components/Admin/HeaderComponent";
import Panigation from "~/components/Common/Panigation";
import { useState } from "react";
import { OrdersTable } from "~/components/Tables";

const cx = classNames.bind(styles);

function OrderManager() {
    const [page, setPage] = useState(1);
    return (
        <div className={cx("wrapper")}>
            <HeaderComponent title="Danh sách đơn đặt hàng" />

            <div className={cx("product-container")}>
                <OrdersTable page={page}/>
                <Panigation type={'orders'} page={page} setPage={setPage}/>
            </div>
        </div>
    );
}

export default OrderManager;