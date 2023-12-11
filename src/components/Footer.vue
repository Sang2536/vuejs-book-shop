<template>
    <footer class="container bg-dark">
        <div class="row">
            <div class="col-md-12 col-lg-12 mt-4">
                @author - SangDo - 2023
                Use: VueJS, Vue Route, VueX, JSSON Seerver
            </div>
        </div>
    </footer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "FooterComponent",
    computed: {
        ...mapGetters([ ])
    },
    methods: {
        ...mapActions([ ])
    }
}
</script>

<style></style>