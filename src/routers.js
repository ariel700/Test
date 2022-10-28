import Home from './components/Home';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import LiYaHome from "./components/LiYa/LiYaHome"

export const routes = [
    {
        path: "/Home",
        component: Home,
        name: "Home"
    },
    {
        path: "/About",
        component: About,
        name: "About"
    },
    {
        path: "/Portfolio",
        component: Portfolio,
        name: "Portfolio"
    },
    {
        path: "/Contact",
        component: Contact,
        name: "Contact"
    },
    {
        path: "/Skills",
        component: Skills,
        name: "Skills",
        // children: [
        //     {
        //         path: "/permit",
        //         component: Permit,
        //         name: "Permit"
        //     },
        // ]
    },
    {
        path: "/LiYaHome",
        component: LiYaHome,
        name: "LiYaHome",
    },
    // {
    //     path: "/",
    //     component: Home,
    //     name: "",
    //     meta: {
    //         requiresAuth: true
    //     },
    //     children: [
    //         {
    //             path: "/permit",
    //             component: Permit,
    //             name: "Permit"
    //         },
    //         {
    //             path: "/customer",
    //             component: Customer,
    //             name: "Customer"
    //         },
    //         {
    //             path: "/order",
    //             component: Order,
    //             name: "Order"
    //         },
    //         {
    //             path: "/setting",
    //             component: User,
    //             name: "User"
    //         },
    //         {
    //             path: "/product",
    //             component: Product,
    //             name: "Product"
    //         },
    //         {
    //             path: "/discount",
    //             component: Discount,
    //             name: "Discount"
    //         },
    //         {
    //             path: "/source",
    //             component: Source,
    //             name: "Source"
    //         },
    //         {
    //             path: "/category",
    //             component: ProductCategory,
    //             name: "ProductCategory"
    //         },
    //         {
    //             path: "/discount_category",
    //             component: DiscountCategory,
    //             name: "DiscountCategory"
    //         },
    //     ]
    // }
];