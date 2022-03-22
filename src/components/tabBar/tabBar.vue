<template>
    <div class="bottom-tab">
        <span class="tab-item" v-for="item in tabItems" :key="item.route" @click="switchTo(item.route)">
            <span :class="{'iconfont':true,'selected':routerPath===item.route}" v-html="item.icon"></span>
            <span>{{item.title}}</span>
        </span>
    </div>
</template>

<script>
    export default {
        name:"tabBar",
        data(){
            return {
                tabItems:[{
                    icon:"&#xe6cb;",
                    title:"首页",
                    route:"/home"
                },{
                    icon:"&#xe636;",
                    title:"推荐",
                    route:"/recommend"
                },
                {
                    icon:"&#xe752;",
                    title:"搜索",
                    route:"/search"
                },
                {
                    icon:"&#xe63f;",
                    title:"聊天",
                    route:"/chat"
                },
                {
                    icon:"&#xe70b;",
                    title:"个人中心",
                    route:"/me"
                }],
                routerPath:this.$route.path
            }
        },
        methods:{
            switchTo(route){
                this.$router.replace(route);
                this.routerPath=this.$route.path
                // console.log(this.$route.path)
            }
        }
    }
</script>

<style lang="less" scoped>
.bottom-tab{
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    z-index: 999;
    color: #666;
    .tab-item{
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        .iconfont{
            font-size: 24px;
            color: #000;
        }
        .selected{
        color: #f00;
    }
    }
    
}
</style>