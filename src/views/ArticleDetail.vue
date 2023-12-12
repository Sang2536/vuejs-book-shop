<template>
    <div class="container">
        <div class="row my-4 mb-4 bg-white my-4">
            <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
                <button role="button" class="btn btn-success mx-1 px-2 w-20 float-left" @click="addItemToFavorite(articleDetail.id)">Favorite</button>

                <div class="article-header mb-4">
                    <h3>{{ articleDetail.name }}</h3>
                    <h6>- {{ articleDetail.author }}</h6>
                </div>

                <div class="article-content">
                    <img class="card-img-top float-right ml-3" style="max-width: 400px;"
                        src="https://i.pinimg.com/736x/6e/74/63/6e7463744c9fdf25c505adfd51902f50.jpg" 
                        alt="...">
                    
                    <div class="">
                        <p>Article content</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste nihil aperiam ipsum, repudiandae officiis voluptatibus rerum odit ex fugit dignissimos ratione, at porro explicabo sint reiciendis aliquam atque magnam?
                            <br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime est reiciendis vitae dolor delectus, cumque dolores praesentium ipsum totam atque suscipit facere illum molestiae ratione enim nihil culpa corrupti! Veniam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni provident nam eum, nobis ab, natus eos quae enim officiis aliquid, amet quam iste quia at molestiae quis impedit perspiciatis similique.
                            <br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem dicta soluta ipsa! Velit, dolores deserunt perspiciatis repellat incidunt adipisci ducimus obcaecati nesciunt molestiae a delectus cum, aperiam, sapiente rerum!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "ArticleDetailPage",
    computed: {
        ...mapGetters([ 'articleDetail' ]),
    },
    created() {
        this.$store.dispatch('fetchArticleDetail', { id: this.$route.params.id });
    },
}
</script>

<style>

</style>