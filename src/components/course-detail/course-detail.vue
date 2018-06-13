<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  padding: 0 50px;
  box-shadow: 0px 1px 14px rgba(66, 102, 178, 0.2);
  background: #ffffff;
}

.classroom-tit {
  width: 320px;
  height: 50px;
  padding-left: 80px;
  margin: 15px 0;
  position: relative;
  float: left;
}

.classroom-logo {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -22px;
}

/*导航*/

.classroom-nav {
  width: 610px;
  text-align: center;
  height: 80px;
  margin: 0 auto;
  float: left;
}

.classroom-nav > ul > li {
  float: left;
  padding: 0 25px;
  box-sizing: border-box;
}

.classroom-nav > ul > li > a {
  font-size: 18px;
  color: #454545;
  display: inline-block;
  padding: 27px 0;
  transition: all 0.3s ease;
}

/*导航字体颜色改变*/
.classroom-nav > ul > li > a:hover {
  color: #3a5da8;
}
/*导航高亮显示*/
.classroom-nav > ul > li > a.nav-on {
  color: #3a5da8;
  padding: 28px 0 25px 0;
  border-bottom: 3px solid #4266b2;
}

/*个人头像部分*/
.classroom-personal > div {
  width: 130px;
  float: right;
  height: 50px;
  margin: 15px 0;
  padding: 0 30px 0 50px;
  position: relative;
  float: left;
}
.router-link-active {
  color: #3a5da8;
  border-bottom: 3px solid #4266b2;
  // padding: 28px 0 25px 0;
}
.main-content{
  padding-top: 80px;
}
</style>

<template>
  <div>
    <div class="header clearfix">
							<div class="classroom-tit">
								<!--logo-->
								<a href="" class="classroom-logo">
									<img src="../../assets/classroom_logo.png" />
								</a>
								<!--课堂名称与编号-->
								<div class="classroom-name">
									<div>
										旅游英语
										<span class="numbering">
							  				[编号N2132]
							  			</span>
									</div>
								</div>
							</div>
							<!--导航-->
							<div class="classroom-nav">
								<ul class="clearfix">
									<li>
                    <router-link to="/detail/home">课堂首页</router-link>
									</li>
									<li>
                     <router-link to="/detail/myclass" class="hvr-underline-from-center">我的课堂</router-link>
									</li>
									<li>
                     <router-link to="/detail/source" class="hvr-underline-from-center">资源中心</router-link>
                    
									</li>
									<li>
                     <router-link to="/detail/userbook" class="hvr-underline-from-center">用户手册</router-link>
                    
									</li>
									<li>
                     <router-link to="/detail/online" class="hvr-underline-from-center">在线客服</router-link>
                    
									</li>
								</ul>
							</div>
							<!--个人导航-->
							<div class="classroom-personal clearfix">
								<div>
									<!--提醒图标-->
									<span class="remind"></span>
									<!--下拉图标-->
									<span class="dropdown"></span>
									<!--头像-->
									<div class="avatar">
										<img src="images/classroom_avatar.jpg" alt="" />
									</div>
								</div>
							</div>
				</div>
    <div class="main-content">
       <router-view></router-view>

    </div>
  </div>
</template>
