import classNames from "classnames/bind";
import styles from "../Tables.module.scss";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import Alert from "~/components/Portal/Alert";
import Modal from "~/components/Modal";
import Message from "~/components/Portal/Message";
import { ProductContext } from "~/store";
import { productActions } from "~/store/actions";

const cx = classNames.bind(styles);

function ProductsTable({ page }) {
    const [state, dispatch] = useContext(ProductContext);
    const [products, setProducts] = useState();
    const [showPortal, setShowPortal] = useState(false);
    const [productDelete, setProductDelete] = useState();
    const [showMessage, setShowMessage] = useState('');
    const [deleted, setDeleted] = useState(0);
    
    const start = (page - 1) * 10;
    const end = page * 10 - 1;

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowMessage('');
        }, 2000)

        return () => clearTimeout(timerId);
    }, [showMessage]);

    useLayoutEffect(() => {
        if (deleted !== 0) {
            dispatch(productActions.deleteProduct(productDelete));
            setDeleted(0);
        }
        setProducts(state.products.slice(start, end))
    }, [deleted, page]);

    const handleDeleteProduct = (data) => {
        setProductDelete(data);
        setShowPortal(true);
    }

    return (
        <table className={cx('wrapper')}>
            <thead className={cx('header')}>
                <tr>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody className={cx('container')}>
                {products && products.map(product => {
                    return <tr className={cx("product-item")} key={product.idproduct}>
                        <td>
                            <img className={cx('thumbnail')} src={`http://localhost:5000/${product.thumbnails.split(',')[0]}`} alt="thumbnail" />
                        </td>
                        <td className={cx("t-left")}>
                            {product.title}
                        </td>
                        <td>
                            {product.price}
                        </td>
                        <td className={cx("actions")}>
                            <Link className='link' to={`./${product.idproduct}/edit`}><FontAwesomeIcon icon={faEdit} /></Link>
                            <FontAwesomeIcon onClick={() => handleDeleteProduct(product)} icon={faTrash} />
                        </td>
                    </tr>
                })
                }

            </tbody>

            {showPortal && createPortal(
                <Modal isShow={setShowPortal}>
                    <Alert onDelete={setDeleted} type='products' isShow={setShowPortal} message={`Bạn có chắc muốn xóa ${productDelete.title} không?`} id={productDelete.idproduct} isShowMessage={setShowMessage} />
                </Modal>,
                document.body
            )}

            {showMessage.isShow && createPortal(
                <Message type={showMessage.status} message={showMessage.message} />,
                document.body
            )}
        </table>
    );
}

export default ProductsTable;