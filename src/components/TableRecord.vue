<template>
    <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Transacton Date</th>
                <th scope="col">Status</th>
                <th scope="col">Total amount</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in transactionByUser" :key="item.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.transaction_date }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.transaction_amount }}d</td>
                <td>
                    <button type="button" class="btn btn-info mx-1" @click="showTransaction">Show Detail</button>
                    <button type="button" class="btn btn-danger mx-1" v-if="item.status === 'order'" @click="destroyTransaction">Cancel transaction</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "TablRecordComponent",
    computed: {
        ...mapGetters([ 'transactionByUser' ]),
    },
    methods: {
        ...mapActions([ 'showTransaction', 'destroyTransaction' ])
    }
}
</script>

<style></style>