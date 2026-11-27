/* Gerado por tools/mk.js — não editar à mão */
const T={"dado":{"l":"Dado errado (número, prazo, nome)"},"alcance":{"l":"Alcance errado (restringe ou amplia)"},"conceito":{"l":"Conceito trocado por outro parecido"},"finalidade":{"l":"Finalidade ou função trocada"},"oposto":{"l":"Ideia oposta ao conceito"},"outro":{"l":"Verdadeira, mas de outro lugar"},"certa":{"l":"Correta"}};
const INTRO={"titulo":"Treino Verbena","sub":"Normas em Foco · material gratuito"};
const AULAS=[
 {
  "id": "v2a",
  "video": 2,
  "n": 1,
  "titulo": "A prova é feita de frases inacabadas",
  "pre": {
   "q": "De cada 10 enunciados de Português e de Específicos, quantos são frases inacabadas, que a alternativa completa?",
   "ops": [
    "5 de 10",
    "7 de 10",
    "9 de 10"
   ],
   "ok": 2
  },
  "corpo": "<p><b>Quase 9 em cada 10 enunciados</b> de Português e de Conhecimentos Específicos são frases inacabadas. A alternativa certa é a que completa a frase com precisão.</p><p>Por isso a prova mede <b>a precisão da leitura</b>: quem lê a frase inteira, de ponta a ponta, acerta mais.</p>",
  "widget": "completar"
 },
 {
  "id": "v2b",
  "video": 2,
  "n": 2,
  "titulo": "Onde estão os pontos",
  "pre": {
   "q": "Quanto da nota objetiva vem de Específicos e Português juntos?",
   "ops": [
    "50%",
    "70%",
    "90%"
   ],
   "ok": 2
  },
  "corpo": "<p>Dos 100 pontos da objetiva, <b>Específicos valem 60</b> (30 questões de 2 pontos) e <b>Português vale 30</b> (10 questões de 3 pontos). Noventa por cento da nota está em duas disciplinas.</p><p>Dentro de Específicos, cerca de <b>40%</b> das questões são de <b>legislação</b>. Dentro de Português, <b>32%</b> são de <b>interpretação textual</b>; nenhum outro tópico passa de 8%.</p>",
  "widget": "pesos"
 },
 {
  "id": "v2c",
  "video": 2,
  "n": 3,
  "titulo": "O que os números desmentem",
  "pre": {
   "q": "A alternativa mais longa costuma ser a certa?",
   "ops": [
    "Sim, em mais da metade dos casos",
    "Só em 21%, menos que o acaso (25%)",
    "Nunca é a mais longa"
   ],
   "ok": 1
  },
  "corpo": "<p>Quatro macetes populares, confrontados com 743 questões:</p>",
  "widget": "macetes"
 },
 {
  "id": "v2d",
  "video": 2,
  "n": 4,
  "titulo": "O triângulo semiológico",
  "pre": {
   "q": "Quando você lê uma palavra na prova, o que a liga à coisa que ela nomeia?",
   "ops": [
    "Nada: ela é a própria coisa",
    "Passa pelo pensamento, pelo conceito",
    "Só o contexto da frase"
   ],
   "ok": 1
  },
  "corpo": "<p>A palavra só chega à coisa passando pelo <b>pensamento</b>. É nesse caminho que o candidato tropeça: lê o símbolo e pula o conceito.</p><p>Toque nos vértices.</p>",
  "widget": "triangulo"
 },
 {
  "id": "v3a",
  "video": 3,
  "n": 5,
  "titulo": "Tópico frasal",
  "pre": {
   "q": "Em um parágrafo bem construído, a ideia central aparece em…",
   "ops": [
    "todas as frases, com o mesmo peso",
    "uma frase que a traz de modo direto",
    "só na última palavra"
   ],
   "ok": 1
  },
  "corpo": "<p>Todo parágrafo bem construído gira em torno de uma ideia. A frase que a traz de modo direto é o <b>tópico frasal</b>. As outras frases explicam, exemplificam, justificam ou limitam essa ideia.</p><p>Ele costuma vir <b>no começo</b>; às vezes <b>no fim</b>, como conclusão; em alguns textos fica <b>implícito</b>.</p><p class=\"peq\">No triângulo: o tópico frasal é o <i>pensamento</i> do parágrafo.</p>"
 },
 {
  "id": "v3b",
  "video": 3,
  "n": 6,
  "titulo": "A alternativa é um pequeno tópico frasal",
  "pre": {
   "q": "Enunciado inacabado mais uma alternativa formam…",
   "ops": [
    "uma frase completa, que afirma uma ideia",
    "duas informações separadas",
    "um item de lista"
   ],
   "ok": 0
  },
  "corpo": "<p><b>Enunciado + alternativa = frase completa.</b> A questão tem quatro frases inteiras, e cada uma afirma uma ideia.</p><p>A banca faz as quatro parecerem parentes: mesmo assunto, mesmas palavras. Só uma ideia é a correta. Quem compara <i>palavras</i> se perde. Quem compara <b>ideias</b> acerta.</p>"
 },
 {
  "id": "v3c",
  "video": 3,
  "n": 7,
  "titulo": "O método em três passos",
  "pre": {
   "q": "Qual é o primeiro passo ao ler uma questão de frase inacabada?",
   "ops": [
    "Procurar a alternativa mais longa",
    "Completar a frase inteira, alternativa por alternativa",
    "Eliminar a que parece errada"
   ],
   "ok": 1
  },
  "corpo": "<ol class=\"passos\"><li><b>Complete.</b> Junte o enunciado a cada alternativa e leia como uma frase única.</li><li><b>Ache o núcleo.</b> Qual é a ideia central? Em geral, o verbo e o que ele afirma. O resto é acessório.</li><li><b>Compare os núcleos.</b> Ponha os quatro lado a lado e escolha o que corresponde ao que o conceito, a lei ou o texto realmente diz.</li></ol><p class=\"peq\">Exemplo abaixo montado no estilo da banca; não é questão real.</p>",
  "widget": "metodo"
 },
 {
  "id": "v3d",
  "video": 3,
  "n": 8,
  "titulo": "Quando as alternativas são gêmeas",
  "pre": {
   "q": "Duas alternativas começam iguais. Onde costuma estar a diferença?",
   "ops": [
    "No começo da frase",
    "Na finalidade, condição ou limitação que fecha a frase",
    "No tamanho das palavras"
   ],
   "ok": 1
  },
  "corpo": "<p>Em muitos pares gêmeos, o núcleo está na <b>finalidade</b>, na <b>condição</b> ou na <b>limitação</b> que fecha a frase. Quem para de ler na metade não vê a diferença. A armadilha costuma morar no final.</p>",
  "widget": "gemeas"
 },
 {
  "id": "v3e",
  "video": 3,
  "n": 9,
  "titulo": "O mesmo método no texto",
  "pre": {
   "q": "Ao ler um texto para uma questão de interpretação, o que procurar em cada parágrafo?",
   "ops": [
    "A palavra mais difícil",
    "O tópico frasal",
    "A data de publicação"
   ],
   "ok": 1
  },
  "corpo": "<p>Em cada parágrafo, pergunte: <b>qual é o tópico frasal?</b> Escreva, na margem, em poucas palavras. As margens formam o <b>esqueleto do texto</b>. Muitas perguntas pedem exatamente isso: a ideia central, a organização, o que o autor defende.</p><p>Em “<b>infere-se</b>” e “<b>pode-se concluir</b>”: parta do que está dito e só então caminhe para o que decorre.</p>"
 }
];
const Q=[
 {
  "id": "q01",
  "prova": "Padre Bernardo",
  "ano": 2024,
  "n": 32,
  "gab": "C",
  "area": "Legislação",
  "tema": "PNE · objetivo",
  "fonte": "CF/88, art. 214 (EC 59/2009)",
  "stem": "O {s:Plano Nacional de Educação (PNE)}, de acordo com a Constituição Federal de 1988 e redação dada pela Emenda Constitucional nº 59/2009, {s:objetiva}",
  "alts": {
   "A": "{x:hierarquizar} os sistemas de ensino.",
   "B": "{x:padronizar} o ensino nas redes públicas e privadas de ensino.",
   "C": "{n:articular} o sistema nacional de educação {f:em regime de colaboração}.",
   "D": "{x:diferenciar} os papéis entre os entes federados."
  },
  "comando": "Pede o objetivo do PNE. A palavra que manda é “objetiva”: ela pede um verbo, aquilo que o plano busca fazer.",
  "leitura": "Alternativas curtas: o núcleo é o verbo que abre cada uma. Hierarquizar, padronizar, articular, diferenciar. É a escolha do verbo que decide a questão.",
  "nuc": {
   "A": "hierarquizar",
   "B": "padronizar",
   "C": "articular em colaboração",
   "D": "diferenciar papéis"
  },
  "why": {
   "A": {
    "t": "oposto",
    "x": "Hierarquizar é subordinar uns sistemas a outros: o contrário do regime de colaboração."
   },
   "B": {
    "t": "conceito",
    "x": "Padronizar soa a uniformizar tudo, inclusive redes privadas. O PNE articula, não padroniza."
   },
   "C": {
    "t": "certa",
    "x": "A Constituição (art. 214) manda o PNE articular o sistema nacional de educação em regime de colaboração."
   },
   "D": {
    "t": "conceito",
    "x": "O foco do PNE é articular os entes federados, não diferenciar seus papéis."
   }
  },
  "licao": "Em alternativa curta, o verbo é o núcleo. PNE (CF, art. 214): decenal, para articular o sistema nacional de educação em regime de colaboração. Verbos de cima para baixo (hierarquizar, padronizar) contrariam a colaboração.",
  "tipo": "leg",
  "aula": "v3c",
  "ord": 1,
  "fase": "guiada"
 },
 {
  "prova": "Jussara",
  "ano": 2024,
  "n": 10,
  "gab": "B",
  "area": "Português",
  "tema": "Orações: relação de sentido",
  "tipo": "gram",
  "aula": "v3c",
  "fonte": "Gramática: orações subordinadas adverbiais (condição)",
  "stem": "No trecho “{s:Se} eu tivesse parado de treinar, não teria conquistado minhas medalhas”, a {s:relação sintático-semântica} estabelecida {s:entre as orações} é de",
  "alts": {
   "A": "{n:alternância}.",
   "B": "{n:condição}.",
   "C": "{n:dúvida}.",
   "D": "{n:explicação}."
  },
  "comando": "Pede o tipo de relação entre as duas orações do trecho. A pista mais forte está dentro da própria frase: o {se} que a abre.",
  "leitura": "Cada alternativa é o nome de uma relação. O núcleo é o que essa relação significa. Compare cada significado com o que a frase realmente faz.",
  "nuc": {
   "A": "ou uma coisa, ou outra",
   "B": "se isto, então aquilo",
   "C": "incerteza sobre algo",
   "D": "porque: justifica a primeira"
  },
  "why": {
   "A": {
    "t": "conceito",
    "x": "Alternância é “ou… ou”, “ora… ora”: duas possibilidades que se revezam. A frase não oferece escolha nenhuma."
   },
   "B": {
    "t": "certa",
    "x": "O “se” abre uma hipótese, e a segunda oração é a consequência dela: “se eu tivesse parado, não teria conquistado”. Essa é a relação de condição."
   },
   "C": {
    "t": "conceito",
    "x": "Dúvida apareceria com “talvez”, “quem sabe”, “será que”. A frase monta uma hipótese, não uma incerteza."
   },
   "D": {
    "t": "conceito",
    "x": "Explicação usa “porque”, “pois”, “já que”: a segunda oração justificaria a primeira. Aqui a segunda é consequência da primeira."
   }
  },
  "licao": "A conjunção é a pista: “se” indica condição; “ou… ou”, alternância; “pois” e “porque”, explicação; “mas”, oposição. Depois confira: a segunda oração é a consequência da primeira? Aqui, é.",
  "id": "q02",
  "ord": 2,
  "fase": "guiada"
 },
 {
  "id": "q03",
  "prova": "Padre Bernardo",
  "ano": 2024,
  "n": 51,
  "gab": "C",
  "area": "Legislação",
  "tema": "LDB · art. 26-A",
  "fonte": "LDB, art. 26-A (Lei 11.645/2008)",
  "stem": "{c:Em 2026, a Lei de Diretrizes e Bases da Educação Nacional (LDB nº 9.394/1996) completará três décadas de existência caracterizadas pelas mudanças oriundas de acréscimos e alterações de artigos, exemplos: 26-A e 79-B.} O artigo {s:26-A} estabelece como {s:obrigatório}",
  "alts": {
   "A": "{n:o ensino religioso}{x:, de matrícula facultativa}.",
   "B": "o estudo sobre os {n:símbolos nacionais} como tema transversal.",
   "C": "{n:o estudo da história e cultura afro-brasileira e indígena}.",
   "D": "a possibilidade de {n:aceleração de estudos} para alunos com atraso escolar."
  },
  "comando": "O enunciado entrega um ENDEREÇO (art. 26-A) e pede o que mora lá. A palavra “obrigatório” também pesa: ela elimina o que é facultativo ou apenas “possível”.",
  "leitura": "Cada alternativa é uma afirmação verdadeira sobre a LDB, mas só uma mora no 26-A. O núcleo é o assunto de cada uma; compare com o endereço do enunciado.",
  "nuc": {
   "A": "ensino religioso (facultativo)",
   "B": "símbolos nacionais",
   "C": "história e cultura afro e indígena",
   "D": "aceleração de estudos"
  },
  "why": {
   "A": {
    "t": "outro",
    "x": "O ensino religioso, de matrícula facultativa, tem artigo próprio na LDB. E “facultativo” já contradiz o “obrigatório” do enunciado."
   },
   "B": {
    "t": "outro",
    "x": "Símbolos nacionais são assunto de outro dispositivo da LDB, não do 26-A."
   },
   "C": {
    "t": "certa",
    "x": "É o conteúdo do art. 26-A (Lei 11.645/2008): estudo obrigatório da história e cultura afro-brasileira e indígena."
   },
   "D": {
    "t": "outro",
    "x": "A aceleração de estudos para quem tem atraso escolar existe na LDB, mas em outro artigo (art. 24). Verdadeira, só que de outro lugar."
   }
  },
  "licao": "Distrator verdadeiro, endereço errado: a banca usa fatos reais da LDB, mas de outros artigos. O que decide é o endereço. Memória: 26-A = afro e indígena.",
  "tipo": "leg",
  "aula": "v3d",
  "ord": 3,
  "fase": "guiada"
 },
 {
  "prova": "Perolândia",
  "ano": 2024,
  "n": 10,
  "gab": "B",
  "area": "Português",
  "tema": "Orações substantivas",
  "tipo": "gram",
  "aula": "v3c",
  "fonte": "Gramática: orações subordinadas substantivas",
  "stem": "No período “Não era proibido {s:que as pessoas se manifestassem}”, a {s:oração subordinada substantiva} é",
  "alts": {
   "A": "{n:objetiva direta}.",
   "B": "{n:subjetiva}.",
   "C": "{n:objetiva indireta}.",
   "D": "{n:predicativa}."
  },
  "comando": "Pede a função da oração “que as pessoas se manifestassem” dentro do período: o que ela é para a oração principal?",
  "leitura": "Os quatro nomes são as funções possíveis de uma oração substantiva. Teste prático: troque a oração por “isso” e veja que papel o “isso” faz na frase.",
  "nuc": {
   "A": "complemento direto do verbo",
   "B": "sujeito da oração principal",
   "C": "complemento indireto (com preposição)",
   "D": "predicativo (completa o verbo “ser”)"
  },
  "why": {
   "A": {
    "t": "conceito",
    "x": "Objetiva direta completaria um verbo transitivo direto (“Eu quero que você venha”). Aqui “era proibido” não pede complemento: a oração é justamente aquilo que era proibido."
   },
   "B": {
    "t": "certa",
    "x": "Trocando por “isso”: “Isso não era proibido.” O “isso” é o sujeito. Logo, a oração é subjetiva."
   },
   "C": {
    "t": "conceito",
    "x": "Objetiva indireta exige um verbo que peça preposição (“Lembrei-me de que…”). Não há verbo nem preposição pedindo a oração."
   },
   "D": {
    "t": "conceito",
    "x": "Predicativa completa o verbo “ser”, dizendo o que o sujeito é (“O problema é que…”). Aqui a oração não descreve o sujeito: ela é o sujeito."
   }
  },
  "licao": "Teste do “isso”: troque a oração substantiva por “isso”. Se “isso” fica como sujeito (“Isso não era proibido”), a oração é subjetiva. Se fica como complemento do verbo, é objetiva (direta ou indireta). Se completa o verbo “ser”, é predicativa.",
  "id": "q04",
  "ord": 4,
  "fase": "guiada"
 },
 {
  "prova": "Padre Bernardo",
  "ano": 2024,
  "n": 1,
  "gab": "A",
  "area": "Português",
  "tema": "Interpretação: tipo de texto",
  "tipo": "interp",
  "aula": "v3e",
  "fonte": "Tipologia textual (expositivo, narrativo, injuntivo, dissertativo-argumentativo)",
  "stem": "{c:Releia o trecho a seguir.} {c:Em outubro, 5.569 municípios brasileiros elegerão prefeitos e vereadores — mas Brasília e outras regiões administrativas do Distrito Federal, também chamadas “cidades-satélites”, não estão nesta conta.} {f:A área tem uma organização política distinta porque o Distrito Federal acumula características de município e Estado, e suas “cidades-satélites” não são tratadas como municípios.} O trecho acima apresenta um {s:modo de enunciação}",
  "alts": {
   "A": "{n:expositivo}.",
   "B": "{n:narrativo}.",
   "C": "{n:injuntivo}.",
   "D": "{n:dissertativo-argumentativo}."
  },
  "comando": "Pede o modo como o trecho está construído: ele conta, ordena, defende ou explica? O núcleo do trecho está no que ele faz com a informação.",
  "leitura": "Cada alternativa é um tipo de texto. O núcleo é a função de cada tipo: explicar, contar, ordenar, defender. Pergunte ao trecho o que ele faz.",
  "nuc": {
   "A": "explicar e informar",
   "B": "contar fatos em sequência",
   "C": "dar ordens ou instruções",
   "D": "defender um ponto de vista"
  },
  "why": {
   "A": {
    "t": "certa",
    "x": "O trecho informa um fato (o DF não elege prefeitos) e explica a razão disso. Não conta uma história, não dá ordens e não defende opinião: é um texto expositivo."
   },
   "B": {
    "t": "conceito",
    "x": "Texto narrativo conta acontecimentos em sequência, com personagens e tempo. O trecho não narra nada: ele explica uma situação."
   },
   "C": {
    "t": "conceito",
    "x": "Texto injuntivo orienta ou manda fazer algo, geralmente com verbos no imperativo (“faça”, “misture”). Não há ordem nem instrução no trecho."
   },
   "D": {
    "t": "conceito",
    "x": "Parece argumentativo por causa do “porque”, mas ali ele só explica um fato. Falta um ponto de vista a defender com argumentos."
   }
  },
  "licao": "Pergunte ao trecho o que ele faz: contar (narrativo), ordenar (injuntivo), defender uma opinião (dissertativo-argumentativo) ou explicar e informar (expositivo). O “porque” sozinho não torna um texto argumentativo: ele pode só explicar.",
  "id": "q05",
  "ord": 5,
  "fase": "meio"
 },
 {
  "id": "q06",
  "prova": "Diorama",
  "ano": 2023,
  "n": 42,
  "gab": "B",
  "area": "Legislação",
  "tema": "Lei Brasileira de Inclusão",
  "fonte": "LBI (Lei 13.146/2015), art. 28, caput e I",
  "stem": "Segundo a {s:Lei Brasileira de Inclusão} da Pessoa com Deficiência (2015), cabe ao {s:poder público} {s:assegurar}",
  "alts": {
   "A": "{n:educação inclusiva} {x:no ensino fundamental e médio}.",
   "B": "{n:sistema educacional inclusivo} {f:em todos os níveis e modalidades}.",
   "C": "{n:escola inclusiva} {x:dos seis aos dezessete anos de idade}.",
   "D": "{n:sistema de inclusão} {x:na etapa obrigatória da educação básica}."
  },
  "comando": "Pede o que o poder público deve assegurar. O verbo “assegurar” fala de dever; o que está em jogo é até onde vai esse dever.",
  "leitura": "O núcleo é quase igual nas quatro (educação, escola ou sistema inclusivo). Quem separa as alternativas é o complemento: ele amplia ou restringe o alcance.",
  "nuc": {
   "A": "inclusiva só no fund. e médio",
   "B": "sistema inclusivo em todos os níveis",
   "C": "escola inclusiva de 6 a 17 anos",
   "D": "inclusão só na etapa obrigatória"
  },
  "why": {
   "A": {
    "t": "alcance",
    "x": "Restringe a dois níveis. A lei fala em todos os níveis e modalidades."
   },
   "B": {
    "t": "certa",
    "x": "É o alcance total que a LBI estabelece: sistema educacional inclusivo em todos os níveis e modalidades, e aprendizado ao longo de toda a vida."
   },
   "C": {
    "t": "alcance",
    "x": "Prende o dever a uma faixa de idade (6 a 17). A inclusão não tem esse recorte."
   },
   "D": {
    "t": "alcance",
    "x": "Limita à etapa obrigatória da educação básica. A lei vai da educação básica à superior, incluindo as modalidades."
   }
  },
  "licao": "Quando o núcleo é parecido nas quatro, a diferença mora no complemento. Desconfie de recortes (“só”, faixa de idade, “etapa”): a LBI fala em todos os níveis e modalidades.",
  "tipo": "leg",
  "aula": "v3d",
  "ord": 6,
  "fase": "meio"
 },
 {
  "prova": "Rio Quente",
  "ano": 2024,
  "n": 9,
  "gab": "A",
  "area": "Português",
  "tema": "Pontuação",
  "tipo": "gram",
  "aula": "v3d",
  "fonte": "Gramática: emprego dos sinais de pontuação",
  "stem": "Sobre as regras e usos da {s:pontuação}, é possível {s:afirmar} que o {s:sinal de}",
  "alts": {
   "A": "{n:ponto e vírgula} é utilizado em {f:comparações ou contrastes} e para {f:separar orações coordenadas}.",
   "B": "{n:dois-pontos} é utilizado para citar a fala de alguém, iniciar uma enumeração e {x:indicar fim de frases declarativas}.",
   "C": "{n:reticências} é utilizado para interrupções, hesitações e {x:em fim de frases interrogativas diretas}.",
   "D": "{n:travessão} é utilizado para isolar períodos ou expressões e {x:unir elementos enumerados em série}."
  },
  "comando": "Pede qual afirmação sobre um sinal de pontuação é correta. Em alternativas-lista, basta um item falso para derrubar a alternativa inteira.",
  "leitura": "Cada alternativa nomeia um sinal e lista usos. As erradas misturam usos verdadeiros com um falso, quase sempre no final. Leia cada lista até o último item.",
  "nuc": {
   "A": "ponto e vírgula: contraste e coordenadas",
   "B": "dois-pontos, mas “fim de frase”",
   "C": "reticências, mas “pergunta direta”",
   "D": "travessão, mas “unir enumeração”"
  },
  "why": {
   "A": {
    "t": "certa",
    "x": "Gabarito da banca: o ponto e vírgula separa orações coordenadas e marca contrastes ou comparações. Todos os itens da lista conferem."
   },
   "B": {
    "t": "conceito",
    "x": "Os dois-pontos citam falas e iniciam enumerações, mas não encerram frases. Indicar o fim de uma frase declarativa é função do ponto final."
   },
   "C": {
    "t": "conceito",
    "x": "As reticências marcam interrupção e hesitação. O fim de uma pergunta direta é marcado pelo ponto de interrogação."
   },
   "D": {
    "t": "conceito",
    "x": "O travessão isola expressões e marca falas, mas não une os itens de uma enumeração: isso cabe à vírgula."
   }
  },
  "licao": "Alternativa-lista: um único item falso derruba tudo, e ele costuma ficar no fim. Leia até o último item. Memória: dois-pontos anunciam (fala, enumeração); o ponto encerra; a interrogação fecha pergunta; reticências suspendem.",
  "id": "q07",
  "ord": 7,
  "fase": "meio"
 },
 {
  "id": "q08",
  "prova": "Goiatuba",
  "ano": 2023,
  "n": 57,
  "gab": "D",
  "area": "Legislação",
  "tema": "Fundeb",
  "fonte": "CF/88, art. 212-A (EC 108/2020) · Lei 14.113/2020",
  "stem": "Instituído pela {s:Lei n. 14.113/2020}, o Fundo de Manutenção e Desenvolvimento da Educação Básica e de Valorização dos Profissionais da Educação ({s:FUNDEB}) {s:compreende} um",
  "alts": {
   "A": "{n:mecanismo de financiamento} da educação básica e apoio aos profissionais da educação {x:com vigência de 10 anos}.",
   "B": "{x:dispositivo de arrecadação de recursos} criado pelo poder público {x:e pelo setor privado} com o objetivo de favorecer o desenvolvimento da educação básica.",
   "C": "{n:instrumento de financiamento} da educação básica e de valorização dos profissionais da educação {x:criado pela LDB n. 9.394/1996, com vigência de 14 anos}.",
   "D": "{n:fundo de natureza contábil}, {f:de caráter permanente}, {f:previsto no Art. 212-A da Constituição Federal} e destinado ao {n:financiamento da educação básica}."
  },
  "comando": "Pede o que o Fundeb “compreende”, isto é, a natureza dele: que tipo de coisa ele é. Depois do núcleo vêm as condições (prazo, origem, base legal).",
  "leitura": "O núcleo é o substantivo que classifica o Fundeb (mecanismo, dispositivo, instrumento, fundo). As condições que vêm depois (prazo, quem cria, base legal) é que derrubam as erradas.",
  "nuc": {
   "A": "financiamento, 10 anos",
   "B": "arrecadação, com o setor privado",
   "C": "criado pela LDB, 14 anos",
   "D": "fundo contábil permanente (212-A)"
  },
  "why": {
   "A": {
    "t": "dado",
    "x": "Põe prazo de vigência (10 anos). O Fundeb atual é permanente."
   },
   "B": {
    "t": "conceito",
    "x": "O Fundeb não “arrecada”: é um fundo contábil que reúne e redistribui recursos de impostos. E não é criado com o setor privado."
   },
   "C": {
    "t": "dado",
    "x": "Duas falhas: não foi criado pela LDB (tem base na Constituição) e “14 anos” era o prazo do Fundeb anterior (2007–2020), não do atual."
   },
   "D": {
    "t": "certa",
    "x": "Fundo contábil, permanente, previsto no art. 212-A da Constituição e voltado ao financiamento da educação básica."
   }
  },
  "licao": "Fundeb = fundo contábil permanente (CF, art. 212-A; EC 108/2020), regulamentado pela Lei 14.113/2020. A pegadinha é o prazo: o atual não tem data de validade.",
  "tipo": "leg",
  "aula": "v3d",
  "ord": 8,
  "fase": "meio"
 },
 {
  "prova": "Jussara",
  "ano": 2024,
  "n": 9,
  "gab": "A",
  "area": "Português",
  "tema": "Interpretação: efeito de sentido",
  "tipo": "interp",
  "aula": "v3e",
  "fonte": "Interpretação: pronome “a gente” e interlocução (depoimento de Rebeca Andrade)",
  "stem": "No trecho “A gente vê como a ginástica está crescendo no Brasil. Incentivo e investimento nunca são demais. {s:A gente} ainda precisa, sim, ter mais esportes – não só a ginástica – em lugares públicos”, ao fazer uso de “a gente”, Rebeca {s:visa}",
  "alts": {
   "A": "{n:engajar} em seu discurso {f:outros interlocutores}.",
   "B": "{n:enfatizar} discursivamente a {x:terceira pessoa do plural}.",
   "C": "{n:sintetizar} semanticamente as {x:marcas verbais de plural}.",
   "D": "{n:antecipar} os sentidos presentes na mensagem {x:dos ouvintes}."
  },
  "comando": "Pede o objetivo de Rebeca ao usar “a gente”. O verbo {visa} pede uma finalidade: para que ela escolheu essa expressão?",
  "leitura": "O núcleo de cada alternativa é o verbo que abre: engajar, enfatizar, sintetizar, antecipar. Cada um atribui uma finalidade diferente a “a gente”.",
  "nuc": {
   "A": "convocar o outro para o discurso",
   "B": "falar de “eles”, os outros",
   "C": "resumir o plural dos verbos",
   "D": "adivinhar o que o ouvinte pensa"
  },
  "why": {
   "A": {
    "t": "certa",
    "x": "“A gente” equivale a “nós”: inclui quem fala e quem ouve. Ao dizer “a gente vê” e “a gente precisa”, Rebeca chama os interlocutores para dentro do discurso."
   },
   "B": {
    "t": "conceito",
    "x": "“A gente” aproxima quem fala de quem ouve, não fala de “eles”. O sentido é de “nós”, não da terceira pessoa do plural."
   },
   "C": {
    "t": "conceito",
    "x": "Com “a gente”, o verbo fica no singular (“a gente vê”, “a gente precisa”). Não há marcas verbais de plural para sintetizar."
   },
   "D": {
    "t": "finalidade",
    "x": "Nada no trecho tenta adivinhar ou antecipar a mensagem dos ouvintes. A finalidade é incluí-los, não prever o que pensam."
   }
  },
  "licao": "“A gente” é “nós” em linguagem informal: inclui quem fala e quem ouve, com o verbo no singular. Em questão de “para quê”, procure a finalidade discursiva. Aqui, a finalidade é envolver o interlocutor.",
  "id": "q09",
  "ord": 9,
  "fase": "solo"
 },
 {
  "id": "q10",
  "prova": "Perolândia",
  "ano": 2024,
  "n": 31,
  "gab": "C",
  "area": "Legislação",
  "tema": "BNCC · competência",
  "fonte": "BNCC (Resolução CNE/CP nº 2/2017), Introdução",
  "stem": "{c:Em diferentes documentos oficiais, desde os anos de 1990, o conceito de competência se faz presente. Homologada em 2017, a Base Nacional Comum Curricular (BNCC) também traz o mencionado conceito.} Na {s:BNCC}, a {s:competência} deve ser compreendida como a",
  "alts": {
   "A": "{n:transferência de informações} entre educadores e educandos no curso da ação pedagógica, {c:configurando aprendizados ligados à inteligência emocional e diante da qual a escola deve mobilizar seus esforços no sentido de apoiar seu desenvolvimento}.",
   "B": "{n:disposição para assimilar conteúdos científicos}, {c:o que permite o desenvolvimento de habilidades (memorização), de virtudes (inovação) e valores (dedicação ao realizar uma tarefa), componentes que estão na base da vida escolar do educando}.",
   "C": "{n:mobilização} de {n:conhecimentos} (conceitos e procedimentos), {n:habilidades} (práticas, cognitivas e socioemocionais), {n:atitudes e valores} {f:para resolver demandas complexas da vida cotidiana, do pleno exercício da cidadania e do mundo do trabalho}.",
   "D": "{n:capacidade de escuta, retenção, memória e reprodução} dos conteúdos escolares {c:que integram a Base Nacional Comum Curricular e que se colocam como elemento central do trabalho realizado na escola pela direção e por toda a equipe pedagógica}."
  },
  "comando": "Pede a definição de competência “na BNCC”. O senso comum não vale: vale o que o documento diz.",
  "leitura": "As alternativas são longas, mas o núcleo é curto: o que a alternativa diz que a competência É. O resto, em cinza, é enfeite que você pode riscar.",
  "nuc": {
   "A": "transferência de informações",
   "B": "disposição para assimilar conteúdos",
   "C": "mobilizar saberes para resolver demandas",
   "D": "escuta, retenção e reprodução"
  },
  "why": {
   "A": {
    "t": "conceito",
    "x": "“Transferência de informações” é a lógica de transmissão. A BNCC fala em mobilizar saberes, não em transferi-los."
   },
   "B": {
    "t": "conceito",
    "x": "Reduz competência a uma “disposição para assimilar conteúdos”. A BNCC a define pelo que o estudante faz com o que sabe."
   },
   "C": {
    "t": "certa",
    "x": "É a definição da BNCC: mobilizar conhecimentos, habilidades, atitudes e valores para resolver demandas complexas da vida cotidiana, da cidadania e do trabalho."
   },
   "D": {
    "t": "oposto",
    "x": "Escuta, retenção, memória e reprodução são o oposto de resolver demandas complexas: é decorar, não aplicar."
   }
  },
  "licao": "Competência (BNCC) = mobilizar conhecimentos + habilidades + atitudes + valores para resolver demandas complexas. O núcleo está no verbo “mobilizar” e na finalidade “resolver”. As erradas usam verbos de transmissão e memória.",
  "tipo": "leg",
  "aula": "v3c",
  "ord": 10,
  "fase": "solo"
 },
 {
  "id": "q11",
  "prova": "Perolândia",
  "ano": 2024,
  "n": 37,
  "gab": "B",
  "area": "Legislação",
  "tema": "LDB · Educação Infantil",
  "fonte": "LDB, art. 31 (organização da Educação Infantil)",
  "stem": "{c:A LDB nº 9.394/1996 confere um importante quadro de normas e disposições organizacionais a respeito da educação brasileira.} No que concerne à {s:Educação Infantil}, a Lei estabelece que esta será organizada em observância à diversas {s:regras comuns}. Entre as referidas regras podem ser citadas",
  "alts": {
   "A": "a {n:definição da carga horária mínima anual} de {x:600 (seiscentas) horas}, distribuída por um mínimo de 200 (duzentos) dias de trabalho educacional; {n:atendimento à criança} de, no mínimo, {x:5 (cinco) horas diárias} para o turno parcial e de {x:8 (oito) horas} para a jornada integral; {n:controle de frequência} {c:pela instituição de educação pré-escolar}, exigida a frequência mínima de {x:50% (cinquenta por cento)} do total de horas; {n:expedição de documentação} que permita atestar {x:o nível de aprendizagem} da criança.",
   "B": "a {n:disposição de carga horária mínima anual} de {f:800 (oitocentas) horas}, distribuída por um mínimo de {f:200 (duzentos) dias} de trabalho educacional; {n:atendimento à criança} de, no mínimo, {f:4 (quatro) horas diárias} para o turno parcial e de {f:7 (sete) horas} para a jornada integral; {n:controle de frequência} {c:pela instituição de educação pré-escolar}, exigida a frequência mínima de {f:60% (sessenta por cento)} do total de horas; {n:expedição de documentação} que permita atestar {f:os processos de desenvolvimento e aprendizagem} da criança.",
   "C": "a definição de um mínimo de 200 (duzentos) dias de trabalho educacional, {x:sem fixação}, devido à natureza da primeira etapa da Educação Básica, {x:de carga horária mínima}; {n:atendimento à criança} de, no mínimo, {x:5 (cinco) horas diárias} para o turno parcial e de 7 (sete) horas para a jornada integral; {n:controle de frequência} {c:pela instituição de educação pré-escolar}, exigida a frequência mínima de 60% (sessenta por cento) do total de horas; {n:expedição de documentação} que permita atestar {x:o nível de aprendizagem} da criança ao longo do ano letivo.",
   "D": "a disposição de um mínimo de {x:180 (cento e oitenta) dias} de trabalho educacional, {x:sem fixação}, devido à natureza da primeira etapa da Educação Básica, {x:de carga horária mínima}; atendimento à criança de, no mínimo, 4 (quatro) horas diárias para o turno parcial e de {x:oito (oito) horas} para a jornada integral; {x:sem exigência de controle de frequência} {c:pela instituição de educação pré-escolar}; {n:expedição de documentação} que permita atestar {x:o nível de aprendizagem} da criança ao longo do período escolar."
  },
  "comando": "Pede as regras comuns da Educação Infantil na LDB. As alternativas são enormes, mas repare: o enunciado só quer saber de {Educação Infantil} e de {regras comuns}.",
  "leitura": "As quatro alternativas listam os mesmos itens (carga horária, dias, atendimento, frequência, documentação). O núcleo é o mesmo; o que muda são os dados. Por isso, a leitura aqui anda em colunas, item por item.",
  "nuc": {
   "A": "600 h · 5/8 h · 50%",
   "B": "800 h · 4/7 h · 60%",
   "C": "sem carga mínima",
   "D": "180 dias · sem frequência"
  },
  "why": {
   "A": {
    "t": "dado",
    "x": "Troca três dados (600 h, 5 h/8 h, 50%) e diz “nível de aprendizagem”: na Educação Infantil a avaliação é para acompanhar o desenvolvimento, sem objetivo de promoção."
   },
   "B": {
    "t": "certa",
    "x": "Tudo confere com o art. 31: 800 horas, 200 dias, 4 h (parcial) e 7 h (integral), 60% de frequência e documentação dos processos de desenvolvimento e aprendizagem."
   },
   "C": {
    "t": "oposto",
    "x": "Diz que a carga horária mínima “não é fixada”, mas a LDB fixa 800 horas. Ainda erra o turno parcial (5 h)."
   },
   "D": {
    "t": "dado",
    "x": "Começa errando: 180 dias (a LDB diz 200). E ainda dispensa o controle de frequência, que a lei exige (60%)."
   }
  },
  "tabela": [
   [
    "Item",
    "A",
    "B ✓",
    "C",
    "D"
   ],
   [
    "Carga horária anual mínima",
    "600 h",
    "800 h",
    "“sem fixação”",
    "“sem fixação”"
   ],
   [
    "Dias de trabalho",
    "200",
    "200",
    "200",
    "180"
   ],
   [
    "Turno parcial / integral",
    "5 h / 8 h",
    "4 h / 7 h",
    "5 h / 7 h",
    "4 h / 8 h"
   ],
   [
    "Frequência mínima",
    "50%",
    "60%",
    "60%",
    "sem controle"
   ],
   [
    "Documentação",
    "“nível de aprendizagem”",
    "“processos de desenvolvimento e aprendizagem”",
    "“nível de aprendizagem”",
    "“nível de aprendizagem”"
   ]
  ],
  "licao": "Alternativa longa e gêmea: leia em colunas. Escolha uma âncora que você domina (800 h e 200 dias) e elimine. Um único item errado derruba a alternativa inteira. Memória: 800 h · 200 dias · 4 h parcial / 7 h integral · 60% de frequência · sem promoção.",
  "tipo": "leg",
  "aula": "v3d",
  "ord": 11,
  "fase": "solo"
 },
 {
  "prova": "Buriti Alegre",
  "ano": 2026,
  "n": 10,
  "gab": "C",
  "area": "Português",
  "tema": "Interpretação: ideia do autor",
  "tipo": "interp",
  "aula": "v3e",
  "fonte": "Interpretação de texto: VERSIGNASSI, Alexandre. O fim do livro de papel. Superinteressante, 2010",
  "textoTitulo": "O fim do livro de papel",
  "texto": [
   "Só 122 livros. Era o que a Universidade de Cambridge tinha em 1427. Eram manuscritos lindos, que valiam cada um o preço de uma casa. Isso foi três décadas antes de a Bíblia de Gutenberg chegar às ruas. Depois dela, os livros deixaram de ser obras artesanais exclusivas de milionários e viraram o que viraram. Graças a uma novidade: a prensa de tipos móveis, que era capaz de fazer milhares de cópias no tempo que um monge levava para terminar um manuscrito.",
   "Foi uma revolução sem igual na história e blá, blá, blá. Só que uma revolução que já acabou. Há 10 anos, pelo menos. Quando a internet começou a crescer para valer, ficou claro que ela passaria uma borracha na história do papel impresso e começaria outra.",
   "Mas aconteceu justamente o que ninguém esperava: nada. A internet nunca arranhou o prestígio nem as vendas dos livros. Muito pelo contrário. O segundo negócio on-line que mais deu certo (depois do Google) é uma livraria, a Amazon. Se um extraterrestre pousasse na Terra hoje, acharia que nada disso faz sentido. Por que o livro não morreu? Como uma plataforma que, se comparada à internet, é tão arcaica quanto folhas de pergaminho ou tábuas de argila continua firme?",
   "Você sabe por quê. Ler um livro inteiro no computador é insuportável. A melhor tecnologia para uma leitura profunda e demorada continua sendo tinta preta em papel branco. Tudo embalado num pacote portátil e fácil de manusear. Igual à Bíblia de Gutenberg. Isso sem falar em outro ingrediente: quem gosta de ler sente um afeto físico pelos livros. Curte tocar neles, sentir o fluxo das páginas, exibir a estante cheia. Uma relação de fetiche. Amor até.",
   "Mas esse amor só dura porque ainda não apareceu nada melhor que um livro para a atividade de ler um livro. Se aparecer… Se aparecer, não: quando aparecer. Depois do CD, que já morreu, e do DVD, que está respirando com a ajuda de aparelhos, o livro impresso é o próximo da lista."
  ],
  "textoFonte": "VERSIGNASSI, Alexandre. O fim do livro de papel. Superinteressante, 2010. Texto 4 da prova de Buriti Alegre-GO/2026 (Verbena/UFG).",
  "stem": "No texto, a afirmação de que “{s:o livro impresso é o próximo da lista}” {s:não entra em contradição} com a defesa de que o papel ainda constitui o suporte mais adequado para a leitura profunda {s:porque o autor sustenta que a}",
  "alts": {
   "A": "{n:relação afetiva} dos leitores com os livros {x:impedirá sua substituição}.",
   "B": "{n:presença do livro impresso} no cotidiano dos leitores {x:será permanente}.",
   "C": "{n:permanência atual do livro} {f:decorre da ausência de um suporte mais eficiente}.",
   "D": "{n:continuidade da leitura em papel} {x:dispensa o surgimento de novas tecnologias}."
  },
  "comando": "Pede a razão que resolve uma aparente contradição: se o papel é o melhor suporte, como pode ser “o próximo da lista”? O {porque} pede a ideia do autor que explica as duas coisas.",
  "leitura": "O núcleo de cada alternativa é a razão que ela atribui à permanência do livro. A resposta mora no último parágrafo do texto, no tópico frasal: “esse amor só dura porque ainda não apareceu nada melhor”.",
  "nuc": {
   "A": "o afeto segura o livro",
   "B": "o livro será permanente",
   "C": "sobrevive por falta de coisa melhor",
   "D": "o papel dispensa novas tecnologias"
  },
  "why": {
   "A": {
    "t": "outro",
    "x": "O afeto pelos livros existe no texto, mas o autor diz que esse amor “só dura porque ainda não apareceu nada melhor”. Ele não impede a substituição."
   },
   "B": {
    "t": "oposto",
    "x": "É o contrário da tese: o autor diz que o livro impresso é “o próximo da lista”, depois do CD e do DVD. Não será permanente."
   },
   "C": {
    "t": "certa",
    "x": "O livro permanece porque nada melhor apareceu ainda. Isso explica a permanência hoje e, ao mesmo tempo, o “próximo da lista” amanhã: não há contradição."
   },
   "D": {
    "t": "alcance",
    "x": "Generaliza demais. O autor não diz que o papel dispensa novas tecnologias; diz que, quando aparecer algo melhor, o livro será substituído."
   }
  },
  "licao": "Em interpretação, a resposta mora no texto, não no que parece razoável. Use o tópico frasal do parágrafo-chave: aqui, o amor ao livro só dura enquanto não aparece algo melhor. Por isso o livro permanece por falta de substituto, não por ser eterno.",
  "id": "q12",
  "ord": 12,
  "fase": "solo"
 }
];
