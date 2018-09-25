<template>
  <li class="list-group-item">
    <form>
      <div class="form-group form-check">
        <input type="checkbox" :checked="item.done" class="form-check-input" id="done">
        <label v-if="!isEdit" class="form-check-label" for="done">{{ item.title }}</label>
        <input v-else type="text" class="form-control" @keyup.enter="onSave" @keyup.esc="onCancel" v-model="newTitle">
      </div>
      <div class="controls">
        <button v-if="!isEdit" class="btn btn-sm btn-primary" @click.prevent="switchToEdit">Edit</button>
        <button v-else class="btn btn-sm btn-success" @click.prevent="onSave">Save</button>
        <button class="btn btn-sm btn-danger" @click.prevent="onDelete">Delete</button>
      </div>
    </form>
  </li>
</template>

<script>
  export default {
    name: "TodoItem",
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        newTitle: '',
        isEdit: false
      }
    },
    methods: {
      switchToEdit() {
        this.newTitle = this.item.title;
        this.isEdit = true;
      },
      onCancel() {
        this.isEdit = false;
        this.newTitle = '';
      },
      onSave() {
        this.isEdit = false;
        this.$emit('edit', { title: this.newTitle, id: this.item.id });
        this.newTitle = '';
      },
      onDelete() {
        if(confirm('Are you sure?')) {
          this.$emit('delete', this.item.id);
        }
      }
    }
  }
</script>

<style scoped>
  .controls .btn-danger {
    margin-left: 10px;
  }
  .list-group-item form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .list-group-item {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .form-group {
    margin-bottom: 0;
  }
  .form-check-label {
    margin-bottom: 0;
    margin-left: 20px;
  }
</style>
