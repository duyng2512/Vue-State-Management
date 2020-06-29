<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete : </span>
      <span> <span class="complete-box"></span> = Complete </span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
    </div>

    <div class="todos">
      <div
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        v-bind:class="{ 'is-complete': todo.completed }"
        @dblclick="doubleClick(todo)"
      >
        <p>
          <i class="fas fa-check" v-if="!todo.completed"></i>
          <i class="fas fa-times" v-if="todo.completed"></i> {{ todo.title }}
        </p>

        <i class="fas fa-trash icon-deleted" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Todos',
  computed: mapGetters(['allTodos']),
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    doubleClick(todo) {
      const updateTodoData = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updateTodoData);
    },
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
h3 {
  color: #41b883;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 900;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
}
.icon-deleted {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  font-family: 'Courier New', Courier, monospace;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
  margin-left: 1em;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
  margin-left: 1em;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
