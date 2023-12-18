import axios from "axios";
import Select from "../Select";
import { useEffect, useState } from "react";

function AddressSelector({ value, setAddress }) {
    const [provinces, setProvinces] = useState([{ id: 0, value: 'Chọn tỉnh/thành' }]);
    const [province, setProvince] = useState(0);
    const [districts, setDistricts] = useState([{ id: 0, value: 'Chọn quận/huyện' }]);
    const [district, setDistrict] = useState(0);
    const [wards, setWards] = useState([{ id: 0, value: 'Chọn phường/xã' }]);
    const [ward, setWard] = useState(0);

    useEffect(() => {
        axios.get('https://provinces.open-api.vn/api/p/', { withCredentials: false }, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => {
                const allProvince = response.data.map(province => ({
                    id: province.code,
                    value: province.name
                }))
                setProvinces([
                    ...provinces,
                    ...allProvince
                ]);
            })
            .catch((error) => console.error(error));
    }, [])

    useEffect(() => {
        if (+province) {
            axios.get(`https://provinces.open-api.vn/api/p/${province}?depth=2`, { withCredentials: false }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then((response) => {
                    const allDistrict = response.data.districts.map(district => ({
                        id: district.code,
                        value: district.name
                    }))
                    setDistricts([
                        ...districts,
                        ...allDistrict,
                    ])
                })
                .catch((error) => console.error(error));
        }
        else {
            setDistricts([{ id: 0, value: 'Chọn quận/huyện' }])
            setDistrict(0);
            setWards([{ id: 0, value: 'Chọn phường/xã'}]);
            setWard(0);
            setAddress({
                province: '',
                district: '',
                ward: ''
            })
        }
    }, [province])

    useEffect(() => {
        if (+district) {
            axios.get(`https://provinces.open-api.vn/api/d/${district}?depth=2`, { withCredentials: false }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then((response) => {
                    const allWard = response.data.wards.map(ward => ({
                        id: ward.code,
                        value: ward.name
                    }))
                    setWards([
                        ...wards,
                        ...allWard,
                    ])
                })
                .catch((error) => console.error(error));
        }
        else {
            setWards([{ id: 0, value: 'Chọn phường/xã'}]);
            setWard(0);
            setAddress({
                ...value,
                district: '',
                ward: ''
            })
        }
    }, [district])

    const handleProvince = (e) => {
        setProvince(e);
        if (+e) {
            axios.get(`https://provinces.open-api.vn/api/p/${e}`, { withCredentials: false }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then((response) => {
                    setAddress({
                        ...value,
                        province: response.data.name
                    })
                })
                .catch((error) => console.error(error));
        }
    }

    const handleDistrict = (e) => {
        setDistrict(e);
        if (+e) {
            axios.get(`https://provinces.open-api.vn/api/d/${e}`, { withCredentials: false }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then((response) => {
                    setAddress({
                        ...value,
                        district: response.data.name
                    })
                })
                .catch((error) => console.error(error));
        }
    }

    const handleWard = (e) => {
        setWard(e);
        if (+e) {
            axios.get(`https://provinces.open-api.vn/api/w/${e}`, { withCredentials: false }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then((response) => {
                    setAddress({
                        ...value,
                        ward: response.data.name
                    })
                })
                .catch((error) => console.error(error));
        }
    }

    return (
        <>
            <Select title="Tỉnh/Thành Phố" options={provinces} value={province} onSelect={handleProvince} />
            <Select title="Quận/Huyện" options={districts} value={district} onSelect={handleDistrict} />
            <Select title="Phường/Xã" options={wards} value={ward} onSelect={handleWard} />
        </>
    );
}

export default AddressSelector;