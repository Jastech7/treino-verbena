/* Treino Verbena · Normas em Foco — app.js */
'use strict';
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const RX=/\{([nsfxc]):([^}]*)\}/g;
const plain=s=>s.replace(RX,'$2').replace(/\{([^}]*)\}/g,'$1');
const boldBr=s=>esc(s).replace(/\{([^}]*)\}/g,'<b>$1</b>');
function hl(str){let out='',last=0,m;RX.lastIndex=0;while((m=RX.exec(str))){out+=esc(str.slice(last,m.index))+`<span class="h h-${m[1]}">${esc(m[2])}</span>`;last=RX.lastIndex}return out+esc(str.slice(last))}
function mmss(s){return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}
const L4=['A','B','C','D'];
const TIPO={leg:'Legislação',interp:'Interpretação',gram:'Gramática'};
const FASE={guiada:['Acompanhado','O app guia cada passo.'],meio:['Meio a meio','Você decide quando pedir ajuda.'],solo:['Sozinho','Resolva e só depois veja a autópsia.']};
const HOW=[['por_alto','Li por alto: não completei a frase'],['gemea','Caí na gêmea: não vi a palavra trocada'],['simbolo','Fiquei numa palavra parecida'],['conteudo','Não sabia o conteúdo'],['chute','Chutei']];
const DICA={por_alto:'Treine o passo 1: complete a frase inteira, alternativa por alternativa, antes de decidir.',gemea:'Compare as alternativas gêmeas com o detector e procure a palavra trocada, quase sempre no final da frase.',simbolo:'Pergunte: que conceito a lei ou a teoria atribui a essa palavra? Não escolha pelo som.',conteudo:'Volte à regra da questão e à mini-aula indicada.',chute:'Chute não é método: complete a frase e ache o núcleo de cada alternativa antes de marcar.'};

/* ---------- armazenamento ---------- */
const KEY='treino-verbena-v1';let MEM=null;
function load(){try{const r=localStorage.getItem(KEY);return r?JSON.parse(r):{}}catch(e){return MEM||{}}}
let D=load();D.aulas=D.aulas||{};D.q=D.q||{};D.vel=D.vel||1;D.visto=!!D.visto;
function save(){try{localStorage.setItem(KEY,JSON.stringify(D))}catch(e){MEM=D}}

/* ---------- estado ---------- */
const S={view:D.visto?'inicio':'intro',ai:0,apre:null,w:{},qi:null,R:null,cache:'',dl:null};

/* ---------- áudio ---------- */
const AU={el:new Audio(),ids:[],pos:-1,play:false,fb:false};
let FALAS=null;
function loadFalas(){return FALAS?Promise.resolve(FALAS):fetch('falas.json').then(r=>r.json()).then(j=>FALAS=j).catch(()=>FALAS={})}
function stopAU(){AU.play=false;AU.ids=[];AU.pos=-1;try{AU.el.pause()}catch(e){}try{speechSynthesis.cancel()}catch(e){}updAU()}
function playSeq(ids){stopAU();AU.ids=ids;AU.pos=0;AU.play=true;step()}
function step(){
  if(!AU.play||AU.pos>=AU.ids.length){stopAU();return}
  const id=AU.ids[AU.pos];updAU();
  const next=()=>{if(!AU.play)return;AU.pos++;step()};
  const el=AU.el;el.onended=next;el.onerror=()=>speak(id,next);
  el.src='audio/'+id+'.mp3';el.playbackRate=D.vel;
  const p=el.play();if(p&&p.catch)p.catch(()=>speak(id,next));
}
function speak(id,next){
  loadFalas().then(F=>{
    if(!AU.play)return;
    if(!('speechSynthesis' in window)||!F[id]){next();return}
    const u=new SpeechSynthesisUtterance(F[id]);u.lang='pt-BR';u.rate=D.vel;
    const v=speechSynthesis.getVoices().find(v=>/pt-BR/i.test(v.lang));if(v)u.voice=v;
    u.onend=next;u.onerror=next;speechSynthesis.speak(u);
    if(!AU.fb){AU.fb=true;toast('Áudio gravado ainda não instalado: usando a voz do aparelho.')}
  });
}
function updAU(){
  document.querySelectorAll('.au[data-ids]').forEach(b=>{
    const ids=b.dataset.ids.split(',');const on=AU.play&&ids.includes(AU.ids[AU.pos]);
    b.classList.toggle('on',on);const t=b.querySelector('.tx');if(t)t.textContent=on?'Parar':(b.dataset.l||'Ouvir');
  });
  document.querySelectorAll('[data-pl]').forEach(e=>e.classList.toggle('play',AU.play&&AU.ids[AU.pos]===e.dataset.pl));
}
function auBtn(ids,label,mini){return `<button class="au${mini?' mini':''}" data-act="au" data-ids="${ids.join(',')}" data-l="${esc(label)}" aria-label="${esc(label)}">🔊 <span class="tx">${esc(label)}</span></button>`}
function toast(msg){let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';t.style.cssText='position:fixed;left:50%;transform:translateX(-50%);bottom:84px;background:#17365d;color:#fff;padding:10px 16px;border-radius:12px;font-size:.9rem;z-index:50;max-width:90%;text-align:center';document.body.appendChild(t)}t.textContent=msg;t.style.display='block';clearTimeout(t._h);t._h=setTimeout(()=>t.style.display='none',3800)}

/* ---------- estatísticas ---------- */
const nAulas=()=>AULAS.filter(a=>D.aulas[a.id]).length;
const nResp=()=>Q.filter(q=>D.q[q.id]).length;
const nOk=()=>Q.filter(q=>D.q[q.id]&&D.q[q.id].ok).length;

/* ---------- render principal ---------- */
function render(){
  const nav=[['inicio','🏠','Início'],['aulas','📘','Aulas'],['treino','✏️','Treino'],['prog','📊','Progresso']];
  const cur=S.view==='aula'?'aulas':S.view==='q'?'treino':S.view==='intro'?'inicio':S.view;
  $('#nav').innerHTML=nav.map(([k,i,l])=>`<button data-act="go" data-v="${k}" aria-current="${cur===k}"><b>${i}</b>${l}</button>`).join('');
  $('#nav').style.display=S.view==='intro'?'none':'flex';
  const v=S.view;
  $('#app').innerHTML=v==='intro'?vIntro():v==='inicio'?vInicio():v==='aulas'?vAulas():v==='aula'?vAula():v==='treino'?vTreino():v==='q'?vQ():vProg();
  $('#vel').textContent=D.vel+'×';
  updAU();
}

/* ---------- ABERTURA ---------- */
function vIntro(){return `
<div class="hero"><span class="tag" style="background:#fff;color:#17365d">Normas em Foco · gratuito</span>
<h1>Treino Verbena</h1>
<p>Doze questões reais da banca Verbena/UFG, com voz, para treinar o que você viu nos vídeos 2 e 3 do canal: a leitura da frase inteira e a busca da ideia central.</p>
<div class="row">${auBtn(['intro'],'Ouvir a apresentação')}</div></div>
<h2>Como funciona</h2>
<div class="steps3">
 <div class="card"><div class="num">1</div><div><h3>Aprenda</h3><p>Nove cartões curtos resumem os vídeos. Cada cartão começa com uma <b>pergunta antes da resposta</b>: tentar responder, mesmo errando, ajuda a fixar.</p></div></div>
 <div class="card"><div class="num">2</div><div><h3>Treine</h3><p>Doze questões: 6 de legislação e 6 de Português (3 de interpretação). Nas quatro primeiras o app guia cada passo; nas quatro seguintes você pede ajuda quando quiser; nas últimas você resolve sozinho.</p></div></div>
 <div class="card"><div class="num">3</div><div><h3>Revise</h3><p>Depois de responder, a <b>autópsia</b> mostra por que cada alternativa está certa ou errada, qual foi a pegadinha e a regra para guardar. O progresso mostra onde você mais escorrega.</p></div></div>
</div>
<div class="card"><h3>Dicas de uso</h3>
<ul style="margin:6px 0 0;padding-left:1.2em"><li>Toque no botão <b>🔊</b> para ouvir o enunciado, as frases completas e a explicação. Use fones.</li><li>A velocidade da voz fica no botão <b>1×</b> no topo.</li><li><b>Instale no celular</b> para abrir como aplicativo e usar sem internet (o botão de instalar está na tela Início).</li><li>Seu progresso fica salvo só neste aparelho.</li></ul></div>
<div class="note warn"><b>Transparência.</b> Os enunciados e as alternativas são os da prova (ajustamos apenas hifenização, espaços e um erro de digitação). As <b>explicações são nossas</b>, não da banca. Estatísticas de provas passadas orientam a atenção, mas não preveem a prova. Para legislação, confira sempre a redação vigente.</div>
<button class="btn pri big" data-act="comecar">Começar</button>`}

/* ---------- INÍCIO ---------- */
function proxima(){
  const a=AULAS.find(a=>!D.aulas[a.id]);if(a)return {t:'aula',i:AULAS.indexOf(a),l:'Continuar: '+a.titulo};
  const q=Q.find(q=>!D.q[q.id]);if(q)return {t:'q',i:q.ord-1,l:'Continuar: questão '+q.ord};
  return {t:'prog',l:'Ver meu progresso'};
}
function vInicio(){
  const p=proxima();const pa=nAulas()/AULAS.length*100,pq=nResp()/Q.length*100;
  return `<div class="hero"><h1>Treino Verbena</h1><p>Leia a frase inteira. Ache a ideia central. Compare ideias, não palavras.</p>
  <button class="btn big" style="background:#fff;color:#17365d" data-act="cont">${esc(p.l)} ▸</button></div>
  <div class="grid g2" style="margin-top:14px">
   <div class="card"><h3>Aulas</h3><div class="pbar"><i style="width:${pa}%"></i></div><span class="small muted">${nAulas()} de ${AULAS.length} cartões</span></div>
   <div class="card"><h3>Questões</h3><div class="pbar"><i style="width:${pq}%"></i></div><span class="small muted">${nResp()} de ${Q.length} respondidas · ${nOk()} certas</span></div>
  </div>
  <h2>Ferramentas</h2>
  <div class="lst">
   <button class="item" data-act="intro"><span class="n">?</span><span class="t"><b>Como usar</b><span class="small muted">Rever a página de abertura</span></span></button>
   <button class="item" data-act="dl"><span class="n">⬇</span><span class="t"><b>Guardar as vozes para usar sem internet</b><span class="small muted" id="dlst">${esc(S.dl||'Baixa os áudios para este aparelho (uns 15 MB; use o Wi-Fi).')}</span></span></button>
   ${window.__ip?`<button class="item" data-act="inst"><span class="n">＋</span><span class="t"><b>Instalar como aplicativo</b><span class="small muted">Abre direto da tela inicial, sem navegador</span></span></button>`:`<div class="card small"><b>Instalar no celular:</b> no Android (Chrome), menu ⋮ → “Instalar aplicativo”. No iPhone (Safari), botão Compartilhar → “Adicionar à Tela de Início”.</div>`}
  </div>
  <p class="foot">Treino Verbena · Normas em Foco · material gratuito · v1.0</p>`;
}

/* ---------- AULAS ---------- */
function vAulas(){
  const bloco=(v,tt)=>`<div class="grp">${tt}</div><div class="lst">${AULAS.filter(a=>a.video===v).map(a=>`<button class="item ${D.aulas[a.id]?'done':''}" data-act="aula" data-i="${AULAS.indexOf(a)}"><span class="n">${D.aulas[a.id]?'✓':a.n}</span><span class="t"><b>${esc(a.titulo)}</b></span></button>`).join('')}</div>`;
  return `<h1>Mini-aulas</h1><p class="muted">Resumo dos vídeos 2 e 3. Cada cartão começa com uma pergunta: responda antes de ler a explicação.</p>`+bloco(2,'Vídeo 2 · O DNA da Verbena e o triângulo')+bloco(3,'Vídeo 3 · Tópico frasal e o método');
}
function vAula(){
  const a=AULAS[S.ai];const ans=S.apre;
  const pre=`<div class="card"><span class="tag">Antes de ler: pense</span><h3 style="margin-top:8px">${esc(a.pre.q)}</h3>${auBtn(['l-'+a.id+'-p'],'Ouvir a pergunta',true)}
  <div class="opts" style="margin-top:8px">${a.pre.ops.map((o,i)=>`<button data-act="apre" data-v="${i}" class="${ans!==null?(i===a.pre.ok?'right':(i===ans?'wrong':'')):''}" ${ans!==null?'disabled':''}>${esc(o)}</button>`).join('')}</div>
  ${ans!==null?`<div class="note ${ans===a.pre.ok?'ok':'warn'}"><b>${ans===a.pre.ok?'Boa!':'Quase.'}</b> ${ans===a.pre.ok?'Veja por quê:':'Veja a explicação:'}</div>`:''}</div>`;
  const corpo=ans!==null?`<div class="card" style="margin-top:12px">${a.corpo}${widget(a.widget)}<div class="row">${auBtn(['l-'+a.id],'Ouvir a explicação')}</div></div>`:'';
  const fim=ans!==null?`<div class="row" style="margin-top:14px"><button class="btn" data-act="anav" data-d="-1" ${S.ai===0?'disabled':''}>◂ Anterior</button><span class="sp"></span>${S.ai<AULAS.length-1?`<button class="btn pri" data-act="aok">Entendi, próximo ▸</button>`:`<button class="btn ok" data-act="aok">Entendi, ir ao treino ▸</button>`}</div>`:'';
  return `<div class="row" style="margin-top:14px"><button class="btn" data-act="go" data-v="aulas">← Aulas</button><span class="tag g">Vídeo ${a.video} · cartão ${S.ai+1} de ${AULAS.length}</span></div><h1>${esc(a.titulo)}</h1>${pre}${corpo}${fim}`;
}

/* ---------- widgets das aulas ---------- */
function widget(w){
  if(!w)return '';
  if(w==='completar'){const q=Q[2];const sel=S.w.comp;
    return `<div class="stem" style="margin:12px 0">O artigo 26-A estabelece como obrigatório <b>${sel?esc(plain(q.alts[sel])):'▢▢▢▢▢'}</b></div><div class="chips">${L4.map(l=>`<button class="chipn" style="${sel===l?'background:#f59e0b;color:#fff':''}" data-act="wcomp" data-v="${l}">${l}) ${esc(plain(q.alts[l]).replace(/\.$/,''))}</button>`).join('')}</div><p class="peq">Cada alternativa completa a frase de um jeito. A certa é a que completa com precisão. (Questão real: Padre Bernardo 2024.)</p>`}
  if(w==='pesos')return `<div class="bar3"><span style="flex:60;background:#17365d">Específicos 60</span><span style="flex:30;background:#2563eb">Português 30</span><span style="flex:10;background:#94a3b8">10</span></div><p class="peq">Pontos da prova objetiva (100). Demais disciplinas: 10 pontos.</p>`;
  if(w==='macetes')return `<div class="scroll"><table class="t"><tr><th>Macete</th><th>O que os dados mostram</th></tr>
   <tr><td>“Na dúvida, marque a letra que menos saiu”</td><td>Nenhuma letra aparece mais do que o acaso explicaria.</td></tr>
   <tr><td>“A mais longa costuma ser a certa”</td><td>É a mais longa em 21% dos casos; ao acaso seriam 25%.</td></tr>
   <tr><td>“Não cai a mesma letra duas vezes”</td><td>Padrão real (6% de repetição, contra 24% do acaso), mas é curiosidade da elaboração, não critério para marcar.</td></tr>
   <tr><td>“Desconfie de sempre, nunca, apenas”</td><td>Aparecem em menos de 1% das alternativas, tanto nas certas quanto nas erradas.</td></tr></table></div>
   <p class="peq">Base do Vídeo 2: 19 provas, 743 questões de quatro alternativas. Frequência histórica não é previsão de prova.</p>
   <div class="note warn"><b>Conclusão:</b> se não há atalho estatístico, o que sobra é leitura. E a armadilha típica é o par de alternativas quase gêmeas.</div>`;
  if(w==='triangulo'){
    const info={s:['1 · Símbolo','A palavra como está escrita na questão. É o que o candidato vê primeiro, e onde ele costuma parar.'],p:['2 · Pensamento','O conceito que essa palavra desperta. Precisa ser o conceito que a lei ou a teoria atribui à palavra, não o que “parece”.'],r:['3 · Referente','A coisa ou a situação concreta. Se você consegue imaginar a situação, entendeu o conceito.']};
    const v=S.w.tri||'s';
    return `<svg viewBox="0 -60 640 420" role="img" aria-label="Triângulo semiológico" style="width:100%;max-width:560px;display:block;margin:6px auto">
    <line x1="90" y1="270" x2="320" y2="50" stroke="#2563eb" stroke-width="4"/><line x1="320" y1="50" x2="550" y2="270" stroke="#2563eb" stroke-width="4"/><line x1="90" y1="270" x2="550" y2="270" stroke="#64748b" stroke-width="4" stroke-dasharray="10 9"/>
    ${[['s',90,270,'#dbeafe','#2563eb','símbolo'],['p',320,50,'#fef3c7','#f59e0b','pensamento'],['r',550,270,'#dcfce7','#16a34a','referente']].map(([k,x,y,f,s,l])=>`<g class="tri-v" data-act="wtri" data-v="${k}" role="button" tabindex="0"><circle cx="${x}" cy="${y}" r="${v===k?42:36}" fill="${f}" stroke="${s}" stroke-width="${v===k?6:3}"/><text x="${x}" y="${y+9}" text-anchor="middle" font-weight="800" font-size="28" fill="#172033">${k==='s'?1:k==='p'?2:3}</text><text x="${x}" y="${k==='p'?y-58:y+82}" text-anchor="middle" font-weight="800" font-size="30" fill="#172033">${l}</text></g>`).join('')}</svg>
    <p class="peq" style="text-align:center">Linha tracejada: não há ligação direta entre a palavra e a coisa.</p>
    <div class="note"><b>${info[v][0]}.</b> ${info[v][1]}</div>
    <p class="peq">Exemplo montado no estilo da banca (não é questão real): “Segundo a LBI, a concepção de produtos, ambientes, programas e serviços a serem usados por todas as pessoas, sem necessidade de adaptação ou de projeto específico, denomina-se… desenho universal”. Símbolo: <i>todas as pessoas, sem adaptação</i>. Pensamento: pensado desde o início para todos. Referente: a rampa prevista no projeto de uma escola nova.</p>`}
  if(w==='metodo'){
    const n=S.w.met||0;const alts=['classificar os estudantes ao final do bimestre, para decidir a aprovação.','acompanhar o percurso de aprendizagem, para orientar o ensino ao longo do processo.','medir a retenção de conteúdos por meio de provas padronizadas.','verificar, ao final do ano, se os objetivos previstos foram alcançados.'];
    const nuc=['classificar','acompanhar','medir','verificar'];
    return `<div class="stem" style="margin:12px 0"><b>No cotidiano escolar, a avaliação formativa caracteriza-se por</b>:</div>
    ${alts.map((a,i)=>`<div class="alt" style="margin:6px 0;${n>=3&&i===1?'border-color:#15803d;background:#dcfce7':''}"><b>${L4[i]}</b><div class="tx">${n>=1?'<span class="st">No cotidiano escolar, a avaliação formativa caracteriza-se por</span> ':''}${n>=2?`<span class="h" style="background:#fef3c7;border-bottom:2px solid #f59e0b;font-weight:700">${esc(nuc[i])}</span>${esc(a.slice(nuc[i].length))}`:esc(a)}</div></div>`).join('')}
    <div class="note">${n===0?'Passo 1: toque em “Mostrar” para completar cada frase.':n===1?'Cada alternativa agora é uma frase completa. Passo 2: ache o núcleo.':n===2?'Núcleos: classificar · acompanhar · medir · verificar. Quatro ideias diferentes. Passo 3: compare com o conceito.':'A formativa olha para o processo (acompanhar, orientar). As outras três olham para o fim: nota, instrumento, balanço. Resposta: B.'}</div>
    <div class="row">${n<3?`<button class="btn pri" data-act="wmet" data-d="1">${['Passo 1: completar','Passo 2: achar o núcleo','Passo 3: comparar'][n]}</button>`:''}${n>0?`<button class="btn" data-act="wmet" data-d="-1">Voltar</button>`:''}</div>`}
  if(w==='gemeas'){
    const s=S.w.gem;
    const a=s?'Acompanhar o percurso de aprendizagem, para <span class="dif">orientar o ensino</span>.':'Acompanhar o percurso de aprendizagem, para orientar o ensino.';
    const b=s?'Acompanhar o percurso de aprendizagem, para <span class="dif">atribuir a nota final</span>.':'Acompanhar o percurso de aprendizagem, para atribuir a nota final.';
    return `<div class="card" style="margin:12px 0"><p><b>1)</b> ${a}</p><p><b>2)</b> ${b}</p><button class="btn" data-act="wgem">${s?'Esconder':'Mostrar a diferença'}</button></div>
    <h3>Os 6 jeitos de a banca trocar a palavra</h3><div class="scroll"><table class="t">${['dado','alcance','conceito','finalidade','oposto','outro'].map((k,i)=>`<tr><td><b>${esc(T[k].l)}</b></td><td class="small muted">${['“800 horas” vira “600 horas”','“todos os níveis” vira “só o ensino fundamental”','uma teoria vira outra parecida (Piaget × behaviorismo)','“diagnosticar o sistema” vira “classificar o aluno”','“articular” vira “hierarquizar”','um fato real da lei, mas de outro artigo'][i]}</td></tr>`).join('')}</table></div>`}
  return '';
}

/* ---------- TREINO (lista) ---------- */
function vTreino(){
  const grupo=(f,tt)=>`<div class="grp">${tt}</div><div class="lst">${Q.filter(q=>q.fase===f).map(q=>{const r=D.q[q.id];return `<button class="item ${r?(r.ok?'done':'err'):''}" data-act="q" data-i="${q.ord-1}"><span class="n">${r?(r.ok?'✓':'✗'):q.ord}</span><span class="t"><b>${esc(q.tema)}</b><span class="small muted">${esc(q.prova)} ${q.ano} · questão ${q.n}</span></span><span class="tag ${q.tipo==='leg'?'':'am'}">${TIPO[q.tipo]}</span></button>`}).join('')}</div>`;
  return `<h1>Treino com questões reais</h1><p class="muted">Doze questões da Verbena/UFG: 6 de legislação e 6 de Português. O apoio diminui aos poucos: no começo o app guia, no fim você resolve sozinho.</p>
  ${grupo('guiada','Questões 1 a 4 · Acompanhado')}${grupo('meio','Questões 5 a 8 · Meio a meio')}${grupo('solo','Questões 9 a 12 · Sozinho')}`;
}

/* ---------- QUESTÃO ---------- */
function newR(i){const q=Q[i];const rep=!!D.q[q.id];return {i,step:rep?'dec':(q.fase==='guiada'?'ler':'dec'),ans:null,hint:0,t0:Date.now(),match:{},sel:null,chk:false,ns:null,how:null,rep}}
function ordemChips(q){const k=(q.ord*3)%4;const b=[0,1,2,3];const r=b.map(i=>L4[(i+k)%4]);return r.reverse()}
function vQ(){
  const q=Q[S.qi],R=S.R;
  const stepsAll=q.fase==='guiada'&&!R.rep?['ler','nuc','dec','aut']:['dec','aut'];
  const nome={ler:'1 Ler',nuc:'2 Núcleo',dec:q.fase==='guiada'&&!R.rep?'3 Decidir':'Decidir',aut:q.fase==='guiada'&&!R.rep?'4 Autópsia':'Autópsia'};
  const ix=stepsAll.indexOf(R.step===('nuc')&&!stepsAll.includes('nuc')?'dec':R.step);
  const bar=`<div class="steps">${stepsAll.map((s,i)=>`<span class="${i===ix?'cur':i<ix?'ok':''}">${nome[s]}</span>`).join('')}</div>`;
  const head=`<div class="row" style="margin-top:14px"><button class="btn" data-act="go" data-v="treino">← Questões</button><span class="tag ${q.tipo==='leg'?'':'am'}">${TIPO[q.tipo]}</span><span class="tag g">${FASE[q.fase][0]}</span><span class="sp"></span><button class="btn" data-act="qnav" data-d="-1" ${q.ord===1?'disabled':''}>◂</button><button class="btn" data-act="qnav" data-d="1" ${q.ord===Q.length?'disabled':''}>▸</button></div>
  <div class="small muted" style="margin:10px 0 2px">Questão ${q.ord} de ${Q.length} · Verbena/UFG · ${esc(q.prova)} ${q.ano} · questão ${q.n}</div>`;
  const texto=q.texto?`<details ${R.step==='aut'?'':'open'}><summary>Texto de apoio: “${esc(q.textoTitulo)}”</summary><div class="texto">${q.texto.map(p=>`<p>${esc(p)}</p>`).join('')}<p class="peq">${esc(q.textoFonte)}</p>${auBtn([q.id+'-t'],'Ouvir o texto',true)}</div></details>`:'';
  const corpo=R.step==='ler'?sLer(q,R):R.step==='nuc'?sNuc(q,R):R.step==='dec'?sDec(q,R):sAut(q,R);
  return head+bar+texto+corpo;
}
function frases(q){return `<div class="row" style="margin:8px 0">${auBtn(L4.map(l=>q.id+'-'+l),'Ouvir as 4 frases completas')}</div>`+L4.map(L=>`<div class="alt" data-pl="${q.id}-${L}" style="margin:8px 0"><b>${L}</b><div class="tx"><span class="st">${esc(plain(q.stem))}</span> ${esc(plain(q.alts[L]))}</div></div>`).join('')}
function sLer(q,R){return `<div class="note"><b>O que a questão pede?</b> ${boldBr(q.comando)}<div style="margin-top:6px">${auBtn([q.id+'-c'],'Ouvir',true)}</div></div>
 <div class="m-stem"><div class="stem">${hl(q.stem)}</div></div>
 <p class="muted small" style="margin-top:12px"><b>Passo 1 · Complete.</b> Junte o enunciado a cada alternativa e leia a frase inteira, uma de cada vez.</p>${frases(q)}
 <button class="btn pri big" data-act="step" data-v="nuc">Passo 2: achar o núcleo ▸</button>`}
function sNuc(q,R){
  const ord=ordemChips(q);const used=Object.values(R.match);
  const chips=`<div class="chips">${ord.map(c=>`<button class="chipn ${R.sel===c?'sel':''} ${used.includes(c)&&!R.chk?'used':''}" data-act="nchip" data-v="${c}" ${R.chk?'disabled':''}>${esc(q.nuc[c])}</button>`).join('')}</div>`;
  const alts=L4.map(L=>{const m=R.match[L];const cls=R.chk?(m===L?'right':'wrong'):'';
    return `<button class="alt ${cls}" data-act="nslot" data-v="${L}" ${R.chk?'disabled':''}><b>${L}</b><div class="tx"><div class="m-nuc">${R.chk?hl(q.alts[L]):esc(plain(q.alts[L]))}</div><div style="margin-top:6px">${m?`<span class="chipn">${esc(q.nuc[m])}</span>`:'<span class="vazio">toque aqui para ligar um núcleo</span>'}${R.chk&&m!==L?` <span class="small">→ o núcleo certo é <b>${esc(q.nuc[L])}</b></span>`:''}</div></div></button>`}).join('');
  const feito=Object.keys(R.match).length===4;
  return `<div class="note"><b>Passo 2 · Ache o núcleo.</b> Em cada frase, qual é a ideia central? Toque num núcleo e depois na alternativa a que ele pertence.</div>${chips}${alts}
  ${R.chk?`<div class="note ${R.ns>=.75?'ok':'warn'}"><b>${Math.round(R.ns*4)} de 4 núcleos certos.</b> ${R.ns>=.75?'Bom olho!':'Veja os destaques em âmbar: é a ideia central de cada frase.'}</div>`:''}
  <div class="row">${R.chk?'':`<button class="btn pri" data-act="nchk" ${feito?'':'disabled'}>Conferir</button>`}${q.fase!=='guiada'?`<button class="btn" data-act="step" data-v="dec">Voltar</button>`:''}<span class="sp"></span>${R.chk?`<button class="btn ok" data-act="step" data-v="dec">Passo 3: decidir ▸</button>`:''}</div>`;
}
function sDec(q,R){
  const mostraNuc=R.hint>=2||(R.chk&&R.ns!==null);
  return `${R.rep?'<div class="note warn">Você já respondeu esta questão. Refaça sem ajuda e compare.</div>':''}
  <div class="m-stem"><div class="stem">${hl(q.stem)}</div></div>
  ${q.fase==='guiada'&&!R.rep?'<p class="muted small" style="margin-top:12px"><b>Passo 3 · Compare os núcleos.</b> Com as ideias em mente, marque a alternativa que corresponde ao que a lei, o conceito ou o texto realmente diz.</p>':''}
  <div class="row" style="margin:10px 0">${auBtn(L4.map(l=>q.id+'-'+l),'Ouvir as 4 frases completas')}</div>
  ${L4.map(L=>`<button class="alt ${R.ans===L?'pick':''}" data-act="ans" data-v="${L}" data-pl="${q.id}-${L}"><b>${L}</b><div class="tx">${esc(plain(q.alts[L]))}${mostraNuc?`<div style="margin-top:6px"><span class="chipn">${esc(q.nuc[L])}</span></div>`:''}</div></button>`).join('')}
  ${R.hint>=1?`<div class="note warn"><b>Dica 1 · O que a questão pede.</b> ${boldBr(q.comando)}</div>`:''}
  ${R.hint>=2&&!R.chk?`<div class="note warn"><b>Dica 2.</b> O núcleo de cada alternativa está sob o texto dela.</div>`:''}
  <div class="row" style="margin-top:6px">${q.fase!=='guiada'||R.rep?`<button class="btn" data-act="hint" ${R.hint>=2?'disabled':''}>${R.hint===0?'Dica 1 · O que pede':'Dica 2 · Mostrar núcleos'}</button>`:''}${q.fase==='meio'&&!R.chk?`<button class="btn" data-act="step" data-v="nuc">Treinar o núcleo</button>`:''}<span class="sp"></span><button class="btn pri" data-act="resp" ${R.ans?'':'disabled'}>Responder</button></div>`;
}
function sAut(q,R){
  const r=D.q[q.id]||{};const ok=R.ans===q.gab;
  const how=ok?`<p class="small"><b>Como foi?</b></p><div class="reasons">${[['certeza','Tinha certeza'],['chute','Chutei e acertei']].map(([k,l])=>`<button data-act="how" data-v="${k}" aria-pressed="${r.how===k}">${l}</button>`).join('')}</div>`
   :`<p class="small"><b>Por que errei?</b> (marque o que mais se aproxima)</p><div class="reasons">${HOW.map(([k,l])=>`<button data-act="how" data-v="${k}" aria-pressed="${r.how===k}">${l}</button>`).join('')}</div>${r.how?`<div class="note warn" style="margin-top:10px">${esc(DICA[r.how]||'')}</div>`:''}`;
  const outras=L4.filter(L=>L!==q.gab).map(L=>{const w=q.why[L];return `<div class="verd ${L===R.ans?'wrong':''}"><b>Alternativa ${L}</b> ${L===R.ans?'<span class="tag" style="background:#fee2e2;color:#b91c1c">você marcou</span> ':''}<span class="tag g">${esc(T[w.t].l)}</span><div class="m-all stem" style="margin:8px 0;font-size:.98rem">${hl(q.alts[L])}</div><p class="small" style="margin:0">${esc(w.x)}</p></div>`}).join('');
  const tw=S.tw||['A','B'];
  const dd=diff(plain(q.alts[tw[0]]),plain(q.alts[tw[1]]));
  return `<div class="note ${ok?'ok':'bad'}"><b>${ok?'✓ Você acertou.':'✗ Você marcou '+R.ans+'; o gabarito é '+q.gab+'.'}</b> Tempo: ${mmss(r.secs||0)}${r.hint?` · ${r.hint} dica(s)`:''}.</div>
  <div class="card"><h3>Por que a ${q.gab} é a certa</h3><div class="m-all stem" style="margin:8px 0">${hl(q.alts[q.gab])}</div><p style="margin:.3em 0">${esc(q.why[q.gab].x)}</p><div class="row">${auBtn([q.id+'-x'],'Ouvir a explicação completa')}</div></div>
  <div style="margin-top:10px">${how}</div>
  <details><summary>Por que as outras caem (as armadilhas)</summary><div class="leg"><span class="l-n">núcleo</span><span class="l-x">armadilha</span><span class="l-f">confere com o texto</span></div>${outras}</details>
  ${q.tabela?`<details><summary>Em colunas: compare item por item</summary>${tabela(q.tabela)}</details>`:''}
  <details><summary>Comparar duas alternativas (detector de gêmeas)</summary><div class="twin"><div class="row"><select data-act="twin" data-w="0">${L4.map(o=>`<option ${o===tw[0]?'selected':''}>${o}</option>`).join('')}</select><span>×</span><select data-act="twin" data-w="1">${L4.map(o=>`<option ${o===tw[1]?'selected':''}>${o}</option>`).join('')}</select></div><p style="margin-top:10px"><b>${tw[0]})</b> ${dd.a}</p><p><b>${tw[1]})</b> ${dd.b}</p><p class="peq">As palavras em amarelo são as que diferem.</p></div></details>
  <div class="card" style="margin-top:12px;border-color:#15803d"><h3>Regra para guardar</h3><p style="margin:.3em 0">${esc(q.licao)}</p><p class="peq">Fonte do conteúdo: ${esc(q.fonte)}. Confira sempre a redação vigente.</p><div class="row">${auBtn([q.id+'-r'],'Ouvir a regra')}<button class="btn" data-act="aulaq" data-v="${q.aula}">Rever a mini-aula</button></div></div>
  <div class="row" style="margin-top:14px"><button class="btn" data-act="redo">Refazer</button><span class="sp"></span>${q.ord<Q.length?`<button class="btn ok" data-act="qnav" data-d="1">Próxima questão ▸</button>`:`<button class="btn ok" data-act="go" data-v="prog">Ver meu progresso ▸</button>`}</div>`;
}
function tabela(tb){return `<div class="scroll"><table class="t">${tb.map((r,i)=>`<tr>${r.map(c=>i===0?`<th>${esc(c)}</th>`:`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table></div>`}
function diff(a,b){const A=a.split(/\s+/),B=b.split(/\s+/),n=s=>s.toLowerCase().replace(/[.,;:()“”"]/g,'');const dp=Array.from({length:A.length+1},()=>new Array(B.length+1).fill(0));for(let i=A.length-1;i>=0;i--)for(let j=B.length-1;j>=0;j--)dp[i][j]=n(A[i])===n(B[j])?dp[i+1][j+1]+1:Math.max(dp[i+1][j],dp[i][j+1]);const da=new Set(),db=new Set();let i=0,j=0;while(i<A.length&&j<B.length){if(n(A[i])===n(B[j])){i++;j++}else if(dp[i+1][j]>=dp[i][j+1]){da.add(i++)}else{db.add(j++)}}while(i<A.length)da.add(i++);while(j<B.length)db.add(j++);const f=(arr,set)=>arr.map((w,k)=>set.has(k)?`<span class="dif">${esc(w)}</span>`:esc(w)).join(' ');return {a:f(A,da),b:f(B,db)}}

/* ---------- PROGRESSO ---------- */
function vProg(){
  const rs=Q.filter(q=>D.q[q.id]);const ok=rs.filter(q=>D.q[q.id].ok);
  const tempo=rs.length?Math.round(rs.reduce((t,q)=>t+(D.q[q.id].secs||0),0)/rs.length):0;
  const porTipo=Object.keys(TIPO).map(k=>{const t=Q.filter(q=>q.tipo===k);const r=t.filter(q=>D.q[q.id]);const o=r.filter(q=>D.q[q.id].ok);return [TIPO[k],o.length,r.length,t.length]});
  const peg={};rs.filter(q=>!D.q[q.id].ok).forEach(q=>{const t=q.why[D.q[q.id].ans].t;peg[t]=(peg[t]||0)+1});
  const pegA=Object.entries(peg).sort((a,b)=>b[1]-a[1]);
  const cnt={};HOW.forEach(([k])=>cnt[k]=0);rs.filter(q=>!D.q[q.id].ok).forEach(q=>{const h=D.q[q.id].how;if(h&&cnt[h]!==undefined)cnt[h]++});
  const mx=Math.max(1,...Object.values(cnt));const topH=Object.entries(cnt).sort((a,b)=>b[1]-a[1])[0];
  const sorte=rs.filter(q=>D.q[q.id].ok&&D.q[q.id].how==='chute').length;
  const rev=Q.filter(q=>D.q[q.id]&&!D.q[q.id].ok);
  return `<h1>Seu progresso</h1><p class="muted">Fica guardado só neste aparelho.</p>
  <div class="grid g2"><div class="card"><div class="big">${nAulas()}/${AULAS.length}</div><p style="margin:4px 0 0">cartões de aula</p></div><div class="card"><div class="big">${ok.length}/${rs.length||0}</div><p style="margin:4px 0 0">acertos nas respondidas${rs.length?` · tempo médio ${mmss(tempo)}`:''}</p></div></div>
  <h2>Por tipo de questão</h2><div class="card bars">${porTipo.map(([n,o,r,t])=>`<div class="br"><span>${n}</span><div class="bg"><i style="width:${t?o/t*100:0}%"></i></div><b>${o}/${t}</b></div>`).join('')}<p class="peq">Barra: acertos em relação ao total de questões de cada tipo.</p></div>
  <h2>Que pegadinhas mais pegam você</h2><div class="card">${pegA.length?pegA.map(([k,n])=>`<p style="margin:.3em 0"><b>${n}×</b> ${esc(T[k].l)}</p>`).join('')+`<div class="note warn"><b>Treine primeiro:</b> ${esc({dado:'confira número, prazo e nome palavra por palavra.',alcance:'desconfie de recortes: só, apenas, uma etapa, uma faixa de idade.',conceito:'ligue a palavra ao conceito, não ao som.',finalidade:'leia até o fim: a finalidade fecha a frase.',oposto:'procure o verbo que contraria a ideia do conceito.',outro:'verifique o endereço: o artigo ou o trecho do texto.'}[pegA[0][0]]||'')}</div>`:'<p class="muted">Quando você errar, o app mostra aqui qual tipo de pegadinha pegou você.</p>'}</div>
  <h2>Por que você erra</h2><div class="card bars">${rev.length?HOW.map(([k,l])=>`<div class="br"><span>${esc(l)}</span><div class="bg"><i style="width:${cnt[k]/mx*100}%"></i></div><b>${cnt[k]}</b></div>`).join('')+(topH&&topH[1]>0?`<div class="note warn"><b>Onde treinar:</b> ${esc(DICA[topH[0]])}</div>`:''):'<p class="muted">Sem erros marcados ainda.</p>'}${sorte?`<div class="note"><b>${sorte}</b> acerto(s) foram chute. Vale rever: acerto sem método não se repete.</div>`:''}</div>
  <h2>Para revisar</h2>${rev.length?`<div class="lst">${rev.map(q=>`<button class="item err" data-act="q" data-i="${q.ord-1}"><span class="n">✗</span><span class="t"><b>${q.ord}. ${esc(q.tema)}</b><span class="small muted">você marcou ${D.q[q.id].ans}; gabarito ${q.gab}</span></span></button>`).join('')}</div>`:'<div class="card muted">Nenhuma questão errada para revisar.</div>'}
  <div class="row" style="margin-top:24px">${S.conf?`<span class="small">Apagar todo o progresso?</span><button class="btn" data-act="reset" data-v="yes">Sim, apagar</button><button class="btn" data-act="reset" data-v="no">Cancelar</button>`:`<button class="btn" data-act="reset" data-v="ask">Zerar progresso</button>`}</div>`;
}

/* ---------- eventos ---------- */
function openQ(i){stopAU();S.qi=i;S.R=newR(i);S.tw=['A','B'];S.view='q';scrollTo(0,0)}
function openAula(i){stopAU();S.ai=i;S.apre=D.aulas[AULAS[i].id]&&D.aulas[AULAS[i].id].pre!==undefined?D.aulas[AULAS[i].id].pre:null;S.w={};S.view='aula';scrollTo(0,0)}
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]');if(!b||b.tagName==='SELECT'||b.tagName==='OPTION')return;
  const a=b.dataset.act,v=b.dataset.v,q=S.qi!==null?Q[S.qi]:null,R=S.R;
  switch(a){
   case 'au':{const ids=b.dataset.ids.split(',');if(AU.play&&AU.ids.join()===ids.join()){stopAU()}else playSeq(ids);return}
   case 'go':stopAU();S.view=v;S.conf=false;scrollTo(0,0);break;
   case 'comecar':D.visto=true;save();S.view='inicio';scrollTo(0,0);break;
   case 'intro':stopAU();S.view='intro';scrollTo(0,0);break;
   case 'cont':{const p=proxima();if(p.t==='aula')openAula(p.i);else if(p.t==='q')openQ(p.i);else S.view='prog';break}
   case 'aula':openAula(+b.dataset.i);break;
   case 'aulaq':{const i=AULAS.findIndex(x=>x.id===v);if(i>=0)openAula(i);break}
   case 'apre':S.apre=+v;break;
   case 'aok':{const id=AULAS[S.ai].id;D.aulas[id]={pre:S.apre,ok:S.apre===AULAS[S.ai].pre.ok};save();if(S.ai<AULAS.length-1)openAula(S.ai+1);else{stopAU();S.view='treino';scrollTo(0,0)}break}
   case 'anav':openAula(S.ai+(+b.dataset.d));break;
   case 'wcomp':S.w.comp=v;break;
   case 'wtri':S.w.tri=v;break;
   case 'wmet':S.w.met=Math.max(0,Math.min(3,(S.w.met||0)+(+b.dataset.d)));break;
   case 'wgem':S.w.gem=!S.w.gem;break;
   case 'q':openQ(+b.dataset.i);break;
   case 'qnav':openQ(S.qi+(+b.dataset.d));break;
   case 'step':stopAU();R.step=v;scrollTo(0,0);break;
   case 'nchip':R.sel=R.sel===v?null:v;break;
   case 'nslot':{const L=v;if(R.sel){for(const k in R.match)if(R.match[k]===R.sel)delete R.match[k];R.match[L]=R.sel;R.sel=null}else if(R.match[L])delete R.match[L];break}
   case 'nchk':{R.chk=true;R.ns=L4.filter(L=>R.match[L]===L).length/4;break}
   case 'ans':R.ans=v;break;
   case 'hint':R.hint=Math.min(2,R.hint+1);break;
   case 'resp':{stopAU();const secs=Math.round((Date.now()-R.t0)/1000);D.q[q.id]={ok:R.ans===q.gab,ans:R.ans,secs,hint:R.hint,nuc:R.ns,how:null,ts:Date.now()};save();R.step='aut';scrollTo(0,0);break}
   case 'how':{const r=D.q[q.id];r.how=r.how===v?null:v;save();break}
   case 'redo':stopAU();S.R=newR(S.qi);S.R.rep=true;S.R.step='dec';scrollTo(0,0);break;
   case 'reset':if(v==='ask')S.conf=true;else{S.conf=false;if(v==='yes'){D.aulas={};D.q={};save()}}break;
   case 'dl':baixar();return;
   case 'inst':if(window.__ip){window.__ip.prompt();window.__ip=null}break;
  }
  render();
});
document.addEventListener('change',e=>{const s=e.target;if(s.dataset&&s.dataset.act==='twin'){S.tw=S.tw||['A','B'];S.tw[+s.dataset.w]=s.value;render()}});
$('#vel').addEventListener('click',()=>{const o=[1,1.15,1.3];D.vel=o[(o.indexOf(D.vel)+1)%o.length];save();AU.el.playbackRate=D.vel;$('#vel').textContent=D.vel+'×'});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();window.__ip=e;if(S.view==='inicio')render()});

/* ---------- offline ---------- */
async function baixar(){
  if(!('caches' in window)){toast('Este navegador não guarda arquivos offline.');return}
  const F=await loadFalas();const ids=Object.keys(F);const c=await caches.open('treino-audio-v1');let ok=0,falt=0;
  const set=t=>{S.dl=t;const e=$('#dlst');if(e)e.textContent=t};
  for(let i=0;i<ids.length;i++){
    const u='audio/'+ids[i]+'.mp3';
    try{const hit=await c.match(u);if(hit){ok++}else{const r=await fetch(u);if(r.ok){await c.put(u,r);ok++}else falt++}}catch(e){falt++}
    if(i%5===0)set(`Guardando… ${ok} de ${ids.length}`);
  }
  set(falt&&!ok?'Os áudios gravados ainda não foram publicados. O app usa a voz do aparelho.':`Pronto: ${ok} de ${ids.length} áudios guardados.${falt?' Faltam '+falt+'.':''}`);
}

if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
render();
