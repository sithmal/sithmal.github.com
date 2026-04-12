export const personal = {
  name: "Sithmal Kariyawasam",
  title: "Senior Site Reliability Engineer",
  location: "Espoo, Finland",
  phone: "+358 451644495",
  email: "sithmal@gmail.com",
  website: "https://www.sithmal.info",
  linkedin: "https://linkedin.com/in/sithmal",
  github: "https://github.com/sithmal",
  gitlab: "https://gitlab.com/sithmal",
  summary:
    "Strategic technical leader with over 15 years of experience in SRE, Platform Engineering, and Software Development. Proven track record of building resilient, scalable infrastructure and leading high-performing engineering teams. Expert in Kubernetes, Cloud-Native ecosystems, and DevOps transformations. Passionate about mentoring, architectural excellence, and driving business value through technical innovation in the Finnish tech landscape.",
};

export const experience = [
  {
    title: "Senior Site Reliability Engineer",
    company: "Relex Solutions",
    period: "Sep 2022 — Present",
    bullets: [
      "Implemented, managed, and configured HashiCorp Vault on a private on-premises Kubernetes platform, integrated with core platform infrastructure.",
      "Enabled secure secrets management for the core Plan environments.",
      "Reduced manual secret handling by 80%+ through automation and centralized Azure Resource access control across Plan environments.",
      "Strengthened platform security by implementing fine-grained access policies and audit logging.",
      "Delivered a highly available Vault deployment with resilient architecture and failover configuration.",
      "Integrated Vault with Kubernetes workloads, enabling dynamic secrets and automated credential rotation.",
      "Automated engineering workflows using GitLab CI/CD pipelines, reducing manual processes and contributing to lower operational costs and improved delivery efficiency.",
    ],
    current: true,
  },
  {
    title: "Senior Technical Specialist (SRE)",
    company: "Wiley",
    period: "Feb 2022 — Aug 2022",
    bullets: [
      "Core team member of the SRE team, mainly focuses on the implementation and maintenance of Kubernetes clusters.",
    ],
    current: false,
  },
  {
    title: "Senior Platform Engineer",
    company: "Codification",
    period: "Aug 2021 — Feb 2022",
    bullets: [
      "Develop and maintain Kubernetes-based platform solutions on Azure.",
      "Automate infrastructure provisioning using Terraform.",
      "Support development teams in deploying and operating cloud-native applications.",
      "Improve platform reliability and deployment processes by GitLab CI/CD pipelines.",
    ],
    current: false,
  },
  {
    title: "Associate Technical Specialist (SRE)",
    company: "Wiley",
    period: "Jul 2020 — Aug 2021",
    bullets: [
      "Contributed to centralized Kubernetes platform (Rancher-based).",
      "Worked on system reliability, scalability, and incident response.",
      "Collaborated with global teams across time zones.",
    ],
    current: false,
  },
  {
    title: "Senior Cloud Operations Engineer",
    company: "Pearson",
    period: "Nov 2017 — Jun 2020",
    bullets: [
      "Managed an AWS-based microservices platform.",
      "Implemented CI/CD pipelines and infrastructure automation.",
      "Maintained monitoring, logging, and secure secret management systems.",
    ],
    current: false,
  },
  {
    title: "Senior DevOps Engineer",
    company: "nCinga Innovations",
    period: "Jan 2015 — Nov 2017",
    bullets: [
      "Built and maintained CI/CD pipelines for industrial IoT platform.",
      "Managed cloud infrastructure on Azure (DC/OS, Mesos).",
      "Supported deployment automation and system integration.",
    ],
    current: false,
  },
  {
    title: "DevOps Engineer / Project Lead",
    company: "Mobios",
    period: "Mar 2014 — Jan 2015",
    bullets: [
      "Led DevOps activities and deployment processes.",
      "Delivered software solutions for telecom and enterprise clients.",
    ],
    current: false,
  },
  {
    title: "Software Engineer",
    company: "London School of Marketing",
    period: "Jun 2010 — Mar 2014",
    bullets: [
      "Developed mobile and web applications.",
      "Automated build and deployment processes.",
    ],
    current: false,
  },
];

export const certifications = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    icon: "kubernetes",
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation",
    icon: "kubernetes",
  },
  {
    name: "Certified Kubernetes Security Specialist (CKS)",
    issuer: "Cloud Native Computing Foundation",
    icon: "kubernetes",
  },
  {
    name: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    icon: "aws",
  },
  {
    name: "AWS Certified SysOps Administrator — Associate",
    issuer: "Amazon Web Services",
    icon: "aws",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    icon: "terraform",
  },
];

export const skills = {
  "SRE Practices": [
    "Incident Management",
    "Postmortems & RCA",
    "SLIs / SLOs",
    "Observability",
    "On-Call Operations",
    "Security",
  ],
  "Cloud Platforms": ["AWS", "Microsoft Azure"],
  "Container & Orchestration": ["Kubernetes", "Docker", "Rancher"],
  "Infrastructure as Code": ["Terraform", "Terragrunt", "Ansible"],
  "CI/CD & GitOps": ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD", "Kustomize", "Flux"],
  "Monitoring & Observability": ["Prometheus", "Grafana", "Datadog"],
  "Security & Secrets": ["HashiCorp Vault"],
  "Package Management": ["Nexus", "JFrog Artifactory"],
  "Scripting & Languages": ["Shell", "Python", "Go"],
  "AI Tools": ["Claude Code", "Cursor", "n8n", "MCP"],
  Leadership: ["Mentoring", "Team Building", "Stakeholder Management", "Agile / Scrum"],
};

export const education = {
  degree: "BSc (Hons) Software Engineering",
  institution: "University of Westminster (UK)",
  period: "2006 — 2010",
  classification: "2nd Class Upper Division",
  project: "IntelliChordz — a music chord identification system using digital signal processing",
};
