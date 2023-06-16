import classNames from 'classnames/bind';
import styles from '~/components/Admin/Forms/AddProduct/AddProduct.module.scss';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Message from '~/components/Portal/Message';
import { ERROR, SUCCESS } from '~/constant';
import { createPortal } from 'react-dom';

const cx = classNames.bind(styles);

function AddCategory() {
    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [desc, setDesc] = useState("");
    const [showMessage, setShowMessage] = useState('');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowMessage('');
        }, 2000)

        return () => clearTimeout(timerId);
    }, [showMessage]);

    const inputFileRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', name);
        formData.append('thumbnail', thumbnail);
        formData.append('desc', desc);

        axios({
            method: "post",
            url: "http://localhost:5000/api/categories",
            data: formData,
            headers: { 'content-type': 'multipart/form-data' },
        })
            .then((response) => {
                if (response.data.status !== 'ERROR') {
                    setName("");
                    setThumbnail(null);
                    inputFileRef.current.value = "";
                    setDesc("");
                    setShowMessage({
                        type: SUCCESS,
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
            <label htmlFor="name">Tên danh mục</label>
            <input value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" required />

            <label htmlFor="thumbnail">Ảnh bìa danh mục</label>
            <input id="thumbnail" name="thumbnail" ref={inputFileRef} onChange={(e) => setThumbnail(e.target.files[0])} type="file" required />

            <label htmlFor="description">Mô tả danh mục</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} id="description" rows="6" cols="50" />


            <input className={cx('sbm-btn')} type='submit' value="Thêm danh mục" />

            {showMessage.isShow && createPortal(
                <Message type={showMessage.type} message={showMessage.message} />,
                document.body
            )}
        </form>
    );
}

export default AddCategory;