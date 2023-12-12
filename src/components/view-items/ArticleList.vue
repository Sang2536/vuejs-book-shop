<template>
    <div class="row mx-1" v-if="cardType === 'straight'">
        <div v-for="item in articleList" 
            :key="item.id"
            class="mb-2 p-2 border rounded bg-light"
            :class="colClass">
            <img src="https://icdn.dantri.com.vn/thumb_w/640/2017/thu-ha8-1500335828606.jpg" alt="" class="img-thumbnail" />
            <div class="px-2">
                <h5>
                    <router-link href="#" :to="{ name: 'article.detail', params: { id: item.id } }">{{ item.name }}</router-link>
                </h5>
                <span class="float-right">- {{ item.author }}</span>
            </div>
        </div>
    </div>
    <div class="row px-1" v-else-if="cardType === 'horizontal'">
        <div v-for="item in articleList" 
            :key="item.id" 
            class="mb-2 p-2 border rounded bg-light" 
            :class="colClass">
            <div class="w-25 float-left">
                <img src="https://icdn.dantri.com.vn/thumb_w/640/2017/thu-ha8-1500335828606.jpg" alt="" class="img-thumbnail" />
            </div>
            <div class="px-2 w-75 float-right">
                <h5>
                    <router-link href="#" :to="{ name: 'article.detail', params: { id: item.id } }">{{ item.name }}</router-link>
                </h5>
                <span class="float-right">- {{ item.author }}</span>
            </div>
        </div>
    </div>
    <div class="row" v-else-if="cardType === 'jumbotron'">
        <div v-for="item in articleList" 
            :key="item.id" 
            class="mb-2 p-2 border rounded" 
            :class="colClass">
            <div class="bg-image p-5 text-center shadow-1-strong mb-5 img-thumbnail h-100"
                style="background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp');">
                <h1 class="mb-3 h2">
                    <router-link href="#" :to="{ name: 'article.detail', params: { id: item.id } }">{{ item.name }}</router-link>
                </h1>
                <span class="float-right">- {{ item.author }}</span> <br />
                <p>
                    {{ item.short_summary }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticleListComponent",
    props: {
        cardType: {
            type: String,
            default: 'straight',
        },
        colClass: {
            type: String,
            default: 'col-md-3 col-lg-3',
        },
        articleList: {
            type: [Array, Object],
            // eslint-disable-next-line vue/require-valid-default-prop
            default: [],
        },
    },
    methods: {

    },
}
</script>

<style>

</style>