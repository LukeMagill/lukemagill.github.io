# Luke Magill

**Senior Software Engineer / Technical Lead**  
Large-Scale Data Infrastructure • ML Feature Quality • Reliability Engineering • Distributed Systems

LinkedIn: linkedin.com/in/luke-magill  
Email: {{emailAddress}} • Phone: {{phoneNumber}} • Location: {{address}}  
US Citizen; authorized to work in the United States

## Summary

Senior software engineer and technical lead with 18+ years of experience building large-scale data, ML, backend, and cloud infrastructure at Meta, Google, and Microsoft. Strong record of leading ambiguous, high-impact infrastructure projects from diagnosis and architecture through production launch, with emphasis on data pipelines, observability, reliability, compliance, and cross-functional execution.

## Skills

**Technical leadership:** Technical design, project decomposition, cross-team execution, mentoring, on-call leadership, production operations  
**Infrastructure:** Distributed systems, streaming and batch data pipelines, ML feature quality, anomaly detection, observability, SLIs/SLOs, production tooling  
**Backend/data:** Java, Python, C#, GoLang (go), SQL, NoSQL, REST services, data warehouse systems, orchestration, ETL/ELT  
**Frontend/cloud:** TypeScript, JavaScript, React, AngularJS, Azure, cloud storage, service bus/queues, CI/testing

## Experience

### Meta — Senior Software Engineer / Technical Lead
**Apr 2025 – May 2026**

Worked on large-scale data and ML-quality infrastructure across FBETL/Scribe ingestion and the DIDQ data-quality engine, supporting anomaly detection for ML features used by ranking and ads/content systems.

- Led reliability and scalability work for DIDQ, a data-quality engine that monitors ML features for statistically significant anomalies and alerts on feature regressions.
- Designed and implemented event-driven detector configuration updates for ~30K OneDetection detectors, replacing unnecessary run-based updates with configuration-change listeners and reducing strain on monitoring APIs.
- Built and launched a decorator service integration that preserved customized alert metadata while consolidating detector thresholds, enabling much more efficient monitoring queries at large scale.
- Established the first customer-visible DIDQ SLIs for end-to-end partition success rate and processing latency, revealing that P90 latency was ~3 hours despite ~30-minute P50 and shifting reliability priorities toward latency reduction.
- Designed DQ Fast, a worker-pool architecture that moved package startup off the critical path; combined with removal of an unused O(n²) Kolmogorov-Smirnov comparison, projected up to ~98% latency reduction.
- Built production administration and preview tooling for DIDQ, improving on-call debugging, customer configuration validation, and operational control over production data-quality workflows.
- Contributed to FBETL/Scribe ingestion, including CLI and storage-backed configuration improvements for pinning categories/tables to data centers and inline metadata/DQ computation during ingestion.

### Google — Software Engineering Technical Lead
**Feb 2019 – Apr 2025**

Led large-scale data, compliance, contact-center, and ML-adjacent infrastructure projects across Google internal platforms, with repeated ownership of ambiguous cross-team efforts involving architecture, migration, production quality, and organizational coordination.

- Identified an unowned DMA 5(2) compliance risk affecting team systems, developed the technical strategy, presented it to leadership, and led a 50–100 engineer cross-org effort through delivery with no resulting production issues.
- Led a major streaming ETL migration for Speakeasy reporting, coordinating 3–4 engineers and vendors over ~8 months; reduced reporting latency from ~3 hours to ~15 minutes and consolidated multiple data formats into a standardized warehouse.
- Led design and delivery of Aquarius Batch Ingestion, a configurable ingestion platform that routed arbitrary data sources into ML/data backends by coordinating changes across new services, existing services, and Java ingestion pipelines.
- Designed a generic ingestion architecture enabling data to flow from configurable sources to ML backends or storage systems, reducing repeated one-off integration work for future customers.
- Drove migration quality for complex reporting systems by organizing 100+ migration bugs, creating validation processes, coordinating daily vendor execution, and delegating implementation across the engineering team.
- Integrated Google contact-center conversation systems with CCAI sentiment-analysis services, including design, audio/transcript pipeline integration, cloud configuration, and productionization after rescuing an incomplete implementation.
- Provided technical leadership for a distributed US/Hyderabad engineering team, including cross-time-zone collaboration, design guidance, onboarding, and execution support.
- Hosted a software engineering intern and served as one of the highest-volume interviewers across a ~150-engineer organization.

### Microsoft — Software Engineer
**Mar 2012 – Feb 2019**

Built backend services and frontend experiences across Windows Phone Store, Windows Store, Universal Store, and Partner Incentives. Worked primarily in C#, SQL Server, Azure services, JavaScript/TypeScript, AngularJS, and React.

- Built full-stack commerce and developer-experience features for Microsoft Store platforms, including C# backend services, Azure data/storage systems, and JavaScript/TypeScript user interfaces.
- Became the team’s UX engineering specialist, leading frontend implementation and framework decisions as the organization modernized from older monolithic service patterns to lighter-weight cloud services and modern web stacks.
- Implemented Review Response workflows enabling developers to respond to app/game reviews, including UX, backend validation, translation/email integration, and production service wiring.
- Delivered partner and commerce platform features across reporting UX, ad mediation, bulk pricing, notifications, and partner incentives.
- Promoted twice, from SDE I to SDE II, while expanding from backend service development into full-stack and cloud platform ownership.

### Intelius — Software Engineer
**Jun 2008 – Mar 2012**

Built PHP/MySQL web applications, partner services, and transaction systems for background-check and identity-protection products.

- Designed and partially implemented a subscription transaction system and partner visitor tracking/reporting system with XML-configurable email reports.
- Built secure chargeback upload tooling, custom CSV partner services, SOAP-based partner integrations, and maintained internal A/B testing infrastructure.

## Education

**Bachelor of Science, Computer Science** — Central Washington University  
GPA: 3.85; specialization in artificial intelligence

