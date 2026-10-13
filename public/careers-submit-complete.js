(() => {
  const token = new URLSearchParams(window.location.search).get('token')
  if (window.parent !== window && token) {
    window.parent.postMessage({ type: 'careers-application-received', token }, window.location.origin)
  }
})()
