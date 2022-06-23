workbox.skipWaiting()
workbox.clientsClaim()
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
self.addEventListener('install', event => { 
  const asyncInstall = new Promise(resolve => { 
    console.log("Waiting to resolver...") 
    setTimeout(resolve, 5000) 
  }) 
  event.waitUntil(asyncInstall) 
})
self.addEventListener('activate', event => { 
  console.log('activate') 
})