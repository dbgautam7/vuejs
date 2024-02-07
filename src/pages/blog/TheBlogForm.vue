<template>
  <form
    class="space-y-4 pt-4"
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
      <label>Topic</label>
      <input
        type="text"
        class="border rounded w-full p-2 border-blue-400"
        v-model="topic"
      />
    </div>
    <div class="space-y-4">
      <label>Description</label>
      <textarea
        class="border rounded w-full p-2 border-blue-400"
        v-model="description"
      ></textarea>
    </div>
    <div class="flex justify-end">
      <button
        type="submit"
        class="border px-4 py-2 rounded"
      >
        Create Post
      </button>
    </div>
  </form>

</template>
  
  <script>
 import axios from 'axios';
  export default {
    name:"BlogForm",
      data() {
          return {
              title: '',
              description: '',
              topic:''
          };
      },
  
      methods: {
          onCreatePost() {
            axios.post(`posts.json`, {
                  title: this.title,
                  description: this.description,
                  topic:this.topic
              }).then((response) => {
                if(response.status===200){
                  this.title=""
                this.description=""
                this.topic=""
                }
              });
          },
      },
  };
  </script>
  