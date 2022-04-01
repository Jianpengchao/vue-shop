/** When your routing table is too long, you can split it into small modules**/

// import Layout from '@/layout'

const systemRouter = {
  path: '/system',
  // component: Layout,
  redirect: 'noRedirect',
  name: '档案查询',
  meta: {
    title: '档案查询',
    icon: 'system'
  },
  children: [
    {
      path: 'page1',
      component: () => import('@/views/page1'),
      name: 'page1',
      meta: { title: '个人查询', noCache: true }
    },
  ]
}

export default systemRouter
