import Home from "~/pages/Home";
import Product from "~/pages/Product";
import Blog from "~/pages/Blog";
import About from "~/pages/About";
import SidebarLayout from "~/components/Layout/SidebarLayout";

const publicRoutes = [
    // Route not login
    {
        path: '/',
        component: Home,
    },
    {
        path: '/product',
        component: Product,
        layout: SidebarLayout,
    },
    {
        path: '/blog',
        component: Blog
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