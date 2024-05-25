<template>
    <section class="service_section layout_padding">
        <div class="service_container">
        <div class="container ">
            <div class="heading_container heading_center">
            <h2>
                Our <span>Services</span>
            </h2>
            <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
            </p>
            </div>
            <div class="row">
                <div class="col-md-4" v-for="(card, index) in cards" :key="index">
                    <our-service-card :imgPath="card.imgPath" :title="card.title" :desc="card.desc"/>
                </div>                
            </div>
            <div class="btn-box">
            <a href="">
                View All
            </a>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import OurServiceCard from './OurServiceCard.vue'
export default {
  components: { OurServiceCard },
  data(){
    return{
        cards: [
                { 
                    imgPath: 'images/s1.png', 
                    title: 'Currency Wallet', 
                    desc: 'fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using' 
                },
                { 
                    imgPath: 'images/s2.png', 
                    title: 'Security Storage', 
                    desc: 'fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using' 
                },
                { 
                    imgPath: 'images/s3.png', 
                    title: 'Expert Support', 
                    desc: 'fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using' 
                }
                
        ]
    }
        
    }
}
</script>