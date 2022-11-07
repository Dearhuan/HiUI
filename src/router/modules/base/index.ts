const getRandNum = (min: number, max: number) => {
  return parseInt((Math.random() * (max - min + 1) + min) + '');
}

type RouteItem = {
  path: string;
  name: string;
  zhName?: string;
  component: () => Promise<typeof import("*.vue")>;
}

const notFoundList: Array<RouteItem> = [
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/404-snow.vue')
  }
]

const randomNotFoundPath = notFoundList[getRandNum(0,1)]

const routes: Array<RouteItem> = [
  {
    path: '/',
    name: 'home',
    zhName: '首页',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/button',
    name: 'button',
    zhName: '按钮',
    component: () => import('@/views/ButtonView.vue')
  },
  {
    path: '/message',
    name: 'message',
    zhName: '消息提示',
    component: () => import('@/views/MessageView.vue')
  },
  {
    path: '/modal',
    name: 'modal',
    zhName: '消息弹窗',
    component: () => import('@/views/ModalView.vue')
  },
  {
    path: '/skeleton',
    name: 'skeleton',
    zhName: '骨架屏',
    component: () => import('@/views/SkeletonView.vue')
  },
  {
    path: '/timeLineGradient',
    name: 'timeLineGradient',
    zhName: '渐变时间线',
    component: () => import('@/views/TimeLineGradientView.vue')
  }
]

routes.push(randomNotFoundPath)

export default routes