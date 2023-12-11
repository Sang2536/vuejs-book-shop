<template>
    <div class="container" v-if="currentIndexPagination === 1">
        <div class="row mx-1 my-4">
            <div class="col-md-9 col-lg-9 mb-4">
                <article-list :articleList="latestArticle" :cardType="'jumbotron'" :colClass="'col-md-12 col-lg-12'" />
            </div>
            <div class="col-md-3 col-lg-3 mb-4">
                <img src="https://kenh14cdn.com/2017/img-0191-1500372920465.jpg" alt="" class="img-thumbnail" />
            </div>
        </div>

        <article-list :articleList="mostReadArticles" :cardType="'straight'" :colClass="'col-md-3 col-lg-3'" />

        <div class="row mx-1 my-4">
            <div class="col-md-6 col-lg-6">
                <img src="https://icdn.dantri.com.vn/thumb_w/640/2017/thu-ha8-1500335828606.jpg" alt="" class="img-thumbnail" />
            </div>
            <div class="col-md-6 col-lg-6">
                <div v-for="item in mostReadArticles" :key="item.id">
                    <h6 class="mb-3 ml-3"><a href="#" class="">{{ item.name }}</a></h6> <hr />
                </div>
            </div>
        </div>

        <article-list :articleList="articlesByPagination" :cardType="'horizontal'" :colClass="'col-md-6 col-lg-6'" />

        <div class="row mx-1 my-4">
            <div class="col-md-6 col-lg-6">
                <pagination-component />
            </div>
        </div>
    </div>
    <div class="container" v-else>
        <div class="row mx-1 my-4">
            <div class="col-md-12 col-lg-12">
                <pagination-component class="float-right" />
            </div>
        </div>

        <article-list :articleList="articlesByPagination" :cardType="'horizontal'" :colClass="'col-md-6 col-lg-6'" />
    
        <div class="row mx-1 my-4">
            <div class="col-md-6 col-lg-6">
                <pagination-component />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import ArticleList from "../components/view-items/ArticleList.vue";
import PaginationComponent from "../components/Pagination.vue";

export default {
    name: "ArticlePage",
    components: {
        ArticleList,
        PaginationComponent
    },
    computed: {
        ...mapGetters([ 'articles', 'articlesByPagination', 'latestArticle', 'mostReadArticles', 'currentIndexPagination' ]),
    },
    created() {
        this.$store.dispatch('fetchArticles');
        this.$store.dispatch('fetchLatestArticle');
        this.$store.dispatch('fetchMostReadArticles');
    },
    methods: {
        ...mapActions([ ])
    },
}
</script>

<style>

</style>