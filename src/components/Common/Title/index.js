import styles from "./Title.module.scss";
import classNames from "classnames";
function Title({title}) {
    return ( 
      <div className={classNames(styles.title)}>{title}</div>    
    );
}

export default Title;