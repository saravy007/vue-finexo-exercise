<template> 
  <nav-heder/>
  <router-view/>
  <infor-footer-section/>
</template>

<script>
import InforFooterSection from './components/InforFooterSection.vue'
import NavHeder from './components/NavHeder.vue'

export default {
  name: 'App',
  components: {
    NavHeder,
    InforFooterSection
  }
}
</script>
