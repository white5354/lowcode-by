import React, { useEffect, useState } from 'react'
import { loadScript } from './utils'

function UmdComponent({ url }) {
  const [UmdCom, setUmdCom] = useState<any>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!url) {
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    console.log('开始加载脚本:', url)

    loadScript(url)
      .then(() => {
        console.log('脚本加载完成，window.ByText:', (window as any).ByText)
        const component = (window as any).ByText
        if (!component) {
          throw new Error('ByText is not found')
        }
        // 这里需要使用函数包裹，否则会报错, 因为 react 的组件是函数，
        // react中setState接受两种值，一个是新的状态值，一个是更新函数，当这里传入component时，
        // 如果直接写，会把他作为更新函数，而不是新的状态值，所以需要使用函数包裹
        setUmdCom(() => component)
        setIsLoading(false)
      })
      .catch((e) => {
        console.error('脚本加载失败，详细错误:', e)
        setError(e)
        setIsLoading(false)
      })
  }, [url])

  if (isLoading) {
    return <div>加载中...</div>
  }

  if (error) {
    return (
      <div>
        组件加载失败:
        {' '}
        {error.message}
      </div>
    )
  }

  return UmdCom ? <UmdCom /> : null
}

export default UmdComponent
