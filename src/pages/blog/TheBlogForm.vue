<template>
  <div>
    <h2>Create Post</h2>
    <form
      class="space-y-4"
      @submit.prevent="onCreatePost()"
    >
      <div class="space-y-4">
        <label>Title</label>
        <input
          type="text"
          class="border rounded w-full p-2 border-blue-400"
          v-model="title"
        />
      </div>
      <div class="space-y-4">
        <label>Description</label>
        <textarea
          class="border rounded w-full p-2 border-blue-400"
          v-model="description"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          class="border px-4 py-2 rounded"
        >
          Create Post
        </button>
      </div>
    </form>
  </div>
</template>
  
  <script>
 import axios from 'axios';
  export default {
    name:"BlogForm",
      data() {
          return {
              title: '',
              description: '',
          };
      },
  
      methods: {
          onCreatePost() {
            axios.post(`posts.json`, {
                  title: this.title,
                  description: this.description,
              }).then((response) => {
                  console.log(response);
                  // this.$router.push('/posts');
              });
          },
      },
  };
  </script>
  