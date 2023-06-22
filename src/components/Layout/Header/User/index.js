import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import { Menu } from "~/components/Popper";
import { AUTH_ITEMS, USER_ITEMS } from "~/constant";

import classNames from "classnames/bind";
import styles from "../Header.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { avatar } from "~/assets/images";

const cx = classNames.bind(styles);

function User() {
    const [user, setUser] = useState(false);
    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:5000/api/auth')
            .then((response) => {
                setUser(response.data.user);
            })
            .catch(err => console.error(err));
    }, [])
    return (
        <>
            {user ?
                <Tippy
                    maxWidth="none"
                    interactive
                    placement="bottom-end"
                    render={attrs => (
                        <div className={cx("login-tippy", "user-tippy")} tabIndex="-1" {...attrs}>
                            <Menu data={USER_ITEMS} />
                        </div>
                    )}
                >
                    <div className={cx("login-item")}>
                        <img className={cx("avatar")} src={avatar} alt="avt" />
                    </div>
                </Tippy>
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
        </>
    );
}

export default User;