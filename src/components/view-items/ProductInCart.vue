<template>
    <div class="col-md-12 col-lg-12 mb-2 p-2" v-for="item in productInCart" :key="item.id">
        <div class="card d-flex flex-row">
            <img class="card-img-top w-25 float-left" src="https://i.pinimg.com/736x/6e/74/63/6e7463744c9fdf25c505adfd51902f50.jpg" alt="...">
            <div class="card-body w-20 float-left">
                <h4 class="card-title">
                    <router-link href="#" :to="{ name: 'product.detail', params: { id: item.id } }">{{ item.name }} - ({{ item.sku }})</router-link>
                </h4>
                <h5 class="card-subtitle mb-1 text-muted">{{ item.price }}đ</h5>
                <p class="card-text">Type: {{ item.type }}</p>
                <div class="d-flex flex-row">
                    <h5 class="card-text mr-3">Quantity purchased: </h5>
                    <button role="button" 
                        class="btn btn-secondary" 
                        :disabled="item.quantity <= 1"
                        @click="changeQuantityInCart({ id: item.id, type: 'minus' })">
                        -
                    </button>
                    <input type="text" 
                        class="float-right text-center" 
                        id="quantity-product-in-cart" 
                        disabled
                        :value="item.quantity" 
                        @change="changeQuantityInCart(item.id)" />
                    <button role="button" 
                        class="btn btn-secondary" 
                        @click="changeQuantityInCart({ id: item.id, type: 'plus' })">
                        +
                    </button>
                </div>
            </div>
            <div class="card-footer text-muted w-25 float-right">
                <button role="button" class="btn btn-danger" @click="removeProductFromCart(item.id)">Remove</button>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl my-4 p-2 text-center">
        <h4 class="float-right">Total amount: {{ totalAmountInCart }}đ</h4>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl my-4 p-2 text-center ">
        <button role="button" class="btn btn-primary" @click="addTransaction">Transaction</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "ProductInCart",
    computed: {
        ...mapGetters([ 'productInCart', 'totalAmountInCart' ]),
    },
    methods: {
        ...mapActions([ 'removeProductFromCart', 'addTransaction', 'changeQuantityInCart' ]),
    },
}
</script>

<style>

</style>