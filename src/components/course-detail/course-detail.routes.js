import courseDetail from './course-detail.vue';

import detailHomeRoutes from './detail-home/detail-home.routes.js'

const courseDetailRoutes = [{
  path: '/detail',
  component: courseDetail,
  children: [
    ...detailHomeRoutes
  ]
}];

export default courseDetailRoutes;
