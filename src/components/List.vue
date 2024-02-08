<script>
export default {
    data() {
        return {
            country: [{
                    id: 1,
                    name: "Nepal"
                },
                {
                    id: 2,
                    name: "Brazil"
                }
            ],
            object: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },
            htmlTag:"<h1>This is html tag binding</h1>"
        }
    },
    props: {
        listData: Array
    },
    methods: {
        getAlert(data) {
            alert(data)
        }
    }
}
</script>

<template>
  <ul>
    <li
      v-for="item in listData"
      :key="item"
    > {{ item }}</li>
  </ul>

  <ul>
    <li
      v-for="item in country"
      :key="item"
    > {{ item.name }}</li>
  </ul>

  <ol
    type="1"
    class="space-y-4"
  >
    <li
      class="noStyle"
      v-for="(value,key, index) in object"
      :key="key"
    >
      {{ index+1 }}. {{ value }}
      <button
        v-on:click="getAlert(value)"
        class="border px-4 py-2 rounded"
      >Alert Value</button>
    </li>
  </ol>

  <div
    v-html="htmlTag"
    class="text-red-200"
  />
</template>

<style scoped>
li {
    font-size: 14px;
    margin-left: 10px;
    list-style-type: circle;
}

.noStyle {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>
