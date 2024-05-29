<template>
<section class="team_section layout_padding">
    <div class="container-fluid">
        <div class="team_container">
            <div class="row">
                <div class="col-lg-3 col-sm-6" v-for="(card, index) in users" :key="index">
                    <user-card imgPath="images/team-1.jpg" :name="card.name" :email="card.email" :job="card.job"/>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { useUsersStore } from '@/store/user'
import { mapState, mapActions } from 'pinia'
import UserCard from '@/components/UserCard.vue'

export default {
    components:{UserCard},
    computed:{
        ...mapState(useUsersStore, ['users']),
    },
    async mounted(){
        await this.fetchUser();
    },
    methods:{
        ...mapActions(useUsersStore, ['fetchUser']),
    }
}
</script>