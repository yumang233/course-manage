<style lang="scss" src="./course-home.scss">
</style>

<template>
 <div class="container">
    <!-- =================================-->
    <!-- header -->
    <!-- =================================-->
    <div class="header clearfix">
        <div class="header-logo"><a href="javascript:;"><img src="../../assets/logo.png" alt=""></a></div>
        <ul class="header-info">
            <li class="headerInfo-news"><a href="javascript:;">
                <i class="fa fa-bell-o"></i>
            </a></li>
            <li class="headerInfo-user">
                <a href="javascript:;">
                    <img src="../../assets/via.png" />
                    <i class="fa fa-caret-down"></i>
                </a>
                <div class="headerInfo-list">
                    <a href="javascript:;">
                        <i class="fa fa-user"></i>
                        <span>个人信息</span> 
                    </a>
                    <a href="javascript:;">
                        <i class="fa fa-key"></i>
                        <span>修改密码</span> 
                    </a>
                    <a href="javascript:;">
                        <i class="fa fa-sign-out"></i>
                        <span>退出系统</span> 
                    </a>
                </div>
            </li>
        </ul>
    </div>
    <!-- =================================-->
    <!-- main -->
    <!-- =================================-->
    <div class="main clearfix">
        <div class="c-teacher clearfix">
            <div class="teacher-bg"></div>
            <div class="teacher-wrap">
                <div class="content">
                    <div class="teacher-info pull-left">
                        <div class="teacher-pic">
                            <img src="../../assets/via.png" />
                        </div>
                        <div class="teacher-data">
                            <h5>余教授</h5>
                            <p>What's your dream？</p>
                            <ul class="teacher-sum">
                                <li>
                                    <h4>2506</h4>
                                    <p>学生人数</p>
                                </li>
                                <li>
                                    <h4>12</h4>
                                    <p>授课班级数</p>
                                </li>
                                <li>
                                    <h4>6</h4>
                                    <p>授课课程数</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="teacher-btn pull-right">
                        <a href="javascript:;">编辑个人资料</a>
                        <a href="javascript:;">设置背景</a>
                    </div>
                </div>
            </div>    
        </div>
        <div class="c-course clearfix">
            <div class="content">
                <div class="course-list">
                    <div class="course-set" @click="addCourse">
                        <div><a href="javascript:;">
                            <img src="../../assets/icon-add.png" />
                            <p>创建课堂</p>
                        </a></div>
                    </div>
                    <div class="item_content">
                        <ul class="clearfix liItem-wrapper">
                            <!-- <draggable v-model="courseList" :options="{draggable:'.liItem'}" @start="drag=true" @end="drag=false"> -->
                            <li v-for="(course,index) in courseList" :class="{'fixed':course.down}" :key="course.id" class="liItem" @mousedown="down(course,index,$event)" @mouseup="up(course,index)">
                                <div class="course-item item">
                                    <div class="course-img">
                                        <img :src="course.courseImgUrl" alt="" />
                                        <div class="course-sort"><i class="fa fa-arrows"></i></div>
                                    </div>
                                    <div class="course-text">
                                        <h3>{{course.courseTit}}</h3>
                                        <div class="clearfix">
                                            <div class="courseText-left">
                                                <p>开课时间：{{course.start}}</p>
                                                <p>课时：{{course.count}}</p>
                                                <p>授课班级数：{{course.class}}</p>
                                                <p>学生人数：{{course.student}}</p>
                                                <p>授课场所：{{course.adress}}</p>
                                            </div>
                                            <div class="courseText-right">
                                                <img src="../../assets/course_ewm.jpg" alt="" />
                                                <p>{{course.number}}</p>
                                            </div>
                                        </div>
                                        <div class="course-btn">
                                            <a href="javascript:;" @click="enterClass(course)">进入课堂</a>
                                            <a href="javascript:;">复制课程</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <!-- </draggable> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- =================================-->
    <!-- footer -->
    <!-- =================================-->
    <div class="footer">© 2018  众智传学  技术支持：<a href="http://www.unsun.net/" target="_blank">碧辉腾乐（UNSUN）</a></div>
</div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  data() {
    return {
      courseList: [
        {
          id: 1,
          courseTit: '亚索教学',
          start: '2018-6-17',
          count: '36',
          class: 2,
          student: 200,
          adress: '咸宁蛤蟆家',
          number: '编号N2132',
          courseImgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1822063051,4161046849&fm=27&gp=0.jpg',
          down: false
        },
        {
          id: 2,
          courseTit: '男枪教学',
          start: '2018-6-17',
          count: '36',
          class: 2,
          student: 200,
          adress: '咸宁蛤蟆家',
          number: '编号N2132',
          courseImgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1822063051,4161046849&fm=27&gp=0.jpg',
          down: false
        },
        {
          id: 3,
          courseTit: '卡牌大师教学',
          start: '2018-6-17',
          count: '36',
          class: 2,
          student: 200,
          adress: '咸宁蛤蟆家',
          number: '编号N2132',
          courseImgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1822063051,4161046849&fm=27&gp=0.jpg',
          down: false
        }
      ]
    }
  },
  methods: {
    enterClass(course) {
      this.$router.push({
        path: '/detail',
        params: {
          dataObj: course.id
        }
        /*query: {
            name: 'name', 
            dataObj: this.msg
        }*/
      })
      document.documentElement.scrollTop = 0
    },
    addCourse() {
      let index = this.courseList.length
      index++
      this.courseList.push({
        id: index,
        courseTit: '卡牌大师教学',
        start: '2018-6-17',
        count: '36',
        class: 2,
        student: 200,
        adress: '咸宁蛤蟆家',
        number: '编号N2132',
        courseImgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1822063051,4161046849&fm=27&gp=0.jpg',
      })
    },
    down(item, index, e) {
      var _parent = findParentByClass(e.target, 'liItem');
      console.log(_parent.getBoundingClientRect().top)
      console.log(_parent.getBoundingClientRect().left)

      _parent.style.left = e.pageX;
      _parent.style.top = e.pageY;

      // item.down = true

    },
    up(item, index) {
      console.log(item, index)
    }
  },
  mounted() {
    // let _ulWrapper = document.querySelector('.liItem-wrapper');
    // _ulWrapper.addEventListener('mousedown', function (e) {
    //   if (e.target.nodeName == 'LI') {
    //     console.log(111)
    //   }
    // })
  },
  components: {
    draggable
  }
}
function findParentByClass(node, sclass) {
  var _parent = node.parentNode;
  if (_parent.className.indexOf(sclass) != -1) {
    return _parent;
  }
  return findParentByClass(_parent, sclass)

}
</script>

