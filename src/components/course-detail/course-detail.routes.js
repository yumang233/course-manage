import courseDetail from './course-detail.vue';

import detailHomeRoutes from './detail-home/detail-home.routes.js'


import detailClassRoutes from './detail-class/detail-class.routes.js'
import detailSourceRoutes from './detail-source/detail-source.routes.js'
import detailUserBookRoutes from './user-book/user-book.routes.js'
import onlineCustomerRoutes from './online-customer/online-customer.routes.js'

const courseDetailRoutes = [{
  path: '/detail',
  component: courseDetail,
  redirect: '/detail/home',
  children: [
    ...detailHomeRoutes,
    ...detailClassRoutes,
    ...detailSourceRoutes,
    ...detailUserBookRoutes,
    ...onlineCustomerRoutes
  ]
}];

export default courseDetailRoutes;
