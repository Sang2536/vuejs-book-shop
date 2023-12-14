<template>
    <div class="container-fluid px-4" v-if="isLogin === true">
        <div class="row my-4" v-if="itemProductFavorites.length || itemArticleFavorites.length">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-4 text-center">
                <h1>Favorites Page</h1>
            </div>

            <item-in-favorite />
        </div>
        <div class="row my-4 text-center" v-else>
            <h1>You don't item favorite</h1>
        </div>
    </div>
    <div class="container-fluid px-4" v-else>
        <div class="row my-4 text-center">
            <h1>Please log in to view your Favorites.</h1>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ItemInFavorite from "../components/view-items/ItemInFavorite.vue";

export default {
    name: "FavoritePage",
    components: {
        ItemInFavorite,
    },
    computed: {
        ...mapGetters([ 'isLogin', 'itemProductFavorites', 'itemArticleFavorites' ]),
    },
    methods: {
        ...mapActions([ 'removeItemFromFavorite' ]),
    },
}
</script>

<style>

</style>