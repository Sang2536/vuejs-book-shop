<template>
    <div class="container-fluid px-4" v-if="isLogin === true">
        <div class="row my-4">
            <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-2 text-center">
                <h1>Favorites Page</h1>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "FavoritePage",
    computed: {
        ...mapGetters([ 'isLogin', 'itemFavorites' ]),
    },
    methods: {
        ...mapActions([ 'removeItemFromFavorite' ]),
    },
}
</script>

<style>

</style>