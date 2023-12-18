import { faCartShopping, faComments, faGauge, faGear, faLayerGroup, faStore, faUsers } from "@fortawesome/free-solid-svg-icons"

export const INIT_PRODUCT = {
    products: {},
    colors: {},
    sizes: {},
    rate: {},
    favourites: {},
    cart: {},
}

export const AUTH_ITEMS = [
    {
        title: "Đăng nhập",
        to: "/login"
    },
    {
        title: "Đăng ký",
        to: "/register"
    }
]


export const DASHBOARD_ITEMS = [
    {
        title: "Bảng điều khiển",
        to: "/admin",
        icon: faGauge
    },
    {
        title: "Đơn đặt hàng",
        to: "/admin/orders",
        icon: faCartShopping
    },
    {
        title: "Sản phẩm",
        to: "/admin/product",
        icon: faStore
    },
    {
        title: "Danh mục sản phẩm",
        to: "/admin/category",
        icon: faLayerGroup
    },
    {
        title: "Khách hàng",
        to: "/admin/customer",
        icon: faUsers
    },
    {
        title: "Đánh giá",
        to: "/admin/review",
        icon: faComments
    },
    {
        title: "Cài đặt",
        to: "/admin/setting",
        icon: faGear
    },
]

//Product Actions
export const SET_PRODUCTS = "set_products"
export const ADD_PRODUCT = "add_product"
export const DELETE_PRODUCT = "delete_product"
export const SET_RATING = "set_rating"
export const SET_COLORS = "set_colors"
export const SET_SIZES = "set_sizes"
export const SET_CART = "set_cart"
export const CHANGE_QUANTITY = "change_quantity"
export const GET_RATING = "get_rating"
export const CLEAR_CART = "clear_cart"

export const ADD_TO_FAVOURITE = "add_to_favorite"
export const REMOVE_TO_FAVOURITE = "remove_to_favorite"

export const ADD_TO_CART = "add_to_cart"
export const REMOVE_CARTITEM = 'remove_cartitem'
export const REMOVE_TO_CART = "remove_to_cart"

export const SUCCESS = "success"
export const INFO = "info"
export const WARN = "warn"
export const ERROR = "error"

export const prices = [
    {
        type: "price",
        name: "price-1",
        value: "Dưới 10$",
    },
    {
        type: "price",
        name: "price-2",
        value: "10$ - 50$"
    },
    {
        type: "price",
        name: "price-3",
        value: "50$ - 200$"
    },
    {
        type: "price",
        name: "price-4",
        value: "200$ - 500$"
    },
    {
        type: "price",
        name: "price-5",
        value: "Trên 500$"
    }
];

export const sizes = [{ type: "size", name: "S", value: "Size S" }, { type: "size", name: "M", value: "Size M" }, { type: "size", name: "L", value: "Size L" }];

export const categories = [
    { type: "category", name: "men's clothing", value: "Thời trang nam" },
    { type: "category", name: "jewelery", value: "Trang sức" },
    { type: "category", name: "electronics", value: "Điện tử" },
    { type: "category", name: "women's clothing", value: "Thời trang nữ" },
];

export const LOGOUT = 'logout';
export const LOGIN = 'login';
export const ADD_ADDRESS = 'add-address';