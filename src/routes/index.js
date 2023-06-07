import Home from "~/pages/Home";
import Product from "~/pages/Product";
import ProductDetail from "~/pages/ProductDetail";
import Blog from "~/pages/Blog";
import About from "~/pages/About";
import SidebarLayout from "~/components/Layout/SidebarLayout";
import Login from "~/pages/Login";
import Register from "~/pages/Register";

const publicRoutes = [
    // Route not login
    {
        path: '/',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/product',
        component: Product,
        layout: SidebarLayout,
    },
    {
        path: '/product/:productId',
        component: ProductDetail,
    },
    {
        path: '/blog',
        component: Blog,
        layout: SidebarLayout,
    },
    {
        path: '/about-us',
        component: About
    }
]

const privateRoutes = [
    // Route need login
]

export { publicRoutes, privateRoutes }