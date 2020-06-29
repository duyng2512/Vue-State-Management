<template>
  <div>
    <p>+ Add todo</p>
    <div class="add">
      <form @submit="onSubmit">
        <input
          type="text"
          name="input"
          v-model="title"
          placeholder="Add todo ..."
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: {},
  data() {
    return {
      title: '',
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
      this.title = '';
    },
  },
};
</script>

<style scoped>
p {
  color: #41b883;
  font-weight: 100;
  font-size: 2em;
  font-family: 'Courier New', Courier, monospace;
}

form {
  display: flex;
}
input[type='text'] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type='submit'] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
