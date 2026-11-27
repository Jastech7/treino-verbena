/* Service worker — Treino Verbena. Muda VERSAO para forçar atualização. */
const VERSAO='treino-v1.0';
const SHELL=['./','index.html','style.css','app.js','dados.js','falas.json','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png'];
const AUDIO='treino-audio-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSAO).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSAO&&k!==AUDIO).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
function fatia(resp,range){
  const m=/bytes=(\d*)-(\d*)/.exec(range);if(!m)return resp;
  return resp.arrayBuffer().then(buf=>{
    const tot=buf.byteLength;let ini=m[1]?+m[1]:0;let fim=m[2]?+m[2]:tot-1;if(fim>=tot)fim=tot-1;
    return new Response(buf.slice(ini,fim+1),{status:206,statusText:'Partial Content',headers:{'Content-Type':resp.headers.get('Content-Type')||'audio/mpeg','Content-Range':`bytes ${ini}-${fim}/${tot}`,'Content-Length':String(fim-ini+1),'Accept-Ranges':'bytes'}});
  });
}
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);if(url.origin!==location.origin)return;
  const ehAudio=url.pathname.endsWith('.mp3');
  e.respondWith((async()=>{
    const range=req.headers.get('range');
    const cache=await caches.open(ehAudio?AUDIO:VERSAO);
    let hit=await cache.match(url.pathname,{ignoreSearch:true})||await cache.match(req,{ignoreSearch:true});
    if(hit)return range?fatia(hit.clone(),range):hit;
    try{
      const net=await fetch(ehAudio?url.pathname:req);
      if(net.ok&&net.status===200){cache.put(url.pathname,net.clone());}
      return range&&net.ok?fatia(net.clone(),range):net;
    }catch(err){
      if(req.mode==='navigate'){const c=await caches.open(VERSAO);return (await c.match('index.html'))||Response.error()}
      return Response.error();
    }
  })());
});
