<template>
        <img src="../assets/Logo.jpeg" alt="Logo" class="logo" style="border-radius: 50%;">
        <h1>SignUp</h1>
        <div class="form-container">
            <input type="text" v-model="name" placeholder="Enter Name">
            <input type="text" v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password" placeholder="Enter Password">
            <button v-on:click="signup">Submit</button>
            <p>
                <router-link to="/login" >If Already an User?</router-link>
            </p>
        </div>
</template>



<script>
import axios from 'axios';

export default {
    name:'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods: {
        async signup(){
            let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password,
            });

            console.log(result);
            if(result.status == 201)
            {
                localStorage.setItem("User_Details",JSON.stringify(result.data))
                this.$router.push({name:'LogIn'})

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
<style scoped>

</style>