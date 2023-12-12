<template>
    <div class="container-fluit px-4">
        <div class="row my-4">
            <div class="col-md-10 col-lg-10">
                <carousel-component />
            </div>
            <div class="col-md-2 col-lg-2">
                <h3>Tags</h3> <hr />
                <hashtag-component :listTag="tags" />
            </div>
        </div>

        <div class="row my-4">
            <div class="col-md-12 col-lg-12">
                <h1>Danh mục sách nổi bật</h1><hr />
            </div>
            <div class="col-md-12 col-lg-12 mb-4 bg-white">
                <category-product-img :categoryList="categoryBook" :colClass="'col-6 col-sm-4 col-md-3 col-lg-2'" />
            </div>
        </div>

        <div class="row my-4">
            <div class="col-md-12 col-lg-12 mb-2">
                <h1>Sách bán chạy</h1><hr />
            </div>
            <div class="col-md-12 col-lg-12 mb-4 bg-white">
                <div class="row">
                    <div class="col-6 col-sm-4 col-md-4 col-lg-6 col-xl-3 mb-3 vehicle-align">
                        <span class="w-100">
                            <h1>Mua sắm thả ga</h1>
                            <h1 clas="w-25">Không lo về giá</h1>
                        </span>
                    </div>
                    <product-list :productList="productBook" :cardType="'product-straight'" :colClass="'col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 mb-2'" />
                </div>
            </div>
        </div>

        <div class="row my-4">
            <div class="col-md-12 col-lg-12 mb-2">
                <h1>Phụ kện sách bán chạy</h1><hr />
            </div>
            <div class="col-md-12 col-lg-12 mb-2">
                <div class="row">
                    <product-list :productList="productAccessory" :cardType="'product-straight'" :colClass="'col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 mb-2'" />
                </div>
            </div>
        </div>
        
        <div class="row my-4">
            <div class="col-md-7 col-lg-7">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <h1>Danh mục phụ kiện nổi bật</h1>
                        <hr />
                    </div>
                    <div class="col-md-12 col-lg-12 mb-4">
                        <category-product-img :categoryList="categoryAccessory" :colClass="'col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3'" />
                    </div>
                    <div class="col-md-12 col-lg-12 mb-4 border rounded">
                        <img src="https://icdn.dantri.com.vn/thumb_w/640/2017/thu-ha8-1500335828606.jpg" alt="" class="img-thumbnail w-100" />
                    </div>
                </div>
            </div>
            <div class="col-md-5 col-lg-5">
                <h1>Bản tin & bài viết</h1><hr />
                <article-list :articleList="mostReadArticles" :cardType="'horizontal'" :colClass="'col-md-12 col-lg-12'" />
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
        ...mapGetters([ 'tags', 'categoryBook', 'categoryAccessory', 'productBook', 'productAccessory', 'mostReadArticles' ]),
    },
    created() {
        this.$store.dispatch('fetchCategoryAll');
        this.$store.dispatch('fetchProductAll');
        this.$store.dispatch('fetchMostReadArticles');
        this.$store.dispatch('fetchTags');
    },
    methods: {
        ...mapActions([ ])
    },
};
</script>

<style>

</style>