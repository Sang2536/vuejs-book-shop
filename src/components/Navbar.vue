<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link :to="{ name: 'home.index' }">Book Shop</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" :to="{ name: 'home.index' }">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'products.index' }">Products</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'articles.index' }">Articles</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'transactions.index' }">Transactions</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'cart.index' }">Shopping Cart</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'about-us.index' }">About Us</router-link>
                </li>
                <li class="nav-item dropdown ml-4" v-if="isLogin">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user"></i> 
                        {{ userLogin.name }}
                    </a>
                    <div class="dropdown-menu dropdown" aria-labelledby="navbarDropdownMenuLink">
                        <router-link class="dropdown-item" :to="{ name: 'account.index', params: { uid: userLogin.uid } }">Profile</router-link>
                        <a class="dropdown-item" @click="logout">Logout</a>
                    </div>
                </li>
                <li class="nav-item" v-else>
                    <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "NavbarComponent",
    data: function() {
        return {

        }
    },
    computed: {
        ...mapGetters([ 'isLogin', 'userLogin' ])
    },
    methods: {
        ...mapActions([ 'logout' ])
    }
}
</script>

<style></style>