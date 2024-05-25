<template>
    <section class="team_section layout_padding">
        <div class="container-fluid">
            <div class="heading_container heading_center">
                <h2 class="">
                Our <span> Team</span>
                </h2>
            </div>

            <div class="team_container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6" v-for="(card, index) in cards" :key="index">
                        <our-team-card :imgPath="card.imgPath" :name="card.name" :position="card.position"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import OurTeamCard from './OurTeamCard.vue'

export default {
    components:{ OurTeamCard },
    data(){
        return{
            cards:[
                {
                    imgPath:'images/team-1.jpg',
                    name:'Joseph Brown',
                    position:'Marketing Head'
                },
                {
                    imgPath:'images/team-2.jpg',
                    name:'Nancy White',
                    position:'Marketing Head'
                },
                {
                    imgPath:'images/team-3.jpg',
                    name:'Earl Martinez',
                    position:'Marketing Head'
                },
                {
                    imgPath:'images/team-4.jpg',
                    name:'Josephine Allard',
                    position:'Marketing Head'
                },
            ]
        }
    }
}
</script>