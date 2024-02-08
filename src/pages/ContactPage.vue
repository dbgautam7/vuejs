<template>
  <div class="mt-32 space-y-4">
    <h1>Welcome to {{ pageName }} </h1>
    <p>Name:{{ getName().fullName }}</p>
    <div class="flex flex-col gap-4">
      <button v-on:click="getAlert">Alert Phone</button>
      <button v-on:mouseover="getConsole()">Get Console</button>

      <input
        type="text"
        placeholder="Enter email"
        v-model="email"
        class="border p-2"
      />
      <input
        type="text"
        placeholder="Enter address"
        v-model="address"
        class="border p-2"
      />
      <p>Input Values :{{email}} {{address}}</p>
      <button v-on:click="counter()">Counter:{{count}}</button>

      <div>
        <h1>Popular Javascript Frameworks:</h1>
        <div class="flex gap-2 items-center">
          <div class="flex gap-2 items-center">
            <label
              for="vue"
              class="cursor-pointer"
            >VueJs</label>
            <input
              type="checkbox"
              id="vue"
              value="vue"
              class="cursor-pointer"
              v-model="checkedValues"
            />
          </div>
          <div class="flex gap-2 items-center">
            <label
              for="react"
              class="cursor-pointer"
            >ReactJs</label>
            <input
              type="checkbox"
              id="react"
              value="react"
              class="cursor-pointer"
              v-model="checkedValues"
            />
          </div>
          <div class="flex gap-2 items-center">
            <label
              for="angular"
              class="cursor-pointer"
            >AngularJs</label>
            <input
              type="checkbox"
              id="angular"
              value="angular"
              class="cursor-pointer"
              v-model="checkedValues"
            />
            <p class="ml-8">CheckedValues:{{checkedValues}}</p>
          </div>
        </div>

      </div>

      <div class="mt-4">
        <h1>Are you a developer? {{ radio }}</h1>
        <div class="flex gap-2 items-center">
          <div class="flex gap-2 items-center">
            <label
              for="yes"
              class="cursor-pointer"
            >Yes</label>
            <input
              type="radio"
              id="yes"
              value="yes"
              class="cursor-pointer"
              v-model="radio"
            />
          </div>
          <div class="flex gap-2 items-center">
            <label
              for="no"
              class="cursor-pointer"
            >No</label>
            <input
              type="radio"
              id="no"
              value="no"
              class="cursor-pointer"
              v-model="radio"
            />
          </div>
        </div>
      </div>
      <CustomCheckbox
        :show="show"
        @update:show="show = $event"
      />

      <List :listData="['GitHub','GitLab', 'GitBucket']" />

      <ClassBinding />
      <p>{{schoolName}}</p>
      <ChildComponent :sendSchoolName="getSchoolName" />

    </div>
  </div>
</template>

<script>
import CustomCheckbox from '@/views/CustomCheckbox.vue'
import List from '@/components/List.vue'
import ClassBinding from '@/components/ClassBinding.vue'
import ChildComponent from '@/components/ChildComponent.vue'
export default {
    name: "ContactPage",
    components: {
        CustomCheckbox,
        List,
        ClassBinding,
        ChildComponent
    },
    data() {
        return {
            pageName: "Contact Page",
            fullName: "DB Gautam",
            phone: 9804400486,
            address: "",
            email: "",
            count: 1,
            checkedValues: [],
            radio: "yes",
            show: false,
            schoolName: ""
        }
    },
    methods: {
        getName() {
            return {
                fullName: this.fullName,
                email: "gautamdb28@gmail.com"
            }
        },
        getAlert(data) {
            alert(typeof data === "string" ? data : `Phone:${this.phone}`)
        },
        getConsole() {
            console.log("hover");
        },
        counter() {
            this.count = this.count + 1
        },
        getSchoolName(name) {
            this.schoolName = name
        }
    },
    mounted() {
        console.log(this.show, "show");
    }
}
</script>
