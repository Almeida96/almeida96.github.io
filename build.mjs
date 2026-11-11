import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { caseStudies as previousStudies } from './cases.mjs';
import { queueExample, queueStudy } from './queue-case.mjs';
import { projectIndex } from './project-index.mjs';
import { appIndex } from './app-index.mjs';

const args = process.argv.slice(2);
const dist = fileURLToPath(new URL(args.includes('--pages') ? './docs/' : './dist/', import.meta.url));
const origin = args.find(arg => arg !== '--pages') || 'https://almeida96.github.io';
const linkedin = 'https://www.linkedin.com/in/igors-almeida/';
const github = 'https://github.com/Almeida96';
const contribution = 'https://github.com/hashgraph-online/hol-guard/pull/7293';
const caseStudies = { ...previousStudies, queuesift: queueStudy };
const slugs = Object.keys(caseStudies);
const languages = ['en', 'pt'];

const copy = {
  pt: {
    lang:'pt-BR', home:'/pt/', folder:'pt/projetos', anchors:['projetos','aplicativos','sobre','contato'],
    nav:['Projetos','Aplicativos','Sobre','Contato'], skip:'Pular para o conteúdo', menu:'Menu',
    heroLabel:'Engenharia de software', location:'São Paulo, Brasil',
    intro:'Engenheiro de software na Amazon. Construo sistemas distribuídos com Java, Kotlin e AWS.',
    see:'Ver projetos', selected:'Projetos selecionados', all:'Todos no GitHub',
    cards:{
      spandelta:['Observabilidade','Qual operação ficou mais lenta depois do deploy? Uma comparação entre traces de duas versões aponta onde investigar.'],
      patchmeter:['Qualidade de código','Cruza o diff do Git com a cobertura de testes para mostrar quais linhas adicionadas ainda precisam de atenção.'],
      tooltape:['Ferramentas para agentes','Grava chamadas MCP, reproduz a sessão localmente e mostra o que mudou nas respostas de uma ferramenta.'],
      queuesift:['Recuperação de filas',queueExample.pt.teaser]
    },
    caseLink:'Ver estudo de caso', about:'Sobre mim', aboutTitle:'Backend e ferramentas para agentes',
    aboutBody:'Meu trabalho reúne sistemas distribuídos e arquitetura orientada a eventos. Nos meus projetos abertos, levo essas questões para ferramentas que engenheiros e agentes podem usar no terminal.',
    aboutBody2:'Uma operação que ficou mais lenta, uma linha sem cobertura ou uma resposta que mudou são pontos de partida. Cada ferramenta guarda a referência para quem precisa conferir o resultado.',
    contributionLabel:'Contribuição open source', contributionTitle:'SpanDelta no HOL Guard',
    contributionCopy:'Contribuí com a entrada do servidor MCP do SpanDelta no catálogo do HOL Guard. O pull request foi incorporado ao projeto.',
    pr:'Ver o pull request', contactTitle:'Vamos conversar?', contactCopy:'Para conversar sobre engenharia de backend, sistemas distribuídos ou algum dos projetos, me encontre no LinkedIn.',
    contactAction:'Abrir LinkedIn', back:'Voltar aos projetos', problem:'O problema', approach:'Como funciona', evidence:'O que o exemplo mostra', limits:'Limites da análise',
    run:'Executar o exemplo', code:'Código no GitHub', download:'Baixar release', next:'Próximo projeto', figure:'Relatório gerado com os dados de exemplo do projeto.',
    synthetic:'Exemplo do projeto', baseline:'Anterior', candidate:'Candidata', covered:'Coberta', missed:'Sem cobertura', unknown:'Sem registro',
    cardsLabels:['p95 de checkout','Cobertura no diff','Comparação de sessões','Revisão de reenvio'],
    cases:'Estudo de caso', social:'Perfis', language:'Idioma', metadesc:'Portfólio de Igor Almeida, engenheiro de software em São Paulo. Estudos de caso, aplicativos e ferramentas em Java e Kotlin.',
    indexTitle:'Outras ferramentas open source', appTitle:'Aplicativos', queueTitle:'Três decisões da fila de pedidos',
    queueIntro:'Abra uma entrega para conferir o motivo da decisão e a evidência no arquivo de origem.',
    queueLabels:['Entregas','Candidatas','Retidas','Excluídas'], queueReport:'Baixar o relatório HTML do exemplo',
    runQueue:'Com Java 21, extraia o ZIP da release e execute este comando a partir da pasta extraída. Abra fulfillment-review/recovery/report.html para ver o resultado.',
    samplePlatform:'No Windows, use .\\bin\\queuesift.bat no lugar de bin/queuesift.',
    stack:'Tecnologias'
  },
  en: {
    lang:'en', home:'/', folder:'projects', anchors:['projects','apps','about','contact'],
    nav:['Projects','Apps','About','Contact'], skip:'Skip to content', menu:'Menu',
    heroLabel:'Software engineering', location:'São Paulo, Brazil',
    intro:'Software engineer at Amazon. I build distributed systems with Java, Kotlin and AWS.',
    see:'Explore projects', selected:'Selected work', all:'All projects on GitHub',
    cards:{
      spandelta:['Observability','Which operation got slower after a deploy? Comparing traces across two releases shows where to investigate.'],
      patchmeter:['Code quality','Joins a Git diff with test coverage to show which added lines still need a closer look.'],
      tooltape:['Agent tooling','Records MCP calls, replays the session locally and pinpoints changes in tool responses.'],
      queuesift:['Queue recovery',queueExample.en.teaser]
    },
    caseLink:'Read case study', about:'About me', aboutTitle:'Backend engineering and agent tools',
    aboutBody:'My work spans distributed systems and event-driven architecture. In my open-source projects, I turn those questions into tools that engineers and agents can use from the terminal.',
    aboutBody2:'A slower operation, an uncovered line or a changed response gives a reviewer somewhere to start. Each tool keeps a reference to the evidence behind its result.',
    contributionLabel:'Open-source contribution', contributionTitle:'SpanDelta in HOL Guard',
    contributionCopy:'I contributed the SpanDelta MCP server entry to the HOL Guard catalog. The pull request was merged upstream.',
    pr:'View pull request', contactTitle:'Get in touch', contactCopy:'You can reach me on LinkedIn to talk about backend engineering, distributed systems or any of these projects.',
    contactAction:'Open LinkedIn', back:'Back to projects', problem:'The problem', approach:'How it works', evidence:'Inside the example', limits:'Limits of the analysis',
    run:'Run the example', code:'Source on GitHub', download:'Download release', next:'Next project', figure:'Report generated from the project’s example data.',
    synthetic:'Project example', baseline:'Baseline', candidate:'Candidate', covered:'Covered', missed:'Uncovered', unknown:'Not reported',
    cardsLabels:['Checkout p95','Diff coverage','Session comparison','Replay review'],
    cases:'Case study', social:'Profiles', language:'Language', metadesc:'Explore Igor Almeida’s software engineering portfolio, with case studies, applications and open-source tools built with Java and Kotlin.',
    indexTitle:'More open-source tools', appTitle:'Applications', queueTitle:'Three decisions from the orders queue',
    queueIntro:'Open a delivery to see why it received that decision and inspect the original evidence.',
    queueLabels:['Deliveries','Candidates','Held','Excluded'], queueReport:'Download the sample HTML report',
    runQueue:'With Java 21 installed, extract the release ZIP and run this command from the extracted folder. Open fulfillment-review/recovery/report.html to inspect the result.',
    samplePlatform:'On Windows, use .\\bin\\queuesift.bat in place of bin/queuesift.',
    stack:'Technology'
  }
};

const arrows = { up: '↗', down: '↓', right: '→', back: '←' };

function escape(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function arrow(direction = 'up') {
  return `<span aria-hidden="true" class="arrow">${arrows[direction]}</span>`;
}

function link(url, label, className = '', direction = 'up') {
  return `<a class="${className}" href="${escape(url)}">${escape(label)} ${arrow(direction)}</a>`;
}

function pagePath(language, slug = '') {
  const t = copy[language];
  return slug ? `/${t.folder}/${slug}/` : t.home;
}

function languageLinks(language, slug) {
  return languages.map(key => {
    const current = key === language ? 'aria-current="page" ' : '';
    return `<a lang="${copy[key].lang}" hreflang="${copy[key].lang}" ${current}href="${pagePath(key, slug)}">${key.toUpperCase()}</a>`;
  }).join('<i aria-hidden="true">/</i>');
}

function header(language, slug) {
  const t = copy[language];
  const navigation = t.nav.map((name, index) =>
    `<a href="${t.home}#${t.anchors[index]}">${name}</a>`
  ).join('\n');
  return `
    <a class="skip" href="#main">${t.skip}</a>
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="identity" href="${t.home}" aria-label="Igor Almeida">
          <span class="monogram" aria-hidden="true">ia<span>.</span></span><span>Igor Almeida</span>
        </a>
        <nav class="desktop-nav" aria-label="${t.menu}">${navigation}</nav>
        <div class="header-end">
          <nav class="languages" aria-label="${t.language}">${languageLinks(language, slug)}</nav>
          <details class="mobile-menu">
            <summary>${t.menu} <span aria-hidden="true">☰</span></summary>
            <nav aria-label="${t.menu}">${navigation}</nav>
          </details>
        </div>
      </div>
    </header>`;
}

function footer(t) {
  return `<footer>
    <div class="wrap foot-inner">
      <span>© Igor Almeida</span>
      <nav aria-label="${t.social}">${link(github, 'GitHub')}${link(linkedin, 'LinkedIn')}</nav>
    </div>
  </footer>`;
}

function shell(language, slug, body) {
  const t = copy[language];
  const study = slug ? caseStudies[slug][language] : null;
  const role = language === 'pt' ? 'Engenheiro de software' : 'Software Engineer';
  const title = escape(study ? `${study.title} — Igor Almeida` : `Igor Almeida — ${role}`);
  const summary = escape(study?.lead ?? t.metadesc);
  const url = escape(origin + pagePath(language, slug));
  const alternates = languages.map(key =>
    `<link rel="alternate" hreflang="${copy[key].lang}" href="${escape(origin + pagePath(key, slug))}">`
  ).join('\n    ');
  return `<!doctype html>
<html lang="${t.lang}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#f7f6f0">
    <title>${title}</title>
    <meta name="description" content="${summary}">
    <link rel="canonical" href="${url}">
    ${alternates}
    <link rel="alternate" hreflang="x-default" href="${escape(origin + pagePath('en', slug))}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${summary}">
    <meta property="og:image" content="${escape(origin)}/assets/igor-profile.jpg">
    <meta property="og:url" content="${url}">
    <link rel="icon" href="/favicon.png">
    <link rel="stylesheet" href="/assets/fonts/fonts.css">
    <link rel="stylesheet" href="/assets/site.css">
    <script src="/assets/nav.js" defer></script>
  </head>
  <body>
    ${header(language, slug)}
    ${body}
    ${footer(t)}
  </body>
</html>
`;
}

function art(slug, t) {
  const label = t.cardsLabels[slugs.indexOf(slug)];
  if (slug === 'spandelta') {
    return `<div class="visual trace-art" aria-hidden="true">
      <div class="visual-top"><span>${label}</span><b>p95</b></div>
      <div class="bars">
        <div><small>${t.baseline}</small><i style="--w:59%"></i><strong>151 <em>ms</em></strong></div>
        <div><small>${t.candidate}</small><i style="--w:91%"></i><strong>231 <em>ms</em></strong></div>
      </div>
      <div class="visual-foot"><span>checkout</span><b>+80 ms</b></div>
    </div>`;
  }
  if (slug === 'patchmeter') {
    const lines = [
      [5, 'yes', t.covered],
      [6, 'yes', t.covered],
      [7, 'no', t.missed],
      [8, 'na', t.unknown],
    ];
    const rows = lines.map(([number, className, status]) =>
      `<div class="${className}"><span>${number}</span><i>+</i><em></em><b>${status}</b></div>`
    ).join('\n');
    return `<div class="visual patch-art" aria-hidden="true">
      <div class="visual-top"><span>${label}</span><b>diff</b></div>
      <div class="patch-lines">${rows}</div>
    </div>`;
  }
  if (slug === 'queuesift') {
    const { total, candidates, held, excluded } = queueExample.en.counts;
    const outcomes = [['candidate', candidates], ['hold', held], ['exclude', excluded]];
    const segments = outcomes.map(([name, count]) =>
      `<i data-outcome="${name}" style="flex:${count}"></i>`).join('');
    const legend = outcomes.map(([name, count], index) =>
      `<span data-outcome="${name}"><strong>${count}</strong> ${t.queueLabels[index + 1]}</span>`).join('');
    return `<div class="visual queue-art" aria-hidden="true">
      <div class="visual-top"><span>${label}</span><b>orders.dead</b></div>
      <div class="queue-distribution">${segments}</div>
      <div class="queue-legend">${legend}</div>
      <div class="visual-foot"><span>${t.synthetic}</span><b>${total} ${t.queueLabels[0].toLowerCase()}</b></div>
    </div>`;
  }
  return `<div class="visual tape-art" aria-hidden="true">
    <div class="visual-top"><span>${label}</span><b>MCP</b></div>
    <div class="tape-field">ticket.priority</div>
    <div class="tape-values"><b>P2</b><span>→</span><b>P1</b></div>
    <div class="visual-foot"><span>INC-1042</span><b>tools/call</b></div>
  </div>`;
}

function card(slug, language) {
  const t = copy[language];
  const [category, description] = t.cards[slug];
  return `<article class="project-card">
    <a class="card-link" href="${pagePath(language, slug)}">
      ${art(slug, t)}
      <div class="card-content">
        <span class="eyebrow">${category}</span>
        <h3>${escape(caseStudies[slug][language].title)}</h3>
        <p>${description}</p>
        <span class="case-link">${t.caseLink} ${arrow('right')}</span>
      </div>
    </a>
  </article>`;
}

function hero(t) {
  return `<section class="hero wrap">
    <div class="hero-copy">
      <p class="hero-overline"><span class="orange-rule"></span>${t.heroLabel}</p>
      <h1>Igor<br>Almeida<span>.</span></h1>
      <p class="intro">${t.intro}</p>
      <div class="hero-actions">
        ${link('#' + t.anchors[0], t.see, 'button', 'down')}
        ${link(linkedin, 'LinkedIn', 'text-link')}
      </div>
    </div>
    <figure class="portrait">
      <div class="photo-mat">
        <img src="/assets/igor-profile.jpg" alt="Igor Almeida" width="460" height="460" fetchpriority="high">
        <span class="photo-accent" aria-hidden="true"></span>
      </div>
      <figcaption><span class="locator" aria-hidden="true"></span>${t.location}</figcaption>
    </figure>
  </section>`;
}

function projectDirectory(language) {
  const cards = projectIndex.map(project => {
    const entry = project[language];
    return `<article class="index-entry">
      <div>
        <p class="index-meta">${escape(entry.area)}</p>
        <h3>${link(project.href, project.title)}</h3>
      </div>
      <p>${escape(entry.description)}</p>
      <p class="index-stack">${escape(project.stack)}</p>
    </article>`;
  }).join('\n');
  return `<section class="project-index wrap" aria-labelledby="tools-title">
    <div class="section-head"><h2 id="tools-title">${copy[language].indexTitle}<span>.</span></h2></div>
    <div class="index-grid">${cards}</div>
  </section>`;
}

function applications(language) {
  const t = copy[language];
  const cards = appIndex.map(app => {
    const entry = app[language];
    return `<article class="app-entry">
      <p class="app-stage">${escape(entry.stage)}</p>
      <h3>${escape(entry.name ?? app.name)}</h3>
      <p>${escape(entry.description)}</p>
      ${entry.workflow ? `<p class="app-workflow">${escape(entry.workflow)}</p>` : ''}
    </article>`;
  }).join('\n');
  return `<section class="app-section" id="${t.anchors[1]}" aria-labelledby="apps-title">
    <div class="wrap"><div class="section-head"><h2 id="apps-title">${t.appTitle}<span>.</span></h2></div>
      <div class="app-grid">${cards}</div>
    </div>
  </section>`;
}

// Keep bookmarks to the original Portuguese home sections usable on the English root.
function legacyAnchor(language, index) {
  return language === 'en' ? `<span id="${copy.pt.anchors[index]}" style="position:absolute" aria-hidden="true"></span>` : '';
}

function home(language) {
  const t = copy[language];
  return `<main id="main">
    ${hero(t)}
    <section class="work-section" id="${t.anchors[0]}">
      ${legacyAnchor(language, 0)}
      <div class="wrap">
        <div class="section-head">
          <h2>${t.selected}<span>.</span></h2>
          ${link(github + '?tab=repositories', t.all, 'text-link')}
        </div>
        <div class="projects-grid">${slugs.map(slug => card(slug, language)).join('\n')}</div>
      </div>
    </section>
    ${projectDirectory(language)}
    ${applications(language)}
    <section class="about wrap" id="${t.anchors[2]}">
      ${legacyAnchor(language, 2)}
      <div class="about-intro">
        <p class="eyebrow">${t.about}</p>
        <h2>${t.aboutTitle}</h2>
        <p>${t.aboutBody}</p>
        <p>${t.aboutBody2}</p>
      </div>
      <aside class="contribution">
        <p class="eyebrow">${t.contributionLabel}</p>
        <h3>${t.contributionTitle}</h3>
        <p>${t.contributionCopy}</p>
        ${link(contribution, t.pr + ' #7293', 'text-link')}
      </aside>
    </section>
    <section id="${t.anchors[3]}" class="contact">
      ${legacyAnchor(language, 3)}
      <div class="wrap contact-inner">
        <div><h2>${t.contactTitle}</h2><p>${t.contactCopy}</p></div>
        ${link(linkedin, t.contactAction, 'button')}
      </div>
    </section>
  </main>`;
}

function evidenceTable(table) {
  if (!table) return '';
  const headings = table.headers.map(heading => `<th scope="col">${escape(heading)}</th>`).join('');
  const rows = table.rows.map(([line, ...observations]) => `<tr>
    <th scope="row">${escape(line)}</th>
    ${observations.map(value => `<td>${escape(value)}</td>`).join('')}
  </tr>`).join('\n');
  return `<div class="table-wrap">
    <table class="evidence-table">
      <caption>${escape(table.caption)}</caption>
      <thead><tr>${headings}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}

function exampleDecisions(language) {
  const t = copy[language];
  const sample = queueExample[language];
  const { total, candidates, held, excluded } = sample.counts;
  const counts = [total, candidates, held, excluded].map((count, index) =>
    `<div><dt>${t.queueLabels[index]}</dt><dd>${count}</dd></div>`).join('');
  const records = sample.records.map(row => `<details class="queue-record">
    <summary><code>${escape(row.identifier)}</code> <span class="queue-outcome" data-outcome="${row.decision.toLowerCase()}">${escape(row.decision)}</span></summary>
    <p>${escape(row.reason)}</p>${link(row.sourceUrl, row.source, 'text-link')}
  </details>`).join('\n');
  return `<section class="queue-example">
    <h2>${t.queueTitle}</h2>
    <p>${t.queueIntro}</p>
    <dl class="queue-counts">${counts}</dl>
    <div class="queue-records">${records}</div>
    ${link(sample.report, t.queueReport, 'text-link')}
  </section>`;
}

function caseProse(language, slug, study) {
  const t = copy[language];
  const sections = [
    [t.problem, study.problem],
    [t.approach, study.approach],
    [t.evidence, study.evidence, evidenceTable(study.table)],
    [t.limits, study.limits],
  ];
  const prose = sections.map(([heading, paragraph, detail = '']) => `<section>
    <h2>${heading}</h2>
    <p>${escape(paragraph)}</p>
    ${detail}
  </section>`).join('\n');
  const figure = study.image ? `<figure>
    <a href="/${escape(study.image)}">
      <img width="1060" loading="lazy" src="/${escape(study.image)}" alt="${escape(study.alt)}">
    </a>
    <figcaption>${t.figure}</figcaption>
  </figure>` : '';
  const example = study.sample ? `<section>
    <h2>${t.run}</h2>
    ${slug === 'queuesift' ? `<p>${t.runQueue}</p>` : ''}
    <pre><code>${escape(study.sample)}</code></pre>
    ${slug === 'queuesift' ? `<p>${t.samplePlatform}</p>` : ''}
  </section>` : '';
  return `<div class="case-prose">${prose}${slug === 'queuesift' ? exampleDecisions(language) : ''}${figure}${example}</div>`;
}

function casePage(language, slug) {
  const t = copy[language];
  const study = caseStudies[slug][language];
  const next = slugs[(slugs.indexOf(slug) + 1) % slugs.length];
  const tech = study.tech.map(name => `<span>${escape(name)}</span>`).join('');
  return `<main id="main">
    <div class="wrap case-top">
      <a class="back" href="${t.home}#${t.anchors[0]}">${arrow('back')} ${t.back}</a>
      <div class="case-heading">
        <div>
          <p class="hero-overline"><span class="orange-rule"></span>${t.cases} / ${t.cards[slug][0]}</p>
          <h1>${escape(study.title)}<span>.</span></h1>
          <p class="case-lead">${escape(study.lead)}</p>
          <div class="case-actions">
            ${link(study.repo, t.code, 'button')}
            ${link(study.release, t.download, 'text-link')}
          </div>
        </div>
        <div class="case-visual">${art(slug, t)}<p>${t.synthetic}</p></div>
      </div>
    </div>
    <div class="case-detail">
      <div class="wrap detail-grid">
        <aside class="tech"><h2>${t.stack}</h2>${tech}</aside>
        ${caseProse(language, slug, study)}
      </div>
    </div>
    <div class="wrap next-case">
      <span class="eyebrow">${t.next}</span>
      ${link(pagePath(language, next), caseStudies[next][language].title, '', 'right')}
    </div>
  </main>`;
}

const urls = [];
for (const language of languages) {
  for (const slug of ['', ...slugs]) {
    const path = pagePath(language, slug);
    const body = slug ? casePage(language, slug) : home(language);
    const html = shell(language, slug, body).replace(/^[\t ]+$/gm, '');
    const paths = [path];
    if (language === 'en') paths.push(slug ? `/en/projects/${slug}/` : '/en/');
    if (language === 'pt' && slug) paths.push(`/projetos/${slug}/`);
    for (const outputPath of paths) {
      const directory = join(dist, outputPath.slice(1));
      await mkdir(directory, { recursive: true });
      await writeFile(join(directory, 'index.html'), html);
    }
    urls.push(origin + path);
  }
}

const locations = urls.map(url => `  <url><loc>${escape(url)}</loc></url>`).join('\n');
await writeFile(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locations}
</urlset>
`);
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);

