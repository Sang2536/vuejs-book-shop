<template>
    <div v-for="item in productList" 
        :key="item.id" 
        class="mb-4 p-2 card-group" 
        :class="colClass">
        <div class="card">
            <img class="card-img-top" src="https://i.pinimg.com/736x/6e/74/63/6e7463744c9fdf25c505adfd51902f50.jpg" alt="...">
            <div class="card-body">
                <h5 class="card-title text-truncate">
                    <router-link href="#" :to="{ name: 'product.detail', params: { id: item.id } }">{{ item.name }}</router-link>
                </h5>
                <h6 class="card-subtitle mb-1 text-muted">{{ item.price }}đ</h6>
                <p class="card-text">Type: {{ item.type }}</p>
                <p class="card-text float-right">Còn 374 sản phẩm</p>
            </div>
            <div class="card-footer text-muted" style="padding: 1px;">
                <router-link role="button" class="btn btn-info w-50 float-left" :to="{ name: 'product.detail', params: { id: item.id } }">Details</router-link>
                <button role="button" class="btn btn-success w-50 float-right" :class="{ disabled: item.quantity === 0 }" @click="addProductToCart(item.id)">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "ProductListComponent",
    props: {
        colClass: {
            type: String,
            default: 'col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 mb-2',
        },
        productList: {
            type: [Array, Object],
            // eslint-disable-next-line vue/require-valid-default-prop
            default: [],
        },
    },
    methods: {
        ...mapActions([ 'addProductToCart' ])
    },
}
</script>

<style>

</style>