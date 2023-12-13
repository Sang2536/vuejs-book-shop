<template>
    <section class="h-100 gradient-form" style="background-color: #eee;">
        <div class="container py-2 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-10">
                    <div class="card rounded-3 text-black">
                        <div class="row g-0">
                            <div class="col-lg-6">
                                <div class="card-body p-md-5 mx-md-4">
                                    <div class="text-center">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                            style="width: 185px;" alt="logo">
                                        <h4 class="mt-1 mb-5 pb-1">We are a Bookstore</h4>
                                    </div>

                                    <div class="text-danger" v-if="msgErrorForm">
                                        <ul class="list-style-none">
                                            <li v-for="(item, index) in msgErrorForm" :key="index">{{ item }}</li>
                                        </ul>
                                    </div>

                                    <form @submit.prevent="submitFormLogin" method="POST">
                                        <p>Please login to your account</p>
                                        <div class="form-outline mb-4">
                                            <input type="email" id="form2Example11" 
                                                class="form-control"
                                                required
                                                v-model="dataFormLogin.email"
                                                placeholder="Ex: name.mail@gmail.com" />
                                            <label class="form-label" for="form2Example11">Email</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="form2Example22" 
                                                class="form-control"
                                                required
                                                v-model="dataFormLogin.password" />
                                            <label class="form-label" for="form2Example22">Password</label>
                                        </div>

                                        <div class="text-center pt-1 pb-1">
                                            <button type="submit" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">Login</button>
                                        </div>
                                    </form>

                                    <div class="text-center pt-1 mb-5 pb-1">
                                        <a class="text-muted" href="#!">Forgot password?</a>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-center pb-4">
                                        <p class="mb-0 me-2 mr-2">Don't have an account?</p>
                                        <!-- <button type="button" class="btn btn-outline-danger">Create new</button> -->
                                        <router-link type="button" class="btn btn-outline-danger" :to="{ name: 'register' }">Create new</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center gradient-custom-2"
                                style="background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp');">
                                <div class="text-danger px-3 py-4 p-md-5 mx-md-4">
                                    <h1 class="mb-4 text-center">WELCOME</h1>
                                    <h4 class="mb-4">We are more than just a bookstore</h4>
                                    <p class="small mb-0">
                                        Come to us, your world will be opened. Come travel with us around the world, through time and space to enjoy feelings you have never experienced before.
                                    </p> <br />
                                    <p class="small mb-0">
                                        We don't promise to give you everything you want, but we will give you freedom and comfort. Above all, after the chaos of life today, why don't you choose a book or an article to relax?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "LoginPage",
    computed: {
        ...mapGetters([ 'dataFormLogin', 'msgErrorForm' ])
        //  convert this.$store.state.getterName to this.getterName
    },
    methods: {
        ...mapActions([ 'submitFormLogin' ])
        //  convert this.$store.dispatch('nameAction') to nameAction
    }
}
</script>

<style>

</style>