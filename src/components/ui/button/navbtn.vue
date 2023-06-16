<template>
    <div class="btn_item">
        <span>{{btnTitle}}</span>
    </div>
</template>
<script>
export default {
    name: "nav_button",
    props: ['btnTitle']
}
</script>
<style >
    .btn_item{
        text-align: center;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        margin: 0 5px;
        
    }
    .btn_item span{
        color: #555972;
        font-weight: bold;
        transition: 0.1s ease;
        cursor: pointer;
        font-weight: 400;
       
    }
    .btn_item span:hover{
        color: black;
    }

</style>
