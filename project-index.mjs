export const projectIndex = [
  {
    title: "ContractLens",
    stack: "Java 21 · OpenAPI · MCP",
    href: "https://github.com/Almeida96/contractlens",
    en: {
      area: "API compatibility",
      description: "Compares two OpenAPI contracts and shows which declared clients use the affected operations. In the Orders example, removing express shipping from the accepted values can break a storefront request.",
    },
    pt: {
      area: "Compatibilidade de APIs",
      description: "Compara dois contratos OpenAPI e mostra quais clientes declarados usam as operações afetadas. No exemplo de pedidos, retirar o frete expresso das opções aceitas pode invalidar uma requisição da loja.",
    },
  },
  {
    title: "PlanScope",
    stack: "PostgreSQL · SQLite · MCP",
    href: "https://github.com/Almeida96/planscope",
    en: {
      area: "Query performance",
      description: "Compares exported PostgreSQL execution plans. In a sample where runtime rises from 42 to 145 ms, it flags a disk sort and a hundredfold difference between estimated and actual row counts.",
    },
    pt: {
      area: "Desempenho de consultas",
      description: "Compara planos de execução exportados do PostgreSQL. Em um exemplo que passa de 42 para 145 ms, aponta uma ordenação em disco e uma diferença de cem vezes entre o número de linhas estimado e o observado.",
    },
  },
  {
    title: "BOMTrail",
    stack: "Kotlin · CycloneDX · SQLite",
    href: "https://github.com/Almeida96/bomtrail",
    en: {
      area: "Software dependencies",
      description: "Reads a software bill of materials to trace how a package enters an application. The example follows a shared codec through the dependency graph and lists the components that rely on it.",
    },
    pt: {
      area: "Dependências de software",
      description: "Lê um inventário de componentes para rastrear como um pacote entra na aplicação. O exemplo percorre o grafo de dependências de um codec compartilhado e lista os componentes que dependem dele.",
    },
  },
  {
    title: "DocRelay",
    stack: "TypeScript · SQLite · MCP",
    href: "https://github.com/Almeida96/docrelay",
    en: {
      area: "Runbook search",
      description: "Indexes local Markdown so an agent can cite the file and lines behind an answer. Ask how fast to replay the example orders queue and it retrieves the instruction to send 20 messages per second.",
    },
    pt: {
      area: "Busca em guias operacionais",
      description: "Indexa arquivos Markdown locais para que um agente cite o arquivo e as linhas que sustentam a resposta. No exemplo da fila de pedidos, a busca recupera a instrução de reenvio de 20 mensagens por segundo.",
    },
  },
];
