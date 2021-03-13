import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import nProgress from "nprogress";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("@/HomeLayout"),
        children: [
            {
                path: "",
                name: "Home",
                component: () => import("@/components/Pages/Home/Home/Home")
            },
            {
                path: "airport-transfer",
                name: "AirportTransfer",
                component: () => import("@/components/Pages/Home/Transfer/Transfer")
            },
            {
                path: "tours/:slug",
                name: "Tours",
                component: () => import("@/components/Pages/Home/Tours/Tours")
            },
            {
                path: "tour-info/:slug",
                name: "TourInfo",
                component: () => import("@/components/Pages/Home/Tours/TourInfo")
            },
            {
                path: "about-us",
                name: "AboutUs",
                component: () => import("@/components/Pages/Home/AboutUs")
            },
            {
                path: "visitors",
                name: "Visitors",
                component: () => import("@/components/Pages/Home/Visitors")
            },
            {
                path: "paypal",
                name: "Paypal",
                component: () => import("@/components/Pages/Home/Paypal")
            },
            {
                path: "*",
                name: "NotFound",
                component: () => import("@/components/Pages/NotFound")
            }
        ]
    },

];

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters["auth/loggedIn"]) {
            nProgress.start();
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

router.afterEach(() => {
    nProgress.done();
});

export default router;
