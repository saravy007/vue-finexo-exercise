<template>
    <section class="why_section layout_padding">
        <div class="container">
        <div class="heading_container heading_center">
            <h2>
            Why Choose <span>Us</span>
            </h2>
        </div>
        <div class="why_container">
            <div class="box" v-for="(item, index) in items" :key="index">
                <choose-us-item :imgPath="item.imgPath" :title="item.title" :desc="item.desc"/>
            </div>            
        </div>
        <div class="btn-box">
            <a href="">
            Read More
            </a>
        </div>
        </div>
    </section>
</template>

<script>
import ChooseUsItem from './ChooseUsItem.vue'
export default {
    components: { ChooseUsItem },
    data(){
        return{
            items: [
                {
                    imgPath: 'images/w1.png', 
                    title: 'Expert Management', 
                    desc: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus'
                },
                 {
                    imgPath: 'images/w2.png', 
                    title: 'Secure Investment', 
                    desc: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus'
                },
                 {
                    imgPath: 'images/w3.png', 
                    title: 'Instant Trading', 
                    desc: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus'
                },
                 {
                    imgPath: 'images/w4.png', 
                    title: 'Happy Customers', 
                    desc: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus'
                }
            ]
        }
    }
}
</script>