import classNames from 'classnames/bind';
import styles from './AddProduct.module.scss';
import AddOption from '~/components/Admin/AddOption';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Message from '~/components/Message';
import { ERROR, SUCSESS } from '~/constant';
import { createPortal } from 'react-dom';


const cx = classNames.bind(styles);


function AddProduct() {
    const [details, setDetails] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [thumbnails, setThumbnails] = useState(null);
    const [desc, setDesc] = useState("");
    const [showMessage, setShowMessage] = useState({
        isShow: false,
        message: ""
    });

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowMessage({
                isShow: false,
                message: ""
            });
        }, 2000)

        return () => clearTimeout(timerId);
    }, [showMessage]);

    const inputFileRef = useRef();

    const handleOnChangeFile = (files) => {
        let thumbnailFiles = [];
        for (let i = 0; i < files.length; i++) {
            thumbnailFiles.push(files[i]);
        }
        setThumbnails(thumbnailFiles);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        thumbnails.forEach((thumbnail) => {
            formData.append('thumbnail', thumbnail);
        })
        formData.append('desc', desc);
        formData.append('details', JSON.stringify(details));

        axios({
            method: "post",
            url: "http://localhost:5000/api/products",
            data: formData,
            headers: { 'content-type': 'multipart/form-data' },
        })
            .then((response) => {
                console.log("Response ", response);
                if (response.data.status !== 'ERROR') {
                    /*
                    setDetails([]);
                    setTitle("");
                    setPrice(0);
                    setThumbnails(null);
                    inputFileRef.current.value = "";
                    setDesc("");
                    */
                    setShowMessage({
                        type: SUCSESS,
                        isShow: true,
                        message: response.data.message
                    });
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
        <form onSubmit={handleSubmit} className={cx('wrapper')}>
            <label htmlFor="title">Tên sản phẩm</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} id="title" type="text" required />

            <label htmlFor="price">Giá cả</label>
            <input value={price} onChange={(e) => setPrice(+e.target.value)} id="price" type="text" required />

            <label htmlFor="thumbnails">Hình ảnh sản phẩm</label>
            <input id="thumbnails" name="thumbnails" ref={inputFileRef} onChange={(e) => handleOnChangeFile(e.target.files)} type="file" multiple />

            <label htmlFor="description">Mô tả sản phẩm</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} id="description" required rows="6" cols="50" />

            <AddOption value={details} onAdd={setDetails} name="Màu sắc" />

            <input className={cx('sbm-btn')} type='submit' value="Thêm sản phẩm" />

            {showMessage.isShow && createPortal(
                <Message type={showMessage.type} message={showMessage.message} />,
                document.body
            )}
        </form>
    );
}

export default AddProduct;