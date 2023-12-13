<template>
    <section class="h-100 gradient-form" style="background-color: #eee;">
        <div class="container py-2 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-10">
                    <div class="card rounded-3 text-black">
                        <div class="row g-0">
                            <div class="col-lg-6 d-flex align-items-center gradient-custom-2"
                                style="background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp');">
                                <div class="text-danger px-3 py-4 p-md-5 mx-md-4">
                                    <h1 class="mb-4 text-center">REGISTER</h1>
                                    <h4 class="mb-4">Create an account to get more features</h4>
                                    <p class="small mb-0">
                                        Come to us, your world will be opened. Come travel with us around the world, through time and space to enjoy feelings you have never experienced before.
                                    </p> <br />
                                    <p class="small mb-0">
                                        We don't promise to give you everything you want, but we will give you freedom and comfort. Above all, after the chaos of life today, why don't you choose a book or an article to relax?
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="card-body p-md-5 mx-md-4">
                                    <div class="text-center">
                                        <h4 class="mt-1 mb-5 pb-1">CREATE AN ACCOUNT</h4>
                                    </div>

                                    <div class="text-danger" v-if="msgErrorForm">
                                        <ul class="list-style-none">
                                            <li v-for="(item, index) in msgErrorForm" :key="index">{{ item }}</li>
                                        </ul>
                                    </div>

                                    <form @submit.prevent="registerUser" method="POST">
                                        <div class="form-outline mb-4">
                                            <input type="email" id="regis-email" 
                                                class="form-control"
                                                v-model="dataFormRegister.email"
                                                required
                                                placeholder="Ex: name.mail@gmail.com" />
                                            <label class="form-label" for="regis-email">Email</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="text" id="regis-display-name" 
                                                class="form-control"
                                                v-model="dataFormRegister.name"
                                                required
                                                placeholder="Ex: Name Mail" />
                                            <label class="form-label" for="regis-display-name">Display name</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="regis-password" 
                                                class="form-control"
                                                required
                                                v-model="dataFormRegister.password" />
                                            <label class="form-label" for="regis-password">Password</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="regis-verify-password" 
                                                class="form-control"
                                                required
                                                v-model="dataFormRegister.verifyPassword" />
                                            <label class="form-label" for="regis-verify-password">Verify Password</label>
                                        </div>

                                        <div class="text-center pt-1 mb-5 pb-1">
                                            <button type="submit" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">Register</button>
                                        </div>
                                    </form>

                                    <div class="d-flex align-items-center justify-content-center pb-4">
                                        <p class="mb-0 me-2 mr-2">Go back to login</p>
                                        <!-- <button type="button" class="btn btn-outline-danger">Create new</button> -->
                                        <router-link type="button" class="btn btn-outline-danger" :to="{ name: 'login' }">Login</router-link>
                                    </div>
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
    name: "RegisterPage",
    computed: {
        ...mapGetters([ 'dataFormRegister', 'msgErrorForm' ])
    },
    methods: {
        ...mapActions([ 'registerUser' ])
    },
}
</script>

<style>

</style>