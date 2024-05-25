<template>
    <hero-area/>
    <our-service/>
    <about-section/>
    <choose-us/>
    <our-team/>
    <client-section/>
</template>
<script>
import HeroArea from '../components/HeroArea.vue'
import OurService from '../components/OurService.vue'
import AboutSection from '../components/AboutSection.vue'
import ChooseUs from '../components/ChooseUs.vue'
import OurTeam from '../components/OurTeam.vue'
import ClientSection from '../components/ClientSection.vue'

export default {
    components: {
    HeroArea,
    OurService,
    AboutSection,
    ChooseUs,
    OurTeam,
    ClientSection
  }
}
</script>