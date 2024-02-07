<template>
  <div>
    <CustomTable
      v-if="postDetails.length > 0"
      :data="postDetails"
      :columns="columns"
      buttonName="Create Blog"
    />
    <div v-else>
      Loading...
    </div>
    <DeleteModal
      v-if="showDeleteModal"
      @cancel="cancelDelete"
      @confirm="confirmDelete"
      v-bind:showModal="showDeleteModal"
    />
  </div>
</template>

<script>
import axios from 'axios';
import { h } from 'vue'
import CustomTable from '@/components/table/CustomTable.vue';
import EditIcon from '@/icons/EditIcon.vue';
import DeleteIcon from '@/icons/DeleteIcon.vue';
import DeleteModal from '@/modal/DeleteModal.vue';

export default {
  name: 'BlogPage',
  components:{
    CustomTable,
    DeleteModal
  },
  
  data() {
      return {
          postDetails: [],
          showDeleteModal:false,
          columns:[
                    {
                      accessorKey: 'id',
                      header: 'ID',
                    },
                    {
                      accessorKey: 'title',
                      header: 'Title',
                    },
                    {
                      accessorKey: 'topic',
                      header: 'Topic',
                    },
                    {
                      accessorKey: 'description',
                      header: 'Description',
                    },
                    {
                    accessorKey: 'actions',
                    header: 'Actions',
                    cell: ({ row }) => {
                      return h('div', { class: 'flex items-center gap-2' }, [
                        h(EditIcon, { id: row?.original?.id }),
                        h(DeleteIcon, { id: row?.original?.id,showDeleteModal:this.showDeleteModal,
                          onClick: () => {
                              this.showDeleteModal = true;
                            } })
                      ])
                    },
                    enableSorting: false,
                  },
                  ]
      };
  },
  mounted() {
      axios.get(`posts.json`).then((response) => {
          this.formatPosts(response.data);
      });
  },
  methods: {
      formatPosts(postsData) {
          for (let key in postsData) {
              this.postDetails.push({ ...postsData[key], id: key });
          }
      },
      cancelDelete() {
        this.showDeleteModal = false;
      },
      confirmDelete() {
        this.showDeleteModal = false;
      }
  },
};
</script>
