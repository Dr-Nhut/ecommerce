import Home from "~/pages/Home";
import Product from "~/pages/Product";
import ProductDetail from "~/pages/ProductDetail";
import Blog from "~/pages/Blog";
import About from "~/pages/About";
import SidebarLayout from "~/components/Layout/SidebarLayout";
import Login from "~/pages/Login";
import Register from "~/pages/Register";
import BlogDetail from "~/pages/BlogDetail";
import Admin from "~/pages/Admin";
import ProductManager from "~/pages/Admin/Product";
import CreateProduct from "~/pages/Admin/CreateProduct";

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
        layout: {
            name: SidebarLayout,
            comp: 0
        },
    },
    {
        path: '/product/:productId',
        component: ProductDetail,
    },
    {
        path: '/blog',
        component: Blog,
        layout: {
            name: SidebarLayout,
            comp: 1
        },
    },
    {
        path: '/blog/:blogId',
        component: BlogDetail,
    },
    {
        path: '/about-us',
        component: About
    }
]

const privateRoutes = [
    // Route need login
    {
        path: '/admin',
        component: Admin,
    },
    {
        path: '/admin/products',
        component: ProductManager,
    },
    {
        path: '/admin/products/create-product',
        component: CreateProduct,
    }

]

export { publicRoutes, privateRoutes }