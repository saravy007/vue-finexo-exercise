<template>
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
    </div>
</template>
<script>
export default {
    props:[
        'imgPath','title','desc'
    ]
}
</script>