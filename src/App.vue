<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/layout/Header';

export default {
  components: {
    Header,
  },
};
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
