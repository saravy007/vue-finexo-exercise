<template>
    <div class="d-flex justify-content-center text-center">
        <div class="card" style="width: 25rem;">
            <div class="card-body">
                <form class="form-signin" @submit.prevent="handleSubmit">
                    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="text" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" v-model="formData.name">
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="formData.password">
                    <div class="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me"> Remember me
                        </label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            formData: {
                name: '',
                password: ''
            }
        }        
    },
    methods:{
        async handleSubmit(){
            //console.log(this.email);
            const {data} = await axios.post("http://172.23.128.253:3000/login",
                {
                    username: this.formData.name,
                    password: this.formData.password
                }
            );
            console.log(data)
            if(data.pass){
                //console.log('ysssssss')
                this.$router.push('/user')
                
            }
        }
    }
}
</script>

<style scoped>
    .center {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;  
    }
</style>