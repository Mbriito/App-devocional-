import { Sermon, ModuleCategory } from '../types';

export const MODULES: ModuleCategory[] = [
  {
    id: 1,
    title: "Identidade & Autocuidado",
    subtitle: "Descanso, graça e liberdade de cobranças irreais",
    range: "Mensagens 01 a 10",
    iconName: "Sparkles",
    count: 10
  },
  {
    id: 2,
    title: "Carreira & Finanças",
    subtitle: "Trabalho com propósito, liderança ética e sabedoria",
    range: "Mensagens 11 a 20",
    iconName: "Briefcase",
    count: 10
  },
  {
    id: 3,
    title: "Família & Relacionamentos",
    subtitle: "Paz no lar, filhos, perdão e laços saudáveis",
    range: "Mensagens 21 a 30",
    iconName: "Heart",
    count: 10
  },
  {
    id: 4,
    title: "Amizade & Generosidade",
    subtitle: "Empatia, apoio mútuo e fim da rivalidade feminina",
    range: "Mensagens 31 a 40",
    iconName: "Users",
    count: 10
  },
  {
    id: 5,
    title: "Fé & Superação de Crises",
    subtitle: "Cura emocional, coragem e vitória sobre o deserto",
    range: "Mensagens 41 a 50",
    iconName: "Sunrise",
    count: 10
  }
];

export const SERMONS: Sermon[] = [
  // Módulo 1: Identidade, Graça e Autocuidado
  {
    num: 1,
    modId: 1,
    modTitle: "Identidade, Graça e Autocuidado",
    title: "A Mulher Integral: Graça, Propósito e Cuidado",
    scripture: "Atos 16:14-15; Marcos 12:31",
    scriptureVerseText: "O segundo é este: 'Ame o seu próximo como a si mesmo.' Não existe mandamento maior do que estes.",
    theme: "O amor de Cristo nos liberta de moldes opressores e nos ensina a cuidar de nós mesmas, da nossa mente, do trabalho e da família com equilíbrio e leveza.",
    points: [
      { title: "Acolhida pela sua essência real", desc: "Jesus olha para a sinceridade do seu coração e valida quem você é, sem exigir perfeição estética ou aprovação de terceiros." },
      { title: "Autocuidado como sabedoria bíblica", desc: "Amar o próximo como a si mesma exige estar viva e saudável. Cuidar do sono, da saúde física e emocional é honrar o templo do Espírito." },
      { title: "Trabalho e vocação sem culpa", desc: "Como Lídia em Atos 16, mulher trabalhadora e temente a Deus, sua atividade profissional é abençoada e serve de sustento e bênção." },
      { title: "Graça que transborda no cotidiano", desc: "Quando você está nutrida do amor de Deus, a bondade flui naturalmente para a sua casa e para as pessoas ao seu redor." }
    ],
    faith: "Você é livre em Cristo para viver com dignidade, saúde mental e propósito em todas as áreas da sua vida!",
    prayer: "Senhor Jesus, entrego minha rotina em Tuas mãos. Ensina-me a cuidar de mim sem sentimento de culpa, abençoa meu trabalho e guarda minha família em perfeita paz. Amém.",
    moodTags: ['descanso', 'ansiedade', 'trabalho', 'recomeco']
  },
  {
    num: 2,
    modId: 1,
    modTitle: "Identidade, Graça e Autocuidado",
    title: "Livre da Culpa, Revestida de Graça",
    scripture: "Romanos 8:1; João 8:11",
    scriptureVerseText: "Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus, que não andam segundo a carne, mas segundo o Espírito.",
    theme: "Cristo não veio para acrescentar fardos de culpa sobre os seus ombros, mas para libertá-la da condenação diária e renovar suas forças com misericórdia.",
    points: [
      { title: "O fim da cobrança inalcançável", desc: "O Evangelho cancela a ilusão da mulher perfeita e estabelece a suficiência do amor de Deus em nossas limitações diárias." },
      { title: "Acolhimento nos dias difíceis", desc: "Quando você falha ou perde a paciência, Jesus não a descarta com julgamento; Ele estende a mão com restauração e alívio." },
      { title: "Blindando a mente contra a acusação", desc: "Substitua a voz interna de autocrítica implacável pelas promessas de aconchego e aceitação do Pai celestial." },
      { title: "Caminhando em novidade de vida", desc: "A verdadeira transformação interior não nasce do medo da punição, mas da certeza de ser profundamente amada por Deus." }
    ],
    faith: "Nenhuma condenação há sobre você! Caminhe de cabeça erguida, respaldada pela graça restauradora de Jesus.",
    prayer: "Pai amado, arranco do meu peito toda culpa e autoexigência desmedida. Recebo o Teu perdão, respiro a Tua graça e descanso na Tua infinita bondade. Amém.",
    moodTags: ['culpa', 'feridas', 'descanso']
  },
  {
    num: 3,
    modId: 1,
    modTitle: "Identidade, Graça e Autocuidado",
    title: "O Descanso da Alma em Meio à Rotina",
    scripture: "Mateus 11:28-30; Salmo 23:1-3",
    scriptureVerseText: "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês.",
    theme: "Jesus nos convida a desacelerar a mente agitada, permitir que o corpo repouse e confiar o controle do amanhã às mãos dAquele que tudo governa.",
    points: [
      { title: "O veneno do ativismo desenfreado", desc: "Achar que precisamos resolver tudo ao mesmo tempo esgota o sistema nervoso e nos distancia da doce presença de Deus." },
      { title: "O jugo suave do Mestre", desc: "Jesus nunca pediu que você fosse heroína de todos; Ele convida você a caminhar no ritmo d'Ele, compartilhando as cargas." },
      { title: "Pausa é um mandamento de proteção", desc: "Reservar momentos para silêncio, respiração, contemplação e lazer é um ato espiritual de humildade e saúde." },
      { title: "Confiança que gera sono em paz", desc: "Enquanto você dorme e recarrega suas energias, Deus continua trabalhando em favor da sua casa e dos seus projetos." }
    ],
    faith: "A paz de Deus que excede todo entendimento guarda hoje o seu coração e acalma os seus pensamentos.",
    prayer: "Senhor, entrego o controle do que não posso mudar. Desacelera os meus pensamentos, alivia a tensão do meu corpo e concede-me o Teu verdadeiro descanso. Amém.",
    moodTags: ['ansiedade', 'descanso', 'culpa']
  },
  {
    num: 4,
    modId: 1,
    modTitle: "Identidade, Graça e Autocuidado",
    title: "A Beleza da Sua História Real",
    scripture: "Salmo 139:13-16; 2 Coríntios 12:9",
    scriptureVerseText: "Tu criaste o íntimo do meu ser e me teceste no ventre de minha mãe. Eu te louvo porque me fizeste de modo especial e admirável.",
    theme: "Deus celebra a singularidade da sua trajetória. Longe das comparações das redes sociais, a sua história real tem peso eterno e propósito divino.",
    points: [
      { title: "O perigo da armadilha comparativa", desc: "Comparar os seus bastidores reais com a vitrine filtrada de outras pessoas rouba a alegria e obscurece suas conquistas." },
      { title: "Cicatrizes que viraram sabedoria", desc: "As tempestades que você já superou não são motivo de vergonha, mas testemunhos vivos da fidelidade de Deus em sua vida." },
      { title: "A beleza que brota da paz interior", desc: "A maturidade, o olhar compassivo e a serenidade conquistada têm um brilho que nenhuma maquiagem ou padrão passageiro pode igualar." },
      { title: "Abençoando o seu território", desc: "A mulher que se aceita em Deus torna-se uma presença inspiradora e segura para a família, amigas e colegas de trabalho." }
    ],
    faith: "Sua vida é uma obra-prima nas mãos do Criador! Celebre quem você é e o quanto já cresceu até aqui.",
    prayer: "Pai, obrigado por ter me desenhado com tanto carinho e detalhe. Liberta-me das comparações e faz-me enxergar a beleza única da história que estás escrevendo comigo. Amém.",
    moodTags: ['recomeco', 'gratidao', 'feridas']
  },
  {
    num: 5,
    modId: 1,
    modTitle: "Identidade, Graça e Autocuidado",
    title: "Amando a Si Mesma para Amar o Próximo",
    scripture: "Marcos 12:31; Efésios 5:29",
    scriptureVerseText: "Pois ninguém jamais odiou o próprio corpo, antes o alimenta e dele cuida, como também Cristo faz com a igreja.",
    theme: "A empatia e a generosidade que oferecemos ao mundo dependem diretamente do respeito e do carinho com que tratamos nosso próprio coração.",
    points: [
      { title: "O reservatório não pode secar", desc: "Uma mulher sobrecarregada, faminta de descanso e desrespeitada por si mesma não consegue transmitir serenidade aos outros." },
      { title: "Autocuidado não é egoísmo", desc: "Alimentar-se bem, buscar auxílio médico ou psicológico e ter limites é honrar a vida que Deus lhe concedeu." },
      { title: "Cura do diálogo interno", desc: "Monitore a maneira como conversa consigo mesma quando algo sai do roteiro. Trate-se com a paciência que você teria com sua melhor amiga." },
      { title: "Transbordar em vez de drenar", desc: "Quando o seu interior está abastecido pelo amor do Pai, servir aos outros deixa de ser um peso exaustivo e torna-se celebração." }
    ],
    faith: "Você é um instrumento precioso de amor. Cuide do seu bem-estar com a mesma dedicação com que cuida de quem ama.",
    prayer: "Senhor Deus, ensina-me a me acolher nos dias difíceis. Cura minhas emoções para que meu coração seja fonte de água limpa e amor para os meus familiares e amigos. Amém.",
    moodTags: ['descanso', 'culpa', 'familia']
  },
  {
    num: 6,
    modId: 1,
    modTitle: "Identidade, Graça e Autocuidado",
    title: "Resgatando a Alegria de Viver",
    scripture: "Neemias 8:10; Salmo 126:1-3",
    scriptureVerseText: "Não se entristeçam, porque a alegria do Senhor é a força de vocês.",
    theme: "A presença confortadora de Cristo devolve o sorriso autêntico, a leveza no peito e o entusiasmo para encarar a caminhada cotidiana.",
    points: [
      { title: "A alegria não é ausência de problemas", desc: "A alegria que vem de Deus não depende de circunstâncias perfeitas, mas da certeza inabalável de que Ele cuida de nós." },
      { title: "Valorizando a poesia do simples", desc: "Aprecie o cheiro do café pela manhã, a risada dos filhos, a brisa na janela e os pequenos milagres diários que costumam passar despercebidos." },
      { title: "Desarmando o pessimismo habitual", desc: "O cérebro tende a focar no que falta; o Espírito Santo nos ensina a contar as bênçãos e encontrar motivos de louvor no presente." },
      { title: "Contagiando a atmosfera do seu lar", desc: "Uma mulher com espírito alegre ilumina corredores escuros e traz alívio imediato para as pessoas sob o mesmo teto." }
    ],
    faith: "A alegria do Senhor é a sua armadura diária! O riso e a esperança voltam a habitar na sua casa hoje.",
    prayer: "Pai de amor, limpa meus olhos da amargura e da exaustão. Devolve-me o encanto pelas coisas simples e enche minha alma com o Teu doce júbilo. Amém.",
    moodTags: ['gratidao', 'recomeco', 'ansiedade']
  },
  {
    num: 7,
    modId: 1,
    modTitle: "Identidade, Graça e Autocuidado",
    title: "Florescendo em Qualquer Estação",
    scripture: "Filipenses 4:12-13; Salmo 1:3",
    scriptureVerseText: "Sei o que é passar necessidade e sei o que é ter fartura. Aprendi o segredo de viver contente em toda e qualquer situação... Tudo posso naquele que me fortalece.",
    theme: "Com o apoio de Cristo, a mulher aprende a viver com sabedoria e gratidão tanto nos dias ensolarados quanto nas estações de inverno e espera.",
    points: [
      { title: "A sabedoria dos ciclos naturais", desc: "Assim como a natureza tem primavera, verão, outono e inverno, sua vida passa por fases que exigem posturas diferentes." },
      { title: "Invernos preparam raízes profundas", desc: "Nos tempos de silêncio ou aparente estagnação, Deus está fortalecendo seu caráter e protegendo sua estrutura interior." },
      { title: "O poder do contentamento piedoso", desc: "Contentamento não é conformismo apático; é a decisão serena de ser grata enquanto se constrói o futuro com dedicação." },
      { title: "O fruto certo virá no tempo devido", desc: "Nenhum esforço sincero feito com fé e amor é desperdiçado. A colheita divina tem hora marcada para brotar." }
    ],
    faith: "Esta estação difícil não durará para sempre! Suas raízes estão em Deus e você florescerá com abundância.",
    prayer: "Senhor, ajuda-me a compreender o propósito da estação em que me encontro. Sustenta minha fé no frio e prepara-me para o tempo da colheita. Em nome de Jesus, amém.",
    moodTags: ['recomeco', 'descanso', 'feridas']
  },
  {
    num: 8,
    modId: 1,
    modTitle: "Identidade, Graça e Autocuidado",
    title: "Libertando-se das Expectativas Alheias",
    scripture: "Gálatas 1:10; 1 Coríntios 7:23",
    scriptureVerseText: "Acaso estou eu agora buscando a aprovação dos homens ou a de Deus? Se eu ainda estivesse tentando agradar a homens, não seria servo de Cristo.",
    theme: "Viver com foco no que agrada a Deus traz paz verdadeira e nos liberta da escravidão de tentar atender às opiniões de todas as pessoas.",
    points: [
      { title: "O cansaço de tentar agradar a todos", desc: "Tentar ser perfeita para parentes, chefes e amigos gera ansiedade crônica e apaga a sua identidade dada por Deus." },
      { title: "A única aprovação que define você", desc: "Você já é aceita, perdoada e justificada pelo sacrifício de Cristo; nada do que os outros digam pode anular isso." },
      { title: "A santidade de saber dizer 'não'", desc: "Estabelecer limites cordiais contra demandas abusivas não é grosseria, é maturidade emocional para proteger o essencial." },
      { title: "Caminhando em integridade tranquila", desc: "Viva com a consciência limpa perante Deus; quando Ele aprova o seu caminho, as murmurações ao redor perdem o efeito." }
    ],
    faith: "Você foi comprada por um preço altíssimo na cruz! Seja livre para viver seu chamado sem carregar expectativas alheias.",
    prayer: "Pai bendito, corta as cordas da dependência de aprovação humana. Dá-me coragem para estabelecer limites saudáveis e viver em paz contigo. Amém.",
    moodTags: ['culpa', 'ansiedade', 'trabalho']
  },
  {
    num: 9,
    modId: 1,
    modTitle: "Identidade, Graça e Autocuidado",
    title: "A Arte de Recomeçar com Leveza",
    scripture: "Isaías 43:18-19; Lamentações 3:22-23",
    scriptureVerseText: "As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim; renovam-se cada manhã; grande é a tua fidelidade.",
    theme: "As misericórdias de Deus se renovam diariamente, abrindo espaço para recomeços felizes, livres de amarras com erros e frustrações do passado.",
    points: [
      { title: "O passado não tem poder de veto", desc: "Planos que deram errado, relacionamentos rompidos ou falhas antigas não definem o desfecho que Deus preparou para você." },
      { title: "Caminhos novos no meio do deserto", desc: "O Senhor é especialista em abrir portas onde parecia haver apenas paredes de pedra. Creia no novo de Deus." },
      { title: "A graça dos passos curtos e firmes", desc: "Recomeçar não exige grandes espetáculos; pequenos hábitos diários consistentes transformam destinos inteiros." },
      { title: "O tesouro da maturidade acumulada", desc: "Você não está recomeçando do zero; está recomeçando da experiência, com mais sabedoria, discernimento e fé." }
    ],
    faith: "As misericórdias do Senhor se renovaram hoje cedo para você! Dê o próximo passo com o coração esperançoso.",
    prayer: "Senhor Deus, deixo no Teu altar todas as frustrações de ontem. Abraço o dia de hoje como uma folha em branco assinada pela Tua graça. Renova minhas forças para recomeçar. Amém.",
    moodTags: ['recomeco', 'feridas', 'gratidao']
  },
  {
    num: 10,
    modId: 1,
    modTitle: "Identidade, Graça e Autocuidado",
    title: "O Valor do Silêncio e da Intimidade",
    scripture: "Salmo 46:10; Lucas 10:41-42",
    scriptureVerseText: "Aquietai-vos e sabei que eu sou Deus; serei exaltado entre as nações; serei exaltado sobre a terra.",
    theme: "Afastar-se por alguns minutos do turbilhão de notificações para escutar a voz suave de Deus traz clareza para a mente e alívio para a alma.",
    points: [
      { title: "A intoxicação do excesso de ruído", desc: "O fluxo contínuo de telas, opiniões e alarmes embota a sensibilidade espiritual e acelera a angústia cardíaca e mental." },
      { title: "A boa parte escolhida por Maria", desc: "Diante das correrias de Marta, Jesus lembrou que parar aos Seus pés para escutar é a prioridade que nutre a vida inteira." },
      { title: "O silêncio que organiza o interior", desc: "É no silêncio da oração secreta que as dúvidas se desfazem e a direção do Espírito Santo ganha nitidez cristalina." },
      { title: "Retornando com sabedoria reforçada", desc: "Quem passa tempo na presença do Pai volta para as reuniões, para os filhos e para a rotina com mansidão e clareza de propósito." }
    ],
    faith: "Aquiete o seu coração! No esconderijo da presença de Deus, você encontrará as respostas e a paz que tanto tem buscado.",
    prayer: "Pai de amor, desligo o barulho do mundo para ouvir Tua voz mansa e suave. Enche minha mente de discernimento e faz do meu interior um jardim regado pela Tua paz. Amém.",
    moodTags: ['descanso', 'ansiedade', 'gratidao']
  },

  // Módulo 2: Vida Profissional, Finanças e Propósito
  {
    num: 11,
    modId: 2,
    modTitle: "Vida Profissional, Finanças e Propósito",
    title: "O Trabalho como Altar e Vocação",
    scripture: "Colossenses 3:23-24; Provérbios 31:16",
    scriptureVerseText: "Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens, sabendo que receberão do Senhor a recompensa.",
    theme: "Sua atividade profissional, estudos ou negócios são espaços abençoados por Deus para exercer seus dons, prosperar com retidão e abençoar a sociedade.",
    points: [
      { title: "A dignidade intrínseca do labor", desc: "Trabalhar com dedicação é uma forma sublime de expressar a criatividade e a responsabilidade que Deus colocou em você." },
      { title: "A busca contínua pela excelência", desc: "Fazer o melhor que estiver ao seu alcance abre portas profissionais e honra a fé que você professa no ambiente corporativo." },
      { title: "Sem culpa pelo desenvolvimento pessoal", desc: "Atuar no mercado de trabalho ou empreender não desvaloriza sua feminilidade; Deus abençoa a capacidade produtiva das Suas filhas." },
      { title: "Prosperidade para ser canal de bênção", desc: "Os recursos gerados pelas suas mãos trazem dignidade para sua mesa e permitem estender a mão aos mais necessitados." }
    ],
    faith: "O Senhor abençoa a obra das suas mãos! Atue com confiança, integridade e profissionalismo onde Ele plantou você.",
    prayer: "Senhor Jesus, consagro a Ti minha profissão, projetos e estudos. Dá-me sabedoria para inovar, inteligência emocional com colegas e clientes, e prosperidade com honra. Amém.",
    moodTags: ['trabalho', 'recomeco', 'gratidao']
  },
  {
    num: 12,
    modId: 2,
    modTitle: "Vida Profissional, Finanças e Propósito",
    title: "Empreendedorismo, Autonomia e Visão",
    scripture: "Provérbios 31:18,24; Deuteronômio 8:18",
    scriptureVerseText: "Lembrem-se do Senhor, o seu Deus, pois é Ele que lhes dá a capacidade de produzir riqueza.",
    theme: "Deus concede às mulheres inteligência estratégica, olhar comercial e habilidade para criar oportunidades onde outros veem dificuldades.",
    points: [
      { title: "O olhar analítico da sabedoria", desc: "A mulher descrita em Provérbios 31 pesquisava, negociava terras, produzia tecidos de valor e geria seus recursos com prudência e audácia." },
      { title: "A capacidade criativa dada pelo Criador", desc: "Ideias que surgem durante a oração ou na observação das necessidades do mercado são sementes divinas para novos projetos." },
      { title: "Vencendo a síndrome da impostora", desc: "Não diminua seus conhecimentos nem hesite em cobrar o preço justo pelos seus serviços. Você foi capacitada por Deus para crescer." },
      { title: "Liderando com ética e generosidade", desc: "Um negócio abençoado trata fornecedores com justiça, colaboradores com afeto e clientes com verdade inegociável." }
    ],
    faith: "O Espírito Santo concede clareza e direção para os seus projetos! Ideias férteis e portas abertas acompanharão seus passos.",
    prayer: "Pai de bondade, ilumina minha mente com estratégias sábias. Remove todo medo de empreender e guia cada negociação com justiça e favor. Em nome de Jesus, amém.",
    moodTags: ['trabalho', 'recomeco', 'ansiedade']
  },
  {
    num: 13,
    modId: 2,
    modTitle: "Vida Profissional, Finanças e Propósito",
    title: "Sabedoria na Gestão Financeira",
    scripture: "Provérbios 21:20; Lucas 14:28",
    scriptureVerseText: "Na casa do sábio há comida e azeite armazenados, mas o tolo gasta tudo o que pode.",
    theme: "O planejamento, a clareza orçamentária e a disciplina financeira protegem o lar, evitam o estresse das dívidas e proporcionam liberdade para sonhar.",
    points: [
      { title: "Consumo por compensação emocional", desc: "Comprar compulsivamente para tentar aliviar frustrações, cansaço ou carências só aumenta a ansiedade no fim do mês." },
      { title: "Orçamento claro e sem segredos", desc: "Anotar receitas, controlar despesas fixas e cortar desperdícios é um ato espiritual de boa mordomia dos recursos de Deus." },
      { title: "Reserva de emergência é paz mental", desc: "Guardar um pouco a cada mês constrói uma muralha protetora para os imprevistos da vida e da saúde." },
      { title: "Generosidade consciente e sustentável", desc: "Ajudar ao próximo com alegria pressupõe manter a própria casa equilibrada para que a ajuda não gere ruína pessoal." }
    ],
    faith: "A bênção da sabedoria repousa sobre a sua carteira e suas contas. Você terá discernimento e equilíbrio com o dinheiro.",
    prayer: "Senhor, dá-me domínio próprio nas compras e clareza para administrar cada centavo com retidão. Guarda minha família do endividamento e traz paz financeira. Amém.",
    moodTags: ['trabalho', 'ansiedade', 'familia']
  },
  {
    num: 14,
    modId: 2,
    modTitle: "Vida Profissional, Finanças e Propósito",
    title: "Vencendo o Esgotamento Profissional (Burnout)",
    scripture: "Eclesiastes 4:6; 1 Reis 19:4-8",
    scriptureVerseText: "Melhor é um punhado com descanso do que duas mãos cheias com trabalho penoso e correr atrás do vento.",
    theme: "Nenhum salário ou aplauso corporativo vale a perda da sua saúde mental, da sua família ou da sua paz interior. Aprenda a desacelerar com Deus.",
    points: [
      { title: "Identificando o ponto de saturação", desc: "Insônia, irritabilidade constante, esquecimentos e exaustão crônica são alertas do corpo de que os limites foram violados." },
      { title: "A pedagogia do carinho de Deus com Elias", desc: "Quando o profeta estava em colapso sob o zimbro, Deus não o cobrou discursos; ofereceu-lhe pão quente, água fresca e sono reparador." },
      { title: "Delegar responsabilidades com humildade", desc: "Aprenda a dizer: 'Preciso de ajuda', 'Não consigo assumir isso agora' e distribua demandas no trabalho e em casa." },
      { title: "O trabalho é meio de vida, não a vida inteira", desc: "Você é muito mais do que seu cargo ou número de entregas. Sua identidade está ancorada na filiação com Deus." }
    ],
    faith: "Deus quer você viva, lúcida e com saúde! Receba coragem para reorganizar suas prioridades e proteger sua alma.",
    prayer: "Pai misericordioso, confesso que me sinto exausta. Ensina-me a frear as exigências que me sufocam, restaura minha saúde mental e devolve-me o equilíbrio da vida. Amém.",
    moodTags: ['ansiedade', 'descanso', 'trabalho']
  },
  {
    num: 15,
    modId: 2,
    modTitle: "Vida Profissional, Finanças e Propósito",
    title: "Liderança com Firmeza e Empatia",
    scripture: "Juízes 4:4-5 (Débora); Provérbios 31:26",
    scriptureVerseText: "Fala com sabedoria e a instrução da bondade está na sua língua.",
    theme: "Exercer papéis de comando ou coordenação na empresa, na comunidade ou na igreja combinando firmeza de decisões com profundo respeito pelas pessoas.",
    points: [
      { title: "Liderar sem perder a delicadeza", desc: "A verdadeira autoridade não necessita de agressividade ou arrogância para ser respeitada; baseia-se na clareza e na justiça." },
      { title: "A sabedoria de escutar antes de decidir", desc: "Ouvir a equipe com atenção genuína gera ambientes de confiança, lealdade e inovação produtiva." },
      { title: "Inspirar pela coerência e pelo exemplo", desc: "Líderes que mantêm a palavra dada e tratam a todos com igual cortesia constroem equipes motivadas e leais." },
      { title: "Promovendo o sucesso dos outros", desc: "A maior marca de uma mulher líder em Cristo é impulsionar e celebrar o crescimento dos profissionais ao seu redor." }
    ],
    faith: "Você foi capacitada para liderar com discernimento e graça! Sua voz trará direção sábia e serenidade aos ambientes.",
    prayer: "Senhor, unge minhas palavras e minhas decisões no trabalho. Que minha postura de liderança inspire justiça, paz e desenvolvimento para todos os que convivem comigo. Amém.",
    moodTags: ['trabalho', 'recomeco']
  },
  {
    num: 16,
    modId: 2,
    modTitle: "Vida Profissional, Finanças e Propósito",
    title: "Ética e Integridade nas Relações de Trabalho",
    scripture: "Salmo 15:1-3; Provérbios 11:1",
    scriptureVerseText: "Aquele que é íntegro em sua conduta e pratica a justiça, que de coração fala a verdade... esse não será abalado.",
    theme: "Manter a postura cristã e o caráter inegociável no mercado, sendo luz por meio da pontualidade, honestidade e respeito a cada indivíduo.",
    points: [
      { title: "A integridade nos pequenos detalhes", desc: "Cumprir prazos acordados, zelar pelo patrimônio da empresa e honrar compromissos verbais constroem uma reputação sólida." },
      { title: "Distância absoluta de fofocas de corredor", desc: "Recusar-se a participar de comentários depreciativos contra chefes ou colegas preserva a mente e atrai o favor de Deus." },
      { title: "O mesmo respeito a todas as posições", desc: "Do porteiro ao presidente da companhia, a mulher sábia demonstra a mesma gentileza sincera e respeito humano." },
      { title: "O sermão que não precisa de palavras", desc: "Sua competência técnica aliada à lealdade ética prega mais alto sobre o Evangelho do que horas de argumentação teológica." }
    ],
    faith: "A integridade do seu caráter será o seu escudo protetor e a chave de grandes portas abertas na sua jornada profissional.",
    prayer: "Pai celeste, guarda meu coração da desonestidade e meus lábios da intriga. Que a luz de Cristo transpareça no meu profissionalismo e na minha conduta diária. Amém.",
    moodTags: ['trabalho', 'gratidao']
  },
  {
    num: 17,
    modId: 2,
    modTitle: "Vida Profissional, Finanças e Propósito",
    title: "O Propósito da Provisão: Abençoar para Prosperar",
    scripture: "2 Coríntios 9:8-10; Provérbios 11:25",
    scriptureVerseText: "E Deus é poderoso para fazer que lhes seja acrescentada toda a graça, a fim de que em todas as coisas... vocês tenham tudo o que for necessário para transbordar em toda boa obra.",
    theme: "A prosperidade dada por Deus não serve para ostentação ou vaidade, mas para proporcionar dignidade à sua casa e socorro a quem sofre.",
    points: [
      { title: "Deus como o provedor definitivo", desc: "Reconhecer que saúde, inteligência e oportunidades vêm do Senhor nos guarda do orgulho e da soberba do sucesso." },
      { title: "A alegria profunda da generosidade", desc: "Abrir a mão para presentear, alimentar e patrocinar quem tem menos oxigena o coração e afasta a avareza." },
      { title: "A lei bíblica da semeadura", desc: "Corações generosos atraem a confiança do céu; quanto mais limpamente circula o recurso, mais Deus confia provisão." },
      { title: "Vencendo a mentalidade de escassez", desc: "Confiar que o Pai que cuida dos lírios do campo não deixará faltar o sustento honrado na sua mesa." }
    ],
    faith: "Deus suprirá todas as suas necessidades e fará da sua vida um rio constante de provisão e amparo para muitos!",
    prayer: "Senhor, obrigado pelo pão de cada dia. Livra meu peito da ganância e multiplica meus recursos para que eu seja sempre uma doadora alegre e atenta à dor do próximo. Amém.",
    moodTags: ['trabalho', 'gratidao', 'recomeco']
  },
  {
    num: 18,
    modId: 2,
    modTitle: "Vida Profissional, Finanças e Propósito",
    title: "Conciliando Carreira, Família e Vida Pessoal",
    scripture: "Eclesiastes 3:1-8; Provérbios 24:3-4",
    scriptureVerseText: "Para tudo há uma ocasião, e um tempo para cada propósito debaixo do céu.",
    theme: "A sabedoria de gerenciar o tempo sem a neurose de fazer tudo ao mesmo tempo, desfrutando com qualidade de cada papel que você exerce.",
    points: [
      { title: "A morte do mito da mulher multitarefa", desc: "Tentar lavar roupa, responder e-mails de trabalho e ajudar na lição dos filhos tudo ao mesmo tempo só gera frustração e erros." },
      { title: "Presença integral no momento presente", desc: "Quando estiver na reunião, esteja inteira ali; quando estiver na mesa de jantar com os filhos ou cônjuge, guarde o celular." },
      { title: "O poder do planejamento semanal", desc: "Organizar compras, cardápios e compromissos com antecedência evita crises desnecessárias de correria doméstica." },
      { title: "Celebrando pequenas vitórias diárias", desc: "Agradeça a Deus pelo que conseguiu realizar hoje; o que ficou pendente será resolvido amanhã com a graça renovada." }
    ],
    faith: "A sabedoria de Deus ordena o seu tempo! Receba leveza e equilíbrio para cuidar do trabalho sem descuidar do lar.",
    prayer: "Pai, ensina-me a contar os meus dias para alcançar um coração sábio. Dá-me foco no trabalho, presença afetuosa em família e descanso no fim do dia. Amém.",
    moodTags: ['trabalho', 'familia', 'ansiedade']
  },
  {
    num: 19,
    modId: 2,
    modTitle: "Vida Profissional, Finanças e Propósito",
    title: "Vencendo o Medo da Transição de Carreira",
    scripture: "Josué 1:9; Gênesis 12:1",
    scriptureVerseText: "Não fui eu que lhe ordenei? Seja forte e corajosa! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    theme: "Ter coragem para transicionar de área, buscar nova qualificação ou mudar de emprego quando o ciclo antigo se esgotou e Deus aponta para o novo.",
    points: [
      { title: "O perigo do conformismo doloroso", desc: "Permanecer em ambientes tóxicos ou funções que anulam seus dons por puro medo da mudança corrói a alegria de viver." },
      { title: "A voz de Deus que nos convida a avançar", desc: "Assim como chamou Abraão para uma terra nova, Deus frequentemente nos impulsiona para fora da zona de conforto para nos fazer crescer." },
      { title: "Preparação técnica antes do salto", desc: "Coragem cristã não é irresponsabilidade; estude, faça cursos, construa reservas financeiras e planeje a transição com calma." },
      { title: "O Senhor da sua história caminha à frente", desc: "O mesmo Deus que sustentou você até aqui já preparou as novas conexões e oportunidades que esperam por você." }
    ],
    faith: "Seja forte e corajosa! As portas do novo tempo se abrirão à medida que você der passos firmes de fé e preparo.",
    prayer: "Senhor meu Deus, dissipa as incertezas e o pavor do futuro. Dá-me clareza para discernir as oportunidades certas e coragem para trilhar os novos caminhos profissionais que tens para mim. Amém.",
    moodTags: ['trabalho', 'recomeco', 'ansiedade']
  },
  {
    num: 20,
    modId: 2,
    modTitle: "Vida Profissional, Finanças e Propósito",
    title: "A Influência Financeira Saudável da Mulher no Lar",
    scripture: "Provérbios 31:10-12; 2 Reis 4:1-7",
    scriptureVerseText: "O coração do seu marido confia nela, e não haverá falta de ganho. Ela lhe faz bem, e não mal, todos os dias da sua vida.",
    theme: "A visão, a participação ativa e o bom senso financeiro da mulher são pilares de estabilidade, proteção e crescimento para toda a família.",
    points: [
      { title: "Parceria transparente e sem jogos", desc: "Decidir o destino do dinheiro familiar em conjunto com respeito e diálogo afasta desconfianças e brigas crônicas." },
      { title: "A sabedoria contra os pequenos ralos", desc: "Muitas famílias não passam aperto por falta de renda, mas por falta de controle de pequenos vazamentos diários de gastos supérfluos." },
      { title: "Investindo no que gera futuro duradouro", desc: "Priorizar educação de qualidade, saúde preventiva e segurança emocional rende dividendos eternos para o lar." },
      { title: "A bênção da mulher prudente", desc: "Sua habilidade de multiplicar e cuidar dos recursos faz do seu lar um abrigo protegido das tempestades financeiras." }
    ],
    faith: "Suas decisões e discernimento trarão estabilidade, prosperidade e paz contínua para a sua casa!",
    prayer: "Pai bondoso, concede-me sabedoria para gerir os bens do meu lar. Que nossas finanças sejam instrumento de união, tranquilidade e amparo familiar. Em nome de Jesus, amém.",
    moodTags: ['trabalho', 'familia', 'gratidao']
  },

  // Módulo 3: Família, Relacionamentos e Lar Saudável
  {
    num: 21,
    modId: 3,
    modTitle: "Família, Relacionamentos e Lar Saudável",
    title: "A Arte de Edificar um Lar Seguro",
    scripture: "Provérbios 14:1; Efésios 4:31-32",
    scriptureVerseText: "A mulher sábia edifica a sua casa, mas com as próprias mãos a insensata derruba a sua... Sejam bondosos e compassivos uns para com os outros.",
    theme: "Transformar a casa em um porto seguro de aconchego, onde reinam o diálogo paciente, a ausência de gritos e a ternura da presença de Deus.",
    points: [
      { title: "O lar como refúgio e não como arena", desc: "O mundo exterior já é agressivo e exigente demais; a porta de entrada da sua casa deve ser o início da paz para quem vive nela." },
      { title: "O poder profilático da palavra calma", desc: "Provérbios nos lembra que a resposta branda desvia a fúria; aprender a pausar antes de explodir desarma conflitos graves." },
      { title: "A cultura do perdão diário", desc: "Pessoas imperfeitas sob o mesmo teto vão magoar umas às outras; a única forma de sobreviver é varrer o ressentimento antes do pôr do sol." },
      { title: "A atmosfera espiritual que você atrai", desc: "Músicas suaves, orações sinceras e carinho físico mudam a energia do ambiente e expulsam a discórdia." }
    ],
    faith: "Sua casa será conhecida como um oásis de paz, aconchego e restauração para todos os que pisarem nela!",
    prayer: "Senhor Jesus, entra na minha casa e governa nosso ambiente. Arranca do nosso meio a grosseria, a queixa e a frieza, e planta a doçura do Teu amor em cada cômodo. Amém.",
    moodTags: ['familia', 'descanso', 'feridas']
  },
  {
    num: 22,
    modId: 3,
    modTitle: "Família, Relacionamentos e Lar Saudável",
    title: "Criando Filhos com Amor, Limites e Diálogo",
    scripture: "Deuteronômio 6:6-7; Provérbios 22:6",
    scriptureVerseText: "Ensine seus filhos no caminho em que devem andar, e mesmo quando envelhecer não se desviará dele.",
    theme: "Instruir os filhos por meio do exemplo coerente, da escuta atenta, do afeto caloroso e de limites firmes que protegem a alma dos pequenos.",
    points: [
      { title: "Filhos aprendem com o que veem", desc: "O tom de voz com que você lida com os conflitos ensina mais sobre caráter e maturidade do que mil discursos teóricos." },
      { title: "A arte da escuta sem julgamento precoce", desc: "Ouvir as angústias e medos dos filhos sem desdenhar constrói uma ponte de confiança para a adolescência." },
      { title: "O 'não' que protege o coração", desc: "Dizer não a caprichos e telas em excesso dói no momento, mas vacina o filho contra a frustração e a ansiedade no mundo real." },
      { title: "Liberando o futuro com oração de mãe", desc: "Nenhum abraço ou oração de mãe é esquecido pelo céu; Deus vela pelo destino dos seus filhos onde seus olhos não alcançam." }
    ],
    faith: "Seus filhos são herança preciosa do Senhor! Você receberá paciência, autoridade amorosa e sabedoria para conduzi-los.",
    prayer: "Pai eterno, dá-me paciência de mestre e ternura de mãe para criar meus filhos. Livra-os das armadilhas deste século e guarda suas mentes em Cristo. Amém.",
    moodTags: ['familia', 'ansiedade', 'culpa']
  },
  {
    num: 23,
    modId: 3,
    modTitle: "Família, Relacionamentos e Lar Saudável",
    title: "Casamento Saudável: Respeito Mútuo e Companheirismo",
    scripture: "Efésios 5:21,33; 1 Pedro 3:7",
    scriptureVerseText: "Sujeitem-se uns aos outros, por temor a Cristo... e cada um de vocês ame a sua mulher como a si mesmo, e a mulher trate o marido com respeito.",
    theme: "Construir uma convivência a dois baseada no companheirismo honesto, no apoio mútuo aos sonhos individuais e na renovação constante do carinho.",
    points: [
      { title: "A beleza da cooperação mútua", desc: "O matrimônio cristão é uma aliança entre iguais que se servem em amor, não um regime de posse, cobrança ou submissão cega a abusos." },
      { title: "A morte dos jogos de silêncio e desdém", desc: "Ficar emburrada esperando que o outro adivinhe seus pensamentos adoece a relação; comunique suas necessidades com respeito e calma." },
      { title: "Cuidando da intimidade e do riso", desc: "O casamento não pode ser reduzido a pagar boletos e cuidar das crianças; preserve momentos a sós, risadas e carinhos." },
      { title: "Celebrando o crescimento do parceiro", desc: "Incentivar as realizações do cônjuge fortalece o laço e afasta a insegurança e o ciúme desnecessário." }
    ],
    faith: "O amor de Deus restaura e fortalece a cumplicidade no seu relacionamento a cada novo amanhecer!",
    prayer: "Senhor, abençoa meu casamento. Renova nosso carinho, cura mágoas acumuladas e dá-nos sabedoria para caminhar juntos como parceiros leais e amorosos. Amém.",
    moodTags: ['familia', 'feridas', 'recomeco']
  },
  {
    num: 24,
    modId: 3,
    modTitle: "Família, Relacionamentos e Lar Saudável",
    title: "O Cuidado Afetuoso com os Pais na Maturidade",
    scripture: "Efésios 6:2-3; 1 Timóteo 5:4",
    scriptureVerseText: "'Honra teu pai e tua mãe' — este é o primeiro mandamento com promessa: 'para que tudo te corra bem e tenhas longa vida sobre a terra'.",
    theme: "Dedicar tempo, paciência e consideração aos pais e familiares idosos, retribuindo com honra e carinho a vida e os cuidados recebidos.",
    points: [
      { title: "Compreendendo as limitações do envelhecer", desc: "A perda de autonomia e os esquecimentos dos pais idosos exigem que troquemos a impaciência pela compaixão delicada." },
      { title: "A bênção da escuta paciente", desc: "Ouvir as mesmas histórias do passado com carinho é o maior presente de dignidade que você pode oferecer a quem já fez tanto por você." },
      { title: "Presença real em meio à correria", desc: "Uma visita sem olhar o relógio ou uma ligação carinhosa acalma a solidão de quem vê o mundo ao redor acelerar." },
      { title: "O exemplo indelével para seus próprios filhos", desc: "A maneira como você cuida dos seus pais ensina silenciosamente aos seus filhos como eles cuidarão de você no futuro." }
    ],
    faith: "A honra dedicada aos seus pais atrai longevidade, paz interior e a bênção explícita de Deus sobre a sua vida!",
    prayer: "Pai amado, dá-me amor compassivo e paciência com meus pais e familiares idosos. Que minhas mãos e palavras sejam amparo e gratidão sincera para eles. Amém.",
    moodTags: ['familia', 'gratidao']
  },
  {
    num: 25,
    modId: 3,
    modTitle: "Família, Relacionamentos e Lar Saudável",
    title: "Vencendo Desafios Familiares com Inteligência Emocional",
    scripture: "1 Samuel 25:14-19,32 (Abigail); Colossenses 3:12-14",
    scriptureVerseText: "Revistam-se de profunda compaixão, bondade, humildade, mansidão e paciência. Suportem-se uns aos outros e perdoem as queixas.",
    theme: "Como a sábia Abigail na Bíblia, agir com diplomacia, serenidade e discernimento rápido para evitar que crises domésticas virem desastres.",
    points: [
      { title: "Não jogar gasolina na fogueira alheia", desc: "Quando outros membros da família estiverem irados ou descontrolados, sua postura serena será o freio de segurança do lar." },
      { title: "Agir no momento certo da razão", desc: "Abigail esperou o momento oportuno para falar com sabedoria; saber a hora de calar e a hora de se posicionar evita tragédias." },
      { title: "Blindando o coração contra a amargura", desc: "Não permita que grosserias de parentes azedem a sua alma; responda com firmeza respeitosa e mantenha a sua dignidade." },
      { title: "O papel pacificador da mulher sábia", desc: "Mulheres espiritualmente maduras não promovem discórdia entre irmãos ou familiares; são pontes de reconciliação." }
    ],
    faith: "A sabedoria do céu guia as suas reações! Suas palavras apagarão incêndios e preservarão a paz na sua casa.",
    prayer: "Senhor meu Deus, concede-me o discernimento de Abigail. Livra-me de agir pelo impulso da raiva e faz-me um instrumento eficaz de paz e bom senso em minha família. Amém.",
    moodTags: ['familia', 'ansiedade', 'feridas']
  },
  {
    num: 26,
    modId: 3,
    modTitle: "Família, Relacionamentos e Lar Saudável",
    title: "Maternidade Solo: Força, Amparo e Graça Especial",
    scripture: "Gênesis 16:13 (Agar); Salmo 68:5",
    scriptureVerseText: "Ela deu ao Senhor, que lhe falava, o nome de: 'Tu és o Deus que me vê', pois dissera: 'Aqui eu vi Aquele que me vê!'.",
    theme: "O amor incondicional de Deus acolhe, valida e fortalece a mulher que cuida dos filhos sozinha, garantindo provisão e companhia constante.",
    points: [
      { title: "O Deus que enxerga sua solidão oculta", desc: "Você nunca esteve abandonada; Deus conhece cada noite de choro em silêncio, a sobrecarga das contas e o amor que você investe." },
      { title: "Banindo a vergonha e a culpa imposta", desc: "Rejeite qualquer rótulo religioso condenatório; sua família é sagrada e abençoada pelo Senhor exatamente como é." },
      { title: "Deus como o protetor da sua mesa", desc: "O Senhor é Pai dos órfãos e defensor dos lares; Ele não permitirá que falte pão, afeto e sabedoria aos seus filhos." },
      { title: "Construindo uma rede de apoio saudável", desc: "Não tenha vergonha de pedir ou receber ajuda de amigos leais, parentes de confiança e da comunidade de fé." }
    ],
    faith: "Você é uma guerreira amada do Altíssimo! O Deus que tudo vê sustenta seus passos e abençoa ricamente o futuro dos seus filhos.",
    prayer: "Pai celestial, Tu és o Deus que me vê. Quando o cansaço parecer insuportável, renova minhas forças. Sê o companheiro constante do meu lar e o guardião dos meus filhos. Amém.",
    moodTags: ['familia', 'ansiedade', 'culpa', 'recomeco']
  },
  {
    num: 27,
    modId: 3,
    modTitle: "Família, Relacionamentos e Lar Saudável",
    title: "Restaurando Laços Familiares Rompidos",
    scripture: "Gênesis 33:1-4; Lucas 15:20-24",
    scriptureVerseText: "Mas o pai disse aos seus servos: 'Tragam depressa a melhor roupa e vistam-no nela... Porque este meu filho estava morto e voltou à vida; estava perdido e foi achado'.",
    theme: "Dar passos de coragem em direção ao perdão genuíno, à reconciliação madura e à cura de feridas antigas entre pais, filhos e irmãos.",
    points: [
      { title: "Perdão é decisão, não sentimento passageiro", desc: "Perdoar um familiar não significa validar abusos ou fingir que nada ocorreu; é desamarrar o nó do rancor para que sua alma respire." },
      { title: "Desmontando os muros do orgulho", desc: "Muitas vezes, uma frase simples como 'sinto muito pela nossa distância' é suficiente para derreter anos de silêncio doloroso." },
      { title: "Respeitando o tempo de maturação do outro", desc: "Nem toda reconciliação é instantânea; algumas exigem reconstrução paciente de confiança através de pequenos gestos de respeito." },
      { title: "A alegria de ver o amor triunfar", desc: "A cura familiar alivia dores geracionais e abre um legado de paz para os netos e bisnetos que virão depois." }
    ],
    faith: "O amor de Cristo derruba muros antigos de separação! A reconciliação e a harmonia visitarão a sua parentela.",
    prayer: "Senhor, arranca do meu coração toda mágoa acumulada contra familiares. Concede-me coragem para estender a mão e sabedoria para restabelecer laços na Tua verdade e no Teu amor. Amém.",
    moodTags: ['familia', 'feridas', 'recomeco']
  },
  {
    num: 28,
    modId: 3,
    modTitle: "Família, Relacionamentos e Lar Saudável",
    title: "Protegendo a Intimidade e a Paz do Lar",
    scripture: "Provérbios 25:9; Salmo 133:1",
    scriptureVerseText: "Como é bom e agradável quando os irmãos convivem em união!... Debata o caso com o seu próximo, mas não revele o segredo de outra pessoa.",
    theme: "Preservar a intimidade, as vulnerabilidades e os planos da família do olhar intrometido e da exposição imprudente nas redes sociais.",
    points: [
      { title: "O perigo da superexposição virtual", desc: "Publicar crises conjugais, desabafos sobre filhos ou conquistas financeiras em redes sociais abre portas para inveja e mal-entendidos." },
      { title: "Problemas do lar se resolvem dentro do lar", desc: "Questões conjugais ou familiares devem ser tratadas em particular ou, quando necessário, com profissionais e conselheiros qualificados." },
      { title: "Filtro protetor contra palpites externos", desc: "Nem todo parente ou vizinho tem discernimento para opinar sobre a sua vida; filtre com sabedoria quem tem acesso à sua intimidade." },
      { title: "Blindando a cumplicidade interna", desc: "Quanto mais protegida for a confidencialidade entre vocês, mais forte será a confiança mútua e a união da casa." }
    ],
    faith: "Seu lar é território sagrado e protegido pelo favor de Deus! A discrição e a prudência serão as muralhas da sua paz.",
    prayer: "Pai celeste, ensina-me a ser prudente com a intimidade da minha casa. Guarda minha boca, afasta a intromissão maldosa e fortalece a cumplicidade no nosso lar. Amém.",
    moodTags: ['familia', 'trabalho']
  },
  {
    num: 29,
    modId: 3,
    modTitle: "Família, Relacionamentos e Lar Saudável",
    title: "Quando os Filhos Crescem: A Estação do Ninho Vazio",
    scripture: "Eclesiastes 3:1; Salmo 92:12-14",
    scriptureVerseText: "Mesmo na velhice darão frutos, permanecerão cheios de seiva e verdejantes.",
    theme: "Redescobrir propósitos, novos sonhos e cuidar de si mesma com alegria quando os filhos ganham asas e alcançam a independência.",
    points: [
      { title: "Celebrando a missão cumprida com sucesso", desc: "A partida dos filhos para a faculdade, casamento ou trabalho próprio não é perda; é a prova viva de que você os preparou bem para a vida." },
      { title: "O reencontro consigo mesma", desc: "Aproveite a nova disponibilidade de tempo para retomar estudos, hobbies, cuidados com a saúde física e novas amizades." },
      { title: "Renovando a chama conjugal", desc: "Para quem é casada, esta fase é um convite maravilhoso para viajar, rir e desfrutar do companheirismo como nos primeiros anos." },
      { title: "A transição de cuidadora para conselheira sábia", desc: "Aprenda a respeitar as escolhas dos filhos adultos, tornando-se um porto seguro de apoio quando eles pedirem orientação." }
    ],
    faith: "Esta nova fase será cheia de viço, frutos saborosos e novas realizações! Deus renova a sua mocidade como a da águia.",
    prayer: "Senhor Deus, entrego o futuro dos meus filhos crescidos em Tuas mãos. Abre diante de mim novos projetos, renova meu entusiasmo e faz desta estação uma colheita de paz e alegria. Amém.",
    moodTags: ['familia', 'recomeco', 'gratidao']
  },
  {
    num: 30,
    modId: 3,
    modTitle: "Família, Relacionamentos e Lar Saudável",
    title: "O Legado Imorredouro de Amor e Fé",
    scripture: "2 Timóteo 1:5 (Lóide e Eunice); Salmo 78:4",
    scriptureVerseText: "Recordo-me da sua fé não fingida, que primeiro habitou em sua avó Lóide e em sua mãe Eunice, e estou convencido de que também habita em você.",
    theme: "O impacto permanente de uma vida pautada no carinho verdadeiro, na honestidade e no testemunho de fé que abençoará gerações futuras.",
    points: [
      { title: "A riqueza que a traça não corrói", desc: "Muito além de heranças materiais, a lembrança de uma mãe ou avó amorosa e firme em Deus é o maior escudo para um jovem." },
      { title: "Fé sincera e sem hipocrisia", desc: "Paulo elogiou a fé 'não fingida' de Eunice e Lóide; viver o Evangelho na prática dentro de casa é o testemunho mais eficaz." },
      { title: "Memórias de afeto e aconchego", desc: "As palavras de bênção, as refeições preparadas com amor e o colo nos dias tristes ficam gravados para sempre na mente dos que você ama." },
      { title: "A coroação de uma vida bem vivida", desc: "Olhar para trás e ver que o amor semeado gerou árvores de retidão e paz é a maior recompensa terrena que Deus concede." }
    ],
    faith: "Sua história deixará marcas profundas de esperança, amor e santidade que guiarão seus descendentes por gerações!",
    prayer: "Pai amado, que a minha caminhada diária seja um farol seguro para os meus familiares. Que meus descendentes conheçam o Teu amor através do meu testemunho sincero. Em nome de Jesus, amém.",
    moodTags: ['familia', 'gratidao', 'recomeco']
  },

  // Módulo 4: Generosidade, Amizade e Empatia
  {
    num: 31,
    modId: 4,
    modTitle: "Generosidade, Amizade e Empatia",
    title: "Empatia: Olhar o Próximo sem Julgamento",
    scripture: "Lucas 10:33-34; Colossenses 3:12",
    scriptureVerseText: "Mas um samaritano, estando de viagem, chegou onde se encontrava o homem e, quando o viu, teve piedade dele. Chegou-se a ele, enfaixou-lhe as feridas.",
    theme: "Aprender a olhar a dor e a história das outras pessoas com compaixão sincera, desarmando o preconceito e o julgamento religioso precipitado.",
    points: [
      { title: "A postura do Bom Samaritano", desc: "Ele não perguntou qual era a religião, a culpa ou a falha daquele homem caído; simplesmente parou sua rotina para socorrê-lo com carinho." },
      { title: "Desarmando o dedo acusador", desc: "É fácil apontar o erro de quem caiu; difícil e nobre é oferecer os braços para ajudá-la a levantar-se com dignidade." },
      { title: "A virtude de escutar com o coração", desc: "Muitas vezes, a maior ajuda que uma mulher aflita precisa não é de um sermão moralista, mas de ouvidos calmos e de um abraço acolhedor." },
      { title: "Tornando-se um porto de segurança", desc: "Faça da sua presença um espaço onde as pessoas não tenham medo de desabafar suas fragilidades reais." }
    ],
    faith: "O amor compassivo de Cristo em você atrairá corações feridos para serem curados e restaurados por Deus.",
    prayer: "Senhor Jesus, arranca dos meus olhos toda lente de julgamento e hipocrisia. Dá-me um coração cheio de empatia sincera para amar e acolher quem passa por aflições. Amém.",
    moodTags: ['feridas', 'gratidao']
  },
  {
    num: 32,
    modId: 4,
    modTitle: "Generosidade, Amizade e Empatia",
    title: "A Força Transformadora da Amizade Feminina",
    scripture: "Provérbios 17:17; Rute 1:16-17",
    scriptureVerseText: "O amigo ama em todos os momentos; é um irmão na adversidade... Rute, porém, respondeu: 'Não insistas comigo para que te deixe e não mais te acompanhe'." ,
    theme: "Cultivar alianças saudáveis e leais entre mulheres, superando o veneno cultural da rivalidade, inveja e fofoca para construir apoio mútuo.",
    points: [
      { title: "A quebra da mentira da rivalidade", desc: "A sociedade tenta empurrar as mulheres para a competição estética e profissional; o Espírito Santo nos une em fraternidade e amparo." },
      { title: "O tesouro de uma amiga confiável", desc: "Ter mulheres com quem chorar sem medo de exposição e rir das bobagens da vida é remédio indispensável para a saúde mental." },
      { title: "Comemorando o sucesso da outra com verdade", desc: "Quando uma mulher amadurece, ela aplaude a vitória da amiga de coração, sabendo que o brilho alheio não apaga o seu." },
      { title: "A lealdade de Rute e Noemi", desc: "Caminhar juntas nos momentos de luto e escassez multiplica as forças e prepara a virada abençoada da história." }
    ],
    faith: "Deus cercará você de amigas leais, sábias e valorosas para compartilharem a vida com alegria e cumplicidade!",
    prayer: "Pai celeste, abençoa minhas amigas. Livra nossos relacionamentos da inveja e da intriga. Ensina-me a ser uma companheira fiel e acolhedora em todas as estações. Amém.",
    moodTags: ['recomeco', 'gratidao', 'ansiedade']
  },
  {
    num: 33,
    modId: 4,
    modTitle: "Generosidade, Amizade e Empatia",
    title: "Generosidade que Transforma Realidades",
    scripture: "Atos 9:36,39 (Dorcas); Provérbios 11:25",
    scriptureVerseText: "Em Jope havia uma discípula chamada Tabita, que em grego é Dorcas; esta mulher notabilizou-se pelas boas obras e esmolas que fazia.",
    theme: "Usar seus talentos práticos, sua profissão e seu tempo para estender a mão aos vulneráveis, trazendo alívio e dignidade aos que sofrem.",
    points: [
      { title: "O Evangelho traduzido em atos concretos", desc: "Dorcas costurava túnicas para as viúvas empobrecidas; seu amor a Deus era tocável, prático e transformava a comunidade local." },
      { title: "Você não precisa de fortunas para ser bênção", desc: "Uma panela de sopa, uma roupa que não usa mais ou uma carona generosa têm o poder de reacender a esperança de alguém." },
      { title: "Colocando seus dons a serviço do bem", desc: "Se você sabe cozinhar, ensinar, cortar cabelo ou organizar contas, use parte desse talento para socorrer quem não pode pagar." },
      { title: "A doce recompensa de quem doa", desc: "A mão que distribui carinho e socorro nunca experimenta a aridez da alma; ela é continuamente regada por Deus." }
    ],
    faith: "Suas mãos são instrumentos de acolhimento e consolo divino! Sua generosidade acenderá luz na escuridão de muitas vidas.",
    prayer: "Senhor, abre meus olhos para as necessidades ao meu redor. Desperta em mim a criatividade e a disposição de Dorcas para levar alívio prático a quem tem fome de pão e de afeto. Amém.",
    moodTags: ['gratidao', 'recomeco']
  },
  {
    num: 34,
    modId: 4,
    modTitle: "Generosidade, Amizade e Empatia",
    title: "O Poder Curador de uma Palavra Bondosa",
    scripture: "Provérbios 15:1,23; Colossenses 4:6",
    scriptureVerseText: "A resposta calma desvia a fúria, mas a palavra ríspida desperta a ira... O seu falar seja sempre agradável e temperado com sal.",
    theme: "Usar a nossa fala diária como instrumento de cura, incentivo e paz, banindo o veneno da crítica corrosiva e da maledicência.",
    points: [
      { title: "Palavras têm poder de vida ou morte", desc: "Uma frase de encorajamento pode resgatar alguém da depressão; uma crítica maldosa pode destruir a autoestima de um filho ou colega." },
      { title: "Os três filtros de ouro da sabedoria", desc: "Antes de emitir uma opinião, pergunte-se: É verdadeiro? É necessário? É bondoso? Se não passar pelos três, guarde o silêncio." },
      { title: "Extinguindo o hábito da fofoca", desc: "Não permita que seu ouvido seja lixeira para desabafos maldosos de terceiros. Mude de assunto ou convide à oração." },
      { title: "O elogio sincero que floresce vidas", desc: "Crie o hábito diário de verbalizar gratidão e elogiar o esforço das pessoas que servem você na rotina diária." }
    ],
    faith: "Seus lábios serão mananciais de consolo, cura e discernimento! Suas palavras levantarão os abatidos.",
    prayer: "Pai amado, coloca uma sentinela à minha boca. Que minhas conversas transmitam graça aos que ouvem e sejam sempre temperadas com mansidão e amor verdadeiro. Amém.",
    moodTags: ['feridas', 'familia', 'trabalho']
  },
  {
    num: 35,
    modId: 4,
    modTitle: "Generosidade, Amizade e Empatia",
    title: "Hospitalidade: Abrindo a Casa e o Coração",
    scripture: "Romanos 12:13; 1 Pedro 4:9",
    scriptureVerseText: "Compartilhem o que vocês têm com os santos em suas necessidades. Pratiquem a hospitalidade.",
    theme: "Receber pessoas com afeto genuíno, café quentinho e escuta atenta, sem a preocupação paralisante com luxo ou decorações impecáveis.",
    points: [
      { title: "Hospitalidade não é exibicionismo", desc: "Abrir a casa para impressionar com louças caras gera tensão; abrir a casa para abençoar com bolo simples e atenção gera comunhão eterna." },
      { title: "A mesa como o altar dos relacionamentos", desc: "Jesus realizou alguns dos Seus maiores milagres e conversas de cura ao redor de mesas simples com pessoas imperfeitas." },
      { title: "Um abrigo para quem se sente solitário", desc: "Pessoas idosas, solteiros longe da família ou mães sobrecarregadas encontram novo fôlego ao serem convidadas com carinho." },
      { title: "Anjos hospedados sem saber", desc: "O autor de Hebreus lembra que na simplicidade da acolhida muitos receberam visitas do próprio céu em seus lares." }
    ],
    faith: "A presença do Senhor enche a sua casa! Cada pessoa que sentar à sua mesa sairá renovada e abençoada pela sua acolhida.",
    prayer: "Senhor Jesus, consagro minha mesa e meu lar a Ti. Dá-me um espírito hospitaleiro e simples, capaz de transformar uma xícara de chá em um momento sagrado de restauração para o próximo. Amém.",
    moodTags: ['familia', 'gratidao', 'descanso']
  },
  {
    num: 36,
    modId: 4,
    modTitle: "Generosidade, Amizade e Empatia",
    title: "Vencendo a Inveja com a Abundância do Amor",
    scripture: "Tiago 3:16; 1 Coríntios 13:4",
    scriptureVerseText: "Pois onde há inveja e ambição egoísta, aí há confusão e toda espécie de males... O amor é paciente, o amor é bondoso. Não inveja.",
    theme: "Celebrar com entusiasmo as vitórias e a prosperidade das outras mulheres, seguros de que o estoque de bênçãos de Deus para você é ilimitado.",
    points: [
      { title: "A raiz venenosa da inveja", desc: "A inveja nasce da falsa crença de que as bênçãos de Deus são escassas e que o sucesso de outra pessoa rouba a sua chance de ser feliz." },
      { title: "A infinita riqueza da graça do Pai", desc: "O sol que brilha sobre a casa da sua vizinha não diminui a luz que aquece a sua. Deus tem planos sob medida para cada filha." },
      { title: "Transformando o sentimento em bênção", desc: "Quando sentir um aperto no peito diante da conquista de alguém, pare imediatamente e ore abençoando a vida daquela pessoa em voz alta." },
      { title: "A leveza de um coração grato", desc: "Quem agradece sinceramente pelo que já possui não tem tempo nem espaço interior para cobiçar a trajetória alheia." }
    ],
    faith: "O que Deus planejou para você é maravilhoso e exclusivo! Descanse no amor do Pai e celebre a vitória de todas as suas irmãs.",
    prayer: "Pai celestial, limpa meu coração de toda sombra de comparação e inveja. Ensina-me a festejar a vitória das minhas amigas com entusiasmo e a descansar plenamente nas Tuas promessas para a minha história. Amém.",
    moodTags: ['culpa', 'feridas', 'gratidao']
  },
  {
    num: 37,
    modId: 4,
    modTitle: "Generosidade, Amizade e Empatia",
    title: "Pacificadoras: A Coragem de Desarmar a Discórdia",
    scripture: "Mateus 5:9; Romanos 12:18",
    scriptureVerseText: "Bem-aventurados os pacificadores, pois serão chamados filhos de Deus... Se for possível, quanto depender de vocês, vivam em paz com todos.",
    theme: "Escolher ativamente não alimentar polêmicas desnecessárias, atuando como um elemento de discernimento e união nos seus círculos de convivência.",
    points: [
      { title: "Paz não é covardia ou fingimento", desc: "Ser pacificadora não significa aceitar abusos em silêncio, mas recusar o bate-boca infantil e buscar soluções maduras." },
      { title: "Ter paz é melhor do que ter razão", desc: "Muitas discussões desgastantes em grupos e famílias servem apenas para inflar o ego; abra mão de vencer debates vazios." },
      { title: "Conversar cara a cara e com privacidade", desc: "Quando surgir um mal-entendido com alguém, procure a pessoa diretamente, com serenidade, em vez de espalhar indiretas." },
      { title: "O bálsamo da pacificadora", desc: "A mulher que traz serenidade é procurada por todos como conselheira e refúgio confiável nos momentos de crise." }
    ],
    faith: "A paz que excede todo entendimento habita em você! Você será reconhecida como uma filha prudente e promotora da reconciliação.",
    prayer: "Senhor, faz de mim um instrumento da Tua paz. Onde houver intriga, que eu leve a palavra da ponderação; onde houver divisão, que eu seja ponte de reconciliação e entendimento. Amém.",
    moodTags: ['familia', 'trabalho', 'feridas']
  },
  {
    num: 38,
    modId: 4,
    modTitle: "Generosidade, Amizade e Empatia",
    title: "O Cuidado com as Órfãs, Viúvas e Desamparadas",
    scripture: "Tiago 1:27; Isaías 1:17",
    scriptureVerseText: "A religião que Deus, o nosso Pai, aceita como pura e imaculada é esta: cuidar dos órfãos e das viúvas em suas dificuldades...",
    theme: "A verdadeira espiritualidade bíblica se manifesta no apoio prático, financeiro e afetivo àqueles que foram esquecidos pela sociedade.",
    points: [
      { title: "A essência do culto agradável a Deus", desc: "Não adianta cantar hinos com fervor aos domingos se durante a semana fechamos os olhos para quem não tem com o que se alimentar." },
      { title: "Mobilizando recursos e carinho contínuos", desc: "Apoiar asilos de idosos, projetos de acolhimento de mães carentes e crianças sem família aproxima o céu da terra." },
      { title: "Usando sua voz para defender quem não tem vez", desc: "Interceder por justiça, por salários dignos e pelo fim da violência doméstica contra mulheres é dever cristão." },
      { title: "O afeto que cura a sensação de abandono", desc: "Muitas vezes, uma tarde de contação de histórias ou uma visita com lanche transforma para sempre a autoestima de uma pessoa órfã." }
    ],
    faith: "Deus colocará em suas mãos os recursos e as parcerias necessárias para amparar quem sofre! Seu amor gerará frutos eternos.",
    prayer: "Pai de compaixão, quebra a frieza do meu coração e conecta minha vida à dor dos necessitados. Usa meu tempo e meus recursos para levar dignidade e amparo aos esquecidos do mundo. Em nome de Jesus, amém.",
    moodTags: ['gratidao', 'recomeco']
  },
  {
    num: 39,
    modId: 4,
    modTitle: "Generosidade, Amizade e Empatia",
    title: "Mentoria Feminina: Sabedoria Compartilhada entre Gerações",
    scripture: "Tito 2:3-5; Provérbios 27:17",
    scriptureVerseText: "Como o ferro com o ferro se aguça, assim o homem afia o rosto do seu amigo... ensinem o que é bom, para que instruam as mais jovens.",
    theme: "A união entre a experiência das mulheres mais maduras e o entusiasmo das mais jovens, construindo uma rede de discipulado prático e afetuoso.",
    points: [
      { title: "Seus erros e acertos têm valor pedagógico", desc: "Tudo o que você sofreu, aprendeu e superou ao longo dos anos é um tesouro que pode poupar lágrimas de mulheres mais novas." },
      { title: "Mentoria sem imposição de regras sufocantes", desc: "Orientar uma jovem não é fazê-la uma cópia sua, mas ajudá-la a florescer no chamado específico que Deus deu a ela." },
      { title: "Escuta atenta para as angústias da juventude", desc: "A geração jovem enfrenta pressões digitais e emocionais inéditas; seja um colo seguro de acolhimento sem deboche." },
      { title: "A troca mútua de renovo e energia", desc: "Ao ensinar com amor, a mulher madura rejuvenesce o espírito e encontra novo significado para a sua própria história." }
    ],
    faith: "Sua história de vida é uma bússola nas mãos do Senhor! Deus usará sua voz para guiar, fortalecer e abençoar as novas gerações.",
    prayer: "Senhor Deus, concede-me graça e mansidão para orientar mulheres mais jovens. Que minha caminhada sirva de inspiração viva e que eu saiba acolher com paciência as dúvidas do coração delas. Amém.",
    moodTags: ['familia', 'gratidao', 'recomeco']
  },
  {
    num: 40,
    modId: 4,
    modTitle: "Generosidade, Amizade e Empatia",
    title: "O Abraço que Acolhe o Caído",
    scripture: "Lucas 15:20; 1 Pedro 4:8",
    scriptureVerseText: "Sobretudo, amem-se sinceramente uns aos outros, porque o amor cobre a multidão de pecados.",
    theme: "Oferecer a misericórdia de Cristo para quem tropeçou no caminho, estendendo os braços com amor restaurador em vez de pedras acusadoras.",
    points: [
      { title: "O pai que correu ao encontro do filho pródigo", desc: "Ele não esperou o filho tomar banho ou pagar a dívida; abraçou-o com as roupas cheias de lama e beijou-lhe o rosto." },
      { title: "O amor que cobre e sara feridas", desc: "Cobrir o pecado não é ser conivente com o mal, mas preservar a dignidade da pessoa ferida para que ela tenha forças de se arrepender e mudar." },
      { title: "Destruindo a postura dos fariseus modernos", desc: "Aqueles que queriam apedrejar a mulher em João 8 tiveram que soltar as pedras diante da verdade; somos todos carentes da misericórdia divina." },
      { title: "A festa do recomeço da vida", desc: "Celebrar cada vida que se recupera, cada coração restaurado e cada pessoa que reencontra o caminho da esperança." }
    ],
    faith: "Você é o instrumento do abraço curador de Jesus! Seu acolhimento reacenderá a fé no peito de quem estava à beira do desespero.",
    prayer: "Pai de infinita graça, quando me deparar com alguém abatido por erros, lembra-me de quanto fui perdoada por Ti. Que meus braços estejam sempre abertos para acolher, confortar e ajudar a recomeçar. Amém.",
    moodTags: ['feridas', 'culpa', 'recomeco']
  },

  // Módulo 5: Fé, Coragem e Vitória sobre as Crises
  {
    num: 41,
    modId: 5,
    modTitle: "Fé, Coragem e Vitória sobre as Crises",
    title: "Firme sobre a Rocha em Meio ao Vendaval",
    scripture: "Mateus 7:24-25; Salmo 46:1-3",
    scriptureVerseText: "Caiu a chuva, transbordaram os rios, sopraram os ventos e deram contra aquela casa, e ela não caiu, porque tinha seus alicerces na rocha.",
    theme: "Construir a mente e o espírito sobre as verdades eternas de Cristo para permanecer de pé diante dos imprevistos e perdas inevitáveis da vida.",
    points: [
      { title: "Tempestades não pedem licença para chegar", desc: "Diagnósticos médicos difíceis, crises econômicas ou lutos acontecem a todas as pessoas; a diferença não está na chuva, mas na fundação." },
      { title: "Sua estrutura espiritual é inabalável em Cristo", desc: "Quando sua confiança está depositada no amor de Deus e não em aparências frágeis, os ventos contrários não conseguem derrubá-la." },
      { title: "Manter a clareza no olho do furacão", desc: "A oração sincera nos momentos de crise drena o pânico e devolve a lucidez necessária para tomar atitudes assertivas." },
      { title: "A certeza da calmaria que se aproxima", desc: "Lembre-se de que nenhuma tempestade é eterna; o arco-íris da fidelidade de Deus voltará a brilhar sobre os seus dias." }
    ],
    faith: "Sua casa não cairá! Você está alicerçada no amor indestrutível de Cristo e sairá dessa tormenta mais sábia e resistente.",
    prayer: "Senhor Deus, firma meus pés sobre a Tua rocha inabalável. Quando as águas da vida parecerem me cobrir, segura minha mão e enche meu peito com a Tua inquebrantável paz. Amém.",
    moodTags: ['ansiedade', 'feridas', 'recomeco']
  },
  {
    num: 42,
    modId: 5,
    modTitle: "Fé, Coragem e Vitória sobre as Crises",
    title: "Coragem para Enfrentar os Gigantes Cotidianos",
    scripture: "1 Samuel 17:45; Josué 1:9",
    scriptureVerseText: "Davi, porém, disse ao filisteu: 'Você vem contra mim com espada, com lança e com dardo, mas eu vou contra você em nome do Senhor dos Exércitos'.",
    theme: "Encarar de cabeça erguida os medos íntimos, as pressões financeiras, as dúvidas e os desafios sem se intimidar pela altura do obstáculo.",
    points: [
      { title: "Olhar para o tamanho do seu Deus", desc: "Golias parecia invencível aos olhos dos soldados com medo; Davi não olhou para a lança do gigante, olhou para a grandeza do Deus Vivo." },
      { title: "Resgatando a memória das vitórias passadas", desc: "Recordar os livramentos que Deus já lhe concedeu no passado renova o fôlego e prova que Ele não falhará hoje." },
      { title: "Descartando armaduras que não cabem em você", desc: "Davi recusou a pesada armadura de Saul; use a simplicidade, sua autenticidade e a fé que Deus lhe deu para vencer." },
      { title: "A vitória que fortalece toda a comunidade", desc: "Quando uma mulher se levanta com coragem em Deus, seus filhos, amigos e familiares encontram forças para avançar também." }
    ],
    faith: "O gigante que se levantou diante dos seus planos vai cair! O Senhor dos Exércitos batalha por você e garante a sua vitória.",
    prayer: "Pai celeste, arranca do meu íntimo toda paralisia provocada pelo medo. Enfrento os desafios deste dia vestida da Tua autoridade e certa de que a vitória vem de Ti. Em nome de Jesus, amém.",
    moodTags: ['ansiedade', 'trabalho', 'recomeco']
  },
  {
    num: 43,
    modId: 5,
    modTitle: "Fé, Coragem e Vitória sobre as Crises",
    title: "Quando o Recurso Humano Chega ao Fim",
    scripture: "1 Reis 17:12-16 (A Viúva de Sarepta); Filipenses 4:19",
    scriptureVerseText: "O meu Deus suprirá todas as necessidades de vocês, de acordo com as suas gloriosas riquezas em Cristo Jesus.",
    theme: "Experimentar a fidelidade inexplicável do Pai nos momentos de escassez extrema, quando as opções humanas se esgotam e resta a fé.",
    points: [
      { title: "O fim do recurso humano é o berço do milagre", desc: "A viúva de Sarepta tinha apenas um punhado de farinha na panela; quando entregou nas mãos de Deus, alimentou sua casa por meses." },
      { title: "Não desista na última curva do caminho", desc: "O desespero quer nos convencer de que tudo acabou; o Espírito Santo sussurra que Deus ainda tem a última palavra." },
      { title: "A sabedoria de dar passos de obediência", desc: "Mesmo sem entender como a conta fechará, continue trabalhando honestamente, semeando bondade e orando com confiança." },
      { title: "A botija de azeite que não se esvazia", desc: "O Deus da Bíblia não promete luxos extravagantes, mas garante que o pão necessário e a provisão digna não faltarão." }
    ],
    faith: "Não faltará sustento, saúde e paz na sua mesa! Deus é a sua fonte inesgotável e suprirá cada uma das suas necessidades.",
    prayer: "Senhor, quando olho para as minhas forças sinto fraqueza, mas quando olho para Ti recebo paz. Multiplica meus recursos escassos e manifesta a Tua provisão sobrenatural sobre o meu lar. Amém.",
    moodTags: ['ansiedade', 'trabalho', 'familia']
  },
  {
    num: 44,
    modId: 5,
    modTitle: "Fé, Coragem e Vitória sobre as Crises",
    title: "A Cura Profunda das Feridas do Passado",
    scripture: "Isaías 61:3; Salmo 147:3",
    scriptureVerseText: "Ele cura os de coração quebrantado e cuida das suas feridas... a dar-lhes uma coroa em vez de cinzas, óleo de alegria em vez de pranto.",
    theme: "Permitir que o óleo consolador do Espírito Santo toque lembranças dolorosas da infância, rejeições, lutos e cicatrizes da alma.",
    points: [
      { title: "Não esconder a dor debaixo do tapete", desc: "Fingir que a dor não existe não cura a ferida; levar o sofrimento para a presença amorosa de Deus e buscar auxílio médico ou terapêutico é sabedoria." },
      { title: "A troca divina: coroa no lugar de cinzas", desc: "Deus não desperdiça nenhuma das suas lágrimas; Ele tem o poder de transformar sua maior dor na plataforma do seu maior consolo." },
      { title: "Romper as correntes da rejeição antiga", desc: "Mesmo que você tenha sido rejeitada ou negligenciada por quem deveria cuidar de você, o Pai Eterno acolheu e escolheu sua vida." },
      { title: "De vítima ferida a curadora compassiva", desc: "Uma mulher com o coração cicatrizado em Cristo torna-se um bálsamo ambulante para acolher outras que sofrem o mesmo caminho." }
    ],
    faith: "O bálsamo restaurador de Jesus penetra hoje as regiões mais profundas da sua alma! Receba alívio, liberdade e paz duradoura.",
    prayer: "Jesus, Médico dos médicos, visita minhas memórias secretas e arranca a dor de feridas antigas. Derrama Teu óleo de alegria e restaura o vigor da minha alma para viver o hoje em plenitude. Amém.",
    moodTags: ['feridas', 'culpa', 'recomeco']
  },
  {
    num: 45,
    modId: 5,
    modTitle: "Fé, Coragem e Vitória sobre as Crises",
    title: "Esperança e Vida em Pleno Deserto",
    scripture: "Isaías 43:19; Oseias 2:14-15",
    scriptureVerseText: "Vejam, estou fazendo uma coisa nova! Ela já está surgindo! Vocês não a reconhecem? Até no deserto farei um caminho, e rios no ermo.",
    theme: "Compreender que as fases de aridez e aparente solidão são salas de aula divinas para forjar a maturidade espiritual e revelar a voz de Deus.",
    points: [
      { title: "O deserto não é morada definitiva, é passagem", desc: "Ninguém constrói casa permanente no deserto; você está apenas atravessando uma fase para chegar à terra prometida." },
      { title: "Deus atrai para a solidão para falar de amor", desc: "Oseias nos ensina que o Senhor nos leva ao deserto para falar carinhosamente ao nosso coração, longe dos ruídos e distrações do mundo." },
      { title: "Fontes de água viva que brotam da rocha", desc: "Mesmo quando as circunstâncias externas forem secas, o Espírito Santo alimentará sua alma com vigor e esperança interior." },
      { title: "Saindo da aridez com autoridade redobrada", desc: "Quem sobrevive ao deserto apoiada no braço de Deus sai dele com raízes profundas, olhar humilde e autoridade para abençoar nações." }
    ],
    faith: "O seu deserto está chegando ao fim! Rios de águas frescas e novos caminhos de realização já estão brotando ao seu redor.",
    prayer: "Pai fiel, quando o caminho parecer seco e a caminhada solitária, lembra-me de que Tua mão está segurando a minha. Abre mananciais de esperança em meu deserto e renova minha fé. Amém.",
    moodTags: ['ansiedade', 'feridas', 'recomeco']
  },
  {
    num: 46,
    modId: 5,
    modTitle: "Fé, Coragem e Vitória sobre as Crises",
    title: "Vencendo a Guerra Invisível da Mente",
    scripture: "2 Coríntios 10:4-5; Romanos 12:2",
    scriptureVerseText: "Destruímos argumentos e toda pretensão que se levanta contra o conhecimento de Deus, e levamos cativo todo pensamento, para torná-lo obediente a Cristo.",
    theme: "Aprender a policiar os pensamentos tóxicos, desarmando pensamentos de catástrofe, inferioridade e medo antes que virem prisões emocionais.",
    points: [
      { title: "A mente como o primeiro campo de batalha", desc: "Toda crise de ansiedade e todo desânimo começam com uma mentira aceita nos pensamentos; identifique a raiz do que você pensa." },
      { title: "A ordem de levar pensamentos cativos", desc: "Quando uma ideia de que 'tudo vai dar errado' ou 'ninguém me ama' invadir sua cabeça, confronte-a imediatamente com a Palavra de Deus." },
      { title: "Dieta mental e espiritual limpa", desc: "Proteja seus olhos e ouvidos de notícias alarmistas em excesso, fofocas e séries que trazem angústia; alimente-se do que edifica." },
      { title: "A mente de Cristo produzindo serenidade", desc: "O Espírito Santo concede equilíbrio, sobriedade e pensamentos de futuro e esperança para as filhas de Deus." }
    ],
    faith: "Você tem a mente de Cristo! Seus pensamentos serão preenchidos de claridade, paz, saúde emocional e vigor.",
    prayer: "Senhor, renova meu entendimento e limpa minha mente de todas as mentiras de derrota. Que meus pensamentos se alinhem à Tua verdade e que a paz de Cristo domine meu coração dia e noite. Amém.",
    moodTags: ['ansiedade', 'culpa', 'descanso']
  },
  {
    num: 47,
    modId: 5,
    modTitle: "Fé, Coragem e Vitória sobre as Crises",
    title: "A Promessa Sagrada da Restituição",
    scripture: "Joel 2:25; Salmo 126:5-6",
    scriptureVerseText: "Restituirei a vocês os anos que foram consumidos pelo gafanhoto... Os que semeiam com lágrimas segarão com cantos de alegria.",
    theme: "Crer na capacidade redentora de Deus de restaurar anos perdidos, saúde abalada, projetos interrompidos e devolver a alegria multiplicada.",
    points: [
      { title: "Nada está definitivamente perdido nas mãos do Pai", desc: "Erros do passado, relacionamentos quebrados ou negócios frustrados podem ser redimidos e integrados em uma história ainda mais linda." },
      { title: "A matemática da restituição divina", desc: "Deus não devolve apenas o que foi perdido; Ele devolve com sabedoria dobrada, maturidade e profundidade de espírito." },
      { title: "A colheita alegre de quem chorou trabalhando", desc: "As noites de insônia orando por seus filhos e por sua família não foram em vão; a colheita dos frutos de paz está amadurecendo." },
      { title: "Escrevendo um novo capítulo de vitória", desc: "Abra espaço na sua vida para a novidade; prepare a casa e o coração para desfrutar da bondade do Senhor na terra dos viventes." }
    ],
    faith: "O Senhor está restituindo os anos difíceis! O choro pode ter durado uma noite, mas a alegria do amanhecer já despontou na sua vida.",
    prayer: "Deus de restauração, eu creio no Teu poder de reescrever histórias. Restitui minha alegria, a harmonia no meu lar e a prosperidade em meus projetos. Em nome de Jesus, amém.",
    moodTags: ['recomeco', 'gratidao', 'feridas']
  },
  {
    num: 48,
    modId: 5,
    modTitle: "Fé, Coragem e Vitória sobre as Crises",
    title: "Rompendo com Ciclos de Sofrimento Hereditário",
    scripture: "1 Crônicas 4:9-10 (Jabez); 2 Coríntios 5:17",
    scriptureVerseText: "Jabez orou ao Deus de Israel: 'Ah, abençoa-me e alarga as minhas fronteiras! Que a tua mão esteja comigo, livrando-me de males e de dores!'. E Deus atendeu ao seu pedido.",
    theme: "Quebrar padrões familiares nocivos de alcoolismo, divórcios traumáticos, escassez e agressividade, inaugurando um novo legado de bênção em Cristo.",
    points: [
      { title: "O passado da sua família de origem não é o seu destino", desc: "O fato de seus antepassados terem sofrido ou falhado não significa que você esteja condenada a repetir o mesmo roteiro trágico." },
      { title: "A oração corajosa de Jabez", desc: "Ele foi gerado em dor, mas recusou viver escravo do seu nome; pediu bênção, alargamento de fronteiras e proteção, e Deus o atendeu plenamente." },
      { title: "Decisão prática de viver diferente", desc: "Adote novas práticas de comunicação sem gritos, respeito financeiro e afeto caloroso com seus filhos e cônjuge." },
      { title: "A linhagem sacerdotal da bênção", desc: "A partir de você, estabelece-se um ciclo virtuoso de paz, estudo, dignidade e comunhão viva com o Senhor para as próximas gerações." }
    ],
    faith: "Os velhos ciclos de sofrimento estão encerrados! Uma história inédita de dignidade, paz e saúde começa com você hoje.",
    prayer: "Pai todo-poderoso, quebro em nome de Jesus todo padrão familiar destrutivo. Alarga minhas fronteiras, cerca minha casa com Tua mão protetora e faz da minha descendência uma árvore de bênção contínua. Amém.",
    moodTags: ['recomeco', 'familia', 'feridas']
  },
  {
    num: 49,
    modId: 5,
    modTitle: "Fé, Coragem e Vitória sobre as Crises",
    title: "A Vitória sobre o Desânimo Espiritual",
    scripture: "Salmo 42:5,11; Isaías 40:29-31",
    scriptureVerseText: "Ele dá força ao cansado, e multiplica as forças ao que não tem nenhum vigor... os que esperam no Senhor renovarão as suas forças; subirão com asas como águias.",
    theme: "O que fazer quando a oração parece difícil, as forças se esvaem e o coração se sente seco e sem entusiasmo para continuar.",
    points: [
      { title: "Conversando com a própria alma com honestidade", desc: "Faça como o salmista e pergunte: 'Por que estás abatida, ó minha alma? Espera em Deus, pois ainda O louvarei'." },
      { title: "Deus não se escandaliza com o seu cansaço", desc: "O Senhor conhece nossa estrutura frágil e lembra que somos pó; Ele não exige orações eloquentes, acolhe até os seus gemidos sinceros." },
      { title: "A simplicidade de apenas repousar no Pai", desc: "Nos dias cinzentos, coloque um louvor suave, deite-se na presença de Deus e deixe que o Espírito Santo interceda por você com gemidos inexprimíveis." },
      { title: "O fôlego de águia que está chegando", desc: "O Deus que nunca tosqueneia nem dorme está soprando novo ar nos seus pulmões; você voltará a voar alto e com visão restaurada." }
    ],
    faith: "O renovo divino invade o seu espírito agora! Receba forças revigoradas e fôlego fresco para caminhar vitoriosa.",
    prayer: "Senhor meu refúgio, quando minhas forças acabarem, sê o vigor da minha vida. Levanta meu espírito desanimado, renova minha paixão pelo Evangelho e faz-me voar sobre as tempestades. Amém.",
    moodTags: ['ansiedade', 'descanso', 'recomeco']
  },
  {
    num: 50,
    modId: 5,
    modTitle: "Fé, Coragem e Vitória sobre as Crises",
    title: "O Mover do Novo Tempo: Mulher Plena e Restaurada",
    scripture: "Isaías 43:18-19; Apocalipse 21:5",
    scriptureVerseText: "Aquele que estava assentado no trono disse: 'Eis que faço novas todas as coisas!' E acrescentou: 'Escreva isto, pois estas palavras são verdadeiras e dignas de confiança'.",
    theme: "Celebrar a conclusão deste ciclo de 50 reflexões e posicionar-se com autoridade, leveza, graça e alegria para desfrutar do novo tempo que Deus preparou.",
    points: [
      { title: "Gratidão profunda pelo caminho percorrido", desc: "Olhe para trás e contemple o quanto você amadureceu, se perdoou e se fortaleceu ao longo destas 50 mensagens diárias." },
      { title: "Despedindo-se de velhas bagagens desnecessárias", desc: "Deixe definitivamente no passado a culpa, o medo do futuro e a necessidade de aprovação alheia; caminhe leve e livre." },
      { title: "O equilíbrio da mulher plena em Cristo", desc: "Cuidando de si mesma sem culpa, brilhando no trabalho com integridade, amando o lar com ternura e servindo ao próximo com empatia." },
      { title: "Você é luz resplandecente nesta geração", desc: "Vá em frente com a cabeça erguida, sabendo que a graça infinita de Deus é o seu sustento e que o melhor da sua história começou agora." }
    ],
    faith: "Bem-vinda ao seu novo tempo! Você é uma Mulher Plena e Restaurada, coroada de amor e vocacionada para a vitória.",
    prayer: "Pai celeste, bendigo Teu santo Nome por esta jornada transformadora. Agradeço por cada cura, consolo e direção recebida. Abraço meu novo tempo de cabeça erguida, coração em paz e pés firmados na Tua graça. Em nome de Jesus Cristo, amém!",
    moodTags: ['recomeco', 'gratidao', 'descanso']
  }
];
