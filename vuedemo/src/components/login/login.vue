<template>
    <div style="background:#d1dfe4;display:flex;flex-direction:column;align-items: center;height:100vh;justify-content: space-evenly;">
        <div style="text-align:center;font:normal 14px/24px 'MicroSoft YaHei';color:#000000;">
            <h1>豆瓣排行榜</h1>
        </div>
        <div class="wrap" style="">
            <h3>测试数据</h3>
            <div class="item" :class="{'item_active':act==index?true:false}" v-for="(ele,index) in list" @mouseover="ain(index)" @mouseout="aout()">
                <label for="">{{ele.id}}</label>
                <label for="">{{ele.name}}</label>
                <img :src="ele.img" >
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            pic:'',
            list:[],
            act:9
        }
    },
    created(){
        this.to();
    },
    methods:{
        to(){
            console.log('1')
            let url = '/api/data';
            axios.get(url).then((res)=>{
                console.log(res)
                this.list=res.data
            })
        },
        ain(index){
            this.act=index
        },
        aout(){
            this.act=0
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 300;
}
body{
    font-family: 'Source Sans Pro', sans-serif;
    color: white;
}
body ::-webkit-input-placeholder {
    font-family: 'Source Sans Pro', sans-serif;
    color: white;
    font-weight: 300;
  }
.wrap{
    width: 20rem;
    height: 30rem;
    overflow: hidden;
    display:flex;
    flex-direction:column;
    background:white;
    border-radius:5px;
}
.item img{
    display: none;
}
.item_active img{
    display: inline;
}
</style>
