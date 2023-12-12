<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-6 md-4">
                <h1>Login Page</h1> <br />
                <form @submit.prevent="submitFormLogin" method="POST">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input 
                            type="email" 
                            class="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            v-model="dataFormLogin.email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input 
                            type="password" 
                            class="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password"
                            v-model="dataFormLogin.password">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col-md-6 col-lg-6 md-4"></div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "LoginPage",
    computed: {
        ...mapGetters([ 'dataFormLogin' ])
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