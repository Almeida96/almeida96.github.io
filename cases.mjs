const spanDelta = {
  title: "SpanDelta",
  repo: "https://github.com/Almeida96/spandelta",
  release: "https://github.com/Almeida96/spandelta/releases/tag/v0.1.0",
  tech: ["Kotlin", "OpenTelemetry", "SQLite", "MCP"],
  image: "assets/evidence/checkout.jpg",
  primary: "+80 ms",
  sample: "bin/spandelta demo --out checkout-demo",
}

const patchMeter = {
  title: "PatchMeter",
  repo: "https://github.com/Almeida96/PatchMeter",
  release: "https://github.com/Almeida96/PatchMeter/releases/tag/v0.1.0",
  tech: ["Java 21", "JaCoCo", "LCOV", "MCP"],
  image: null,
  alt: "",
  primary: "2/3",
  sample: "bin/patchmeter demo --dir demo-output",
}

const toolTape = {
  title: "ToolTape",
  repo: "https://github.com/Almeida96/tooltape",
  release: "https://github.com/Almeida96/tooltape/releases/tag/v0.1.0",
  tech: ["Java 21", "MCP", "JSON-RPC"],
  image: "assets/evidence/tooltape-comparison.jpg",
  primary: "6",
  sample: "bin/tooltape demo --dir demo-output",
}

export const caseStudies = {
  spandelta: {
    pt: {
      ...spanDelta,
      lead: "Comparo os traces de duas versões e sigo a regressão até uma requisição específica.",
      problem: "Quando o checkout fica mais lento depois de uma mudança, o tempo total diz pouco sobre onde investigar. A revisão precisa comparar as mesmas operações e permitir que alguém examine uma requisição que apresentou o atraso.",
      approach: "O SpanDelta agrupa spans do OpenTelemetry por serviço e operação, compara a latência p95 e a taxa de erros e guarda os IDs dos traces em SQLite. O CI recebe o resultado da comparação. Um agente pode consultar os mesmos dados por MCP.",
      evidence: "No exemplo sintético, cada versão processa 40 requisições. O p95 do checkout sobe de 151 para 231 ms. A autorização do pagamento passa de 89 para 169 ms, enquanto a reserva de estoque permanece em 48 ms. O relatório aponta uma requisição da versão candidata para investigar o pagamento.",
      limits: "A leitura depende de tráfego e amostragem comparáveis. Para confirmar a causa do atraso, ainda é preciso examinar o trace e o código que executou aquela operação.",
      alt: "Relatório do exemplo de checkout. Duas das três operações ultrapassam os limites de regressão, e a reserva de estoque se mantém estável.",
      primaryLabel: "Variação do p95 do checkout no exemplo",
    },
    en: {
      ...spanDelta,
      lead: "I compare traces across two releases and follow a regression down to an individual request.",
      problem: "When checkout slows down after a change, total request time gives few clues about where to look. A reviewer needs to compare the same operations and inspect a request that actually experienced the delay.",
      approach: "SpanDelta groups OpenTelemetry spans by service and operation, compares p95 latency and error rates, and keeps trace IDs in SQLite. CI can use the comparison as a release gate. An agent can inspect the same data through MCP.",
      evidence: "In the synthetic example, each release handles 40 requests. Checkout p95 climbs from 151 to 231 ms. Payment authorization moves from 89 to 169 ms, while inventory reservation stays at 48 ms. The report points to a candidate request for investigating the payment path.",
      limits: "The comparison depends on similar traffic and sampling. Confirming the cause of a delay still requires inspecting the trace and the code that handled that operation.",
      alt: "Checkout example report. Two of three operations exceed the regression limits while inventory reservation remains stable.",
      primaryLabel: "Checkout p95 change in the example",
    },
  },
  patchmeter: {
    pt: {
      ...patchMeter,
      lead: "Cruzo as linhas novas de um diff com a cobertura de testes para mostrar exatamente o que ficou sem execução.",
      problem: "Uma alteração pequena pode introduzir uma regra de negócio sem teste e mal mexer na porcentagem de cobertura do projeto. Durante a revisão, quero saber qual linha mudou e o que o relatório de testes registrou sobre ela.",
      approach: "O PatchMeter cruza o caminho e o número de cada linha adicionada no Git com registros do JaCoCo ou LCOV. O relatório diferencia execução, zero execuções e ausência de dados. Três consultas MCP permitem examinar o resultado por arquivo e linha.",
      evidence: "O exemplo sintético adiciona um desconto por quantidade. Das quatro linhas Java novas, duas foram executadas, a linha 7 do desconto teve zero execuções e a linha 8 ficou sem registro. A cobertura observada de 66,6667% fica abaixo do limite de 80%.",
      limits: "O diff e o relatório precisam vir da mesma revisão do código. A porcentagem considera as linhas com registro explícito. Avaliar se as asserções verificam o desconto continua sendo parte da revisão.",
      primaryLabel: "Linhas com execução entre as três observadas",
      table: {
        caption: "Pricing.java no exemplo sintético",
        headers: ["Linha", "Observação", "Ramificações não executadas"],
        rows: [["5", "Executada", "1"], ["6", "Executada", "0"], ["7", "Sem execução", "2"], ["8", "Sem registro", "—"]],
      },
    },
    en: {
      ...patchMeter,
      lead: "I match added lines in a diff to coverage records to show exactly what the tests left unexecuted.",
      problem: "A small patch can introduce an untested business rule and barely move a project's overall coverage. During review, I want to know which line changed and what the test report actually recorded for it.",
      approach: "PatchMeter matches each added Git line by path and line number against JaCoCo or LCOV records. It distinguishes execution, zero execution and missing data. Three MCP queries let a reviewer inspect the results by file and line.",
      evidence: "The synthetic example adds a quantity discount. Of four added Java lines, two ran, the discount on line 7 recorded zero execution and line 8 had no record. Observed coverage comes to 66.6667%, below the 80% threshold.",
      limits: "The diff and coverage report must come from the same revision. The percentage counts lines with explicit records. Reviewers still need to check what the test assertions say about the discount.",
      primaryLabel: "Executed lines among three observed lines",
      table: {
        caption: "Pricing.java in the synthetic example",
        headers: ["Line", "Observation", "Missed branches"],
        rows: [["5", "Executed", "1"], ["6", "Executed", "0"], ["7", "Unexecuted", "2"], ["8", "No record", "—"]],
      },
    },
  },
  tooltape: {
    pt: {
      ...toolTape,
      lead: "Gravo as chamadas de ferramentas de um agente para reproduzir as respostas e revisar mudanças em um servidor MCP.",
      problem: "Um teste de agente pode falhar porque o serviço devolveu dados diferentes entre duas execuções. Para reproduzir a falha, preciso dos argumentos, das respostas e da ordem das chamadas que o agente fez.",
      approach: "O ToolTape registra uma sequência de chamadas MCP e preserva os resultados e erros em um arquivo JSON. Um servidor local reproduz a sessão gravada. Ao comparar duas gravações, o relatório mostra o caminho de cada campo alterado.",
      evidence: "Na demonstração com chamados de suporte fictícios, duas gravações das mesmas três chamadas produzem seis diferenças. No chamado INC-1042, a prioridade muda de P2 para P1 e o status passa de investigating para resolved. O relatório permite localizar os dois valores nas gravações originais.",
      limits: "A reprodução segue a ordem e os argumentos gravados. Um agente que escolha outra ferramenta ou outra sequência precisa de um cenário próprio.",
      alt: "Relatório do ToolTape com duas ferramentas, três chamadas gravadas e seis diferenças encontradas entre as sessões.",
      primaryLabel: "Diferenças nas três chamadas do exemplo",
    },
    en: {
      ...toolTape,
      lead: "I record an agent's tool calls to replay the responses and review changes to an MCP server.",
      problem: "An agent test can fail because a service returns different data on the next run. Reproducing the failure requires the arguments, responses and call order that the agent saw.",
      approach: "ToolTape records a sequence of MCP calls and preserves their results and errors in a JSON file. A local server replays that session. Comparing two recordings produces a report with the path to each changed field.",
      evidence: "In the synthetic support-ticket demo, two recordings of the same three calls produce six differences. Ticket INC-1042 changes priority from P2 to P1 and status from investigating to resolved. The report points to both values in the original recordings.",
      limits: "Replay follows the recorded order and arguments. An agent that chooses another tool or sequence needs its own scenario.",
      alt: "ToolTape comparison report showing two tools, three recorded calls and six differences between sessions.",
      primaryLabel: "Differences across three example calls",
    },
  },
}
