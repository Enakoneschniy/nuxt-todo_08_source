<template>
  <ul class="list-group mt-4">
    <TodoItem v-for="item of items" :key="item.id" @edit="onEdit" @delete="onDelete" :item="item"/>
  </ul>
</template>

<script>
  import TodoItem from "./TodoItem";
  import { mapGetters } from 'vuex';

  export default {
    name: "TodoList",
    components: { TodoItem },
    computed: mapGetters({
      items: 'Todo/getTodoList'
    }),
    methods: {
      onEdit(newTodo) {
        this.$emit('edit', newTodo);
      },
      onDelete(id) {
        this.$emit('delete', id);
      }
    }
  }
</script>
