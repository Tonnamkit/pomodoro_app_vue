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
<style scoped>
    .btn_item{
        text-align: center;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
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
    .btn_item_active{
        background: black;
        border-radius: 50px;
    }
    .btn_item_active span{
        color: #483D8B;
        font-weight: bold;
    }
    .btn_item_active span:hover{
        color: #483D8B;
    }

</style>
