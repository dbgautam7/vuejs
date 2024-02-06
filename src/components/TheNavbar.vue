<template>
  <nav class="bg-white shadow w-full fixed top-0">
    <div class="container px-6 py-3 mx-auto">
      <div class="md:flex justify-between items-center">
        <!-- left section -->
        <div class="flex justify-between items-center">
          <router-link
            to="/"
            class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl"
          >Brand</router-link>
          <div class="md:hidden">
            <button
              type="button"
              class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
              @click="isOpen = !isOpen"
            >
              <svg
                viewBox="0 0 24 24"
                class="h-6 w-6 fill-current"
              >
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- right section -->
        <div
          class="flex-col mt-3 md:flex-row md:mt-0 md:flex items-center"
          :class="isOpen? 'flex' : 'hidden'"
        >
          <router-link
            to="/"
            class="text-gray-800 text-sm hover:font-medium md:mx-4"
          >Home</router-link>
          <router-link
            to="/blogs"
            class="text-gray-800 text-sm hover:font-medium md:mx-4"
          >Blogs</router-link>
          <router-link
            to="/employee"
            class="text-gray-800 text-sm hover:font-medium md:mx-4"
          >Employee</router-link>
          <router-link
            to="/contact"
            class="text-gray-800 text-sm hover:font-medium md:mx-4"
          >Contact</router-link>
          <router-link
            to="/services"
            class="text-gray-800 text-sm hover:font-medium md:mx-4"
          >Services</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
  };
  </script>
  