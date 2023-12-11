<template>
    <nav aria-label="...">
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentIndexPagination === 1 }" @click="handleClickPrevPage()">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <div v-for="index in totalPagination" :key="index">
                <li class="page-item" :class="{ active: currentIndexPagination === (index) }" @click="handleClickPagination(index)">
                    <a class="page-link" href="#">{{ index }}</a>
                </li>
            </div>
            <li class="page-item" :class="{ disabled: currentIndexPagination === totalPagination.length }" @click="handleClickNextPage()">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "PaginationComponent",
    computed: {
        ...mapGetters([ 'totalPagination', 'currentIndexPagination' ])
    },
    methods: {
        ...mapActions([ 'handleClickPagination', 'handleClickPrevPage', 'handleClickNextPage' ])
    }
}
</script>

<style></style>