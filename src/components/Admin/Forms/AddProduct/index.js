import classNames from 'classnames/bind';
import styles from "./AddProduct.module.scss"
import AddOption from '~/components/Admin/AddOption';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Message from '~/components/Portal/Message';
import { ERROR, SUCCESS } from '~/constant';
import { createPortal } from 'react-dom';
import Select from '~/components/Common/Select';
import { ProductContext } from '~/store';
import { productActions } from '~/store/actions';

const cx = classNames.bind(styles);

function AddProduct() {
    const dispatch = useContext(ProductContext)[1];
    const [details, setDetails] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [thumbnails, setThumbnails] = useState(null);
    const [desc, setDesc] = useState("");
    const [showMessage, setShowMessage] = useState('');
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState(''); //Store id category


    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowMessage('');
        }, 2000)

        return () => clearTimeout(timerId);
    }, [showMessage]);

    useEffect(() => {
        getCategories();
    }, [])

    const inputFileRef = useRef();

    const getCategories = () => {
        axios.get("http://localhost:5000/api/categories/")
            .then((response) => {
                setSelected(response.data[0].idcategory);
                const optionArray = response.data.map(data => ({
                    id: data.idcategory,
                    value: data.name
                }))
                setOptions(optionArray);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

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
        formData.append('category_id', selected);
        formData.append('details', JSON.stringify(details));

        axios({
            method: "post",
            url: "http://localhost:5000/api/products",
            data: formData,
            headers: { 'content-type': 'multipart/form-data' },
        })
            .then((response) => {
                if (response.data.status !== 'ERROR') {
                    setDetails([]);
                    setTitle("");
                    setPrice(0);
                    setThumbnails(null);
                    inputFileRef.current.value = "";
                    setDesc("");
                    setShowMessage({
                        type: SUCCESS,
                        isShow: true,
                        message: response.data.message
                    });
                    dispatch(productActions.addProduct(response.data.product));
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

            {options.length > 0 && <Select title="Loại sản phẩm" value={selected} onSelect={setSelected} options={options} half />}

            {thumbnails ? <div className={cx('thumbnails')}>{thumbnails.map((item, index) => <img key={index} src={URL.createObjectURL(item)} alt='thumbnail' className={cx('thumbnail')} />)}</div> : thumbnails}

            <label className={cx('label-btn')} htmlFor="thumbnails">Thêm ảnh</label>
            <input hidden id="thumbnails" name="thumbnails" ref={inputFileRef} onChange={(e) => handleOnChangeFile(e.target.files)} type="file" multiple />

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