export const engineeringNotes = {
  "wearloom": {
    "en": [
      {
        "label": "Mobile stack",
        "text": "TypeScript and React Native handle the wardrobe, outfit editor and calendar. Expo Image Picker supplies a photo from the camera or gallery, and Expo Image Manipulator compresses the image before storage."
      },
      {
        "label": "On-device inference",
        "text": "On Android, an explicit recognition request loads ONNX Runtime. The CPU runs the models sequentially and releases each session after inference. If segmentation fails, the app can keep the garment category it already identified."
      },
      {
        "label": "Local storage",
        "text": "AsyncStorage holds the wardrobe catalogue. Compressed photographs live in the app’s document directory. The catalogue stores portable references so it can resolve the photo paths again when the app opens."
      },
      {
        "label": "Model integrity",
        "text": "A native Java module streams downloaded model files through SHA-256. Automated tests exercise the Java implementation and check the fallback for devices without the module, including interrupted reads and malformed digests."
      }
    ],
    "pt": [
      {
        "label": "Aplicativo móvel",
        "text": "TypeScript e React Native sustentam o guarda-roupa, o editor de looks e o calendário. O Expo Image Picker recebe a foto da câmera ou da galeria, e o Expo Image Manipulator a comprime antes de salvá-la."
      },
      {
        "label": "Inferência no aparelho",
        "text": "No Android, o ONNX Runtime carrega quando a pessoa pede o reconhecimento. A CPU executa os modelos em sequência e libera cada sessão ao terminar. Se a segmentação falhar, o app pode preservar a categoria já identificada."
      },
      {
        "label": "Armazenamento local",
        "text": "O catálogo fica no AsyncStorage. As fotografias comprimidas ficam no diretório de documentos do aplicativo. O catálogo guarda referências que permitem localizar as imagens novamente quando a pessoa reabre o armário."
      },
      {
        "label": "Integridade dos modelos",
        "text": "Um módulo Java calcula o SHA-256 dos modelos baixados lendo o arquivo em blocos. Os testes exercitam o código Java e a alternativa para aparelhos sem o módulo, cobrindo leituras interrompidas e hashes malformados."
      }
    ]
  },
  "skillpath": {
    "en": [
      {
        "label": "Mobile stack",
        "text": "The TypeScript client uses React Native and Expo Router for practice sessions and history. Domain commands record attempts separately from the screens, so the same scoring rules can be exercised in Node.js tests."
      },
      {
        "label": "Offline storage",
        "text": "The native app saves a practice workspace through Expo SQLite’s key-value store. A repository queues changes and validates saved data on load, preserving an unreadable workspace for recovery if parsing fails."
      },
      {
        "label": "Optional cloud sync",
        "text": "With Supabase configured, PostgreSQL compares the revision sent by the device with the stored revision before accepting a write. A three-way merge combines independent edits and surfaces conflicts when two devices change the same field."
      },
      {
        "label": "Testing concurrent edits",
        "text": "Node.js tests cover a goal edited offline on two devices, deleting an item while another device edits it, and two recordings of the same scheduled practice. The last case requires choosing a single attempt."
      }
    ],
    "pt": [
      {
        "label": "Aplicativo móvel",
        "text": "O cliente em TypeScript usa React Native e Expo Router nas telas de treino e histórico. Comandos de domínio registram cada tentativa separadamente da interface, o que permite testar as regras de pontuação em Node.js."
      },
      {
        "label": "Armazenamento offline",
        "text": "No celular, o espaço de prática fica no armazenamento chave-valor do Expo SQLite. Um repositório enfileira as alterações e valida os dados na leitura. Se a validação falhar, preserva o conteúdo para recuperação."
      },
      {
        "label": "Sincronização opcional",
        "text": "Com o Supabase configurado, o PostgreSQL confere a revisão enviada pelo aparelho antes de aceitar a gravação. O app compara a versão comum com as alterações de cada dispositivo e sinaliza edições conflitantes no mesmo campo."
      },
      {
        "label": "Testes de concorrência",
        "text": "Os testes em Node.js cobrem metas editadas offline em dois aparelhos, exclusão simultânea a uma edição e dois registros do mesmo treino agendado. No último caso, a pessoa escolhe qual tentativa preservar."
      }
    ]
  },
  "medapp": {
    "en": [
      {
        "label": "Client and API",
        "text": "The mobile client uses TypeScript, React Native and Expo. A JavaScript API built on Node.js handles calendar requests. On the device, Expo SecureStore holds the session token used for authenticated requests."
      },
      {
        "label": "Persistence model",
        "text": "The prototype runs a single API process backed by a JSON file. Writes enter a queue, update a copy of the state and replace the file before the new state becomes visible to other requests."
      },
      {
        "label": "Safe booking retries",
        "text": "A recurring booking carries a request ID. Retrying the same request returns the existing series, even after a restart. Reusing its ID with different dates or rules produces an HTTP 409 conflict."
      },
      {
        "label": "Calendar tests",
        "text": "Node.js tests submit two series competing for the same slots and introduce a conflict on a later visit. Other cases exercise daylight saving transitions, when a requested local time can disappear from the calendar."
      }
    ],
    "pt": [
      {
        "label": "Cliente e API",
        "text": "O aplicativo usa TypeScript, React Native e Expo. Uma API em JavaScript, construída com Node.js, atende às requisições da agenda. No aparelho, o Expo SecureStore guarda o token de sessão usado nas requisições autenticadas."
      },
      {
        "label": "Modelo de persistência",
        "text": "O protótipo usa um processo de API e um arquivo JSON. As gravações entram em uma fila, alteram uma cópia dos dados e substituem o arquivo antes que o novo estado fique visível para outras requisições."
      },
      {
        "label": "Repetição de agendamentos",
        "text": "Cada pedido de agendamento recorrente recebe um identificador. Repetir o mesmo pedido devolve a série já salva, inclusive após reiniciar a API. Reutilizar o identificador com datas ou regras diferentes gera um conflito HTTP 409."
      },
      {
        "label": "Testes da agenda",
        "text": "Os testes em Node.js disputam os mesmos horários com duas séries e introduzem um conflito em uma consulta posterior. Também verificam a mudança do horário de verão, quando uma hora local deixa de existir."
      }
    ]
  },
  "retoma": {
    "en": [
      {
        "label": "React and TypeScript",
        "text": "The React dashboard and API handlers share TypeScript rules for quote status, money and follow-up dates. Vite and vinext build the application for the Cloudflare Workers runtime."
      },
      {
        "label": "Query design",
        "text": "Drizzle maps quotes and settings to Cloudflare D1, a SQLite database. A composite index on owner and follow-up date supports the date-ordered queue for each contractor."
      },
      {
        "label": "Concurrent edits",
        "text": "When updating a quote, the API includes its last-read timestamp in the database update. If another request changes the record in the meantime, the API returns HTTP 409."
      },
      {
        "label": "Testing failed imports",
        "text": "The Node.js test suite exercises the API handlers against a local SQLite fixture. One test injects a failure during a batch import and checks that the original quotes remain intact."
      }
    ],
    "pt": [
      {
        "label": "React e TypeScript",
        "text": "O painel em React e os endpoints compartilham regras em TypeScript para valores, etapas do orçamento e datas de retorno. Vite e vinext preparam a aplicação para o ambiente Cloudflare Workers."
      },
      {
        "label": "Consultas ao banco",
        "text": "O Drizzle mapeia orçamentos e configurações para o Cloudflare D1, baseado em SQLite. Um índice composto por responsável e data de retorno atende à fila cronológica de cada prestador."
      },
      {
        "label": "Edições concorrentes",
        "text": "Ao atualizar um orçamento, a API inclui na operação a data de alteração que acabou de ler. Se outra requisição modificar o registro nesse intervalo, a API devolve HTTP 409."
      },
      {
        "label": "Testes de importação",
        "text": "Os testes em Node.js exercitam os endpoints com um banco SQLite local. Um deles simula uma falha durante a importação em lote e verifica que os orçamentos anteriores continuam intactos."
      }
    ]
  },
  "jiu-jitsu-academy": {
    "en": [
      {
        "label": "TypeScript across mobile and web",
        "text": "The directory and instructor screens use React Native and Expo. Native builds keep the session token in Expo SecureStore, while the browser export keeps it in session storage."
      },
      {
        "label": "Node.js and SQLite",
        "text": "The TypeScript API uses Node’s HTTP server and built-in SQLite driver. Account changes run inside database transactions so a failed operation can roll back its writes."
      },
      {
        "label": "Invitations and access tests",
        "text": "An invitation specifies the academy and role the recipient can join. Tests with Node’s test runner check that a used invitation cannot be redeemed twice and a recipient cannot promote their own account."
      }
    ],
    "pt": [
      {
        "label": "TypeScript no celular e na web",
        "text": "O diretório e as telas do professor usam React Native e Expo. O aplicativo nativo guarda o token da sessão no Expo SecureStore. A versão web usa o armazenamento de sessão do navegador."
      },
      {
        "label": "Node.js e SQLite",
        "text": "A API em TypeScript usa o servidor HTTP e o driver SQLite do próprio Node.js. Alterações de conta são gravadas em transações que desfazem a escrita se a operação falhar."
      },
      {
        "label": "Convites e testes de acesso",
        "text": "O convite determina a academia e o papel de quem o recebe. Testes com o executor do Node.js verificam que o convite só pode ser usado uma vez e que o destinatário não consegue elevar as próprias permissões."
      }
    ]
  },
  "extension-9": {
    "en": [
      {
        "label": "Unreal Engine and C++",
        "text": "A C++ game mode tracks incoming calls, objectives and endings. A separate HUD draws the notebook and subtitles from that state, keeping the dialogue and the current task in sync."
      },
      {
        "label": "Visibility and collision",
        "text": "Before the threat can capture the player, the game traces a line from the first-person camera toward it. A wall blocking the visibility trace can interrupt an encounter in the corridor."
      },
      {
        "label": "Audio tools",
        "text": "A Python script synthesizes temporary sound effects as WAV files. The telephone ring combines two tones with timed gaps, and a fixed random seed makes noisy effects repeatable across builds."
      },
      {
        "label": "Gameplay checks on Windows",
        "text": "A PowerShell runner starts Unreal unattended to check checkpoints, captures and both endings. It can run the same checks against the packaged Windows build and capture frames for visual review."
      }
    ],
    "pt": [
      {
        "label": "Unreal Engine e C++",
        "text": "O modo de jogo em C++ controla ligações, objetivos e desfechos. Uma classe separada desenha o caderno e as legendas a partir desse estado, mantendo o diálogo coerente com a tarefa atual."
      },
      {
        "label": "Visibilidade e colisão",
        "text": "Antes de a ameaça capturar o jogador, o jogo traça uma linha da câmera em primeira pessoa até ela. Uma parede que bloqueie essa linha pode interromper um encontro no corredor."
      },
      {
        "label": "Ferramentas de áudio",
        "text": "Um script em Python sintetiza efeitos provisórios em WAV. O telefone combina dois tons com pausas programadas. Uma semente fixa permite reproduzir os efeitos que usam ruído."
      },
      {
        "label": "Testes do jogo no Windows",
        "text": "Um script em PowerShell inicia a Unreal sem intervenção e verifica pontos de retomada, capturas e os dois finais. Também pode testar a versão empacotada para Windows e salvar imagens para revisão visual."
      }
    ]
  },
  "co-op-exploration": {
    "en": [
      {
        "label": "C++ and Unreal networking",
        "text": "The scanner runs in a C++ actor component. Clients send scan input through a remote procedure call. The server checks range, aim and line of sight before accepting a target."
      },
      {
        "label": "Private and shared state",
        "text": "Unreal’s owner-only replication sends scan progress and journal entries to the player who made the observation. Shared equipment, such as a portable light, has a separate network lifecycle that other players can observe."
      },
      {
        "label": "Two-process network tests",
        "text": "A PowerShell harness starts separate Unreal host and client processes. The scenario cancels a scan, completes a discovery and checks what each player sees when a shared light is deployed and expires."
      }
    ],
    "pt": [
      {
        "label": "C++ e rede na Unreal",
        "text": "O scanner é um componente de ator em C++. O cliente envia o comando de leitura por RPC. O servidor verifica distância, direção da mira e linha de visão antes de aceitar o alvo."
      },
      {
        "label": "Estado privado e compartilhado",
        "text": "A replicação restrita ao dono envia o progresso da leitura e o diário apenas ao jogador que fez a observação. Equipamentos compartilhados, como a luz portátil, têm um ciclo de vida visível aos demais jogadores."
      },
      {
        "label": "Testes com dois processos",
        "text": "Um script em PowerShell abre o anfitrião e o cliente em processos separados da Unreal. O teste cancela uma leitura, conclui uma descoberta e verifica o que cada jogador vê quando a luz compartilhada é instalada e expira."
      }
    ]
  },
  "spandelta": {
    "en": [
      {
        "label": "Trace ingestion",
        "text": "A Kotlin receiver on Java 21 accepts OTLP over HTTP. It decodes OpenTelemetry Protobuf or JSON and writes spans to SQLite through JDBC so two captured releases can be compared offline."
      },
      {
        "label": "Percentile calculation",
        "text": "The engine groups spans by service, operation and span kind. It selects an observed span at the 95th percentile and keeps its trace and span IDs for inspection through MCP."
      },
      {
        "label": "Wire-level tests",
        "text": "An integration test sends gzip-compressed Protobuf through the official OpenTelemetry exporter and checks trace context across services. Other tests cover low sample counts and overlapping child spans."
      }
    ],
    "pt": [
      {
        "label": "Coleta de traces",
        "text": "Um receptor em Kotlin na JVM 21 aceita OTLP por HTTP. Ele decodifica Protobuf do OpenTelemetry ou JSON e grava os spans em SQLite via JDBC para comparar duas versões offline."
      },
      {
        "label": "Cálculo do percentil",
        "text": "O motor agrupa os spans por serviço, operação e tipo. Seleciona um span observado no percentil 95 e guarda os identificadores do trace e do span para consulta pelo MCP."
      },
      {
        "label": "Testes de integração",
        "text": "Um teste usa o exportador oficial do OpenTelemetry para enviar Protobuf comprimido com gzip e verificar o contexto entre serviços. Outros testes cobrem amostras pequenas e spans filhos sobrepostos."
      }
    ],
    "files": [
      "https://github.com/Almeida96/spandelta/blob/1d05ec543a61be39d385a243a12394b575353042/src/main/kotlin/io/github/almeida96/spandelta/Analysis.kt",
      "https://github.com/Almeida96/spandelta/blob/1d05ec543a61be39d385a243a12394b575353042/src/test/kotlin/io/github/almeida96/spandelta/AnalysisTest.kt"
    ]
  },
  "patchmeter": {
    "en": [
      {
        "label": "Diff parsing in Java",
        "text": "The Java 21 parser tracks both the line in the updated file and its position in the Git diff. That lets a reviewer locate an uncovered change even after a rename."
      },
      {
        "label": "Reading coverage reports",
        "text": "A SAX parser reads JaCoCo XML, and a separate reader handles LCOV. An added line with zero hits counts as uncovered. If the report omits an entire selected file, the result is inconclusive."
      },
      {
        "label": "Regression tests",
        "text": "JUnit tests exercise real Git output containing spaces and Unicode in filenames, repeated LCOV records and partial branch coverage. MCP tests verify that paginated evidence preserves line order and avoids duplicates."
      }
    ],
    "pt": [
      {
        "label": "Leitura do diff em Java",
        "text": "O parser em Java 21 registra a linha no arquivo alterado e sua posição no diff do Git. Isso permite localizar uma mudança sem cobertura mesmo após renomear o arquivo."
      },
      {
        "label": "Leitura dos relatórios de cobertura",
        "text": "Um parser SAX lê o XML do JaCoCo e outro leitor processa LCOV. Uma linha adicionada com zero execuções entra na contagem de linhas sem cobertura. Se o relatório omite um arquivo selecionado inteiro, o resultado é inconclusivo."
      },
      {
        "label": "Testes de regressão",
        "text": "Testes com JUnit exercitam diffs reais do Git com espaços e Unicode nos nomes, registros LCOV repetidos e cobertura parcial de desvios. Os testes MCP verificam a ordem das linhas entre páginas e detectam duplicatas."
      }
    ],
    "files": [
      "https://github.com/Almeida96/PatchMeter/blob/e462b6cc67f1ca70009598c702c7a87461d2e585/src/main/java/io/github/almeida96/patchmeter/Coverage.java",
      "https://github.com/Almeida96/PatchMeter/blob/e462b6cc67f1ca70009598c702c7a87461d2e585/src/test/java/io/github/almeida96/patchmeter/CoverageTest.java"
    ]
  },
  "tooltape": {
    "en": [
      {
        "label": "MCP recording",
        "text": "A Java 21 CLI launches a local MCP server, discovers its tools and records the requested calls over standard input and output. Jackson parses the JSON exchanged by the two processes."
      },
      {
        "label": "Replay semantics",
        "text": "The replay server consumes one recorded exchange per matching call. Repeated calls can return different recorded outcomes. A request sent out of sequence leaves the next exchange available for retry."
      },
      {
        "label": "Integrity and testing",
        "text": "Each recording carries a SHA-256 checksum over canonical JSON. JUnit tests cover edited recordings, missing versus null fields, reordered arrays and timeouts that must terminate the child process."
      }
    ],
    "pt": [
      {
        "label": "Gravação de sessões MCP",
        "text": "A CLI em Java 21 inicia um servidor MCP local, lista suas ferramentas e grava as chamadas solicitadas pela entrada e saída padrão. Jackson interpreta o JSON trocado pelos dois processos."
      },
      {
        "label": "Reprodução das chamadas",
        "text": "O servidor avança uma posição a cada chamada correspondente. Chamadas repetidas podem devolver resultados diferentes, conforme a gravação. Uma requisição fora de ordem preserva a próxima resposta para nova tentativa."
      },
      {
        "label": "Integridade e testes",
        "text": "Cada gravação inclui um checksum SHA-256 calculado sobre JSON canônico. Testes com JUnit cobrem arquivos alterados, campos ausentes ou nulos, mudanças na ordem dos arrays e o encerramento do processo após um timeout."
      }
    ],
    "files": [
      "https://github.com/Almeida96/tooltape/blob/968abf0be09528195fdeae315e27f5578a005b27/src/main/java/io/github/almeida96/tooltape/ReplayServer.java",
      "https://github.com/Almeida96/tooltape/blob/968abf0be09528195fdeae315e27f5578a005b27/src/test/java/io/github/almeida96/tooltape/ReplayServerTest.java"
    ]
  },
  "queuesift": {
    "en": [
      {
        "label": "Transactional imports",
        "text": "A Kotlin CLI on Java 21 imports messages, processing receipts and optional checkpoints into SQLite in one transaction. It stores source line numbers and SHA-256 hashes so reviewers can locate the input behind a decision."
      },
      {
        "label": "Identity and ordering",
        "text": "The recovery engine groups deliveries by tenant and event ID. Conflicting payloads put every copy on hold. For an ordered stream, a missing sequence number blocks later candidates until the gap is resolved."
      },
      {
        "label": "Agent access and tests",
        "text": "A read-only MCP server exposes the decisions and their evidence. JUnit tests check that collection queries omit message payloads and that inspecting a payload requires explicit permission at server startup."
      }
    ],
    "pt": [
      {
        "label": "Importação transacional",
        "text": "Uma CLI em Kotlin na JVM 21 importa mensagens, comprovantes de processamento e checkpoints opcionais em uma transação SQLite. Números de linha e hashes SHA-256 permitem localizar os registros que sustentam cada decisão."
      },
      {
        "label": "Identidade e ordenação",
        "text": "O motor agrupa entregas por tenant e identificador do evento. Conteúdos divergentes retêm todas as cópias. Em um fluxo ordenado, uma lacuna na sequência impede que eventos posteriores entrem no lote de reenvio."
      },
      {
        "label": "Acesso por agentes e testes",
        "text": "Um servidor MCP de leitura expõe as decisões e suas evidências. Testes com JUnit verificam que as listagens omitem o conteúdo das mensagens e que sua inspeção exige permissão explícita ao iniciar o servidor."
      }
    ],
    "files": [
      "https://github.com/Almeida96/queuesift/blob/1fbc0e9458ee575808d2097f88bb600318998521/src/main/kotlin/io/github/almeida96/queuesift/RecoveryEngine.kt",
      "https://github.com/Almeida96/queuesift/blob/1fbc0e9458ee575808d2097f88bb600318998521/src/test/kotlin/io/github/almeida96/queuesift/RecoveryEngineTests.kt"
    ]
  }
};
