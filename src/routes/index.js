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
import ProductManager from "~/pages/Admin/Product/ProductManager";
import CreateProduct from "~/pages/Admin/Product/CreateProduct";
import CatogoryManager from "~/pages/Admin/Category/CategoryManager";
import CreateCategory from "~/pages/Admin/Category/Create";
import UpdateCategory from "~/pages/Admin/Category/Update";
import Cart from "~/pages/Cart";
import Checkouts from "~/pages/Checkouts";
import CheckoutLayout from "~/components/Layout/CheckoutLayout";
import CheckoutSuccess from "~/pages/CheckoutSuccess";
import EditProduct from "~/pages/Admin/Product/EditProduct";
import OrderManager from "~/pages/Admin/Order/OrderManager";

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
        path: '/cart',
        component: Cart,
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
    },
    {
        path: '/checkouts',
        component: Checkouts,
        layout: {
            name: CheckoutLayout
        }
    },
    {
        path: '/checkout-success',
        component: CheckoutSuccess,
        layout: {
            name: CheckoutLayout
        }
    }
]

const privateRoutes = [
    // Route need login
    {
        path: '/admin',
        component: Admin,
    },
    {
        path: '/admin/product',
        component: ProductManager,
    },
    {
        path: '/admin/product/create',
        component: CreateProduct,
    },
    {
        path: '/admin/product/:id/edit',
        component: EditProduct,
    },
    {
        path: '/admin/category',
        component: CatogoryManager,
    },
    {
        path: '/admin/category/create',
        component: CreateCategory,
    },
    {
        path: '/admin/category/:categoryId/edit',
        component: UpdateCategory,
    },
    {
        path: '/admin/orders',
        component: OrderManager,
    },
]

export { publicRoutes, privateRoutes }