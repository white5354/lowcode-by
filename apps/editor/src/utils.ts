export function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    function onLoad() {
      script.onload = null
      script.onerror = null
      resolve(script)
    }
    script.onload = onLoad
    script.onerror = reject
    document.head.appendChild(script)
  })
}
