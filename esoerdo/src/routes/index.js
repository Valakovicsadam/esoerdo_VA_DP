import { createRouter, createWebHistory } from "vue-router";
import Rainforest from "../components/Rainforest.vue";
import Quiz from "../components/Quiz.vue";


const routes = [
    {
        path: '/',
        component: Rainforest
    }, 
    {
        path: '/quiz',
        component: Quiz
    }


]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router;