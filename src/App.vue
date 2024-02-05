
<template>
  <div id="app">
    <TheNavbar />
    <div class="container mx-auto px-6 mt-32">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
export default {
  name: 'App',
  components: {
    TheNavbar
  },
}
</script>

