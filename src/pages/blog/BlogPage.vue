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
    <vue-final-modal
      v-model="showDeleteModal"
      classes="flex justify-center items-center"
      content-class="relative bg-[#fff] rounded w-1/2 max-h-[300px] p-4 overflow-auto"
    >
      <span class="text-red-500">Delete Modal</span>
      <p>
        {{ selectedId }}
      </p>
      <button
        class="absolute top-0 right-0 flex justify-center items-center w-8 h-8 mt-2 mr-2 cursor-pointer hover:bg-gray-300 hover:rounded"
        @click="showDeleteModal = false"
      >
        x
      </button>
      <div class="flex justify-between items-center mt-4">
        <button
          @click="cancelDelete"
          class="border py-1 px-2 rounded hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          @click="confirmDelete"
          class="border py-1 px-2  rounded bg-red-500 text-white hover:text-red-500 hover:border-red-500 hover:bg-white"
        >
          Confirm
        </button>
      </div>
    </vue-final-modal>
  </div>
</template>

<script>
import axios from 'axios';
import {
    h
} from 'vue'
import CustomTable from '@/components/table/CustomTable.vue';
import EditIcon from '@/icons/EditIcon.vue';
import DeleteIcon from '@/icons/DeleteIcon.vue';

export default {
    name: 'BlogPage',
    components: {
        CustomTable,
    },

    data() {
        return {
            postDetails: [],
            showDeleteModal: false,
            selectedId:"",
            columns: [{
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
                    accessorKey: 'type',
                    header: 'Type',
                    cell: ({
                        row
                    }) => {
                        if (Array.isArray(row.original.type) && row.original.type.length > 0) {
                            // Map over each item in the type array and format them
                            const capitalizedTypes = row.original.type.map(type =>
                                type.charAt(0).toUpperCase() + type.slice(1)
                            );
                            return capitalizedTypes.join(', ');
                        } else {
                            return '-';
                        }
                    }
                },
                {
                    accessorKey: 'actions',
                    header: 'Actions',
                    cell: ({
                        row
                    }) => {
                      
                        return h('div', {
                            class: 'flex items-center gap-2'
                        }, [
                            h(EditIcon, {
                                id: row.original.id
                            }),
                            h(DeleteIcon, {
                                id: row.original.id,
                                openDeleteModal: this.openDeleteModal,
                                onClick:()=>this.selectedId=row.original.id
                            })
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
                this.postDetails.push({
                    ...postsData[key],
                    id: key
                });
            }
        },
        cancelDelete() {
            this.showDeleteModal = false;
        },
        confirmDelete() {
            this.showDeleteModal = false;
        },
        openDeleteModal() {
            this.showDeleteModal = true;
        }
    },
};
</script>
