<script>
import FacebookShare from './share/FacebookShare.vue'
import GmailShare from './share/GmailShare.vue'
import LinkedinShare from './share/LinkedinShare.vue'
import WhatsAppShare from './share/WhatsAppShare.vue'
export default {
    name:"footer",
    components:{
        FacebookShare,
        LinkedinShare,
        WhatsAppShare,
        GmailShare
    },

}
</script>

<template>
  <v-footer class="fixed bottom-0 bg-gray-400 w-full py-4 flex flex-col gap-1 justify-center items-center">
    <div class="flex gap-2 items-center">
      <GithubIcon
        height="24"
        width="24"
        iconName="github"
      />
      <FacebookShare />
      <LinkedinShare />
      <WhatsAppShare />
      <GmailShare />
    </div>

    <v-divider></v-divider>
    <div class="text-center">
      {{ new Date().getFullYear() }} — <strong>Vuejs</strong>
    </div>
  </v-footer>
</template>


