<template>
    <div class="row mb-2">
        <div v-for="item in itemProductFavorites" 
            :key="item.id" 
            class="col-6 cl-sm-6 col-md-3 col-lg-3 col-xl-2 mb-4 p-2 card-group">
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
                    <button role="button" class="btn btn-danger w-100" @click="removeItemFromFavorite(item.id, 'product')">Remove From Favorite</button>
                </div>
            </div>
        </div>
    </div>

    <div class="row mb-2">
        <div v-for="item in itemArticleFavorites" 
            :key="item.id" 
            class="col-12 c0l-sm-12 col-md-6 col-lg-6 col-xl-4 mb-2 p-2 border rounded bg-light">
            <div class="bg-danger fixed t-0 l-0" style="width: 24px; height: 24px;">
                <button role="button" class="btn btn-danger navbar-toggler text-dark text-center" @click="removeItemFromFavorite(item.id, 'article')">X</button>
            </div>
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
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "ItemInFavorite",
    computed: {
        ...mapGetters([ 'itemProductFavorites', 'itemArticleFavorites' ]),
    },
    methods: {
        ...mapActions([ 'removeItemFromFavorite' ]),
    },
}
</script>

<style>

</style>