// eslint-disable-next-line no-unused-vars
import { createRouter, createWebHistory } from "vue-router";


//  define component
import NotFoundPage from "./views/404.vue";
import LoginPage from "./views/Login.vue";
import RegisterPage from "./views/Register.vue";

import HommePage from "./views/Home.vue";
import ProductPage from "./views/Product.vue";
import ProductDetailPage from "./views/ProductDetail.vue";
import ArticlePage from "./views/Article.vue";
import CartPage from "./views/Cart.vue";
import TransactionPage from "./views/Transaction.vue";
import AccountPage from "./views/Account.vue";
import AboutUsPage from "./views/AboutUs.vue";


//  define routes
const routes = [
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFoundPage,
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
    {
        path: "/register",
        name: "register",
        component: RegisterPage,
    },
    {
        path: "/home",
        name: "home.index",
        component: HommePage,
    },
    {
        path: "/",
        redirect: 'home.index',
    },
    {
        path: "/products",
        name: "products.index",
        component: ProductPage,
    },
    {
        path: "/product-detail",
        name: "product.detail",
        component: ProductDetailPage,
    },
    {
        path: "/articles",
        name: "articles.index",
        component: ArticlePage,
    },
    {
        path: "/cart",
        name: "cart.index",
        component: CartPage,
    },
    {
        path: "/transactions",
        name: "transactions.index",
        component: TransactionPage,
    },
    {
        path: "/account/:uid",
        name: "account.index",
        component: AccountPage,
    },
    {
        path: "/about-us",
        name: "about-us.index",
        component: AboutUsPage,
    },
];


//  Create the router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});


//  Create and mount the root instance
export default router;