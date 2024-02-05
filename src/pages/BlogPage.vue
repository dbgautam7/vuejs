<!-- <template>
  <div class="mt-32">
    <TheBlogFormVue />
  </div>
</template>

<script>
import TheBlogFormVue from './blog/TheBlogForm.vue';
export default {
  name: 'BlogForm',
  components: {
    TheBlogFormVue
  },
};
</script> -->
<template>
  <div class="row">
    <div class="col-md-8">
      <div>
        <h3>Blog Details</h3>
        <table class="table-auto">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="post in postDetails"
              :key="post.id"
            >
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
              <td>{{ post.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-md-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: '',
  data() {
      return {
          hai: 'hai',
          postDetails: [],
      };
  },
  mounted() {
      axios.get(`posts.json`).then((response) => {
          this.formatPosts(response.data);
      });
  },
  beforeRouteEnter(to, from, next) {
      next((vm) => {
          console.log(vm.hai);
      });
      console.log('component based before each');
  },
  beforeRouteUpdate() {
      console.log('Before route update');
  },
  beforeRouteLeave() {
      console.log('before route leave execution');
  },
  methods: {
      formatPosts(postsData) {
          for (let key in postsData) {
              this.postDetails.push({ ...postsData[key], id: key });
          }
      },
  },
};
</script>
