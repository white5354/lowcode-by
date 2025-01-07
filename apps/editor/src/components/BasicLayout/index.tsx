import BasicHeaderLayout from '../BasicHeaderLayout'
import './index.less'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="basic-layout">
      <div className="basic-layout-header">
        <BasicHeaderLayout />
      </div>
      <div className="basic-layout-content">
        {children}
      </div>
    </div>
  )
}

export default Layout
