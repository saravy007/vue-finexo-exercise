<template>
    <section class="vh-100 bg-image"
    style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card" style="border-radius: 15px;">
                            <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                                <form @submit.prevent="handleSubmit">

                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" v-model="formData.name"/>
                                        <label class="form-label" for="form3Example1cg">Your Name</label>
                                    </div>

                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="email" id="form3Example3cg" class="form-control form-control-lg" v-model="formData.email"/>
                                        <label class="form-label" for="form3Example3cg">Your Email</label>
                                    </div>

                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="password" id="form3Example4cg" class="form-control form-control-lg" v-model="formData.password"/>
                                        <label class="form-label" for="form3Example4cg">Password</label>
                                    </div>

                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="password" id="form3Example4cdg" class="form-control form-control-lg" v-model="formData.repeat_pass"/>
                                        <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                                    </div>

                                    <div class="form-check d-flex justify-content-center mb-5">
                                        <input class="form-check-input me-2" type="checkbox" value=""
                                            id="form2Example3cg" />
                                        <label class="form-check-label" for="form2Example3g">
                                            I agree all statements in <a href="#!" class="text-body"><u>Terms of
                                                    service</u></a>
                                        </label>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                    </div>

                                    <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                                            class="fw-bold text-body"><u>Login here</u></a></p>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            formData: {
                name: '',
                email: '',
                password: '',
                repeat_pass: ''
            }
        }        
    },
    methods:{
        async handleSubmit(){
            //console.log(this.email);
            const {data} = await axios.post("http://172.23.128.253:3000/register",
                {
                    name: this.formData.name,
                    email: this.formData.email,
                    password: this.formData.password,
                    repeat_pass: this.formData.repeat_pass
                }
            );
            console.log(data)
        }
    }
}
</script>

<style scoped>
    .gradient-custom-3 {
    /* fallback for old browsers */
    background: #84fab0;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
    }

    .gradient-custom-4 {
        /* fallback for old browsers */
        background: #84fab0;

        /* Chrome 10-25, Safari 5.1-6 */
        background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));

        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
    }
</style>