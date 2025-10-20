import { createRouter, createWebHistory } from "vue-router";
import Rainforest from "../components/Rainforest.vue";
import Quiz from "../components/Quiz.vue";
import PlantAndAnimals from "../components/PlantAndAnimals.vue";


const routes = [
    {
        path: '/',
        component: Rainforest
    }, 
    {
        path: '/quiz',
        component: Quiz
    },
    {
        path: '/plantAndAnimals',
        component: PlantAndAnimals
    }


]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router;