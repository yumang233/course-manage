import Vue from 'vue';
import Router from 'vue-router';

import courseHomeRoutes from "@/components/course-home/course-home.routes";
import courseDetailRoutes from "@/components/course-detail/course-detail.routes";

Vue.use(Router);

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/course'
    },
    ...courseHomeRoutes,
    ...courseDetailRoutes
  ],
});

export default router
