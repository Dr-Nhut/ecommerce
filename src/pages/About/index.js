import classNames from "classnames/bind";
import styles from "./About.module.scss"
import { aboutImage, aboutImageThree, aboutImageTwo } from "~/assets/images";
import { Banner } from "~/components/Layout";

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <h1>Astronaut</h1>
                <i>Cảm hứng từ đường phố</i>
            </div>
            <div className={cx("content")}>
                <div className={cx("content-img")}><Banner data={[aboutImage]} /> </div>   
                <p>
                    Chào mừng đến với Astronaut - nơi dành cho những người yêu thích văn hóa đường phố và phong cách thời trang táo bạo!
                </p>
                <p>Chúng tôi là một cửa hàng thời trang hip hop chuyên cung cấp các sản phẩm từ các thương hiệu nổi tiếng trên thế giới, như Adidas, Nike, Puma, Vans, Converse, và nhiều hơn nữa. Chúng tôi tin rằng phong cách của bạn nên được thể hiện thông qua cách ăn mặc, và chúng tôi sẽ giúp bạn trở thành một người thật sự độc đáo và phong phú.</p>
                <p>Chúng tôi luôn cập nhật những xu hướng mới nhất và đa dạng nhất trong ngành thời trang hip hop, từ quần áo, giày, phụ kiện và nhiều sản phẩm khác. Chúng tôi cung cấp cho khách hàng của mình chất lượng và giá cả phải chăng, vì chúng tôi muốn mọi người đều có thể sở hữu phong cách của riêng mình.</p>
                <Banner data={[aboutImageTwo]} />
                <p>Ngoài ra, chúng tôi còn chú trọng đến quá trình phục vụ khách hàng của mình. Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu, và luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của khách hàng.</p>
                <p>Một lần ghé qua cửa hàng thời trang hip hop của chúng tôi, bạn sẽ không thể nào bỏ qua những sản phẩm thú vị, vô cùng độc đáo mà chúng tôi mang lại. Chúng tôi tin rằng, sau khi đến với cửa hàng của chúng tôi, phong cách của bạn sẽ được nâng cao hơn, làm cho bạn trở nên tự tin và thể hiện được bản thân mình hơn.</p>
                <Banner data={[aboutImageThree]} />
                <p>Hãy đến và khám phá cửa hàng thời trang hip hop của chúng tôi, chúng tôi cam kết mang lại cho bạn những trải nghiệm mua sắm tốt nhất và cực kỳ thú vị!</p>  
            </div>
        </div>
    );
}

export default About;