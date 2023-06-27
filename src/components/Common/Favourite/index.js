import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Message from "~/components/Portal/Message";
import { SUCCESS } from "~/constant";
import { ProductContext } from "~/store";
import { productActions } from "~/store/actions";
import Button from "../Button";

function Favourite({idProduct}) {
    const [state, dispatch] = useContext(ProductContext);
    const [message, setMessage] = useState(false);

    const favEleClass = state.favourites[idProduct] ? "active" : null;

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMessage(false);
        }, 2000);

        return () => clearTimeout(timerId);
    }, [setMessage]);

    const handleFav = () => {
        if (!state.favourites[idProduct]) {
            dispatch(productActions.addToFavourite(idProduct));
            setMessage({
                isShow: true,
                message: "Sản phẩm đã được thêm vào mục yêu thích"
            });
        }
        else {
            dispatch(productActions.removeToFavourite(idProduct));
            setMessage({
                isShow: true,
                message: "Sản phẩm đã được xóa khỏi mục yêu thích"
            });
        }
    }

    return (
        <>
            <Button className={favEleClass} onClick={handleFav} whiteBackground square >
                <FontAwesomeIcon icon={faHeart} />
            </Button>

            {message.isShow &&
                createPortal(
                    <Message type={SUCCESS} message={message.message} />,
                    document.body
                )
            }
        </>
    );
}

export default Favourite;