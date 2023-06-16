import classNames from 'classnames/bind';
import styles from '~/components/Admin/Forms/AddProduct/AddProduct.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Message from '~/components/Message';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { ERROR, SUCSESS } from '~/constant';

const cx = classNames.bind(styles);

function EditCategory() {
    const id = useParams().categoryId;
    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [image, setImage] = useState(null);
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
            })
        }, 2000);

        return () => clearTimeout(timerId);
    })

    useEffect(() => {
        axios.get(`http://localhost:5000/api/categories/${id}`)
            .then(async (response) => {
                if (response.data) {
                    setName(response.data.name);
                    setImage(response.data.urlThumbnail);
                    setDesc(response.data.description);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', name);
        if (thumbnail) {
            formData.append('thumbnail', thumbnail);
        }
        formData.append('desc', desc);
        axios({
            method: "put",
            url: `http://localhost:5000/api/categories/${id}/edit`,
            data: formData,
            headers: { 'content-type': 'multipart/form-data' },
        })
            .then((response) => {
                if (response.data.status !== 'ERROR') {
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
            <label htmlFor="name">Tên danh mục</label>
            <input value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" required />

            <span>Ảnh bìa danh mục</span>
            <img src={thumbnail ? URL.createObjectURL(thumbnail) : image} alt='thumbnail' className={cx('thumbnail')} />
            <label className={cx('label-btn')} htmlFor="thumbnail">Thay đổi ảnh</label>
            <input hidden id="thumbnail" name="thumbnail" onChange={(e) => setThumbnail(e.target.files[0])} type="file" />

            <label htmlFor="description">Mô tả danh mục</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} id="description" rows="6" cols="50" />


            <input className={cx('sbm-btn')} type='submit' value="Sửa danh mục" />

            {showMessage.isShow && createPortal(
                <Message type={showMessage.type} message={showMessage.message} />,
                document.body
            )}
        </form>
    );
}

export default EditCategory;