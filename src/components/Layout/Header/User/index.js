import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import { Menu } from "~/components/Popper";
import { AUTH_ITEMS } from "~/constant";

import classNames from "classnames/bind";
import styles from "../Header.module.scss";
import { useContext, useEffect, useState } from "react";
import { avatar } from "~/assets/images";
import { UserContext } from "~/store";
import { createPortal } from "react-dom";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { userActions } from "~/store/actions";

const cx = classNames.bind(styles);


function User() {
    const nagative = useNavigate();
    const [domReady, setDomReady] = useState(false);
    const [state, dispatch] = useContext(UserContext);
    const [showPortal, setShowPortal] = useState(false);

    const userMenu = [
        {
            title: "Profile",
            to: `/${state.idUser}/profile`
        },
        {
            title: "Đăng xuất",
            onClick: () => {
                const cookie = new Cookies();
                cookie.remove('ecommerceToken', { path: '/' });
                dispatch(userActions.logout());
                nagative('/login');
            },
        }
    ]

    useEffect(() => {
        setDomReady(true);
    }, [domReady, showPortal])

    return (
        <>
            {state ?
                <div onClick={() => setShowPortal(!showPortal)} id="avatar" className={cx("login-item")}>
                    <img className={cx("avatar")} src={avatar} alt="avt" />
                </div>
                :
                <Tippy
                    maxWidth="none"
                    interactive
                    placement="bottom-end"
                    render={attrs => (
                        <div className={cx("login-tippy", "user-tippy")} tabIndex="-1" {...attrs}>
                            <Menu data={AUTH_ITEMS} />
                        </div>
                    )}
                >
                    <div className={cx("login-item")}>
                        <FontAwesomeIcon className={cx("login-icon")} icon={faCircleUser} />
                    </div>
                </Tippy>
            }

            {showPortal && domReady && createPortal(
                <div onClick={() => setShowPortal(false)} className={cx('user-portal')}><Menu data={userMenu} /></div>,
                document.getElementById('avatar')
            )}
        </>
    );
}

export default User;