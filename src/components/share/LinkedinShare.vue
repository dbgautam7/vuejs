<script>
    import LinkedinIcon from '../../icons/LinkedinIcon.vue';
export default {
  name:"LinkedinShare",
 components:{
    LinkedinIcon
 }
}
</script>

<template>
  <ShareNetwork
    network="linkedin"
    url="https://lifeed.io/"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
    quote="The hot reload is so fast it\'s near instant. - Evan You"
    hashtags="vuejs,vite"
  >
    <LinkedinIcon />
  </ShareNetwork>
</template>
    
  