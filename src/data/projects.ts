export interface Project {
  slug: string;
  title: string;
  /** Short label used in the sidebar menu */
  short: string;
  summary: string;
}

export interface Category {
  id: string;
  name: string;
  tag: string;
  projects: Project[];
}

export const categories: Category[] = [
  {
    id: "biomedical",
    name: "Biomedical",
    tag: "Biomed",
    projects: [
      { slug: "fmri-dcm", short: "fMRI Dynamic Causal Modelling", title: "fMRI Dynamic Causal Modelling", summary: "Using DCM and generative embedding to discover transdiagnostic brain circuit subtypes across depression, anxiety, PTSD, and OCD." },
      { slug: "br-estimation-ppg", short: "Breathing Rate from PPG", title: "Breathing Rate Estimation with PPG", summary: "Extracting breathing rate from wrist PPG signals using RIIV, RIAV, and RIFV surrogates with spectral analysis and sensor fusion." },
      { slug: "hr-estimation-ppg-accel", short: "HR from PPG & Accelerometer", title: "HR Estimation with PPG & Accelerometer", summary: "Heart rate estimation combining PPG and accelerometer data to reduce motion artefacts." },
      { slug: "activity-recognition-imu", short: "Activity Recognition (IMU)", title: "Activity Recognition with IMU", summary: "Classifying physical activities from inertial measurement unit sensor data." },
    ],
  },
  {
    id: "general-applications",
    name: "General Applications",
    tag: "Applications",
    projects: [
      { slug: "bayesian-opt-drug-discovery", short: "Bayesian Opt. for Drug Discovery", title: "Bayesian Optimisation for Drug Discovery", summary: "Applying Bayesian optimisation to navigate high-dimensional chemical spaces for drug candidates." },
      { slug: "swag-bnn-satellite", short: "SWAG BNN for Satellite Images", title: "SWAG BNN for Satellite Image Recognition", summary: "Using stochastic weight averaging Gaussian Bayesian neural networks for uncertainty-aware satellite image classification." },
      { slug: "gp-air-pollution", short: "GP for Air Pollution", title: "Gaussian Process for Air Pollution Prediction", summary: "Predicting air pollution with Gaussian processes using an asymmetric loss function." },
    ],
  },
  {
    id: "ml-methods",
    name: "ML Methods",
    tag: "ML Methods",
    projects: [
      { slug: "arithmetic-transformers", short: "Arithmetic Transformers", title: "Arithmetic Transformers", summary: "Investigating transformer architectures on arithmetic reasoning tasks." },
    ],
  },
  {
    id: "dev-projects",
    name: "Dev Projects",
    tag: "Dev",
    projects: [
      { slug: "travel-reels-map", short: "Travel Reels Map", title: "Travel Reels Map", summary: "An interactive map interface linking travel video reels to their geographic locations." },
    ],
  },
];
