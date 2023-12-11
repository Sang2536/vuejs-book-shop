<template>
    <div class="row" id="category-product-img">
        <div v-for="item in categoryList" 
            :key="item.id" 
            :class="colClass">
            <div class="card bg-white text-dark">
                <img src="https://png.pngtree.com/thumb_back/fw800/background/20230617/pngtree-gleaming-and-lavish-3d-render-of-a-black-glitter-backdrop-image_3639578.jpg" class="card-img img-thumbnail" alt="...">
                <div class="card-img-overlay text-center align-middle">
                    <a href="#">
                        <h4 class="card-title">{{ item.name }}</h4>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CategoryProductImgComponent",
    props: {
        categoryList: {
            type: [Array, Object],
            // eslint-disable-next-line vue/require-valid-default-prop
            default: [],
        },
        colClass: {
            type: Number,
            // eslint-disable-next-line vue/require-valid-default-prop
            default: '',
        }
    },
}
</script>

<style>

</style>