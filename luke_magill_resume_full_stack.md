# Luke Magill

**Senior Full-Stack Infrastructure Engineer / Technical Lead**  
Cloud Infrastructure • Reliability Tooling • Data Platforms • React/TypeScript • Distributed Systems

LinkedIn: linkedin.com/in/luke-magill  
Email: {{emailAddress}} • Phone: {{phoneNumber}} • Location: {{address}}  
US Citizen; authorized to work in the United States

## Summary

Senior full-stack infrastructure engineer and technical lead with 18+ years of experience building production cloud, data, reliability, and developer-facing systems at Meta, Google, and Microsoft. Combines deep backend/distributed-systems experience with strong UX engineering skills, including React, TypeScript, AngularJS, REST APIs, C#, Java, Python, SQL/NoSQL, cloud services, asynchronous workflows, production tooling, and operational reliability. Strong fit for teams building user-facing infrastructure platforms for large-scale AI/cloud systems.

## Skills

**Frontend / UX:** React, TypeScript, JavaScript, AngularJS, HTML, CSS, D3, Web UX architecture, developer-facing tooling  
**Backend / APIs:** Java, Python, C#, REST APIs, service design, distributed workflows, asynchronous processing, queue-based systems  
**Infrastructure:** Cloud infrastructure, orchestration, cluster/workload operations, production reliability, SLIs/SLOs, observability, on-call tooling  
**Data / storage:** Streaming and batch pipelines, ETL/ELT, SQL, NoSQL, data warehouses, metadata systems, configuration-driven ingestion  
**Leadership:** Technical design, project decomposition, cross-team execution, mentoring, production incident analysis, customer-focused delivery

## Experience

### Meta — Senior Software Engineer / Technical Lead
**Apr 2025 – May 2026**
  
Worked on large-scale data and ML-quality infrastructure across FBETL/Scribe ingestion and the DIDQ data-quality engine, supporting anomaly detection and operational reliability for ML feature pipelines.

- Led reliability and scalability work for DIDQ, a data-quality engine that monitors ML features for statistically significant anomalies and alerts on feature regressions.
- Designed and implemented event-driven detector configuration updates for ~30K monitoring detectors, replacing unnecessary run-based updates with configuration-change listeners and reducing load on monitoring APIs.
- Built and launched a decorator service integration that preserved customized alert metadata while consolidating detector thresholds, improving efficiency for large-scale alerting queries.
- Established customer-visible SLIs for end-to-end partition processing success and latency, revealing ~3-hour P90 latency despite ~30-minute P50 and shifting reliability work toward measurable service outcomes.
- Designed DQ Fast, a worker-pool architecture that moved package startup off the critical path; combined with removal of an unused O(n²) comparison, projected up to ~98% latency reduction.
- Built production administration and preview tooling for DIDQ, improving on-call debugging, customer configuration validation, and operational control over production data-quality workflows.
- Contributed to FBETL/Scribe ingestion by improving CLI and storage-backed configuration workflows for pinning categories/tables to data centers and computing metadata inline during ingestion.

### Google — Software Engineering Technical Lead
**Feb 2019 – Apr 2025**

Led large-scale data, compliance, contact-center, and ML-adjacent infrastructure projects across Google internal platforms, with repeated ownership of ambiguous cross-team efforts involving architecture, APIs, orchestration, migration quality, and production launch.

- Led design and delivery of Aquarius Batch Ingestion, a configurable ingestion platform that routed arbitrary data sources into ML/data backends through new services, service modifications, Java ingestion pipelines, and configuration-driven orchestration.
- Integrated Google contact-center conversation systems with CCAI sentiment-analysis services, including design, audio/transcript pipeline integration, cloud configuration, API invocation, production orchestration, and productionization after taking over an incomplete implementation.
- Led a major streaming ETL migration for Speakeasy reporting, coordinating 3–4 engineers and vendors over ~8 months; reduced reporting latency from ~3 hours to ~15 minutes and consolidated multiple data formats into a standardized warehouse.
- Identified an unowned DMA 5(2) compliance risk affecting team systems, developed the technical strategy, presented it to leadership, and led a 50–100 engineer cross-org effort through delivery with no resulting production issues.
- Designed a generic ingestion architecture enabling data to flow from configurable sources to ML backends or storage systems, reducing repeated one-off integration work for future customers.
- Drove migration quality for complex reporting systems by organizing 100+ migration bugs, creating validation processes, coordinating daily vendor execution, and delegating implementation across the engineering team.
- Provided technical leadership for a distributed US/Hyderabad engineering team, including cross-time-zone collaboration, design guidance, onboarding, and execution support.

### Microsoft — Software Engineer
**Mar 2012 – Feb 2019**

Built full-stack developer-facing commerce, analytics, notification, and partner-incentive systems across Windows Phone Store, Windows Store, Universal Store, and Partner Incentives. Worked primarily in C#, SQL Server, Azure services, JavaScript/TypeScript, AngularJS, React, HTML/CSS, D3, queues, and REST APIs.

- Became the team’s UX engineering specialist, leading frontend implementation and framework decisions as the organization modernized from older monolithic service patterns to lighter-weight cloud services and modern web stacks.
- Evaluated React, Angular, and Vue for future Microsoft Partner Incentives UX development; recommended TypeScript + React + Webpack, which the team adopted for new UX components.
- Built full-stack commerce and developer-experience features, including C# backend services, REST APIs, Azure data/storage systems, JavaScript/TypeScript frontends, and integration with ingestion and notification pipelines.
- Implemented Review Response workflows enabling developers to respond to app/game reviews, including UX, backend validation, profanity checks, translation/email integration, service storage, and production wiring.
- Built reporting UX for Microsoft Store developer analytics using D3 and AngularJS, replacing a poorly fitting third-party/internal charting approach with a more flexible implementation aligned to design mocks.
- Built Bulk Pricing, a queue-backed CSV upload workflow that let developers submit hundreds or thousands of price changes at once instead of manually navigating multi-page pricing flows.
- Contributed to Ad Mediation, including AngularJS developer-facing configuration UX, REST APIs, app-ingestion integration, and configuration delivery for apps to select among multiple ad networks without republishing.
- Built notification and cross-platform notification configuration UX, enabling developers to design, configure, schedule, and target notifications across Windows and other platforms.
- Worked on partner-incentive systems including claims history, partner onboarding/offboarding tooling, enrollment workflows, authorization migration, and partner data migration from legacy systems.
- Ported ~20 C# library projects from .NET Framework to .NET Standard to reduce container size and enable experimentation with Docker/Kubernetes-style orchestration paths.
- Promoted twice, from SDE I to SDE II, while expanding from backend service development into full-stack cloud platform and UX ownership.

### Intelius — Software Engineer
**Jun 2008 – Mar 2012**

Built PHP/MySQL web applications, partner services, and transaction systems for background-check and identity-protection products.

- Designed and partially implemented a subscription transaction system and partner visitor tracking/reporting system with XML-configurable email reports.
- Built secure chargeback upload tooling, custom CSV partner services, SOAP-based partner integrations, and maintained internal A/B testing infrastructure.

## Education

**Bachelor of Science, Computer Science** — Central Washington University  
GPA: 3.85; specialization in artificial intelligence

