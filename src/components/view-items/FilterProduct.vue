<template>
    <form method="POST" @submit.prevent="searchProduct">
        <div class="form-group">
            <label for="inputNameProduct" :value="dataFormSearchProduct.name">Name</label>
            <input type="text" class="form-control" id="inputNameProduct" placeholder="Name">
        </div>
        <div class="form-group">
            <label>Type</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="inputTypeBook" value="book">
                <label class="form-check-label" for="inputTypeBook">
                    Book
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="inputTypeAccessory" value="accessory">
                <label class="form-check-label" for="inputTypeAccessory">
                    Accessory
                </label>
            </div>
        </div>
        <div class="form-group">
            <label for="inputCategory">Category</label>
            <select id="inputcategory" class="form-control" :value="dataFormSearchProduct.category">
                <option selected>Choose...</option>
                <option v-for="item in categoryAll" :key="item.id">
                    {{ item.name }}
                </option>
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Search</button>
    </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "FilterSearch",
    computed: {
        ...mapGetters([ 'categoryAll', 'dataFormSearchProduct' ]),
    },
    created() {
        this.$store.dispatch('fetchCategoryAll');
    },
    methods: {
        ...mapActions([ 'searchProduct'])
    },
}
</script>

<style></style>