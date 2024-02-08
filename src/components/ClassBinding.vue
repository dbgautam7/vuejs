<script>
export default {
  data() {
    return {
      images: [
        { url: require('../assets/good-evening.jpeg'), sel: false },
        { url: require('../assets/good-evening.jpeg'), sel: false },
        { url: require('../assets/good-evening.jpeg'), sel: false },
        { url: require('../assets/good-evening.jpeg'), sel: false },
        { url: require('../assets/good-evening.jpeg'), sel: false },
        { url: require('../assets/good-evening.jpeg'), sel: false },
        { url: require('../assets/good-evening.jpeg'), sel: false },
      ]
    }
  },
  methods: {
    select(number) {
      this.images[number].sel = !this.images[number].sel
    }
  }
}
</script>

<template>
  <h1 class="text-xl font-bold mb-4">Example: Selecting images with Tailwind CSS</h1>
  <p class="mb-2">This is an example of assigning a class with Vue (v-bind:class) using Tailwind CSS.</p>
  <p class="mb-2">Click on an image to assign or remove the class "selClass".</p>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border border-dashed p-4">
    <div
      v-for="(img, index) in images"
      :key="index"
      @click="select(index)"
      :class="[img.sel && 'border border-orange-200 bg-orange-300 rounded']"
      class="cursor-pointer p-2"
    >
      <img
        :src="img?.url"
        class="h-16 w-full object-cover object-left-top rounded-lg"
        :alt="img.url"
      />
    </div>
  </div>
</template>


