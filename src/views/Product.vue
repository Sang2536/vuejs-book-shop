<template>
    <div class="container-fluit px-4">
        <div class="row">
            <div class="col-md-3 col-lg-3 mb-4 bg-white">
                <h2>Filter</h2>

                <ul class="nav nav-tabs nav-justified">
                    <li class="nav-item">
                        <a class="nav-link active" href="#filter-category" data-toggle="tab"><i class="fa fa-cubes me-2"></i>Category</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#filter-search" data-toggle="tab"><i class="fa fa-hourglass-half me-2"></i>Search</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#filter-tags" data-toggle="tab"><i class="fa fa-hourglass-half me-2"></i>Tags</a>
                    </li>
                </ul>
                <div class="tab-content py-2">
                    <div class="tab-pane active" id="filter-category">
                        <category-product />
                    </div>
                    <div class="tab-pane" id="filter-search">
                        <filter-search />
                    </div>
                    <div class="tab-pane" id="filter-tags">
                        <hashtag-comonent />
                    </div>
                </div>
            </div>
            <div class="col-md-9 col-lg-9 my-4 bg-white">
                <div class="row">
                    <div class="col-md-6 col-lg-6 mb-4 bg-white">
                        <h1>Đa dạng sản phẩm <br />Thoải mái mua sắm</h1>
                    </div>
                    <div class="col-md-6 col-lg-6 mb-4 bg-white">
                        <carousel-component />
                    </div>
                </div>
                <product-list v-if="productSearch" :productList="productSearch" />
                <product-list v-else :productList="productAll" />
            </div>
        </div>
    </div>
</template>

<script>
import CarouselComponent from "../components/Carousel.vue";
import HashtagComonent from "../components/view-items/Hashtag.vue";
import CategoryProduct from "../components/view-items/CategoryProduct.vue";
import FilterSearch from "../components/view-items/FilterProduct.vue";
import ProductList from "../components/view-items/ProductList.vue"

import { mapActions, mapGetters } from "vuex";

export default {
    name: "ProductPage",
    components: {
        CarouselComponent,
        HashtagComonent,
        CategoryProduct,
        FilterSearch,
        ProductList,
    },
    computed: {
        ...mapGetters([ 'dataFormSearchProduct', 'categoryAll', 'productAll', 'productSearch' ]),
    },
    created() {
        this.$store.dispatch('fetchCategoryAll');
        this.$store.dispatch('fetchProductAll');
    },
    methods: {
        ...mapActions([ 'searchProduct'])
    },
}
</script>

<style>

</style>