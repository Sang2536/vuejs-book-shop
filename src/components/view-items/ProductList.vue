<template>
    <div class="row">
        <div v-for="item in productList" 
            :key="item.id" 
            class="mb-4 p-2" 
            :class="colClass"
            style="height: 300px;">
            <div class="border rounded bg-light h-100">
                <img src="https://i.pinimg.com/736x/6e/74/63/6e7463744c9fdf25c505adfd51902f50.jpg" class="card-img img-thumbnail" alt="..." height="100px">
                <div class="px-2">
                    <h4>
                        <a href="#" class="list-group-item-action">{{ item.name }}</a>
                    </h4>
                    <span>
                        <p>{{ item.price }}đ</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductListComponent",
    props: {
        cardType: {
            type: String,
            default: 'product-straight',
        },
        colClass: {
            type: String,
            default: 'col-md-3 col-lg-3',
        },
        productList: {
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