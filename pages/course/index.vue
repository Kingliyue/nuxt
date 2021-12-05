<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部课程</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">课程类别</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a title="全部" href="#" @click="initCorseInfo()" :class="{active:allIndex == '1'}">全部</a>
                </li>
                <li v-for="(item,index) in subjectNestedList" :key="index" :class="{active:oneIndex==index}">
                  <a :title="item.title" @click="serachOneSubject(item.id,index)" href="#">{{item.title}}</a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="c-999 fsize14"></span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li v-for="(item,index) in subSubjectList" :key="index" :class="{active:twoIndex==index}">
                    <a :title="item.title" @click="serachTowSubject(item.id,index)"  href="#">{{item.title}}</a>
                </li>
              </ul>
            </dd>
          </dl>
          <div class="clear"></div>
        </section>
        <div class="js-wrap">
          <section class="fr">
            <span class="c-ccc">
              <i class="c-master f-fM">1</i>/
              <i class="c-666 f-fM">1</i>
            </span>
          </section>
          <section class="fl">
            <ol class="js-tap clearfix">
              <li>
                <a title="关注度" href="#">关注度</a>
              </li>
              <li>
                <a title="最新" href="#">最新</a>
              </li>
              <li class="current bg-orange">
                <a title="价格" href="#">价格&nbsp;
                  <span>↓</span>
                </a>
              </li>
            </ol>
          </section>
        </div>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="data.total==0">
              <em class="icon30 no-data-ico">&nbsp;</em>
              <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list" v-if="data.total>0">
              <ul class="of" id="bna">
                  <li  v-for="item in data.records" v-bind:key="item.id">
                      <div class="cc-l-wrap">
                          <section class="course-img">
                              <img :src="item.cover" class="img-responsive" alt="听力口语">
                              <div class="cc-mask">
                                  <a :href="'/course/'+item.id" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                              </div>
                          </section>
                          <h3 class="hLh30 txtOf mt10">
                              <a :href="'/course/'+item.courseId" :title="item.title" class="course-title fsize18 c-333">{{item.title}}</a>
                          </h3>
                          <section class="mt10 hLh20 of">
                              <span class="fr jgTag bg-green">
                                  <i class="c-fff fsize12 f-fA">{{Number(item.price) == 0.00?'免费':'收费'}}</i>
                              </span>
                              <span class="fl jgAttr c-ccc f-fA">
                                  <i class="c-999 f-fA">{{item.viewCount}}人学习</i>
                                  |
                                  <i class="c-999 f-fA">9634评论</i>
                              </span>
                          </section>
                      </div>
                  </li>
              </ul>
              <div class="clear"></div>
          </article>
      </div>
        <!-- 公共分页 开始 -->
        <div>
            <div class="paging">
                <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
                <a :class="{undisable: !data.hasPrevious}" 
                  @click.prevent="gotoPage(1)" href="#" title="首页">首</a>
                <a :class="{undisable: !data.hasPrevious}"
                  @click.prevent="gotoPage(data.current-1)" href="#" title="前一页">&lt;</a>
                <a v-for="page in data.pages" v-bind:key="page" 
                  :class="{current: data.current == page, undisable: data.current == page}" 
                  @click.prevent="gotoPage(page)" href="#" :title="'第'+page+'页'">{{page}}</a>
                <a :class="{undisable: !data.hasNext}" 
                  @click.prevent="gotoPage(data.current+1)" href="#" title="后一页">&gt;</a>
                <a :class="{undisable: !data.hasNext}" 
                  @click.prevent="gotoPage(data.pages)" href="#" title="末页">末</a>
                <div class="clear"></div>
            </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>
import course from "@/api/course"
export default {
  data(){
    return{
      data:{},
      searchObj:{},
      page:"1",
      subjectNestedList: [], // 一级分类列表
      subSubjectList: [], // 二级分类列表
      oneIndex : '-1',
      twoIndex:'-1',
      allIndex:'-1'
    }
  },
  created(){
    this.initCorseInfo();
    this.initSubject();
  },
  // asyncData({ params, error }) {
  //   return course.getCourseListPage(1, 8,"").then(response => {
  //     console.log(response.data);
  //     return { data: response.data }
  //   })
  // },
  methods: {
    initCorseInfo(){
          this.searchObj ={};
          this.oneIndex = '-1'
          this.twoIndex = '-1'
          this.allIndex = '1'
          this.subSubjectList = ''
          course.getCourseListPage(this.page, 8,this.searchObj).then(response => {
          this.data = response.data;
          })
    },
    //用于分页查询
    gotoPage(page){
        course.getCourseListPage(page, 8,this.searchObj).then(response => {
            this.data = response.data
        })
    },
    //
    initSubject(){
      course.getSubject().then(res=>{
        this.subjectNestedList = res.data.subject
        console.log(this.subjectNestedList)
      })
    },
    //查找二级分类
    serachOneSubject(subjectParentId,index){
      //用于样式显示
      this.oneIndex = index
      this.twoIndex = "-1"
      this.allIndex = '-1'
      this.subSubjectList = ""
  
      this.searchObj.subjectId = ""
      this.searchObj.subjectParentId =subjectParentId
      
      this.gotoPage(1);
      for(var i = 0; i<this.subjectNestedList.length;i++){
        if(this.subjectNestedList[i].id ===subjectParentId){
          this.subSubjectList = this.subjectNestedList[i].children
          console.log(this.subSubjectList)
        }
      }

    },
    serachTowSubject(subjectId,index){
      this.twoIndex = index
      this.searchObj.subjectId = subjectId
      this.gotoPage(1)
    }
  }
}
</script>
<style scoped>
  .active {
    background: #bdbdbdf5;
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
</style>