<template>
  <input
    type="text"
    ref="name"
    class="px-4 py-2 border"
    placeholder="Enter School Name"
  />
  {{ schoolName }}
  <button v-on:click="getRefValue()">Ref Button</button>
  <button v-on:click="sendSchoolName(schoolName)">Send School Name</button>
</template>

  
  
<script>
export default {
    name: "ChildComponent",
    data() {
        return {
            schoolName: "",
            isClick:Boolean
        }

    },
    props: {
        sendSchoolName: Function
    },
    methods:{
        getRefValue(){
            this.schoolName=this.$refs.name.value
            this.$refs.name.focus()
        },
        handleClick(){
            this.isClick=true
        }
    }
};
</script>
