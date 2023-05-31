import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Button({ to, href, icon, className, primary = false, outline = false, text = false, rounded = false, square = false, disabled = false, selected = false, onClick, children, size = 'medium', ...passProps }) {
    let Comp = 'button';
    let link = false;
    const props = {
        onClick,
        ...passProps
    };

    if (disabled) {
        delete props.onClick;
    }
    if (to) {
        props.to = to;
        Comp = Link;
        link = true;
    }
    else if (href) {
        props.href = href;
        Comp = 'a';
        link = 'true';

    }
    const classes = cx('wrapper', size, className, { primary, outline, text, rounded, disabled, square, link, selected });

    return (
        <Comp className={classes} {...props}>
            {icon && <FontAwesomeIcon className={cx("icon")} icon={icon} />}
            <span>{children}</span>
            {selected && <div className={cx("tick-btn")}><FontAwesomeIcon icon={faCheck} /></div>}
        </Comp>
    );
}

export default Button;