<template>
    <div class="hashtag">
        <a v-for="tag in tags" :key="tag.id" :href="tag.slug" class="mr-1">
            <span class="badge badge-secondary">#{{ tag.name }}</span>
        </a>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "HashtagComponent",
    computed: {
        ...mapGetters([ 'tags' ]),
    },
    created() {
        this.$store.dispatch('fetchTags');
    },
}
</script>

<style>

</style>