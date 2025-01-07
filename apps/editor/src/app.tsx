import type { IMaterial } from '@by/shared'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
// TODO: 需要修改,配置不生效，但是约定式路由现在是能使用的
import routes from '~react-pages'
import BasicLayout from './components/BasicLayout'
import './app.less'

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BasicLayout>
        {useRoutes(routes)}
      </BasicLayout>
    </Suspense>
  )
}

export default App
