import Home from './components/home.vue'
import SignUp from './components/signup.vue'
import LogIn from './components/login.vue'
import Add from './components/add.vue'
import { createRouter , createWebHashHistory  } from 'vue-router';

const routes = [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signup'
    },
    {
        name:'LogIn',
        component:LogIn,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/add-restaurant'
    },

];



const router = createRouter({
    history:createWebHashHistory(),
    routes
})


export default router;