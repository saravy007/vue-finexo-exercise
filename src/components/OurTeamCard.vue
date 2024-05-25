<template>
    <div class="box ">
        <div class="img-box">
            <img :src="imgPath" class="img1" alt="">
        </div>
        <div class="detail-box">
            <h5>
            {{name}}
            </h5>
            <p>
            {{position}}
            </p>
        </div>
        <div class="social_box">
            <a href="#">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#">
            <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="#">
            <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#">
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props:[
        'imgPath','name','position'
    ]
}
</script>