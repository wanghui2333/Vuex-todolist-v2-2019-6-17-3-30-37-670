<template>
    <div class="filter">
        <a @click.prevent="handleFilter('all')" :class="{active:currentFilter=='all'}">ALL</a>
        <a @click.prevent="handleFilter('active')" :class="{active:currentFilter=='active'}">Active</a>
        <a @click.prevent="handleFilter('completed')" :class="{active:currentFilter=='completed'}">Complete</a>
    </div>
</template>

<script>
    import {mapState, mapMutations} from "vuex";

    export default {
        name: "todo-list-filter",
        computed: {
            currentFilter: function () {
                return this.$store.getters.currentFilter;
            }
        },
        methods: {
            handleFilter: function (currentFilter) {
                this.$store.commit("updateCurrentFilter", currentFilter);
            }
        }
    }
</script>

<style scoped>

</style>
