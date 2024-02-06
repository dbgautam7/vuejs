<template>
  <ShareNetwork
    network="facebook"
    url="https://lifeed.io/"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
    quote="The hot reload is so fast it\'s near instant. - Evan You"
    hashtags="vuejs,vite"
  >
    <FacebookIcon />
  </ShareNetwork>
</template>
  
  <script>
  import FacebookIcon from '../../icons/FacebookIcon.vue';
  export default {
    name:"FacebookShare",
   components:{
    FacebookIcon
   }
  }
  </script>