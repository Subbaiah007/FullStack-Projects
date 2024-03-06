<template>
    <div>
        <Header/>
        <h1>Add Restauraunts</h1>
        <div class="add-container">
            <input type="text" v-model="name" placeholder="Enter the Restaurant Name">
            <input type="text" v-model="contact" placeholder="Enter the Restaurant Contact Number">
            <input type="text" v-model="area" placeholder="Enter the Restaurant Located Area">
            <button v-on:click="add">Add Data</button>
        </div>
    </div>
</template>


<script>
import Header from './header.vue';
import axios from 'axios';

export default {
    name:'AddPage',
    components:{
        Header
    },
    data(){
        return{
            name:'',
            contact:'',
            area:''
        }
    },
    methods:{
        async add(){
            let result = await axios.post("http://localhost:3000/restaurants",{
                name:this.name,
                contact:this.contact,
                area:this.area,
            });

            console.log(result);
            if(result.status == 201)
            {
                this.$router.push({name:'Home'})
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("User_Details")
        if(!user)
        {
            this.$router.push('login');
        }
    },
}
</script>