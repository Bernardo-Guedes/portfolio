import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      menu: {
        sobre: "Sobre",
        experiencia: "Experiência",
        projetos: "Projetos",
        ferramentas: "Ferramentas",
        contato: "Contato",
        curriculo: "Currículo" 
      },

      inicial:{
        titulo1: "Desenvolvedor",
        titulo2: "Full Stack",
        texto: "Atuo na área de desenvolvimento de software que transforma ideias em sistemas reais: criando aplicações, explorando novas tecnologias e aprimorando continuamente minhas habilidades como engenheiro de software.",
        stat1: "MEDALISTA OLÍMPICO - OLIMPÍADAS DE MATEMÁTICA",
        stat2: "MONITOR ACADÊMICO - MATEMÁTICA & COMPUTABILIDADE",
        stat3: "PROJETOS PESSOAIS - DO DESENVOLVIMENTO WEB BÁSICO AO REACT & SPRING BOOT",
        stat4: "FERRAMENTAS & TECNOLOGIAS - HTML, CSS, JS, JAVA, SPRING BOOT, PYTHON...",
        tag: "Disponível para novas oportunidades"
      },

      sobre: {
        tag:"Perfil",
        titulo: "Sobre",
        texto: "Atuo na etapa do desenvolvimento de software que vai além do básico: transformar ideias em aplicações reais, aprender por meio de projetos e construir soluções que abrangem toda a pilha tecnológica, do frontend ao backend.",
        tagCargo:"CARGO",
        tituloCargo:"Monitor de Computabilidade",
        dataLocalCargo: "PUC Minas · Set 2026 — presente",
        tagLocalizacao:"LOCAL",
        localizacao:"Belo Horizonte, MG, Brasil",
        novasOportunidades: "Aberto a novas oportunidades",
        titulo_stat1: "MEDALISTA OLÍMPICO",
        titulo_stat2: "MONITOR ACADÊMICO",
        titulo_stat3: "PROJETOS PESSOAIS",
        titulo_stat4: "TECNOLOGIAS & FERRAMENTAS",
        texto_stat1: "Participei de olimpíadas de matemática nacionais e regionais, incluindo OBMEP, OMIF, OIMSF e Canguru. Conquistei seis medalhas e distinções, variando de Menção Honrosa a Ouro.",
        texto_stat2: "Experiência como monitor de Matemática no ensino médio e de Computabilidade em nível universitário. Atualmente, presto suporte a alunos na PUC Minas enquanto desenvolvo minhas habilidades de comunicação e resolução de problemas.",
        texto_stat3: "Desenvolvi projetos pessoais e acadêmicos ao longo da minha jornada de aprendizado, começando com HTML, CSS, JavaScript e JSON e evoluindo para o desenvolvimento moderno de frontend e backend com React, Vite e Spring Boot.",
        texto_stat4: "Experiência prática em diferentes camadas do desenvolvimento de software, explorando frontend, backend, APIs e persistência de dados, enquanto amplio continuamente meu repertório técnico por meio de projetos reais."
      },

      experiencia: {
        tag:"Jornada",
        titulo1: "Experiência",
        titulo2: "Profissional",
        texto: "Migrei da área de automação industrial para a engenharia de software, adquirindo experiência prática com PLCs, HMIs, Java, Spring Boot, Python e React. Atualmente, atuo como monitor da disciplina de Teoria da Computação na PUC Minas.",
        titulo_experiencia1: "Auxiliar de Automação",
        titulo_experiencia2: "Monitor de Computabilidade",
        local_experiencia1: "Siautec Engenharia - Betim/MG",
        local_experiencia2: "PUC Minas - Coração Eucarístico",
        tag_experiencia: "EXPERIÊNCIA",
        dataInicial_experiencia1: "Ago 2025",
        dataFinal_experiencia1: "Jan 2026",
        dataInicial_experiencia2: "Set 2026",
        dataFinal_experiencia2: "Presente",
        topicos_experiencia1: [
          "Desenvolvi e realizei a programação, configuração e os testes de CLPs e IHMs em projetos de automação industrial.",
          "Organizei informações sobre materiais, componentes e compras, auxiliando no controle e monitoramento dos recursos necessários aos projetos.",
          "Mantive contato direto com clientes, coletando e transmitindo informações sobre as necessidades e o andamento dos projetos.",
          "Atuei como responsável pela frente de obra, supervisionando atividades em campo, coordenando demandas e garantindo o alinhamento entre a execução e o projeto."
        ],
        topicos_experiencia2: [
          "Auxilio os alunos na compreensão de conceitos e na resolução de exercícios relacionados à disciplina de Computabilidade.",
          "Dou suporte ao professor durante as atividades da disciplina, acompanhando o progresso e esclarecendo dúvidas dos alunos.",
          "Desenvolvo minhas habilidades de comunicação, resolução de problemas e explicação de conceitos técnicos."
        ],
      },

      projetos: {
          titulo1: "Projetos",
          titulo2: "em destaque",
          titulo_projeto1: "Olympic Conscience",
          titulo_projeto2: "Champions Of The PyArena",
          titulo_projeto3: "Radio/Clima Browser",
          descricao_projeto1: "O Olympic Conscience reúne informações importantes sobre olimpíadas científicas em um portal de notícias, além de oferecer acesso a conteúdos voltados para os estudos e permitir a interação entre os usuários. A plataforma também incentiva o compartilhamento de experiências e a competição saudável por meio de um sistema de ranking baseado na participação ativa da comunidade.",
          descricao_projeto2: "Champions of the Py Arena é um jogo de luta local para dois jogadores, no qual cada participante controla um personagem dentro de uma arena. O objetivo é derrotar o adversário reduzindo sua barra de vida a zero por meio de ataques e movimentação estratégica.",
          descricao_projeto3: "O RadioBrowserAPI é uma aplicação web desenvolvida com Spring Boot que permite explorar estações de rádio das capitais brasileiras, consultar as condições climáticas de cada cidade e descobrir novas estações. A plataforma integra APIs externas, oferece autenticação e cadastro seguros de usuários e permite salvar estações de rádio favoritas para facilitar o acesso. Com uma interface intuitiva e recursos personalizados, proporciona uma maneira prática de descobrir estações de rádio e acompanhar as condições climáticas locais."
      },

      ferramentas: {
        tag:"Habilidades",
        titulo1: "Stack",
        titulo2: "Tecnológica",
        texto: "As tecnologias que mais utilizo para transformar ideias em projetos, abrangendo desenvolvimento web, aplicações full-stack e soluções de software."
      },


      curriculo: {
        titulo: "Currículo",
        paginas_one: "{{count}} página",
        paginas_other: "{{count}} páginas",
        zoom: "Zoom",
        zoom_menos: "Diminuir o zoom",
        zoom_mais: "Aumentar o zoom",
        zoom_ajustar: "Ajustar à largura",
        baixar: "Baixar PDF",
        abrir: "Abrir em nova aba",
        arquivo: "Curriculo-Bernardo-Guedes.pdf",
        carregando: "Carregando o PDF...",
        erro: "Não foi possível mostrar o PDF aqui. Baixe ou abra em uma nova aba pelos botões acima.",
      },

      contatos: {
        tag:"Expertise",
        titulo_secao1: "Vamos construir algo",
        titulo_secao2: "Envie uma mensagem",
        texto_secao1: "Se você tem interesse em desenvolvimento de software, aplicações web ou projetos de tecnologia, ficaria feliz em me conectar e conversar sobre ideias, oportunidades e colaborações. Estou sempre aberto a aprender, desenvolver novos projetos e contribuir para iniciativas de código aberto.",
        texto_secao2: "Compartilhe a função, a equipe, o escopo do problema ou a ideia de produto, e eu responderei com um contexto que seja realmente útil.",
        rodape_secao1:"Disponível para novas oportunidades",
        rodape_secao2:"Sua mensagem será enviada para meu e-mail, e seu endereço será utilizado para facilitar uma possível resposta.",
        texto_botao1:"Baixar currículo",
        texto_botao2:"Enviar mensagem",
        label_nome: "NOME",
        label_motivo: "MOTIVO",
        label_mensagem: "MENSAGEM",
        placeholder_nome: "Seu nome",
        placeholder_email: "sua@companhia.com",
        placeholder_mensagem: "Fale-me sobre a oportunidade ou a ideia...",
        select1: "Contratação",
        select2: "Colaboração",
        select3: "Outro",
        erro_nome: "Informe seu nome.",
        erro_email: "Informe um email válido.",
        erro_mensagem: "Escreva pelo menos 10 caracteres.",
        erro: "Algo deu errado. Tente novamente ou envie um e-mail diretamente para mim.",
        sucesso: "Mensagem enviada! Entrarei em contato em breve."
      },
    },
  },
  en: {
    translation: {

      menu: {
        sobre: "About",
        experiencia: "Experience",
        projetos: "Projects",
        ferramentas: "Stack",
        contato: "Contact",
        curriculo: "Resume" 
      },

      inicial:{
        titulo1: "Full Stack",
        titulo2: "Developer",
        texto: "I work on the part of software development that turns ideas into real systems: building applications, exploring new technologies, and continuously improving my skills as a software engineer.",
        stat1: "OLYMPIC MEDALIST - MATHEMATICS OLYMPIADS",
        stat2: "TEACHING ASSISTANT - MATHEMATICS & COMPUTABILITY",
        stat3: "PERSONAL PROJECTS - FROM VANILLA WEB TO REACT & SPRING BOOT",
        stat4: "TECHNOLOGIES & STACKS - HTML, CSS, JS, JAVA, SPRING BOOT, PYTHON...",
        tag: "Available for new opportunities"
      },

      sobre: {
        tag:"Profile",
        titulo: "About",
        texto: "I work on the part of software development that starts beyond the basics: turning ideas into real applications, learning through projects, and building across the stack from frontend to backend.",
        tagCargo:"ROLE",
        tituloCargo:"Computability Monitor",
        dataLocalCargo: "PUC Minas · Set 2026 — present",
        tagLocalizacao:"BASED",
        localizacao:"Belo Horizonte, MG, Brazil",
        novasOportunidades: "Open to new roles",
        titulo_stat1: "OLYMPIC MEDALIST",
        titulo_stat2: "TEACHING ASSISTANT",
        titulo_stat3: "PERSONAL PROJECTS",
        titulo_stat4: "TECHNOLOGIES & STACKS",
        texto_stat1: "Participated in national and regional mathematics olympiads, including OBMEP, OMIF, OIMSF and Canguru. Earned six medals and distinctions ranging from Honorable Mention to Gold.",
        texto_stat2: "Teaching assistant experience in both high-school Mathematics and university-level Computability. Currently supporting students at PUC Minas while developing my communication and problem-solving skills.",
        texto_stat3: "Built personal and academic projects throughout my learning journey, starting with HTML, CSS, JavaScript and JSON and progressing to modern frontend and backend development with React, Vite and Spring Boot.",
        texto_stat4: "Hands-on experience across different layers of software development, exploring frontend, backend, APIs and data persistence while continuously expanding my technical toolkit through real projects."
      },

      experiencia: {
        tag:"Journey",
        titulo1: "Professional",
        titulo2: "Experience",
        texto: "I’ve grown from industrial automation into software engineering, gaining hands-on experience with PLCs, HMIs, Java, Spring Boot, Python, and React. I currently work as a Computer Science Theory teaching assistant at PUC Minas.",
        titulo_experiencia1: "Automation Assistant",
        titulo_experiencia2: "Computability Monitor",
        local_experiencia1: "Siautec Engenharia - Betim/MG",
        local_experiencia2: "PUC Minas - Coração Eucarístico",
        tag_experiencia: "EXPERIENCE",
        dataInicial_experiencia1: "Aug 2025",
        dataFinal_experiencia1: "Jan 2026",
        dataInicial_experiencia2: "Sep 2026",
        dataFinal_experiencia2: "Present",
        topicos_experiencia1:[
          "I developed and carried out the programming, configuration, and testing of PLCs and HMIs in industrial automation projects.", 
          "I organized information regarding materials, components, and purchases, assisting in the control and monitoring of resources required for the projects.", 
          "I maintained direct contact with clients, gathering and conveying information regarding project needs and progress.",
          "I served as a site supervisor, overseeing field activities, coordinating requirements, and ensuring alignment between execution and the project design."
        ],
        topicos_experiencia2:[
          "I assist students in understanding concepts and solving exercises related to the Computability course.", 
          "I support the professor during course activities, helping to monitor progress and clarify students' questions.", 
          "I am developing my skills in communication, problem-solving, and explaining technical concepts."
        ]
      },

      projetos: {
        titulo1: "Featured",
        titulo2: "Projects",
        titulo_projeto1: "Olympic Conscience",
        titulo_projeto2: "Champions Of The PyArena",
        titulo_projeto3: "Radio/Clima Browser",
        descricao_projeto1:"Olympic Conscience gathers important information about scientific Olympiads in a news hub, while also providing access to study-oriented content and enabling user interaction. The platform also fosters the sharing of experiences and healthy competition through a ranking system based on active community participation.",
        descricao_projeto2:"Champions of the Py Arena is a local two-player fighting game in which each participant controls a character within an arena. The goal is to defeat the opponent by reducing their health bar to zero through attacks and strategic movement.",
        descricao_projeto3:"RadioBrowserAPI is a web application built with Spring Boot that allows users to explore radio stations across Brazilian state capitals, check local weather conditions for each city, and discover new stations. The platform integrates external APIs, features secure user authentication and registration, and allows users to save their favorite radio stations for quick access. With an intuitive interface and personalized features, it provides a convenient way to discover radio stations and stay informed about local weather.",
      },

      ferramentas: {
        tag:"Expertise",
        titulo1: "Technical",
        titulo2: "Stack",
        texto: "The technologies I use most to turn ideas into projects, spanning web development, full-stack applications, and software solutions."
      },

      curriculo: {
        titulo: "Resume",
        paginas_one: "{{count}} page",
        paginas_other: "{{count}} pages",
        zoom: "Zoom",
        zoom_menos: "Zoom out",
        zoom_mais: "Zoom in",
        zoom_ajustar: "Fit to width",
        baixar: "Download PDF",
        abrir: "Open in new tab",
        arquivo: "Resume-Bernardo-Guedes.pdf",
        carregando: "Loading the PDF...",
        erro: "Couldn't display the PDF here. Download it or open it in a new tab using the buttons above.",
      },

      contatos: {
        tag:"Expertise",
        titulo_secao1: "Let's Build Something",
        titulo_secao2: "Send a Message",
        texto_secao1: "If you're interested in software development, web applications, or technology projects, I'd be happy to connect and talk about ideas, opportunities, and collaborations. I'm always open to learning, building new projects, and contributing to open-source initiatives.",
        texto_secao2: "Share the role, team, problem space, or product idea and I'll reply with context that's actually useful.",
        rodape_secao1:"Available for new opportunities",
        rodape_secao2:"Your message will be sent to my email, and your email address will be used to make it easier for me to reply.",
        texto_botao1:"Download resume",
        texto_botao2:"Send message",
        label_nome: "NAME",
        label_motivo: "REASON",
        label_mensagem: "MESSAGE",
        placeholder_nome: "Your name",
        placeholder_email: "you@company.com",
        placeholder_mensagem: "Tell me about the opportunity or idea...",
        select1: "Hiring",
        select2: "Collaboration",
        select3: "Other",
        erro_nome: "Enter your name.",
        erro_email: "Enter a valid email.",
        erro_mensagem: "Write at least 10 characters.",
        erro: "Something went wrong. Try again or email me directly.",
        sucesso: "Message sent! I'll get back to you soon."
      },

    },
  },
};

const idiomaInicial = (): "en" | "pt" => {
  try {
    const url = new URLSearchParams(window.location.search).get("lang")?.toLowerCase();
    if (url?.startsWith("en")) return "en";
    if (url?.startsWith("pt")) return "pt";

    const salvo = localStorage.getItem("lang");
    if (salvo === "en" || salvo === "pt") return salvo;

    if (navigator.language.toLowerCase().startsWith("en")) return "en";
  } catch {
    /* segue o padrão */
  }
  return "pt";
};

i18n.use(initReactI18next).init({
  resources,
  lng: idiomaInicial(),
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

const setHtmlLang = (lng: string) => {
  document.documentElement.lang = lng.startsWith("en") ? "en" : "pt-BR";
};

setHtmlLang(i18n.language);
i18n.on("languageChanged", setHtmlLang);

export default i18n;