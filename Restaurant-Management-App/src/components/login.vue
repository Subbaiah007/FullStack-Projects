<template>
        <img src="../assets/Logo.jpeg" alt="Logo" class="logo" style="border-radius: 50%;">
        <h1>Login</h1>
        <div class="form-container">
            <input type="text" v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password" placeholder="Enter Password">
            <button v-on:click="login">Login</button>
            <p>
                <router-link to="/signup" >Not an user ? Do Register</router-link>
            </p>
        </div>
</template>


<script>
import axios from'axios';

export default {
    name:'LogIn',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods: {
        async login()
        {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            if(result.status == 200 & result.data.length>0)
            {
                localStorage.setItem("User_Details",JSON.stringify(result.data[0]))
                this.$router.push({name:'Home'})

            }
        }
    },
    mounted(){
        let user = localStorage.getItem("User_Details");
        if(user)
        {
            this.$router.push('/');
        }
    }
}
</script>