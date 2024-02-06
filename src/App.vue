
<template>
  <div id="app">
    <TheNavbar />
    <div class="container mx-auto mt-12 mb-28">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
export default {
  name: 'App',
  components: {
    TheNavbar,
    TheFooter
  },
}
</script>

