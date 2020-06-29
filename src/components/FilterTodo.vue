<template>
  <div>
    <h4><i class="fas fa-filter"></i> Filter To do</h4>
    <select @change="filterTodo($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'FilterTodo',
  methods: {
    ...mapActions(['filterTodo']),
  },
};
</script>

<style scoped lang="css">
h4 {
  display: inline;
  margin-right: 1em;
  font-family: 'Courier New', Courier, monospace;
}

select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
  color: #41b883;
}
</style>
