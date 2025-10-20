import { createRouter, createWebHistory } from "vue-router";
import Rainforest from "../components/Rainforest.vue";
import Quiz from "../components/Quiz.vue";
import PlantAndAnimals from "../components/PlantAndAnimals.vue";
import RainforestTips from "../components/RainforestTips.vue";


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
    },
    {
        path: '/tips',
        component: RainforestTips
    }


]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router;