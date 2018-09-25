import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./mutation-types";

export default {
  [ADD_TODO](state, todo) {
      state.todoList.push(todo);
  }
}
