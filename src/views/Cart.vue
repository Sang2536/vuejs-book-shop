<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-lg-12 mb-4" v-if="isLogin">
                <div class="row" v-if="productInCart.length">
                    <product-in-cart />
                </div>
                <div class="row" v-else>
                    <div class="col-md-12 col-lg-12 my-4">
                        <h1>Cart Page</h1>
                        <img src="../assets/after-login-no-product-in-cart.png" alt="img-no-product-in-cart" class="img-thumbnail" />
                        <h3>
                            Your shopping cart is empty.
                            <br />Please select more products to shop
                        </h3>
                        <router-link role="button" class="btn btn-primary bg-primary mx-4 my-2" :to="{ name: 'products.index' }">Go to Shop</router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-12 mb-4" v-else>
                <img src="../assets/no-login.jpg" alt="img-no-login" class="img-thumbnail" />

                <h1>Please log in to view your Shopping Cart</h1>
                <br />
                <router-link role="button" class="btn btn-outline-primary mx-4 my-2" :to="{ name: 'login' }">Login</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import ProductInCart from "../components/view-items/ProductInCart.vue";

export default {
    name: "CartPage",
    components: {
        ProductInCart
    },
    computed: {
        ...mapGetters([ 'isLogin', 'productInCart' ])
    },
    methods: {
        ...mapActions([ ])
    },
}
</script>

<style>

</style>