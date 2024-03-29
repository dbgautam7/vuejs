<script setup>
import { ref,defineProps } from 'vue'
import {  useRouter } from 'vue-router'

const props = defineProps({
  data: Array,
  columns: Array,
  buttonName:String
})
 

import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/vue-table'

const data = ref(props.data)

const router = useRouter()


const sorting = ref([])
const filter = ref('')

const table = useVueTable({
  data: data.value,
  columns: props.columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  state: {
    get sorting() {
      return sorting.value
    },
    get globalFilter() {
      return filter.value
    },
  },
  onSortingChange: updaterOrValue => {
    sorting.value =
      typeof updaterOrValue === 'function'
        ? updaterOrValue(sorting.value)
        : updaterOrValue
  },
})

function navigateToBlogForm(){
      router.push("/blogs/create")
  }

</script>

<template>
  <div class="flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto no-scrollbar sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="my-4 flex justify-between">
          <input
            type="text"
            class="border border-gray-400 rounded px-2 py-2"
            placeholder="Search"
            v-model="filter"
          />
          <button
            class="border px-4 rounded-md"
            @click="navigateToBlogForm"
          >{{ buttonName }}</button>
        </div>
        <table class="min-w-full divide-y divide-gray-300 border">
          <thead>
            <tr
              v-for="headerGroup in table.getHeaderGroups()"
              :key="headerGroup.id"
            >
              <th
                v-for="header in headerGroup.headers"
                :key="header.id"
                scope="col"
                class="px-3 py-3.5 text-left text-sm whitespace-nowrap font-semibold text-gray-900"
                :class="{
                    'cursor-pointer select-none': header.column.getCanSort(),
                  }"
                @click="header.column.getToggleSortingHandler()?.($event)"
              >
                <FlexRender
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
                {{ { asc: ' ↑', desc: '↓' }[header.column.getIsSorted()] }}
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="row in table.getRowModel().rows"
              :key="row.id"
            >
              <td
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
                class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
              >
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mt-8">
      Page {{ table.getState().pagination.pageIndex + 1 }} of
      {{ table.getPageCount() }} -
      {{ table.getFilteredRowModel().rows.length }} results
    </div>
    <div class="mt-8 space-x-4">
      <button
        class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageSize(5)"
      >
        Page Size 5
      </button>
      <button
        class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageSize(10)"
      >
        Page Size 10
      </button>
      <button
        class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageSize(20)"
      >
        Page Size 20
      </button>
    </div>
    <div class="space-x-4 mt-8">
      <button
        class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageIndex(0)"
      >
        First page
      </button>
      <button
        class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="table.setPageIndex(table.getPageCount() - 1)"
      >
        Last page
      </button>
      <button
        class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="!table.getCanPreviousPage()"
        @click="table.previousPage()"
      >
        Prev page
      </button>
      <button
        class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="!table.getCanNextPage()"
        @click="table.nextPage()"
      >
        Next page
      </button>
    </div>
  </div>
</template>
