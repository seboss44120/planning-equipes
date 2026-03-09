const CACHE="planning-cache";

self.addEventListener("install",e=>{

e.waitUntil(

caches.open(CACHE).then(cache=>{

return cache.addAll([

"/",
"/index.html",
"/planning.html",
"/conges.html",
"/css/style.css",
"/js/app.js"

])

})

)

});
