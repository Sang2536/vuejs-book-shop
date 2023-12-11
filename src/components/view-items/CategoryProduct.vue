<template>
    <div class="category-product">
        <ul>
            <li v-for="item in categoryAll" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "CategoryProductComponent",
    computed: {
        ...mapGetters([ 'categoryAll' ]),
    },
    created() {
        this.$store.dispatch('fetchCategoryAll');
    },
}
</script>

<style>

</style>