import classNames from "classnames/bind";
import styles from "./HeaderComponent.module.scss";
import Button from "~/components/Button";
import Title from "~/components/Common/Title";

const cx = classNames.bind(styles);
function HeaderComponent({btn_before, title, btn_after}) {
    return ( 
        <div className={cx("wrapper")}>
            {btn_before && <Button primary to={btn_before.to}>{btn_before.name}</Button>}
            <Title title={title}/>
            {btn_after && <Button primary to={btn_after.to}>{btn_after.name}</Button>}
        </div>
     );
}

export default HeaderComponent