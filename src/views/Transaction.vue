<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-lg-12 mb-4" v-if="isLogin">
                <div class="row">
                    <div class="col-md-12 col-lg-12 my-4" v-if="transactionByUser">
                        <table-record-component />
                    </div>
                    <div class="col-md-12 col-lg-12 my-4" v-else>
                        <h1>Transaction Page</h1>

                        <img src="../assets/after-login-no-transaction-shopping-online.jpg" alt="img-no-product-in-cart" class="img-thumbnail" />

                        <h3>You don't have any transactions yet.</h3>

                        <router-link role="button" class="btn btn-primary bg-primary mx-4 my-2" :to="{ name: 'cart.index' }">Go to Shoppng cart</router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-12 mb-4" v-else>
                <img src="../assets/no-login.jpg" alt="img-no-login" class="img-thumbnail" />

                <h1>Please log in to view your Transactions.</h1> <br />

                <router-link role="button" class="btn btn-outline-primary mx-4 my-2" :to="{ name: 'login' }">Login</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import TableRecordComponent from "../components/TableRecord.vue";

export default {
    name: "TransactionPage",
    components: {
        TableRecordComponent,
    },
    computed: {
        ...mapGetters([ 'isLogin', 'transactionByUser' ]),

        ...mapActions([ 'fetchTransactionByUser' ])
    },
    methods: {
        ...mapActions([ ])
    },
}
</script>

<style>

</style>