//import axios from 'axios';

import axios from 'axios';

const state = {
  todos: [
    { id: 1, title: 'One' },
    { id: 2, title: 'Two' },
    { id: 3, title: 'Three' },
  ],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const respone = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    commit('setTodos', respone.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    );

    commit('newTodo', response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodo', id);
  },
  async filterTodo({ commit }, event) {
    event.preventDefault();
    const limit = parseInt(
      event.target.options[event.target.options.selectedIndex].innerText
    );
    const respone = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit('setTodos', respone.data);
  },
  async updateTodo({ commit }, updateTodoData) {
    const respone = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updateTodoData.id}`,
      updateTodoData
    );
    commit('updTodo', respone.data);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((item) => item.id !== id)),
  updTodo: (state, todo) =>
    (state.todos = state.todos.map((item) =>
      item.id !== todo.id ? item : todo
    )),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
