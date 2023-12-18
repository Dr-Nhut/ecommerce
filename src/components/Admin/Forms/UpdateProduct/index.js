import classNames from 'classnames/bind';
import styles from "../AddProduct/AddProduct.module.scss"
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Select from '~/components/Common/Select';
import { useNavigate, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function UpdateProduct() {
    const navigate = useNavigate();
    const param = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [thumbnails, setThumbnails] = useState(null);
    const [desc, setDesc] = useState("");
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        getProduct();
        getCategories();
    }, [])

    const inputFileRef = useRef();

    const getProduct = () => {
        axios.get(`http://localhost:5000/api/products/${param.id}`)
            .then((response) => {
                setTitle(response.data.title);
                setPrice(response.data.price);
                setThumbnails(response.data.thumbnails.split(','));
                setDesc(response.data.description);
                setSelected(response.data.category_id);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getCategories = () => {
        axios.get("http://localhost:5000/api/categories/")
            .then((response) => {
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
        axios({
            method: "put",
            url: `http://localhost:5000/api/products/${param.id}/edit`,
            data: formData,
            headers: { 'content-type': 'multipart/form-data' },
        })
            .then(() => navigate('/admin/product'))
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit} className={cx('wrapper')}>
            <label htmlFor="title">Tên sản phẩm</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} id="title" type="text" required />

            <label htmlFor="price">Giá cả</label>
            <input value={price} onChange={(e) => setPrice(+e.target.value)} id="price" type="text" required />

            {options.length > 0 && <Select title="Loại sản phẩm" value={selected} onSelect={setSelected} options={options} half />}

            {thumbnails ? <div className={cx('thumbnails')}>{thumbnails.map((item, index) => <img key={index} src={item.name ? URL.createObjectURL(item) : `http://localhost:5000/${item}`} alt='thumbnail' className={cx('thumbnail')} />)}</div> : thumbnails}

            <label className={cx('label-btn')} htmlFor="thumbnails">Thêm ảnh</label>
            <input hidden id="thumbnails" name="thumbnails" ref={inputFileRef} onChange={(e) => handleOnChangeFile(e.target.files)} type="file" multiple />

            <label htmlFor="description">Mô tả sản phẩm</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} id="description" required rows="6" cols="50" />

            <input className={cx('sbm-btn')} type='submit' value="Cập nhật sản phẩm" />
        </form>
    );
}

export default UpdateProduct;