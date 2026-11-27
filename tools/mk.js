const fs=require('fs');
const path=require('path');const R=p=>path.join(__dirname,'..',p);const LEGQ=require(R('fontes/legislacao.json'));
const N=require(R('fontes/novas.js'));
const A=require(R('fontes/aulas.js'));
const O=Object.fromEntries(LEGQ.map(q=>[q.id,q]));
function leg(id,aula){const q=JSON.parse(JSON.stringify(O[id]));delete q.tri;if(id!=='q1')delete q.tabela;q.tipo='leg';q.aula=aula;q.area='Legislação';return q}
const ordem=[leg('q9','v3c'),N.jussaraCondicao,leg('q2','v3d'),N.perolandiaSubstantiva,N.padreEnunciacao,leg('q4','v3d'),N.rioQuentePontuacao,leg('q5','v3d'),N.jussaraAGente,leg('q8','v3c'),leg('q1','v3d'),N.buritiLivro];
const Q=ordem.map((q,i)=>{q=JSON.parse(JSON.stringify(q));q.id='q'+String(i+1).padStart(2,'0');q.ord=i+1;q.fase=i<4?'guiada':i<8?'meio':'solo';return q});
const RX=/\{([nsfxc]):([^}]*)\}/g;const plain=s=>s.replace(RX,'$2').replace(/\{([^}]*)\}/g,'$1');
const LEI={'9.394/1996':'nove mil, trezentos e noventa e quatro, de mil novecentos e noventa e seis','14.113/2020':'catorze mil, cento e treze, de dois mil e vinte','59/2009':'cinquenta e nove, de dois mil e nove','11.645/2008':'onze mil, seiscentos e quarenta e cinco, de dois mil e oito','108/2020':'cento e oito, de dois mil e vinte'};
function tts(s){
  s=plain(s);
  s=s.replace(/\d[\d.]*%?\s*\(([^)]+)\)/g,'$1');
  for(const k in LEI)s=s.split(k).join(LEI[k]);
  s=s.replace(/\b26-A\b/g,'vinte e seis A').replace(/\b212-A\b/g,'duzentos e doze A').replace(/\b79-B\b/g,'setenta e nove B');
  s=s.replace(/nº\s*/g,'número ').replace(/\bn\. (?=\d|[a-z])/g,'número ').replace(/\bno (?=número)/g,'');
  s=s.replace(/\bArts\.?/g,'Artigos').replace(/\barts\./g,'artigos').replace(/\bArt\.\s?/g,'Artigo ').replace(/\bart\.\s?/g,'artigo ');
  s=s.replace(/\bLDB\b/g,'L D B').replace(/\bLBI\b/g,'L B I').replace(/\bBNCC\b/g,'B N C C').replace(/\bPNE\b/g,'P N E').replace(/\bPPP\b/g,'P P P').replace(/\bCF\b/g,'Constituição Federal').replace(/\bEC\b/g,'Emenda Constitucional').replace(/\bFUNDEB\b/g,'Fundeb').replace(/\bDF\b/g,'Distrito Federal');
  s=s.replace(/(\d+)%/g,'$1 por cento').replace(/—/g,', ').replace(/…/g,',').replace(/\s*–\s*/g,', ').replace(/\s+/g,' ').trim();
  return s;
}
const F={};
F['intro']=tts(A.INTRO.fala);
A.AULAS.forEach(a=>{F['l-'+a.id]=tts(a.fala);F['l-'+a.id+'-p']=tts(a.falaP)});
Q.forEach(q=>{
  F[q.id+'-c']=tts('O que a questão pede. '+q.comando);
  if(q.texto)F[q.id+'-t']=tts(q.textoTitulo+'. '+q.texto.join(' '));
  ['A','B','C','D'].forEach(L=>{F[q.id+'-'+L]=tts('Alternativa '+L+'. '+plain(q.stem)+' '+plain(q.alts[L]))});
  const outras=['A','B','C','D'].filter(L=>L!==q.gab).map(L=>'Alternativa '+L+'. '+q.why[L].x).join(' ');
  F[q.id+'-x']=tts('A resposta certa é a alternativa '+q.gab+'. '+q.why[q.gab].x+' Agora, as outras. '+outras);
  F[q.id+'-r']=tts('Regra para guardar. '+q.licao);
});
const T={dado:{l:'Dado errado (número, prazo, nome)'},alcance:{l:'Alcance errado (restringe ou amplia)'},conceito:{l:'Conceito trocado por outro parecido'},finalidade:{l:'Finalidade ou função trocada'},oposto:{l:'Ideia oposta ao conceito'},outro:{l:'Verdadeira, mas de outro lugar'},certa:{l:'Correta'}};
const js='/* Gerado por tools/mk.js — não editar à mão */\nconst T='+JSON.stringify(T)+';\nconst INTRO='+JSON.stringify({titulo:A.INTRO.titulo,sub:A.INTRO.sub})+';\nconst AULAS='+JSON.stringify(A.AULAS.map(a=>{const b={...a};delete b.fala;delete b.falaP;return b}),null,1)+';\nconst Q='+JSON.stringify(Q,null,1)+';\n';
fs.writeFileSync(R('dados.js'),js);
fs.writeFileSync(R('falas.json'),JSON.stringify(F,null,1));
let tot=0;Object.values(F).forEach(t=>tot+=t.length);
console.log('questões',Q.length,'falas',Object.keys(F).length,'caracteres',tot);
