<template>
    
    <div class="box ">
        <div class="img-box">
            <img :src="imgPath" alt="">
        </div>
        <div class="detail-box">
            <h5>
                {{title}}
            </h5>
            <p>
                {{desc}}
            </p>
            <a href="">
            Read More
            </a>
        </div>
    </div>
    
</template>

<script>
export default {
    props:[
        'imgPath','title','desc'
    ]
}
</script>