const repo = "https://github.com/Almeida96/queuesift"
const release = repo + "/releases/tag/v0.1.0"
const fixtures = repo + "/blob/v0.1.0/examples/fulfillment/"
const command = "bin/queuesift demo --out fulfillment-review"

const study = {
  title: "QueueSift",
  repo, release,
  tech: ["Kotlin", "Java 21", "SQLite", "MCP"],
  image: "assets/evidence/recovery-review.jpg",
  primary: "3 / 16",
  sample: command,
}

export const queueStudy = {
  en: {
    ...study,
    lead: "I built QueueSift to answer a question that comes up after a queue consumer recovers. Which failed deliveries can we consider sending again?",
    problem: "A timeout can land an order in a dead-letter queue after its reservation has already succeeded. Replaying every delivery could reserve stock twice. An operator needs the original event, the consumer’s processing receipts and a way to spot conflicting copies.",
    approach: "QueueSift imports a queue export and processing receipts into a local SQLite ledger. A policy describes the consumer’s idempotency and the failures an operator has marked as resolved. The CLI proposes batches for review. An agent can use read-only MCP tools to trace a decision back to a policy rule and the exact input lines.",
    evidence: "The synthetic fulfillment demo evaluates the same 16 deliveries twice. While the dependency timeout is unresolved, none qualify for review. Once the policy marks it resolved, the report proposes two batches. The first contains m01 and m13. Both have event ID evt-1, but they belong to different tenants. The second contains m14.",
    limits: "The demo has partial receipt coverage, so a missing receipt leaves the processing outcome unknown. Before sending anything, an operator still has to check the live consumer state and confirm how it handles duplicates. QueueSift stops at the review manifest.",
    alt: "QueueSift’s synthetic fulfillment report showing three replay candidates, eleven deliveries on hold and two excluded.",
    primaryLabel: "Deliveries eligible for human review in the recovery demo",
  },
  pt: {
    ...study,
    lead: "Criei o QueueSift para responder a uma pergunta que surge depois que o consumidor de uma fila volta a funcionar. Quais entregas com falha podemos considerar para reenvio?",
    problem: "Um timeout pode levar um pedido à fila de mensagens mortas depois que a reserva de estoque já foi concluída. Reenviar todas as entregas poderia reservar estoque duas vezes. O operador precisa consultar o evento original, os comprovantes de processamento e as cópias que divergem.",
    approach: "O QueueSift importa as mensagens e os comprovantes de processamento para uma base SQLite local. Uma política descreve a idempotência do consumidor e quais falhas o operador considera resolvidas. A CLI propõe lotes para revisão. Por MCP, um agente pode consultar a regra e as linhas de origem de cada decisão.",
    evidence: "O exemplo de expedição avalia as mesmas 16 entregas sintéticas duas vezes. Enquanto o timeout da dependência está em aberto, nenhuma se qualifica para revisão. Quando a política registra sua resolução, o relatório propõe dois lotes. O primeiro contém m01 e m13. Ambos têm o identificador evt-1, mas pertencem a tenants diferentes. O segundo contém m14.",
    limits: "O exemplo tem cobertura parcial dos comprovantes. Quando falta um registro, o resultado do processamento continua desconhecido. Antes de qualquer reenvio, o operador precisa conferir o estado atual do consumidor e como ele trata duplicatas. O QueueSift encerra o processo ao gerar a lista para revisão.",
    alt: "Relatório sintético do QueueSift com três entregas candidatas a reenvio, onze retidas e duas excluídas.",
    primaryLabel: "Entregas que podem seguir para revisão no exemplo de recuperação",
  },
}

const example = {
  counts: {total: 16, candidates: 3, held: 11, excluded: 2},
  report: repo + "/releases/download/v0.1.0/fulfillment-review.html",
  command,
}

const candidate = {decision: "CANDIDATE", identifier: "m01", sourceUrl: fixtures + "messages.jsonl#L1-L2"}
const hold = {decision: "HOLD", identifier: "m04", sourceUrl: fixtures + "messages.jsonl#L4-L5"}
const exclude = {decision: "EXCLUDE", identifier: "m03", sourceUrl: fixtures + "receipts.jsonl#L1"}

export const queueExample = {
  en: {
    ...example,
    headline: "Which orders can we replay?",
    teaser: "Open a synthetic dead-letter queue and follow three delivery decisions back to the messages and receipts behind them.",
    records: [
      {...candidate, reason: "The timeout is marked resolved and the checks pass. This delivery represents two copies of the same event for the north tenant. Only m01 enters the review batch.", source: "Message export, lines 1–2 · m01 and m02"},
      {...hold, reason: "Two copies of event evt-3 for the north tenant identify the same order. One reserves two units and the other reserves four. Both deliveries are held for reconciliation.", source: "Message export, lines 4–5 · order-102"},
      {...exclude, reason: "The consumer recorded processing evt-2 at 11:30 UTC. The receipt matches the event’s tenant and content hash, so this delivery is excluded from the proposed batches.", source: "Processing receipts, line 1 · north / evt-2"},
    ],
  },
  pt: {
    ...example,
    headline: "Quais pedidos podemos reenviar?",
    teaser: "Explore uma fila sintética de mensagens mortas e confira quais mensagens e comprovantes explicam o destino de três entregas.",
    records: [
      {...candidate, reason: "A política registra a resolução do timeout e as verificações passaram. Esta entrega representa duas cópias do mesmo evento do tenant north. Só m01 entra no lote para revisão.", source: "Mensagens, linhas 1–2 · m01 e m02"},
      {...hold, reason: "Duas cópias do evento evt-3 do tenant north identificam o mesmo pedido. Uma reserva duas unidades e a outra reserva quatro. As duas entregas ficam retidas até a divergência ser esclarecida.", source: "Mensagens, linhas 4–5 · order-102"},
      {...exclude, reason: "O consumidor registrou o processamento de evt-2 às 11h30 UTC. O tenant e o hash do conteúdo coincidem com os do comprovante, por isso a entrega fica fora dos lotes propostos.", source: "Comprovantes de processamento, linha 1 · north / evt-2"},
    ],
  },
}
