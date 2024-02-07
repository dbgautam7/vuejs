<template>
  <div>
    <button @click="showModal = true">
      Simple
    </button>

    <vue-final-modal
      v-model="showModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <span># Simple modal</span>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <button
        class="modal-close"
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
        showModal: false
      })
    };
    </script>
    
    <style>
    .modal-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal-content {
      position: relative;
      width: 50%;
      max-height: 300px;
      padding: 16px;
      overflow: auto;
      background-color: #fff;
      border-radius: 4px;
    }
    .modal-close {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      margin: 8px 8px 0 0;
      cursor: pointer;
    }
    .modal-close::hover {
      color: gray;
    }
    </style>
    