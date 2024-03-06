<template>
    <div>
        <Header/>
        <h1>Hello {{name}} , Welcome to home page</h1>
        <h3>Here are Restaurants You Want To Know</h3>
        <div class="display-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Conatact</th>
                        <th>Area</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="restaurant of restaurants" :key="restaurant.id">
                        <td>{{restaurant.name}}</td>
                        <td>{{restaurant.contact}}</td>
                        <td>{{restaurant.area}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
import Header from './header.vue'
import axios from 'axios'

export default {
    name:'HomePage',
    data(){
        return{
            name:'',
            restaurants:[]
        }
    },
    async created(){
        try{
            const result = await axios.get(`http://localhost:3000/restaurants`)
            this.restaurants = result.data;
        }catch(e){
            console.error(e);
        }
    },
    components:{
        Header
    },
    mounted() {
        let user = localStorage.getItem("User_Details")
        this.name = JSON.parse(user).name;
        if(!user)
        {
            this.$router.push('login');
        }
    },
}
</script>