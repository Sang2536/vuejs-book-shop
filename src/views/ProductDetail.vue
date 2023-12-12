<template>
    <div class="container">
        <div class="row my-4 mb-4 bg-white">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <img class="card-img-top" src="https://i.pinimg.com/736x/6e/74/63/6e7463744c9fdf25c505adfd51902f50.jpg" alt="...">
            </div>

            <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <h3>{{ productDetail.name }} ({{ productDetail.sku }})</h3>
                <div>
                    <hash-tag :listTag="productDetail.tags" />
                </div>
                <div class="text-muted d-flex flex-row my-2">
                    <h6 class="w-75 float-left mt-4">
                        <a class="active" href="#product-review" data-toggle="tab"><i class="fa fa-cubes me-2"></i>product reviews</a>
                    </h6>
                    <button role="button" class="btn btn-info mx-1 px-2 w-20 float-left" @click="copyLinkToProduct(productDetail.id)">Copy link</button>
                    <button role="button" class="btn btn-success mx-1 px-2 w-20 float-right" @click="addItemToFavorite(productDetail.id)">Favorite</button>
                </div>
                <div class="mb-3">
                    <h6 class="w-50 float-left">{{ productDetail.type }} category</h6>
                    <h6 class="w-50 float-left">
                        <a href="#" id="product-review">See more {{ productDetail.type }} products</a>
                    </h6>
                </div>
                <div v-if="productDetail.type === 'book'" class="mb-2">
                    <p><b>Author:</b> {{ productDetail.author }}</p>
                    <p><b>Publishing company:</b> {{ productDetail.publishing_company }}</p>
                </div>
                <div class="mb-3">
                    <h5 v-if="productDetail.quantity === 0" class="float-right text-danger"><b>The product is out of stock</b></h5>
                    <h5 v-else class="float-right">There are <b>{{ productDetail.quantity }}</b> products left</h5>
                </div>
                <div class="mb-3">
                    <h4 class="mb-1 text-muted w-100">{{ productDetail.price }}đ</h4>
                </div>
                <div class="my-4">
                    <div class="text-muted d-flex flex-row my-2">
                        <p class="w-25 float-left">Number</p>
                        <input type="number" class="w-50 float-right text-center" value="1" min="1" />
                    </div>
                    <div class="text-muted d-flex flex-row my-4">
                        <button role="button" class="btn btn-primary w-50 float-left" @click="buyProductNow">Buy now!</button>
                        <button role="button" class="btn btn-success w-50 float-right" :class="{ disabled: productDetail.quantity === 0 }" @click="addProductToCart(productDetail.id)">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-md-9 col-lg-9 bg-white">
                <h4>Short description</h4> <hr />
                <ul>
                    <li>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aspernatur rem tempora sint veritatis. Esse modi temporibus unde sequi ea quae assumenda ratione, sunt cum. Odio nam voluptates saepe iure!</p>
                    </li>
                    <li>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eius itaque sit repellat, totam eligendi cum quo velit atque officia id praesentium veritatis minima reiciendis, dolor aperiam aut beatae.</p>
                    </li>
                    <li>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium minima, odit fuga ad, repellat natus deleniti esse et ipsam, ipsum numquam alias quidem reprehenderit deserunt dolorum beatae nam dicta ea!</p>
                    </li>
                    <li>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque inventore, suscipit ut blanditiis minima enim tempora nostrum soluta aspernatur quos voluptatum dolorum, rem vitae ratione iusto odio est facere?</p>
                    </li>
                    <li>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium minima, odit fuga ad, repellat natus deleniti esse et ipsam, ipsum numquam alias quidem reprehenderit deserunt dolorum beatae nam dicta ea!</p>
                    </li>
                    <li>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium minima, odit fuga ad, repellat natus deleniti esse et ipsam, ipsum numquam alias quidem reprehenderit deserunt dolorum beatae nam dicta ea!</p>
                    </li>
                    <li>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium minima, odit fuga ad, repellat natus deleniti esse et ipsam, ipsum numquam alias quidem reprehenderit deserunt dolorum beatae nam dicta ea!</p>
                    </li>
                </ul>
            </div>
            <div class="col-md-3 col-lg-3 bg-white">
                <img src="https://kenh14cdn.com/2017/img-0191-1500372920465.jpg" alt="" class="img-thumbnail" />
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-md-6 col-lg-6">
                <div class="tab-content py-2">
                    <div class="tab-pane active" id="product-review">
                        <h4>Product reviews</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import HashTag from "../components/view-items/Hashtag.vue";

export default {
    name: "ProductDetailPage",
    components: {
        HashTag,
    },
    computed: {
        ...mapGetters([ 'productDetail' ]),
    },
    created() {
        this.$store.dispatch('fetchProductDetail', { id: this.$route.params.id });
    },
    methods: {
        ...mapActions([ 'addProductToCart', 'addItemToFavorite', 'copyLinkToProduct' ]),
    }
};
</script>

<style>

</style>