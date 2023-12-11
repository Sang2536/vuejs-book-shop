<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="container-fluit px-4">
        <div class="row my-4">
            <div class="col-md-10 col-lg-10">
                <carousel-component />
            </div>
            <div class="col-md-2 col-lg-2">
                <h3>Tags</h3> <hr />
                <hashtag-component />
            </div>
        </div>

        <div class="row my-4">
            <div class="col-md-12 col-lg-12">
                <h1>Danh mục sách nổi bật</h1><hr />
            </div>
            <div class="col-md-12 col-lg-12 mb-4 bg-white">
                <category-product-img :categoryList="categoryBook" :colClass="'col-md-2 col-lg-2 mb-4'" />
            </div>
        </div>

        <div class="row my-4">
            <div class="col-md-12 col-lg-12 mb-2">
                <h1>Sách bán chạy</h1><hr />
            </div>
            <div class="col-md-12 col-lg-12 mb-4 bg-white">
                <product-list :productList="productBook" :cardType="'product-straight'" :colClass="'col-md-2 col-lg-2'" />
            </div>
        </div>

        <div class="row my-4">
            <div class="col-md-12 col-lg-12 mb-2">
                <h1>Phụ kện sách bán chạy</h1><hr />
            </div>
            <div class="col-md-12 col-lg-12 mb-2">
                <product-list :productList="productAccessory" :cardType="'product-straight'" :colClass="'col-md-2 col-lg-2'" />
            </div>
        </div>
        
        <div class="row my-4">
            <div class="col-md-7 col-lg-7">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <h1>Danh mục phụ kiện nổi bật</h1>
                        <hr />
                    </div>
                    <div class="col-md-12 col-lg-12">
                        <category-product-img :categoryList="categoryAccessory" :colClass="'col-md-3 col-lg-3 mb-4'" />
                    </div>
                </div>
            </div>
            <div class="col-md-5 col-lg-5">
                <h1>Bản tin & bài viết</h1><hr />
                <article-list :articleList="articles" :cardType="'horizontal'" :colClass="'col-md-12 col-lg-12'" />
            </div>
        </div>
        
        <div class="row my-4">
            <div class="col-md-12 col-lg-12">
                <h1>Dịch vụ</h1><hr />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import CarouselComponent from "../components/Carousel.vue";
import HashtagComponent from "../components/view-items/Hashtag.vue";
import ProductList from "../components/view-items/ProductList.vue";
import CategoryProductImg from "../components/view-items/CategoryProductImg.vue";
import ArticleList from "../components/view-items/ArticleList.vue";

export default {
    name: "HomePage",
    components: {
        CarouselComponent,
        HashtagComponent,
        ProductList,
        CategoryProductImg,
        ArticleList,
    },
    computed: {
        ...mapGetters([ 'categoryBook', 'categoryAccessory', 'productBook', 'productAccessory', 'articles' ]),
    },
    created() {
        this.$store.dispatch('fetchCategoryAll');
        this.$store.dispatch('fetchProductAll');
        this.$store.dispatch('fetchArticles');
    },
    methods: {
        ...mapActions([ ])
    },
};
</script>

<style>

</style>