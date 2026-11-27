// Seis questões de Português (novas) — texto do enunciado e das alternativas conforme a prova (só hifenização/espacos ajustados)
module.exports = {
jussaraCondicao: {
  prova:'Jussara', ano:2024, n:10, gab:'B', area:'Português', tema:'Orações: relação de sentido', tipo:'gram', aula:'v3c',
  fonte:'Gramática: orações subordinadas adverbiais (condição)',
  stem:"No trecho “{s:Se} eu tivesse parado de treinar, não teria conquistado minhas medalhas”, a {s:relação sintático-semântica} estabelecida {s:entre as orações} é de",
  alts:{A:"{n:alternância}.",B:"{n:condição}.",C:"{n:dúvida}.",D:"{n:explicação}."},
  comando:"Pede o tipo de relação entre as duas orações do trecho. A pista mais forte está dentro da própria frase: o {se} que a abre.",
  leitura:"Cada alternativa é o nome de uma relação. O núcleo é o que essa relação significa. Compare cada significado com o que a frase realmente faz.",
  nuc:{A:'ou uma coisa, ou outra',B:'se isto, então aquilo',C:'incerteza sobre algo',D:'porque: justifica a primeira'},
  why:{
   A:{t:'conceito',x:'Alternância é “ou… ou”, “ora… ora”: duas possibilidades que se revezam. A frase não oferece escolha nenhuma.'},
   B:{t:'certa',x:'O “se” abre uma hipótese, e a segunda oração é a consequência dela: “se eu tivesse parado, não teria conquistado”. Essa é a relação de condição.'},
   C:{t:'conceito',x:'Dúvida apareceria com “talvez”, “quem sabe”, “será que”. A frase monta uma hipótese, não uma incerteza.'},
   D:{t:'conceito',x:'Explicação usa “porque”, “pois”, “já que”: a segunda oração justificaria a primeira. Aqui a segunda é consequência da primeira.'}
  },
  licao:"A conjunção é a pista: “se” indica condição; “ou… ou”, alternância; “pois” e “porque”, explicação; “mas”, oposição. Depois confira: a segunda oração é a consequência da primeira? Aqui, é."
},
perolandiaSubstantiva: {
  prova:'Perolândia', ano:2024, n:10, gab:'B', area:'Português', tema:'Orações substantivas', tipo:'gram', aula:'v3c',
  fonte:'Gramática: orações subordinadas substantivas',
  stem:"No período “Não era proibido {s:que as pessoas se manifestassem}”, a {s:oração subordinada substantiva} é",
  alts:{A:"{n:objetiva direta}.",B:"{n:subjetiva}.",C:"{n:objetiva indireta}.",D:"{n:predicativa}."},
  comando:"Pede a função da oração “que as pessoas se manifestassem” dentro do período: o que ela é para a oração principal?",
  leitura:"Os quatro nomes são as funções possíveis de uma oração substantiva. Teste prático: troque a oração por “isso” e veja que papel o “isso” faz na frase.",
  nuc:{A:'complemento direto do verbo',B:'sujeito da oração principal',C:'complemento indireto (com preposição)',D:'predicativo (completa o verbo “ser”)'},
  why:{
   A:{t:'conceito',x:'Objetiva direta completaria um verbo transitivo direto (“Eu quero que você venha”). Aqui “era proibido” não pede complemento: a oração é justamente aquilo que era proibido.'},
   B:{t:'certa',x:'Trocando por “isso”: “Isso não era proibido.” O “isso” é o sujeito. Logo, a oração é subjetiva.'},
   C:{t:'conceito',x:'Objetiva indireta exige um verbo que peça preposição (“Lembrei-me de que…”). Não há verbo nem preposição pedindo a oração.'},
   D:{t:'conceito',x:'Predicativa completa o verbo “ser”, dizendo o que o sujeito é (“O problema é que…”). Aqui a oração não descreve o sujeito: ela é o sujeito.'}
  },
  licao:"Teste do “isso”: troque a oração substantiva por “isso”. Se “isso” fica como sujeito (“Isso não era proibido”), a oração é subjetiva. Se fica como complemento do verbo, é objetiva (direta ou indireta). Se completa o verbo “ser”, é predicativa."
},
padreEnunciacao: {
  prova:'Padre Bernardo', ano:2024, n:1, gab:'A', area:'Português', tema:'Interpretação: tipo de texto', tipo:'interp', aula:'v3e',
  fonte:'Tipologia textual (expositivo, narrativo, injuntivo, dissertativo-argumentativo)',
  stem:"{c:Releia o trecho a seguir.} {c:Em outubro, 5.569 municípios brasileiros elegerão prefeitos e vereadores — mas Brasília e outras regiões administrativas do Distrito Federal, também chamadas “cidades-satélites”, não estão nesta conta.} {f:A área tem uma organização política distinta porque o Distrito Federal acumula características de município e Estado, e suas “cidades-satélites” não são tratadas como municípios.} O trecho acima apresenta um {s:modo de enunciação}",
  alts:{A:"{n:expositivo}.",B:"{n:narrativo}.",C:"{n:injuntivo}.",D:"{n:dissertativo-argumentativo}."},
  comando:"Pede o modo como o trecho está construído: ele conta, ordena, defende ou explica? O núcleo do trecho está no que ele faz com a informação.",
  leitura:"Cada alternativa é um tipo de texto. O núcleo é a função de cada tipo: explicar, contar, ordenar, defender. Pergunte ao trecho o que ele faz.",
  nuc:{A:'explicar e informar',B:'contar fatos em sequência',C:'dar ordens ou instruções',D:'defender um ponto de vista'},
  why:{
   A:{t:'certa',x:'O trecho informa um fato (o DF não elege prefeitos) e explica a razão disso. Não conta uma história, não dá ordens e não defende opinião: é um texto expositivo.'},
   B:{t:'conceito',x:'Texto narrativo conta acontecimentos em sequência, com personagens e tempo. O trecho não narra nada: ele explica uma situação.'},
   C:{t:'conceito',x:'Texto injuntivo orienta ou manda fazer algo, geralmente com verbos no imperativo (“faça”, “misture”). Não há ordem nem instrução no trecho.'},
   D:{t:'conceito',x:'Parece argumentativo por causa do “porque”, mas ali ele só explica um fato. Falta um ponto de vista a defender com argumentos.'}
  },
  licao:"Pergunte ao trecho o que ele faz: contar (narrativo), ordenar (injuntivo), defender uma opinião (dissertativo-argumentativo) ou explicar e informar (expositivo). O “porque” sozinho não torna um texto argumentativo: ele pode só explicar."
},
rioQuentePontuacao: {
  prova:'Rio Quente', ano:2024, n:9, gab:'A', area:'Português', tema:'Pontuação', tipo:'gram', aula:'v3d',
  fonte:'Gramática: emprego dos sinais de pontuação',
  stem:"Sobre as regras e usos da {s:pontuação}, é possível {s:afirmar} que o {s:sinal de}",
  alts:{
   A:"{n:ponto e vírgula} é utilizado em {f:comparações ou contrastes} e para {f:separar orações coordenadas}.",
   B:"{n:dois-pontos} é utilizado para citar a fala de alguém, iniciar uma enumeração e {x:indicar fim de frases declarativas}.",
   C:"{n:reticências} é utilizado para interrupções, hesitações e {x:em fim de frases interrogativas diretas}.",
   D:"{n:travessão} é utilizado para isolar períodos ou expressões e {x:unir elementos enumerados em série}."},
  comando:"Pede qual afirmação sobre um sinal de pontuação é correta. Em alternativas-lista, basta um item falso para derrubar a alternativa inteira.",
  leitura:"Cada alternativa nomeia um sinal e lista usos. As erradas misturam usos verdadeiros com um falso, quase sempre no final. Leia cada lista até o último item.",
  nuc:{A:'ponto e vírgula: contraste e coordenadas',B:'dois-pontos, mas “fim de frase”',C:'reticências, mas “pergunta direta”',D:'travessão, mas “unir enumeração”'},
  why:{
   A:{t:'certa',x:'Gabarito da banca: o ponto e vírgula separa orações coordenadas e marca contrastes ou comparações. Todos os itens da lista conferem.'},
   B:{t:'conceito',x:'Os dois-pontos citam falas e iniciam enumerações, mas não encerram frases. Indicar o fim de uma frase declarativa é função do ponto final.'},
   C:{t:'conceito',x:'As reticências marcam interrupção e hesitação. O fim de uma pergunta direta é marcado pelo ponto de interrogação.'},
   D:{t:'conceito',x:'O travessão isola expressões e marca falas, mas não une os itens de uma enumeração: isso cabe à vírgula.'}
  },
  licao:"Alternativa-lista: um único item falso derruba tudo, e ele costuma ficar no fim. Leia até o último item. Memória: dois-pontos anunciam (fala, enumeração); o ponto encerra; a interrogação fecha pergunta; reticências suspendem."
},
jussaraAGente: {
  prova:'Jussara', ano:2024, n:9, gab:'A', area:'Português', tema:'Interpretação: efeito de sentido', tipo:'interp', aula:'v3e',
  fonte:'Interpretação: pronome “a gente” e interlocução (depoimento de Rebeca Andrade)',
  stem:"No trecho “A gente vê como a ginástica está crescendo no Brasil. Incentivo e investimento nunca são demais. {s:A gente} ainda precisa, sim, ter mais esportes – não só a ginástica – em lugares públicos”, ao fazer uso de “a gente”, Rebeca {s:visa}",
  alts:{
   A:"{n:engajar} em seu discurso {f:outros interlocutores}.",
   B:"{n:enfatizar} discursivamente a {x:terceira pessoa do plural}.",
   C:"{n:sintetizar} semanticamente as {x:marcas verbais de plural}.",
   D:"{n:antecipar} os sentidos presentes na mensagem {x:dos ouvintes}."},
  comando:"Pede o objetivo de Rebeca ao usar “a gente”. O verbo {visa} pede uma finalidade: para que ela escolheu essa expressão?",
  leitura:"O núcleo de cada alternativa é o verbo que abre: engajar, enfatizar, sintetizar, antecipar. Cada um atribui uma finalidade diferente a “a gente”.",
  nuc:{A:'convocar o outro para o discurso',B:'falar de “eles”, os outros',C:'resumir o plural dos verbos',D:'adivinhar o que o ouvinte pensa'},
  why:{
   A:{t:'certa',x:'“A gente” equivale a “nós”: inclui quem fala e quem ouve. Ao dizer “a gente vê” e “a gente precisa”, Rebeca chama os interlocutores para dentro do discurso.'},
   B:{t:'conceito',x:'“A gente” aproxima quem fala de quem ouve, não fala de “eles”. O sentido é de “nós”, não da terceira pessoa do plural.'},
   C:{t:'conceito',x:'Com “a gente”, o verbo fica no singular (“a gente vê”, “a gente precisa”). Não há marcas verbais de plural para sintetizar.'},
   D:{t:'finalidade',x:'Nada no trecho tenta adivinhar ou antecipar a mensagem dos ouvintes. A finalidade é incluí-los, não prever o que pensam.'}
  },
  licao:"“A gente” é “nós” em linguagem informal: inclui quem fala e quem ouve, com o verbo no singular. Em questão de “para quê”, procure a finalidade discursiva. Aqui, a finalidade é envolver o interlocutor."
},
buritiLivro: {
  prova:'Buriti Alegre', ano:2026, n:10, gab:'C', area:'Português', tema:'Interpretação: ideia do autor', tipo:'interp', aula:'v3e',
  fonte:'Interpretação de texto: VERSIGNASSI, Alexandre. O fim do livro de papel. Superinteressante, 2010',
  textoTitulo:'O fim do livro de papel',
  texto:["Só 122 livros. Era o que a Universidade de Cambridge tinha em 1427. Eram manuscritos lindos, que valiam cada um o preço de uma casa. Isso foi três décadas antes de a Bíblia de Gutenberg chegar às ruas. Depois dela, os livros deixaram de ser obras artesanais exclusivas de milionários e viraram o que viraram. Graças a uma novidade: a prensa de tipos móveis, que era capaz de fazer milhares de cópias no tempo que um monge levava para terminar um manuscrito.",
   "Foi uma revolução sem igual na história e blá, blá, blá. Só que uma revolução que já acabou. Há 10 anos, pelo menos. Quando a internet começou a crescer para valer, ficou claro que ela passaria uma borracha na história do papel impresso e começaria outra.",
   "Mas aconteceu justamente o que ninguém esperava: nada. A internet nunca arranhou o prestígio nem as vendas dos livros. Muito pelo contrário. O segundo negócio on-line que mais deu certo (depois do Google) é uma livraria, a Amazon. Se um extraterrestre pousasse na Terra hoje, acharia que nada disso faz sentido. Por que o livro não morreu? Como uma plataforma que, se comparada à internet, é tão arcaica quanto folhas de pergaminho ou tábuas de argila continua firme?",
   "Você sabe por quê. Ler um livro inteiro no computador é insuportável. A melhor tecnologia para uma leitura profunda e demorada continua sendo tinta preta em papel branco. Tudo embalado num pacote portátil e fácil de manusear. Igual à Bíblia de Gutenberg. Isso sem falar em outro ingrediente: quem gosta de ler sente um afeto físico pelos livros. Curte tocar neles, sentir o fluxo das páginas, exibir a estante cheia. Uma relação de fetiche. Amor até.",
   "Mas esse amor só dura porque ainda não apareceu nada melhor que um livro para a atividade de ler um livro. Se aparecer… Se aparecer, não: quando aparecer. Depois do CD, que já morreu, e do DVD, que está respirando com a ajuda de aparelhos, o livro impresso é o próximo da lista."],
  textoFonte:"VERSIGNASSI, Alexandre. O fim do livro de papel. Superinteressante, 2010. Texto 4 da prova de Buriti Alegre-GO/2026 (Verbena/UFG).",
  stem:"No texto, a afirmação de que “{s:o livro impresso é o próximo da lista}” {s:não entra em contradição} com a defesa de que o papel ainda constitui o suporte mais adequado para a leitura profunda {s:porque o autor sustenta que a}",
  alts:{
   A:"{n:relação afetiva} dos leitores com os livros {x:impedirá sua substituição}.",
   B:"{n:presença do livro impresso} no cotidiano dos leitores {x:será permanente}.",
   C:"{n:permanência atual do livro} {f:decorre da ausência de um suporte mais eficiente}.",
   D:"{n:continuidade da leitura em papel} {x:dispensa o surgimento de novas tecnologias}."},
  comando:"Pede a razão que resolve uma aparente contradição: se o papel é o melhor suporte, como pode ser “o próximo da lista”? O {porque} pede a ideia do autor que explica as duas coisas.",
  leitura:"O núcleo de cada alternativa é a razão que ela atribui à permanência do livro. A resposta mora no último parágrafo do texto, no tópico frasal: “esse amor só dura porque ainda não apareceu nada melhor”.",
  nuc:{A:'o afeto segura o livro',B:'o livro será permanente',C:'sobrevive por falta de coisa melhor',D:'o papel dispensa novas tecnologias'},
  why:{
   A:{t:'outro',x:'O afeto pelos livros existe no texto, mas o autor diz que esse amor “só dura porque ainda não apareceu nada melhor”. Ele não impede a substituição.'},
   B:{t:'oposto',x:'É o contrário da tese: o autor diz que o livro impresso é “o próximo da lista”, depois do CD e do DVD. Não será permanente.'},
   C:{t:'certa',x:'O livro permanece porque nada melhor apareceu ainda. Isso explica a permanência hoje e, ao mesmo tempo, o “próximo da lista” amanhã: não há contradição.'},
   D:{t:'alcance',x:'Generaliza demais. O autor não diz que o papel dispensa novas tecnologias; diz que, quando aparecer algo melhor, o livro será substituído.'}
  },
  licao:"Em interpretação, a resposta mora no texto, não no que parece razoável. Use o tópico frasal do parágrafo-chave: aqui, o amor ao livro só dura enquanto não aparece algo melhor. Por isso o livro permanece por falta de substituto, não por ser eterno."
}
};
