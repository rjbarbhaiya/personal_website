export type EntryType = 'work' | 'research' | 'education' | 'personal';

export interface ResumeEntry {
  id: string;
  type: EntryType;
  /** Organisation line under the title (optional) */
  org?: string;
  role: string;
  /** Text on the timeline bar; defaults to org */
  label?: string;
  location?: string;
  /** 'YYYY-MM' */
  start: string;
  /** 'YYYY-MM' or 'present' */
  end: string;
  summary?: string;
  points: string[];
  tags?: string[];
}

export const contact = {
  email: 'rjbarbhaiya@gmail.com',
  linkedin: 'https://www.linkedin.com/in/riddhi-barbhaiya/',
  github: 'https://github.com/rjbarbhaiya',
  locations: ['Zurich, Switzerland', 'San Francisco Bay Area'],
};

export const entries: ResumeEntry[] = [
  {
    id: 'eth',
    type: 'education',
    org: 'ETH Zurich',
    role: 'MSc Data Science',
    locations: ['Zurich, Switzerland', 'San Francisco Bay Area'],
    start: '2025-09',
    end: 'present',
    summary: 'Master’s in Data Science, focused on machine learning for biomedical and physiological data.',
    points: [
      'Coursework: Big Data (SQL, Spark, NoSQL), Probabilistic AI (Bayesian optimisation, reinforcement learning), Deep Learning.',
      'Mobile Health and Activity Monitoring: signal processing for wearable PPG and IMU data.',
      'Translational Neuromodeling: Dynamic Causal Modelling of EEG and fMRI data.',
    ],
    tags: ['PyTorch', 'Signal processing', 'Bayesian methods'],
  },
  {
    id: 'hiking',
    type: 'personal',
    role: 'Hiking',
    label: 'Hiking',
    start: '2022-06',
    end: '2022-09',
    points: [
      'John Muir Trail',
      'Canadian Rockies',
    ],
  },
  {
    id: 'deloitte',
    type: 'work',
    org: 'Deloitte Consulting LLP',
    role: 'Consultant / AI Engineer',
    start: '2022-09',
    end: '2025-09',
    summary: 'Built LLM-powered tooling and automation for modernising large-scale analytical systems.',
    points: [
      'Designed and implemented LLM-powered code analysis prototypes to detect and refactor code anti-patterns, with validation metrics, reproducibility checks and automated validation pipelines.',
      'Led end-to-end development of custom tools for modernising large-scale analytical systems, cutting processing time by 30× and improving data accessibility for 120+ engineers.',
      'Automated defect analysis and data and file collection, saving ~4 hours/day and improving reliability across teams.',
      'Partnered with AI specialists to scope a generative AI roadmap, aligning technical feasibility with long-term tooling strategy; presented findings to leadership.',
      'Wrote clean, modular Python and Java for maintainable production systems.',
    ],
    tags: ['LLMs', 'Python', 'Java', 'Automation'],
  },
  {
    id: 'aggie-reuse',
    type: 'work',
    org: 'Aggie Reuse Store',
    role: 'Data Analytics Lead',
    location: 'UC Davis',
    start: '2020-10',
    end: '2022-06',
    summary: 'Led data analytics for a student-run store.',
    points: [
      'Analysed sales, marketing and customer-behaviour data to identify growth opportunities and optimise store operations.',
      'Established data-collection pipelines and reporting standards that improved data quality and reduced cleaning time.',
    ],
    tags: ['Analytics', 'Reporting', 'Tableau'],
  },
  {
    id: 'chaudhuri-lab',
    type: 'research',
    org: 'Chaudhuri Lab, UC Davis Center for Neuroscience',
    role: 'Research Assistant',
    start: '2020-01',
    end: '2022-01',
    summary: 'Modelled structured reasoning and cognitive-map formation with artificial neural networks.',
    points: [
      'Developed neural network models of a transitive-inference task, analysing how learned representations aligned with human behavioural patterns.',
      'Applied unsupervised manifold learning to probe high-dimensional activation spaces and identify emergent representational structure.',
      'Designed controlled, reproducible computational experiments across model variants to assess generalisation and robustness.',
      'Presented findings to interdisciplinary audiences across neuroscience, cognitive science and computational modelling.',
    ],
    tags: ['Neural networks', 'Manifold learning', 'Cognitive science'],
  },
  {
    id: 'ucdavis',
    type: 'education',
    org: 'University of California, Davis',
    role: 'B.S. Statistics & B.S. Cognitive Science',
    location: 'Davis, California',
    start: '2018-09',
    end: '2022-06',
    summary: 'Double major: Statistics (Machine Learning emphasis) and Cognitive Science (Computational emphasis).',
    points: [
      'Outstanding Performance Citations in Statistics and Cognitive Science.',
      'GPA 3.94.',
    ],
    tags: ['Statistics', 'Machine learning', 'Cognitive science'],
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: 'Programming', items: ['Python', 'Java (Spring Boot)', 'SQL', 'R'] },
  { label: 'Libraries', items: ['PyTorch', 'NumPy', 'scikit-learn', 'SciPy', 'pandas', 'polars', 'matplotlib', 'seaborn'] },
  { label: 'Tools', items: ['Git', 'Docker', 'Linux', 'Tableau'] },
];
