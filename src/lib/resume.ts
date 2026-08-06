// Structured career content sourced from Doug Toomay's biography and resume.
// Used across About/Experience/Services/Work/Clients pages and the root JSON-LD
// so visible copy and structured data stay in sync.

export const SUMMARY = {
  headline: "Executive Leader, Strategic Advisor, and Community Advocate",
  short:
    "Doug Toomay is Vice President, Group Account Director at Bernstein-Rein Advertising in Kansas City, with more than 25 years of experience in marketing, business development, strategic planning, and organizational leadership.",
  paragraphs: [
    "Doug Toomay is Vice President, Group Account Director at Bernstein-Rein Advertising, where he leads complex client relationships, cross-functional teams, and growth initiatives across a range of industries. Across two periods with the agency, he has nearly 12 years of combined service at Bernstein-Rein and more than 25 years of experience in marketing, business development, strategic planning, and organizational leadership.",
    "Throughout his career, Doug has worked with national brands and organizations in financial services, insurance, healthcare, technology, consumer products, and professional services. His experience includes helping leaders clarify business priorities, align stakeholders, strengthen customer relationships, launch new brands and offerings, and translate strategy into measurable action. He is known for bringing together strategic thinking, creativity, analytics, and practical execution while building trusted relationships with executives, clients, and team members.",
    "Doug's professional background includes leadership roles with Bernstein-Rein, Lockton Companies, Hallmark, Cerner Corporation, and DataCore Marketing, which was acquired by KBM Group/WPP. He has led major brand and growth initiatives, managed multimillion-dollar client relationships, supported organizational change, and guided teams through high-stakes decisions and complex business challenges. His work has consistently required sound judgment, clear communication, strategic advisory and stakeholder leadership, budget stewardship, and the ability to build alignment across people with different priorities and perspectives.",
    "In addition to his professional experience, Doug previously served on the Kansas State University College of Business Administration Marketing Advisory Board from 2017 to 2020. In that role, he worked with university leadership and fellow business professionals to help strengthen marketing education and better prepare students for their careers. He also values mentoring emerging professionals and helping others build confidence, perspective, and leadership skills.",
    "Doug brings strategic planning, marketing and communications, business development, partnership building, strategic advisory and stakeholder leadership, and budget stewardship experience. He is especially interested in helping organizations increase brand awareness, deepen corporate and community relationships, support sustainable growth, and communicate the importance of their mission to a broader audience. He approaches his clients with a willingness to listen, learn, contribute, and work collaboratively in support of an organization's leadership and long-term impact.",
    "Doug earned a Bachelor of Science in Business Administration with concentrations in Marketing and International Business from Kansas State University. He lives in Lenexa, Kansas, and is committed to using his experience, relationships, and leadership to support organizations that improve the quality of life for people throughout the Kansas City community.",
  ],
} as const;

export const CORE_COMPETENCIES = [
  {
    name: "Strategic Planning",
    description:
      "Helping leadership teams clarify priorities, align stakeholders, and translate strategy into measurable, actionable plans.",
  },
  {
    name: "Strategic Advisory & Stakeholder Leadership",
    description:
      "Advising senior executives on high-stakes decisions and building consensus among internal teams and external partners.",
  },
  {
    name: "Marketing & Communications",
    description:
      "Directing integrated brand, creative, media, digital, and campaign strategy across national brands and industries.",
  },
  {
    name: "Business Development",
    description:
      "Building and growing multimillion-dollar client relationships and identifying new sources of sustainable growth.",
  },
  {
    name: "Budget Stewardship",
    description:
      "Managing complex scopes and budgets with accountability for quality, timing, and financial performance.",
  },
  {
    name: "Community Partnerships",
    description:
      "Deepening corporate and community relationships and helping organizations communicate their mission to a broader audience.",
  },
] as const;

export type Job = {
  company: string;
  location?: string;
  positions: { title: string; dates: string }[];
  description: string;
  highlights?: string[];
};

export const JOBS: Job[] = [
  {
    company: "Bernstein-Rein Advertising",
    location: "Kansas City, MO",
    positions: [
      { title: "Vice President, Group Account Director", dates: "February 2017–Present" },
      { title: "Senior Account Director", dates: "April 2013–June 2015" },
    ],
    description:
      "Lead integrated client relationships and cross-functional teams across strategy, creative, media, digital, analytics, and activation. Advise senior executives, guide high-stakes business and brand decisions, manage complex scopes and budgets, cultivate long-term partnerships, and support new business growth. Direct portfolio strategy, resource planning, executive communications, and delivery across multiple industries and client organizations. Help clients align brand, customer experience, marketing investment, and performance priorities around measurable growth objectives.",
    highlights: [
      "Directed American National Insurance Company's brand evolution and first direct-to-consumer campaign, generating more than $8 million in sales and a 240% return on ad spend.",
      "Helped Gold's Gym increase quality site traffic by 23%, membership leads by 25%, and new memberships by 16%.",
      "Supported campaigns associated with $2 billion in deposit growth for Flagstar Bank.",
    ],
  },
  {
    company: "Lockton Companies – Mylo",
    positions: [{ title: "Assistant Vice President, Integrated Marketing", dates: "2015–2017" }],
    description:
      "Partnered with executive leadership to incubate, launch, and scale Lockton's first direct-to-consumer digital insurance brand. Led brand development, customer experience planning, go-to-market strategy, and cross-functional coordination supporting growth and venture investment.",
  },
  {
    company: "DataCore Marketing",
    location: "later acquired by KBM Group/WPP",
    positions: [{ title: "Senior Account Director / Account Director", dates: "2008–2009 and 2011–2012" }],
    description:
      "Led strategic client relationships and account teams across healthcare and life sciences. Returned during a major ownership transition to help preserve client confidence, service continuity, and operational stability.",
  },
  {
    company: "Hallmark Business Connections / Hallmark Loyalty Marketing",
    positions: [
      { title: "Senior Key Account Manager / Manager, Relationship Marketing", dates: "2000–2005 and 2009–2010" },
    ],
    description:
      "Developed and led large-scale customer engagement and loyalty programs for national brands. Secured more than $13 million in first-year new business and helped create programs that strengthened customer retention and generated measurable revenue impact.",
  },
  {
    company: "Cerner Corporation",
    positions: [{ title: "Senior Team Lead, Regional Marketing", dates: "2005–2007" }],
    description:
      "Led a team of regional marketing managers and partnered with senior sales and marketing leadership to position healthcare technology solutions for hospital systems and support sales effectiveness.",
  },
  {
    company: "Marketshare Publications",
    positions: [{ title: "List Broker", dates: "1997–2000" }],
    description:
      "Built early expertise in direct marketing, data-driven customer acquisition, relationship management, and revenue growth while managing national catalog accounts.",
  },
];

export const ACHIEVEMENTS = [
  {
    company: "American National Insurance Company",
    context: "Bernstein-Rein Advertising",
    result:
      "Directed the brand's evolution and first direct-to-consumer campaign, generating more than $8 million in sales and a 240% return on ad spend.",
  },
  {
    company: "Gold's Gym",
    context: "Bernstein-Rein Advertising",
    result:
      "Helped increase quality site traffic by 23%, membership leads by 25%, and new memberships by 16%.",
  },
  {
    company: "Flagstar Bank",
    context: "Bernstein-Rein Advertising",
    result: "Supported campaigns associated with $2 billion in deposit growth.",
  },
  {
    company: "Mylo (Lockton Companies)",
    context: "Lockton Companies",
    result:
      "Partnered with executive leadership to incubate, launch, and scale Lockton's first direct-to-consumer digital insurance brand.",
  },
  {
    company: "National brand loyalty programs",
    context: "Hallmark Business Connections / Hallmark Loyalty Marketing",
    result:
      "Secured more than $13 million in first-year new business through large-scale customer engagement and loyalty programs.",
  },
] as const;

export const INDUSTRIES = [
  "Financial Services",
  "Insurance",
  "Healthcare",
  "Technology",
  "Consumer Products",
  "Professional Services",
] as const;

export const BOARD_COMMUNITY = [
  {
    org: "Kansas State University College of Business Administration",
    role: "Marketing Advisory Board",
    dates: "2017–2020",
    description:
      "Advised university leadership on marketing education, industry relevance, and preparing students for successful business careers. Supported connections between academic programming and the evolving needs of employers and marketing leaders.",
  },
  {
    org: "Giving the Basics",
    role: "Volunteer Engagement",
    dates: undefined,
    description:
      "Participated in a holiday packaging event through Bernstein-Rein, gaining firsthand appreciation for the organization's work to provide essential hygiene products and restore dignity for individuals and families facing financial hardship.",
  },
] as const;

export const EDUCATION = {
  school: "Kansas State University",
  degree: "Bachelor of Science in Business Administration",
  concentrations: "Marketing and International Business",
} as const;
