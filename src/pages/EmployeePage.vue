<script setup>
import { h } from 'vue'
import { format } from 'date-fns'
import EditIcon from '@/icons/EditIcon.vue';
import DeleteIcon from '@/icons/DeleteIcon.vue';
import CustomTable from '@/components/table/CustomTable.vue';
import people from '../dummyPeople.json'

const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'first_name',
    header: 'First name',
  },
  {
    accessorKey: 'last_name',
    header: 'Last name',
  },
  {
    accessorFn: row => `${row?.first_name} ${row?.last_name}`,
    header: 'Full Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'created_at',
    header: 'Created',
    cell: info => format(new Date(info.getValue()), 'MMM d, yyyy'),
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return h('div', { class: 'flex items-center gap-2' }, [
        h(EditIcon, { id: row?.original?.id }),
        h(DeleteIcon, { id: row?.original?.id })
      ])
    },
    enableSorting: false,
  },
]

</script>
<template>
  <CustomTable
    :data="people"
    :columns="columns"
  />
</template>
