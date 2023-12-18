import classNames from "classnames/bind";
import styles from "./ShipmentDetail.module.scss"
import Button from "~/components/Common/Button";
import { Input } from "~/components/Forms/ImputForm";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "~/store";
import AddressSelector from "~/components/Common/AddressSelector";
import axios from "axios";
import { userActions } from "~/store/actions";

const cx = classNames.bind(styles);

function ShipmentDetail({ onChange }) {
    const [state, dispatch] = useContext(UserContext);
    const [fullName, setFullName] = useState(state.fullName);
    const [phone, setPhone] = useState(state.phone);
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState({ province: '', district: '', ward: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (address2.ward === '') {
            return;
        }
        else {
            const data = { address: `${address1} ${address2.ward}, ${address2.district}, ${address2.province}` };
            axios.post(`http://localhost:5000/api/auth/address`, data)
                .then(() => {
                    dispatch(userActions.addAddress(data.address));
                    onChange(false);
                })
                .catch(err => console.error(err));
        }
    }

    return (
        <div className={cx("wrapper")}>
            <form onSubmit={handleSubmit} className={cx("shipment-form")}>
                <Input value={fullName} handleChange={setFullName} type="text" id="fullName" label="Họ và tên" required />
                <Input value={phone} handleChange={setPhone} type="phone" id="phone" label="Số điện thoại" required />
                <Input value={address1} handleChange={setAddress1} type="text" id="address" label="Địa chỉ" required />

                <div className={cx("address")}>
                    <AddressSelector value={address2} setAddress={setAddress2} />
                </div>

                <div className={cx('actions')}>
                    <Link className={cx("link")} to="/cart">Giỏ hàng</Link>
                    <Button type="submit" primary>Tiếp tục đến phương thức thanh toán</Button>
                </div>
            </form>
        </div>
    );
}

export default ShipmentDetail;