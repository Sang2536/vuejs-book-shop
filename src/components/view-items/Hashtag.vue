<template>
    <div class="hashtag">
        <a v-for="tag in listTag" :key="tag.id" :href="tag.slug" class="mr-1">
            <span class="badge badge-secondary">#{{ tag.name }}</span>
        </a>
    </div>
</template>

<script>
export default {
    name: "HashTagComponent",
    props: {
        listTag: {
            type: [Array, Object],
            // eslint-disable-next-line vue/require-valid-default-prop
            default: [],
        }
    },
}
</script>

<style>

</style>