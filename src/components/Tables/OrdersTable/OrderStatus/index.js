import axios from "axios";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Button from "~/components/Common/Button";
import Message from "~/components/Portal/Message";

function OrderStatus({id, data}) {
    const [status, setStatus] = useState();
    const [showMessage, setShowMessage] = useState();

    useEffect(() => {
        setStatus(data);
    }, []);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowMessage('');
        }, 2000)

        return () => clearTimeout(timerId);
    }, [showMessage]);

    const renderSwitch = (data) => {
        switch (data) {
            case 1:
                return 'Đang vận chuyển'
            case 2:
                return 'Đã hoàn tất'
            default:
                return 'Chờ xác nhận'
        }
    }

    const handleOnClick = (e, data, id) => {
        e.stopPropagation();
        if (data !== 2) {
            axios.put(`http://localhost:5000/api/orders/${id}/status`, { status: data + 1 })
                .then((response) => {
                    setStatus(pre => pre + 1)
                    setShowMessage({
                        type: response.data.status,
                        message: data === 0 ? 'Xác nhận đơn hàng thành công' : 'Đơn hàng đã được hoàn thành',
                    });
                })
                .catch((err) => console.error(err));
        }
    };

    return (
        <Button onClick={(e) => handleOnClick(e, status, id)} primary>
            {renderSwitch(status)}
            {showMessage && createPortal(
                <Message type={showMessage.type} message={showMessage.message} />,
                document.body
            )}
        </Button>
    );
}

export default OrderStatus;