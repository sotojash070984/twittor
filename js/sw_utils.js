//Guardar en el cache dinamico
function actualizarCacheDinamico(dynamicCache,requ,resp){
    if(resp.ok){
       return caches.open(dynamicCache).then(cache=>{
            cache.put(requ,resp.clone());

            return resp.clone();
        })
    }else{
        return resp;
    }
}