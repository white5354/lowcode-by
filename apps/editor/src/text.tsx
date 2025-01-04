import React, { useEffect, useState } from 'react'
import { loadScript } from './utils'

function UmdComponent({ url }) {
  const [UmdCom, setUmdCom] = useState(null)
  useEffect(() => {
    console.log('url')
    if (!url)
      return
    loadScript(url).then(() => {
      console.log('window', (window as any).ByText)

      setUmdCom((window as any).ByText)
    })
  }, [url])
  return <UmdCom></UmdCom>
}

export default UmdComponent
