import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { MenuProduct } from "~/components/Popper";
import { ProductContext } from "~/store";
import { useState, useEffect, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

const emptyArray = [];
emptyArray.length = 1;

function Search({ placeholder, className, rounded = false }) {
    const [hidden, setHidden] = useState(true);
    const [valueInput, setValueInput] = useState("");
    const products = useContext(ProductContext);
    //Khởi tạo đổi tượng rỗng
    const [searchResult, setSearchResult] = useState(emptyArray);
    const inputRef = useRef();
    useEffect(() => {
        if (valueInput) {
            setSearchResult(products.filter(product => product.title.includes(valueInput)));
        }
    }, [valueInput, products]);

    const handleInput = (value) => {
        setValueInput(value);
        if (value) {
            setHidden(false);
        }
        else {
            setHidden(true);
            setSearchResult(emptyArray);
        }
    }

    const handleClear = () => {
        setHidden(true);
        setValueInput("");
        setSearchResult(emptyArray);
        inputRef.current.focus();
    }

    const handleRenderSearch = (products) => {
        if (products.length > 0) {
            if (products.length > 4) {
                const render = [...products];
                const anouncement = `Xem thêm ${products.length - 4} sản phẩm`;
                return (
                    <MenuProduct title="Kết quả tìm kiếm" data={render.splice(0, 4)} anouncement={anouncement} to="/product" />
                );
            }
            else {
                if (products !== emptyArray) {
                    return (
                        <MenuProduct title="Kết quả tìm kiếm" data={products} />
                    )
                }
            }
        }
        else {
            return (
                <MenuProduct title="Kết quả tìm kiếm" anouncement="Không tìm thấy sản phẩm nào" />
            );
        }
    }

    const classes = cx("wrapper", className, { rounded });
    
    return (
        <div className={classes}>
            <Tippy
                trigger="focusin click"
                hideOnClick={true}
                maxWidth="none"
                interactive
                placement="bottom"
                render={attrs => (
                    <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                        {handleRenderSearch(searchResult)}
                    </div>
                )}
            >
                <div className={cx("search-box")}>
                    <input ref={inputRef} value={valueInput} onChange={(e) => handleInput(e.target.value)} className={cx("search-input")} placeholder={placeholder} spellCheck={false} />
                    <FontAwesomeIcon onClick={handleClear} className={cx("search-clear", { hidden })} icon={faCircleXmark} />
                </div>
            </Tippy>
            <Tippy
                placement="bottom"
                render={attrs => (
                    <div className={cx("tippy-box")} tabIndex="-1" {...attrs}>
                        <span>Tìm kiếm</span>
                    </div>
                )}
            >
                <div className={cx("search-icon")}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            </Tippy>

        </div >
    );
}

export default Search;