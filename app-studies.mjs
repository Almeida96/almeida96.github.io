export const appStudies = {
  wearloom: {
    name: "Wearloom",
    en: {
      platform: "Android · React Native",
      purpose: "A shirt photographed today can become part of next Friday’s outfit. Wearloom keeps the photograph, the garment details and the outfits that use it together on the phone.",
      steps: [
        "Photograph a garment or pick a photo from your gallery.",
        "Review the suggested category and colour, then save the piece to your wardrobe.",
        "Combine it with other saved pieces and choose a day to wear the outfit."
      ],
      implementation: "Once its models are downloaded, the Android preview can classify a garment on the device. The wardrobe keeps the original photo so the wearer can correct a suggestion or keep the original framing.",
      stageNote: "The Android preview has been exercised in an emulator. Camera handling and recognition speed on a physical phone are still being evaluated."
    },
    pt: {
      platform: "Android · React Native",
      purpose: "Uma camisa fotografada hoje pode fazer parte do look da próxima sexta. O Wearloom reúne no celular a foto, os detalhes da peça e as combinações em que ela aparece.",
      steps: [
        "Fotografe uma peça ou escolha uma foto da galeria.",
        "Confira a categoria e a cor sugeridas e salve a peça no guarda-roupa.",
        "Combine a peça com outras que você já cadastrou e escolha no calendário quando usar o look."
      ],
      implementation: "Depois de baixar os modelos, a prévia para Android consegue classificar a peça no aparelho. O guarda-roupa preserva a foto original para que a pessoa possa corrigir a sugestão ou manter o enquadramento.",
      stageNote: "A prévia para Android passou por testes em emulador. A câmera e a velocidade de reconhecimento no celular físico seguem em avaliação."
    }
  },
  medapp: {
    name: "MedApp",
    en: {
      platform: "React Native · Expo",
      purpose: "A patient who returns every week needs a sequence of appointments that fits around the rest of the clinic’s schedule. MedApp lets the clinician check the whole series before adding it to the calendar.",
      steps: [
        "Open the calendar and choose a patient for a recurring appointment.",
        "Set the day, time and number of visits, then check the proposed dates.",
        "Resolve any conflicts, confirm the series and review the bookings in the weekly calendar."
      ],
      implementation: "The server checks the proposed visits against existing appointments and blocked hours. It saves the series together so a conflict on the last date cannot leave half a schedule booked.",
      stageNote: "The mobile prototype works with a local API and has a browser preview. Signed mobile builds and validation on physical devices are pending."
    },
    pt: {
      platform: "React Native · Expo",
      purpose: "Um paciente que retorna toda semana precisa de horários que caibam na agenda do consultório. No MedApp, o profissional confere a série inteira antes de incluí-la no calendário.",
      steps: [
        "Abra a agenda e selecione o paciente para o agendamento recorrente.",
        "Escolha o dia, o horário e a quantidade de consultas, depois confira as datas propostas.",
        "Resolva eventuais conflitos, confirme a série e consulte os horários na visão semanal."
      ],
      implementation: "O servidor verifica as datas propostas contra consultas e bloqueios existentes e grava a série de uma só vez. Um conflito na última data impede que parte da série fique agendada por engano.",
      stageNote: "O protótipo móvel funciona com uma API local e tem prévia no navegador. As versões assinadas e a validação em aparelhos físicos ainda estão pendentes."
    }
  },
  skillpath: {
    name: "SkillPath",
    en: {
      platform: "React Native · TypeScript",
      purpose: "How do you tell whether free-throw practice is paying off? SkillPath turns that question into a repeatable exercise. Each session records makes out of ten from the same spot, giving the next practice a starting point.",
      steps: [
        "Choose the free-throw challenge and take a first set of ten shots to establish your baseline.",
        "Record the number of makes and note where you stood.",
        "Repeat the set at the same distance and compare the two entries in your activity history."
      ],
      implementation: "The challenge stores each attempt as its own measurement. The history keeps earlier attempts alongside the latest score, so a learner can revisit the conditions behind a change.",
      stageNote: "Free throws are one of the guided challenges in the mobile prototype. Physical-device testing is still part of the work ahead of a store release."
    },
    pt: {
      platform: "React Native · TypeScript",
      purpose: "Como saber se o treino de lance livre está dando resultado? O SkillPath transforma a pergunta em um exercício repetível. Cada sessão registra quantos arremessos entraram em dez tentativas do mesmo ponto.",
      steps: [
        "Escolha o desafio de lance livre e faça uma primeira série de dez arremessos.",
        "Registre os acertos e anote de onde você arremessou.",
        "Repita a série à mesma distância e compare os dois registros no histórico da atividade."
      ],
      implementation: "Cada tentativa fica registrada como uma medição própria. O histórico preserva as séries anteriores ao lado do resultado mais recente, junto com as anotações sobre as condições do treino.",
      stageNote: "O lance livre é um dos desafios guiados do protótipo móvel. Os testes em aparelhos físicos fazem parte da preparação para a distribuição em loja."
    }
  },
  retoma: {
    name: "Retoma",
    en: {
      platform: "Web · React · SQLite",
      purpose: "A contractor who sent several quotes last week needs to know whom to call back today. Retoma puts those follow-ups in date order and keeps the next action beside the quote.",
      steps: [
        "Add a quote with an amount, a contact and a follow-up date.",
        "Open the follow-up queue and review the message prepared for that quote.",
        "Contact the customer, then record the outcome or set another follow-up date."
      ],
      implementation: "The server stores amounts as integer cents and interprets follow-up dates in the São Paulo time zone. The total and due date keep the same meaning when the dashboard is reopened.",
      stageNote: "The web app includes a demo with sample quotes. Changes in that demo last for the current session and reset on reload."
    },
    pt: {
      platform: "Web · React · SQLite",
      purpose: "Depois de enviar vários orçamentos na semana, o prestador precisa saber a quem retornar hoje. O Retoma organiza os contatos pela data de retorno e deixa a próxima ação junto do orçamento.",
      steps: [
        "Cadastre o orçamento com valor, contato e data de retorno.",
        "Abra a fila de retornos e revise a mensagem preparada para aquele orçamento.",
        "Entre em contato e registre o resultado ou marque outra data de retorno."
      ],
      implementation: "O servidor guarda os valores em centavos inteiros e interpreta as datas no fuso de São Paulo. O total e o dia de retorno mantêm o mesmo significado quando o painel é reaberto.",
      stageNote: "O aplicativo web inclui uma demonstração com orçamentos de exemplo. As alterações dessa demonstração duram até a página ser recarregada."
    }
  },
  "jiu-jitsu-academy": {
    name: "Jiu-jitsu academy app",
    en: {
      platform: "React Native · Expo",
      purpose: "Someone travelling for training can look up a school in the city they are visiting. The same app gives instructors a private area to invite students and keep track of belt promotions.",
      steps: [
        "Search the directory by city and open a school’s profile.",
        "Check the location and contact details, then save the school to favourites.",
        "From the instructor account, invite a student and record a belt promotion for an enrolled student."
      ],
      implementation: "Each invitation is tied to an academy. The server checks the instructor’s academy before accepting a promotion, keeping student records scoped to the school that manages them.",
      stageNote: "The mobile prototype includes a browser demo for the directory and the instructor workflow."
    },
    pt: {
      platform: "React Native · Expo",
      purpose: "Quem viaja para treinar pode procurar uma academia na cidade de destino. No mesmo app, os professores têm uma área restrita para convidar alunos e registrar graduações.",
      steps: [
        "Busque pelo nome da cidade no diretório e abra o perfil de uma academia.",
        "Confira a localização e os canais de contato e salve a academia nos favoritos.",
        "Na conta de professor, convide um aluno e registre a nova faixa de um aluno matriculado."
      ],
      implementation: "Cada convite fica vinculado a uma academia. Antes de registrar uma graduação, o servidor verifica se o professor pertence à escola responsável pelo aluno.",
      stageNote: "O protótipo móvel inclui uma demonstração no navegador para consultar o diretório e experimentar o fluxo do professor."
    }
  },
  fisioapp: {
    name: "FisioApp",
    en: {
      platform: "Desktop · Python · Tkinter",
      purpose: "A physiotherapist selling ten-visit packages needs to record what happened and check how many visits are left after each appointment. FisioApp handles both from a desktop computer, including when it is offline.",
      steps: [
        "Find the patient by ID and open the session form.",
        "Write the visit notes and save the session.",
        "Open the patient history to see the notes alongside the number of visits left in the current package."
      ],
      implementation: "The balance is calculated from the full session history. The tenth visit leaves zero visits in the package. Recording the eleventh starts the next package while keeping the first ten notes intact.",
      stageNote: "This is the earlier desktop application. Its records are stored locally as JSON, and the later MedApp includes an import path for those patient files."
    },
    pt: {
      platform: "Desktop · Python · Tkinter",
      purpose: "Depois de cada atendimento de um pacote de dez sessões, o fisioterapeuta precisa registrar como foi a consulta e saber quantas sessões restam. O FisioApp reúne essas duas tarefas no computador e funciona offline.",
      steps: [
        "Localize o paciente pelo identificador e abra o formulário de sessão.",
        "Anote como foi o atendimento e salve o registro.",
        "Abra o histórico do paciente para consultar as anotações e o saldo do pacote atual."
      ],
      implementation: "O saldo vem do histórico completo de atendimentos. A décima sessão deixa o pacote com saldo zero. A décima primeira abre o pacote seguinte e preserva as anotações das dez sessões anteriores.",
      stageNote: "Esta é a versão anterior para desktop. Os registros ficam em um arquivo JSON local, e o MedApp permite importar esses cadastros."
    }
  },
  "extension-9": {
    name: "Extension 9",
    en: {
      platform: "Windows · Unreal Engine",
      purpose: "Your night shift at a guesthouse begins with a ringing phone at reception. The caller gives you a reason to leave the desk. Your notebook keeps the clues you need to decide which room to check next.",
      steps: [
        "Start a shift and answer the reception phone.",
        "Read the call, check your notebook and follow the clue into the hallway.",
        "Inspect the relevant room and return to the next call as the shift unfolds."
      ],
      implementation: "Each task has an in-memory checkpoint. After a capture, the player can retry the current call. Opening the notebook pauses the threat long enough to read a clue.",
      stageNote: "The Windows prototype has a playable shift with two endings. Calls use on-screen dialogue and sound effects, and a new launch begins a fresh shift."
    },
    pt: {
      platform: "Windows · Unreal Engine",
      purpose: "O turno da noite na pensão começa com um telefone tocando na recepção. A ligação dá um motivo para sair do balcão. No caderno ficam as pistas para decidir qual quarto conferir em seguida.",
      steps: [
        "Comece o turno e atenda ao telefone da recepção.",
        "Leia a conversa, consulte o caderno e siga a pista pelo corredor.",
        "Inspecione o quarto indicado e volte para a próxima ligação."
      ],
      implementation: "Cada pendência tem um ponto de retomada em memória. Depois de uma captura, o jogador pode repetir a ligação em andamento. Ao abrir o caderno, a ameaça fica pausada durante a leitura.",
      stageNote: "O protótipo para Windows tem um turno jogável com dois desfechos. As ligações usam diálogos em texto e efeitos sonoros. Reabrir o jogo inicia um novo turno."
    }
  },
  "co-op-exploration": {
    name: "Co-op exploration game",
    en: {
      platform: "PC · Unreal Engine · C++",
      purpose: "A shared base gives the group somewhere to prepare and somewhere to return to. Beyond the portal, players explore unfamiliar terrain together and can scan the creatures they encounter.",
      steps: [
        "Join a co-op session and set out from the shared base.",
        "Travel through a portal and scan a creature during the expedition.",
        "Find a return portal and head back to base."
      ],
      implementation: "The server decides whether an explorer can take damage, checking the character’s location and state. Players at base stay protected while teammates can still be in danger outside.",
      stageNote: "This is an Unreal multiplayer prototype. Development includes playtests with multiple game windows to check that participants see the same events."
    },
    pt: {
      platform: "PC · Unreal Engine · C++",
      purpose: "A base compartilhada é o ponto de partida e de retorno do grupo. Do outro lado do portal, os jogadores exploram o terreno juntos e podem usar o scanner para investigar as criaturas que encontram.",
      steps: [
        "Entre em uma sessão cooperativa e prepare a saída da base.",
        "Atravesse o portal e use o scanner em uma criatura durante a expedição.",
        "Encontre um portal de retorno e volte à base."
      ],
      implementation: "O servidor verifica a posição e o estado do personagem antes de aplicar dano. Quem está na base fica protegido mesmo que os colegas ainda estejam em perigo do lado de fora.",
      stageNote: "O projeto está na fase de protótipo multijogador em Unreal. O desenvolvimento inclui testes em várias janelas para conferir se os participantes veem os mesmos acontecimentos."
    }
  }
};
