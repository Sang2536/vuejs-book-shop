<template>
    <div class="container-fluid px-4" v-if="isLogin === true">
        <div class="row my-4">
            <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-2 text-center">
                <img class="w-100 mb-2 border border-success rounded-circle" style="max-width: 500px; max-height: 500px;" src="https://i.pinimg.com/736x/6e/74/63/6e7463744c9fdf25c505adfd51902f50.jpg" alt="...">

                <div class="px-4 bg-secondary text-white">
                    <h3>UID: {{ userLogin.uid }}</h3>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mb-2">
                <div class="text-center">
                    <h2>{{ userLogin.name }}</h2>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 text-center">
                    <h5><b>Email: </b>{{ userLogin.email }}</h5>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatem minus ullam velit distinctio odit esse, corporis optio laboriosam ipsa cum! Rerum quae debitis harum quisquam, odio sed obcaecati voluptas?</p>
                <b />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, totam, hic eveniet sed ipsam beatae tempore maiores ratione modi suscipit tempora veniam quod laudantium laboriosam ex autem vero rem?</p>
                <br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit incidunt perspiciatis officia in nesciunt est dolor dolorum qui, aut ab, possimus quisquam ducimus magni aliquid molestiae minus odio neque.</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "ProfileUserPage",
    computed: {
        ...mapGetters([ 'isLogin', 'userLogin' ]),
    },
    methods: {
        ...mapActions([ ]),
    },
}
</script>

<style>

</style>