
import BlogPageVue from "@/pages/BlogPage.vue"
import ContactPageVue from "@/pages/ContactPage.vue"
import HomePageVue from "@/pages/HomePage.vue"
import PageNotFoundVue from "@/pages/PageNotFound.vue"
import ServicesPageVue from "@/pages/ServicesPage.vue"
import EmployeePage from '@/pages/EmployeePage.vue'
import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: <HomePageVue/>
    },
    {
        path: '/blogs',
        name: 'BlogPage',
        component: <BlogPageVue />
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: <ContactPageVue />
    },
    {
        path: '/employee',
        name: 'EmployeePage',
        component: <EmployeePage />
    },
    {
        path: '/services',
        name: 'ServicesPage',
        component: <ServicesPageVue title="Test" />
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: <PageNotFoundVue />,
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  


export default router