<template>
  <div>
    <button @click="showModal = true">
      Simple
    </button>
    <vue-final-modal
      v-model="showModal"
      classes="flex justify-center items-center"
      content-class="relative bg-[#fff] rounded w-1/2 max-h-[300px] p-4 overflow-auto"
    >
      <span># Simple modal</span>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <button
        class="absolute top-0 right-0 flex justify-center items-center w-8 h-8 mt-2 mr-2 cursor-pointer hover:bg-gray-300"
        @click="showModal = false"
      >
        x
      </button>
    </vue-final-modal>
  </div>
</template>
    <script>
    export default {
      data: () => ({
        showModal: true
      }),
    };
    </script>
  