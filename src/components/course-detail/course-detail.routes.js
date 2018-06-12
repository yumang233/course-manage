import courseDetail from './course-detail.vue';

import detailHomeRoutes from './detail-home/detail-home.routes.js'

const courseDetailRoutes = [{
  path: '/detail',
  component: courseDetail,
  redirect: '/detail/home',
  children: [
    ...detailHomeRoutes
  ]
}];

export default courseDetailRoutes;
