<template>
    <ul class="items">
        <template v-for="(item) in filteredTodoList">
            <li :key="item.id" :class="item.status">
                <input name="status-toggle" :checked="item.status === 'completed'" type="checkbox"
                       @change="handleToggleActive(item)">
                <a href="" class="content">{{item.content}}</a>
            </li>
        </template>
    </ul>
</template>

<script>
    // import {mapState, mapMutations} from "vuex";

    export default {
        name: "todo-list",
        computed: {
            filteredTodoList: function () {
                return this.$store.getters.filteredTodoList;
            }
        },
        methods: {
            handleToggleActive: function (item) {
                this.$store.commit("handleToggleActive", item.id);
            }
        }
    }
</script>

<style scoped>

</style>
