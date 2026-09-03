const researchPrinciples = [
  ['Data-driven', 'Inductive'],
  ['Domain-independent', 'Scalable'],
  ['Uncertainty-aware', 'Probabilistic'],
];

const researchInterests = [
  'Reliability-based design optimization (RBDO)',
  'Aleatory and epistemic uncertainty quantification (UQ)',
  'Statistical model calibration',
  'Multi-fidelity / multi-output machine learning',
  'Resource allocation',
];

const recentResearchAreas = [
  'Large Language Models (LLMs)',
  'Photolithography',
  'Robotics',
];

const manuscriptsUnderReview = [
  {
    year: '2026',
    authors: 'Lim, E., & Jung, Y.*',
    title: 'Neural Wake Surrogate for SCADA-Conditioned Posterior Predictive Wind Farm Power Reliability',
    venue: 'Renewable Energy.',
    metric: 'Submitted',
    note: '*Corresponding author',
  },
  {
    year: '2026',
    authors: 'Go, E., Yeon, D., Hwang, Y., Kang, M., Byun, S., Choi, S., Kim, B., Song, S., Choi, M. S., Jung, Y., Kim, S., Kim, J., & Kim, H.-U.',
    title: 'Physically Validated, Image-Based Machine Learning for End-Point Detection and Layer-Resolved Thickness Prediction in Multilayer Plasma Etching',
    venue: 'ACS Applied Materials & Interfaces.',
    metric: 'Under Review',
  },
  {
    year: '2026',
    authors: 'Jung, Y.*, Choi, H., Lee, M., Lee, U., & Lee, I.*',
    title: 'Source-wise Decomposition of Predictive Uncertainty in Heteroscedastic Gaussian Processes',
    venue: 'Reliability Engineering & System Safety.',
    metric: 'Revision in Progress',
    note: '*Corresponding authors',
  },
  {
    year: '2026',
    authors: 'Cho, H., Moon, H., Yu, J., Kim, H., Jung, Y.*, & Ryu, S.*',
    title: 'Interpretable Sensor Placement Optimization for Source-Wise Uncertainty-Aware Full-Field Reconstruction from Sparse Measurements',
    venue: 'Mechanical Systems and Signal Processing.',
    metric: 'Under Review',
    note: '*Co-corresponding authors',
  },
  {
    year: '2026',
    authors: 'Jung, Y.†, Lee, M.†, Oh, S.*, & Lee, U.*',
    title: 'Kriging-enhanced neural network framework employing stochastic architecture neural network ensemble',
    venue: 'Engineering Applications of Artificial Intelligence.',
    metric: 'Under Review',
    note: '†These authors contributed equally · *Corresponding authors',
  },
  {
    year: '2026',
    authors: 'Kim, S., Hahn, B.*, & Jung, Y.*',
    title: 'Model Calibration for Lithium-Ion Battery Voltage Prediction Using a Single Particle Model with Electrolyte',
    venue: 'Journal of Energy Storage.',
    metric: 'Under Review',
    note: '*Corresponding authors',
  },
  {
    year: '2026',
    authors: 'Park, H.-J.†, Kim, J.†, Cho, I., & Jung, Y.*',
    title: 'Data-driven reliability-based design optimization using latent distribution embedding and conditional normalizing flows',
    venue: 'Reliability Engineering & System Safety.',
    metric: 'Under Review',
    note: '†These authors contributed equally · *Corresponding author',
  },
];

const manuscriptsInPreparation = [
  'Unified probabilistic modeling of heterogeneous stochastic responses: Random variables, random processes, and random fields',
  'Cost-aware sequential allocation between data acquisition and model refinement in multi-fidelity Gaussian process surrogates',
  'A shared-latent physics multi-fidelity surrogate for layered plasma etch',
  'Sequential multi-fidelity Gaussian processes for fidelity-wise variance decomposition',
  'Bayesian nonparametric model calibration with aleatory-epistemic uncertainty separation and sequential experimental design',
];

const publications = [
  {
    year: '2026',
    authors: 'Jung, Y.*, Park, Y.*, & Lee, I.',
    title: 'Non-hierarchical multi-output multi-fidelity Gaussian processes using a structure-aware composite kernel.',
    venue: 'Knowledge-Based Systems, 351, 116634.',
    metric: 'IF 8.0 · JCR Top 16.19% · Q1',
    note: '*Equally contributed',
  },
  {
    year: '2026',
    authors: 'Jung, Y., & Lee, M.',
    title: 'System confidence-based design optimization using a multi-output Gaussian process accounting for epistemic uncertainty.',
    venue: 'Structural Safety, 120, 102697.',
    metric: 'IF 5.7 · JCR Top 12.95% · Q1',
  },
  {
    year: '2026',
    authors: 'Myung, J., Go, E., Cho, D., Ko, M., Jeon, N., Kim, J., Hahn, B., Jung, Y., Kim, H.-U., & Kim, J.',
    title: 'Explainable integration of process and optical parameters for plasma etch depth prediction.',
    venue: 'Journal of Vacuum Science & Technology A, 44(2), 023408.',
    metric: 'IF 2.5 · JCR Top 56.00% · Q3',
  },
  {
    year: '2026',
    authors: 'Jung, Y., Lee, M., & Lee, I.',
    title: 'Data-driven time-variant reliability analysis using deep Gaussian processes.',
    venue: 'Reliability Engineering & System Safety, 274, 112395.',
    metric: 'IF 13.7 · JCR Top 1.83% · Q1',
  },
  {
    year: '2026',
    authors: 'Jung, Y.*, Lee, U.*, & Lee, I.',
    title: 'An integrated framework for reliability analysis and design optimization using input, simulation, and experimental data: Confidence-based design optimization under aleatory and epistemic uncertainty.',
    venue: 'Reliability Engineering & System Safety, 267, 111895.',
    metric: 'IF 13.7 · JCR Top 1.83% · Q1',
    note: '*Equally contributed',
  },
  {
    year: '2026',
    authors: 'Park, Y., Song, B. U., Choi, J. P., Lee, P. H., Jung, Y., & Lee, I.',
    title: 'Advanced non-hierarchical co-Kriging using latent map multi-output Gaussian process.',
    venue: 'Applied Mathematical Modelling, 151, 116573.',
    metric: 'IF 5.5 · JCR Top 5.11% · Q1',
  },
  {
    year: '2026',
    authors: 'Jung, Y., Kang, M., Kim, M., Choi, M. S., Kim, H.-U., & Kim, J.',
    title: 'Uncertainty quantification and parameter optimization of plasma etching process using heteroscedastic Gaussian process.',
    venue: 'Engineering Optimization (Accepted).',
  },
  {
    year: '2024',
    authors: 'Jung, Y.*, Kim, M.*, Cho, H., Hu, W., & Lee, I.',
    title: 'Confidence-based design optimization using multivariate kernel density estimation under insufficient input data.',
    venue: 'Probabilistic Engineering Mechanics, 78, 103702.',
    metric: 'IF 4.1 · JCR Top 4.71% · Q1',
    note: '*Equally contributed',
  },
  {
    year: '2024',
    authors: 'Gu, J., Jung, Y., Ahn, J., Ahn, J., Choi, J., Kang, B., et al.',
    title: 'Auxetic kirigami structure-based self-powered strain sensor with customizable performance using machine learning.',
    venue: 'Nano Energy, 130, 110124.',
    metric: 'IF 16.7 · JCR Top 5.76% · Q1',
  },
  {
    year: '2024',
    authors: 'Lee, M.*, Jung, Y.*, Hwang, C., Kim, M., Kim, M., Lee, U., & Lee, I.',
    title: 'An efficient multi-fidelity design optimization framework for a thermoelectric generator system.',
    venue: 'Energy Conversion and Management, 315, 118788.',
    metric: 'IF 11.8 · JCR Top 2.33% · Q1',
    note: '*Equally contributed',
  },
  {
    year: '2024',
    authors: 'Choo, J., Jung, Y., Jo, H., & Lee, I.',
    title: 'Statistical model calibration of correlated unknown model variables through identifiability improvement.',
    venue: 'Probabilistic Engineering Mechanics, 77, 103670.',
    metric: 'IF 4.1 · JCR Top 4.71% · Q1',
  },
  {
    year: '2024',
    authors: 'Yang, S., Lee, M., Jung, Y., Cho, H., Hu, W., & Lee, I.',
    title: 'An effective active learning strategy for reliability-based design optimization under multiple simulation models.',
    venue: 'Structural Safety, 107, 102426.',
    metric: 'IF 5.7 · JCR Top 12.95% · Q1',
  },
  {
    year: '2023',
    authors: 'Choo, J., Jung, Y., Jo, H., Kim, J., & Lee, I.',
    title: 'Distribution estimation of Johnson-Cook parameters considering correlation in quasi-static state.',
    venue: 'International Journal of Mechanical Sciences, 244, 108086.',
    metric: 'IF 11.4 · JCR Top 2.17% · Q1',
  },
  {
    year: '2022',
    authors: 'Lee, M., Jung, Y., Choi, J., & Lee, I.',
    title: 'A reanalysis-based multi-fidelity (RBMF) surrogate framework for efficient structural optimization.',
    venue: 'Computers & Structures, 273, 106895.',
    metric: 'IF 5.6 · JCR Top 14.51% · Q1',
  },
  {
    year: '2022',
    authors: 'Kim, M., Jung, Y., Lee, M., & Lee, I.',
    title: 'An expected uncertainty reduction of reliability: Adaptive sampling convergence criterion for Kriging-based reliability analysis.',
    venue: 'Structural and Multidisciplinary Optimization, 65(7), 206.',
    metric: 'IF 4.5 · JCR Top 17.98% · Q1',
  },
  {
    year: '2022',
    authors: 'Choo, J., Jung, Y., & Lee, I.',
    title: 'A Bayesian model calibration under insufficient data environment.',
    venue: 'Structural and Multidisciplinary Optimization, 65(3), 96.',
    metric: 'IF 4.5 · JCR Top 17.98% · Q1',
  },
  {
    year: '2022',
    authors: 'Jung, Y., Jo, H., Choo, J., & Lee, I.',
    title: 'Statistical model calibration and design optimization under aleatory and epistemic uncertainty.',
    venue: 'Reliability Engineering & System Safety, 222, 108428.',
    metric: 'IF 13.7 · JCR Top 1.83% · Q1',
  },
  {
    year: '2021',
    authors: 'Jung, Y., & Lee, I.',
    title: 'Optimal design of experiments for optimization-based model calibration using Fisher information matrix.',
    venue: 'Reliability Engineering & System Safety, 216, 107968.',
    metric: 'IF 13.7 · JCR Top 1.83% · Q1',
  },
  {
    year: '2021',
    authors: 'Acar, E., Bayrak, G., Jung, Y., Lee, I., Ramu, P., & Ravichandran, S. S.',
    title: 'Modeling, analysis, and optimization under uncertainties: A review.',
    venue: 'Structural and Multidisciplinary Optimization, 64(5), 2909–2945.',
    metric: 'IF 4.5 · JCR Top 17.98% · Q1',
  },
  {
    year: '2021',
    authors: 'Jo, H., Lee, K., Lee, M., Jung, Y., & Lee, I.',
    title: 'Optimization-based model calibration of marginal and joint output distributions utilizing analytical gradients.',
    venue: 'Structural and Multidisciplinary Optimization, 63(6), 2853–2868.',
    metric: 'IF 4.5 · JCR Top 17.98% · Q1',
  },
  {
    year: '2021',
    authors: 'Jung, Y., Kang, K., Cho, H., & Lee, I.',
    title: 'Confidence-based design optimization for a more conservative optimum under surrogate model uncertainty caused by Gaussian process.',
    venue: 'Journal of Mechanical Design, 143(9), 091701.',
    metric: 'IF 3.3 · JCR Top 29.89% · Q2',
  },
  {
    year: '2020',
    authors: 'Jung, Y., Cho, H., & Lee, I.',
    title: 'Intelligent initial point selection for MPP search in reliability-based design optimization.',
    venue: 'Structural and Multidisciplinary Optimization, 62(4), 1809–1820.',
    metric: 'IF 4.5 · JCR Top 17.98% · Q1',
  },
  {
    year: '2020',
    authors: 'Jung, Y., Lee, J., Lee, M., Kang, N., & Lee, I.',
    title: 'Probabilistic analytical target cascading using kernel density estimation for accurate uncertainty propagation.',
    venue: 'Structural and Multidisciplinary Optimization, 61(5), 2077–2095.',
    metric: 'IF 4.5 · JCR Top 17.98% · Q1',
  },
  {
    year: '2020',
    authors: 'Duan, Z., Jung, Y., Yan, J., & Lee, I.',
    title: 'Reliability-based multi-scale design optimization of composite frames considering structural compliance and manufacturing constraints.',
    venue: 'Structural and Multidisciplinary Optimization, 61(6), 2401–2421.',
    metric: 'IF 4.5 · JCR Top 17.98% · Q1',
  },
  {
    year: '2020',
    authors: 'Jung, Y., Cho, H., Duan, Z., & Lee, I.',
    title: 'Determination of sample size for input variables in RBDO through bi-objective confidence-based design optimization under input model uncertainty.',
    venue: 'Structural and Multidisciplinary Optimization, 61(1), 253–266.',
    metric: 'IF 4.5 · JCR Top 17.98% · Q1',
  },
  {
    year: '2019',
    authors: 'Oh, S.*, Jung, Y.*, Kim, S., Lee, I., & Kang, N.',
    title: 'Deep generative design: Integration of topology optimization and generative models.',
    venue: 'Journal of Mechanical Design, 141(11), 111405.',
    metric: 'IF 3.3 · JCR Top 29.89% · Q2',
    note: '*Equally contributed',
  },
  {
    year: '2019',
    authors: 'Jung, Y., Cho, H., & Lee, I.',
    title: 'Reliability measure approach for confidence-based design optimization under insufficient input data.',
    venue: 'Structural and Multidisciplinary Optimization, 60(5), 1967–1982.',
    metric: 'IF 4.5 · JCR Top 17.98% · Q1',
  },
  {
    year: '2019',
    authors: 'Jung, Y., Cho, H., & Lee, I.',
    title: 'MPP-based approximated DRM (ADRM) using simplified bivariate approximation with linear regression.',
    venue: 'Structural and Multidisciplinary Optimization, 59(5), 1761–1773.',
    metric: 'IF 4.5 · JCR Top 17.98% · Q1',
  },
  {
    year: '2018',
    authors: 'Jung, Y., Kang, N., & Lee, I.',
    title: 'Modified augmented Lagrangian coordination and alternating direction method of multipliers with parallelization in non-hierarchical analytical target cascading.',
    venue: 'Structural and Multidisciplinary Optimization, 58(2), 555–573.',
    metric: 'IF 4.5 · JCR Top 17.98% · Q1',
  },
];

// Retained as source data for future use; intentionally not rendered on the website.
const projectGroups = [
  {
    institution: 'Hongik University',
    projects: [
      ['2026–2028', 'Development of an Active Learning Methodology Based on Predictive Uncertainty Source Decomposition for Reliable Decision-Making', 'National Research Foundation of Korea (NRF)', 'Principal Investigator (Research Grant)'],
      ['2026', 'AI-Based Process Optimization and Data Visualization', 'Ministry of Employment and Labor (MOEL), Republic of Korea · In collaboration with Coavis Co., Ltd.', 'Participating Researcher'],
      ['2026', 'Development of a Physics-Based Automated Structural Analysis Model for Wind Turbine Flange Joints', 'CPX (Cyber Physical Simulation/Experiment) SYSTEMS Co., Ltd.', 'Participating Researcher (Commissioned Research Project)'],
      ['2026', 'Deep Gaussian Process Modeling with Heterogeneous Data for Epistemic Uncertainty Quantification', 'Hongik University UROP Program · In collaboration with the Korea Institute of Materials Science (KIMS)', 'Principal Investigator (Undergraduate Research Program)'],
      ['2026', 'Development of an AI Framework for Probabilistic Design Optimization Using Deep Gaussian Processes for Uncertainty Quantification', 'Ministry of Science and ICT · InnoCORE AI Program', 'Principal Investigator (Commissioned Research Project)'],
      ['2025', 'Development of a Multi-Fidelity AI Model Based on Heterogeneous Gaussian Processes for Uncertainty Quantification in Plasma Etching', 'Hongik University UROP Program · In collaboration with the Korea Institute of Machinery and Materials (KIMM)', 'Principal Investigator (Undergraduate Research Program)'],
    ],
  },
];

const conferences = [
  ['2026', 'Go, E., Kang, M., Byun, S., Kim, J., Jung, Y., Kim, S., Kang, W. S., & Kim, H.-U.', 'RGB-Based Machine Learning for Multilayer-aware Thickness Prediction and End-Point Detection in Plasma Etching.', 'VASSCAA-13 & KVS 2026 · Abstract 0044 · Regular Session, Thin Film · Presenter: Eunseo Go'],
  ['2026', 'Lee, C. J., Jung, Y., & Lee, I.', 'Nonparametric model calibration for disentangling aleatory and epistemic uncertainties.', 'ACSMO 2026'],
  ['2026', 'Jeong, J., Lee, M., Jung, Y., Lee, U., & Lee, I.', 'Sequential sampling strategy for non-hierarchical multi-fidelity modeling considering data synergies.', 'ACSMO 2026'],
  ['2026', 'Lim, E., Kim, J., & Jung, Y.', 'Joint inverse calibration of wake surrogates and temporal wind-field corrections for wind-farm reliability assessment.', 'KSME CAE and Applied Mechanics Division Spring Conference'],
  ['2026', 'Kim, S., Kim, J., & Jung, Y.', 'A framework for pack-level battery voltage prediction and model calibration using accelerated life testing data.', 'KSME CAE and Applied Mechanics Division Spring Conference'],
  ['2026', 'Hwang, Y., Go, E., Yeon, D., Jung, Y., Kim, S., Kim, H.-U., & Kim, J.', 'Random forest and physics-based end point detection for reliable plasma etching under imbalanced experimental data.', 'KSME Reliability Division 20th Anniversary Conference'],
  ['2026', 'Kang, M., Go, E., Kim, S., Lee, J., Kang, W., Choi, M., Jung, Y., Kim, J., & Kim, H.-U.', 'DIC and machine learning-based etch depth prediction and uncertainty quantification in plasma etching.', '70th Winter Annual Conference of the Korean Vacuum Society'],
  ['2023', 'Gu, J., Jung, Y., Ahn, J., Jeong, Y., Jung, J., Ryu, S., Lee, I., & Park, I.', 'Versatile soft strain sensor design optimization based on auxetic structure.', 'IEEE NEMS 2023'],
  ['2022', 'Jung, Y., Kang, K., Cho, H., & Lee, I.', 'Confidence-based design optimization for a more conservative optimum under surrogate model uncertainty caused by Gaussian process.', 'ASME IDETC-CIE 2022 · JMD Journal Spotlight'],
  ['2022', 'Choo, J., Jung, Y., Jo, H., & Lee, I.', 'A statistical model calibration of the correlated unknown model variables.', 'ACSMO 2022'],
  ['2020', 'Jung, Y., Jo, H., & Lee, I.', 'Confidence-based design optimization under surrogate model uncertainty.', 'ACSMO 2020'],
  ['2019', 'Jung, Y., Cho, H., Duan, Z., & Lee, I.', 'Determination of the number of input data through bi-objective confidence-based design optimization.', 'ASME IDETC-CIE 2019'],
  ['2019', 'Jung, Y., Cho, H., & Lee, I.', 'Confidence-based design optimization under data uncertainty using most probable point-based approach.', 'ASME IDETC-CIE 2019'],
  ['2019', 'Jung, Y., Cho, H., & Lee, I.', 'Efficient reliability-based design optimization through enhanced initial point selection.', 'KSME CAE and Applied Mechanics Division Conference'],
  ['2018', 'Oh, S., Jung, Y., Lee, I., & Kang, N.', 'Design automation by integrating generative adversarial networks and topology optimization.', 'ASME IDETC-CIE 2018'],
  ['2018', 'Jung, Y., Cho, H., & Lee, I.', 'Reliability analysis and optimization using efficient MPP-based dimension reduction.', 'KSME CAE and Applied Mechanics Division Conference'],
  ['2018', 'Jung, Y., Kang, N., & Lee, I.', 'Convergence strategy for parallel solving of analytical target cascading with augmented Lagrangian coordination.', 'WCSMO12 Proceedings'],
  ['2017', 'Jung, Y., Lee, I., & Kang, N.', 'Modified AL-AD with parallelization in non-hierarchical analytical target cascading.', 'KSME Spring Conference'],
  ['2017', 'Jung, Y., Lee, I., & Kang, N.', 'Convergence strategy for parallel solving of analytical target cascading with augmented Lagrangian coordination.', 'Korean Society for Computational Mechanics Conference'],
];

const patents = [
  ['KR 10-2020-0028453', 'High-temperature heat exchanger for thermoelectric generation with fins and partition walls.', 'Park, S., Ryu, B., Jung, J., Lee, I., & Jung, Y.'],
  ['KR 10-2024-0019164 · KR20250122922A', 'Mask manufacturing method including ACI target allocation method, and semiconductor chip manufacturing method using the same.', 'Jung, Y., Shin, M., Park, K., & Heo, Y. · Samsung Electronics'],
  ['US 18/952,272 · US20250251660A1', 'Mask manufacturing method including ACI target allocation method, and semiconductor chip manufacturing method using the same.', 'Jung, Y., Shin, M., Park, K., & Heo, Y. · Samsung Electronics'],
  ['KR 10-2024-0072641 · KR20250173329A', 'Method and system for mask control using fake mask and method for manufacturing mask using the same.', 'Shin, M., Jung, Y., & Park, K. · Samsung Electronics'],
  ['KR 10-2024-0129777 · KR20260043858A', 'SRAF control method and system for wafer exposure, and mask manufacturing method using the method.', 'Jung, Y., Shin, M., & Park, K. · Samsung Electronics'],
  ['US 19/032,417 · US20260086450A1', 'SRAF control method and system for wafer exposure, and mask manufacturing method using the method.', 'Jung, Y., Shin, M., & Park, K. · Samsung Electronics'],
];

function PublicationList({ items, descending = false }: { items: typeof publications; descending?: boolean }) {
  return (
    <ol className="publication-list">
      {items.map((publication, index) => {
        const publicationNumber = String(descending ? items.length - index : index + 1).padStart(2, '0');
        const isLeadAuthor = publication.authors.startsWith('Jung, Y.') || publication.authors.includes('Jung, Y.*');

        return (
          <li key={`${publication.year}-${publication.title}`}>
            <span
              className={`publication-number${isLeadAuthor ? ' lead-author' : ''}`}
              title={isLeadAuthor ? 'Lead / Corresponding Author publication' : undefined}
            >
              {publicationNumber}
            </span>
            <article>
              <div className="publication-meta">
                <span>{publication.year}</span>
                {publication.metric && <span>{publication.metric}</span>}
              </div>
              <p className="authors">
                {publication.authors.split(/(Jung, Y\.\*?)/g).map((part, partIndex) =>
                  /^Jung, Y\.\*?$/.test(part)
                    ? <strong className="self-author" key={`${part}-${partIndex}`}>{part}</strong>
                    : part
                )}
              </p>
              <h3>{publication.title}</h3>
              <p className="venue">{publication.venue}</p>
              {publication.note && <p className="note">{publication.note}</p>}
            </article>
          </li>
        );
      })}
    </ol>
  );
}

function ConferenceList({ items }: { items: typeof conferences }) {
  return (
    <ol className="conference-list">
      {items.map(([year, authors, title, venue]) => (
        <li key={`${year}-${title}`}>
          <span className="conference-year">{year}</span>
          <article>
            <p className="conference-venue">{venue}</p>
            <h3>{title}</h3>
            <p className="conference-authors">{authors}</p>
          </article>
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  const journalPublications = publications.filter((publication) => !publication.venue.startsWith('arXiv'));
  const preprints = publications.filter((publication) => publication.venue.startsWith('arXiv'));

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="shell header-inner">
          <nav aria-label="Primary navigation">
            <a href="#background">Background</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#researchers">Researchers</a>
          </nav>
          <a className="header-contact" href="mailto:ys.jung@hongik.ac.kr">Email</a>
        </div>
      </header>

      <main id="main">
        <section className="hero shell" id="top">
          <div className="eyebrow">Data-Driven Modeling · Uncertainty Quantification · Design Optimization</div>
          <div className="hero-person">
            <img
              className="hero-portrait"
              src="/profile-yongsu-jung.jpg"
              alt="Portrait of Yongsu Jung"
              width="120"
              height="160"
            />
            <div>
              <h1>Yongsu Jung</h1>
              <p className="hero-title">Assistant Professor</p>
              <p className="hero-affiliation">Department of Mechanical and Design Engineering<br />Hongik University, Sejong</p>
            </div>
          </div>
          <div className="hero-introduction">
            <p>
              Developing scalable, data-driven methods from uncertainty
              quantification to design optimization for reliable engineering
              decisions across industries.
            </p>
            <p className="collaboration-note">
              I am actively seeking diverse application domains and collaborative opportunities in data-driven uncertainty quantification and optimization.
            </p>
            <p className="student-recruitment-note">
              I am also looking for motivated undergraduate and graduate students to join our research group. Students interested in data-driven uncertainty quantification and optimization are welcome to contact me.
            </p>
            <div className="hero-links">
              <a href="mailto:ys.jung@hongik.ac.kr">ys.jung@hongik.ac.kr</a>
              <a href="https://scholar.google.co.kr/citations?user=_ISI9JcAAAAJ&hl=ko">Google Scholar</a>
              <a href="/Yongsu_Jung_CV.pdf">CV · PDF</a>
            </div>
          </div>
          <div className="fact-row" aria-label="Profile summary">
            <div><strong>{journalPublications.length}</strong><span>Journal publications</span></div>
            <div><strong>{manuscriptsInPreparation.length} / {manuscriptsUnderReview.length}</strong><span>In preparation / Under review</span></div>
            <div><strong>{conferences.length} / {patents.length}</strong><span>Conferences / Patents</span></div>
            <div><strong>Sejong</strong><span>Republic of Korea</span></div>
          </div>
        </section>

        <section className="section section-tint" id="background">
          <div className="shell">
            <div className="section-heading">
              <span>01</span>
              <div><p>Academic profile</p><h2>Academic background</h2></div>
            </div>
            <div className="timeline background-timeline" aria-label="Experience and education">
              <article>
                <div className="timeline-year">2025–Present</div>
                <h3>Assistant Professor</h3>
                <p>Department of Mechanical and Design Engineering, Hongik University</p>
              </article>
              <article>
                <div className="timeline-year">2022–2025</div>
                <h3>Staff Engineer</h3>
                <p>FLASH Process Development Team, Device Solutions, Samsung Electronics</p>
              </article>
              <article>
                <div className="timeline-year">2016–2022</div>
                <h3>Ph.D. in Mechanical Engineering</h3>
                <p className="institution-name">Korea Advanced Institute of Science and Technology (KAIST) · Advisor: Prof. Ikjin Lee</p>
                <p className="timeline-detail">Thesis: Confidence-based Design Optimization under Aleatory and Epistemic Uncertainty</p>
              </article>
              <article>
                <div className="timeline-year">2011–2016</div>
                <h3>B.S. in Mechanical Engineering</h3>
                <p className="institution-name">Korea Advanced Institute of Science and Technology (KAIST)</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section shell" id="research">
          <div className="section-heading">
            <span>02</span>
            <div><p>Research framework</p><h2>From data to reliable engineering decisions</h2></div>
          </div>

          <div className="principle-panel">
            <h3>Research principles</h3>
            <ul className="principle-feature-list">
              {researchPrinciples.map(([principle, qualifier]) => (
                <li key={principle}>
                  <strong>{principle}</strong>
                  <span>{qualifier} approach</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="graphical-overview-title">Graphical Research Overview</h3>

          <figure className="research-figure research-framework-figure">
            <h3 className="research-figure-title">Data-driven research framework</h3>
            <a
              href="/research-framework.png"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the research framework diagram at full size"
              title="Open full-size research framework"
            >
              <img
                src="/research-framework.png"
                alt="Data-driven research framework connecting uncertainty quantification, modeling, optimization, and decision-making with engineering applications"
                width="1433"
                height="639"
                loading="lazy"
                decoding="async"
              />
            </a>
            <figcaption>
              <p>Connecting uncertainty quantification, modeling, optimization, and sequential decision-making through data.</p>
            </figcaption>
          </figure>

          <figure className="research-figure uncertainty-figure">
            <h3 className="research-figure-title">Aleatory and epistemic uncertainty</h3>
            <a
              href="/aleatory-epistemic-uncertainty.png"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the aleatory and epistemic uncertainty diagram at full size"
              title="Open full-size uncertainty diagram"
            >
              <img
                src="/aleatory-epistemic-uncertainty.png"
                alt="Comparison of irreducible aleatory uncertainty and reducible epistemic uncertainty in predictive engineering models"
                width="1188"
                height="308"
                loading="lazy"
                decoding="async"
              />
            </a>
            <figcaption>
              <p>Distinguishing inherent variability from reducible lack of knowledge for reliable prediction and decision-making.</p>
            </figcaption>
          </figure>

          <div className="research-statement">
            <h3 className="subsection-title">Ultimate goal</h3>
            <p>
              Developing data-driven, end-to-end solutions for uncertainty
              quantification and design optimization—making advanced methods
              accessible to engineers across industries.
            </p>
          </div>

          <div className="research-interest-block">
            <h3 className="subsection-title">Research interests</h3>
            <ul className="interest-bullet-grid">
              {researchInterests.map((interest) => <li key={interest}>{interest}</li>)}
            </ul>
          </div>

          <div className="recent-interest-block">
            <h3 className="subsection-title">Recent research interests</h3>
            <p className="recent-interest-intro">
              Extending data-driven modeling, uncertainty quantification, and
              design optimization to three emerging research domains.
            </p>
            <div className="recent-interest-grid">
              {recentResearchAreas.map((area, index) => (
                <article key={area}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h4>{area}</h4>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tint" id="publications">
          <div className="shell">
            <div className="section-heading">
              <span>03</span>
              <div><p>Publications</p><h2>International Journal Publications</h2></div>
            </div>
            <p className="publication-legend">Lead / Corresponding Author</p>
            <PublicationList items={journalPublications} descending />
            <div className="manuscript-groups">
              <section className="manuscript-group" aria-labelledby="under-review-heading">
                <div className="manuscript-group-heading">
                  <h3 id="under-review-heading">Under Review / Revision</h3>
                  <span>{manuscriptsUnderReview.length}</span>
                </div>
                <PublicationList items={manuscriptsUnderReview} />
              </section>

              <section className="manuscript-group" aria-labelledby="in-preparation-heading">
                <div className="manuscript-group-heading">
                  <h3 id="in-preparation-heading">In Preparation</h3>
                  <span>{manuscriptsInPreparation.length}</span>
                </div>
                <ol className="manuscript-list preparation-list">
                  {manuscriptsInPreparation.map((title) => (
                    <li key={title}><h4>{title}</h4></li>
                  ))}
                </ol>
              </section>
            </div>
            {preprints.length > 0 && (
              <div className="preprint-block">
                <div><span>Preprints</span><strong>{preprints.length}</strong></div>
                <PublicationList items={preprints} />
              </div>
            )}
          </div>
        </section>

        <section className="section" id="researchers">
          <div className="shell">
            <div className="section-heading">
              <span>04</span>
              <div><p>People</p><h2>Researchers</h2></div>
            </div>

            <div className="researcher-panel">
              <p>Researcher profiles will be added here.</p>
            </div>
          </div>
        </section>

        <section className="section section-tint" id="more">
          <div className="shell">
            <div className="section-heading">
              <span>05</span>
              <div><p>Profile</p><h2>Teaching, conference presentations, and patents</h2></div>
            </div>

            <div className="stacked-blocks">
              <details className="content-block">
                <summary><span>Conference presentations &amp; patents</span><strong>{conferences.length} conf. · {patents.length} patents</strong></summary>
                <div className="combined-records">
                  <section className="record-group">
                    <div className="record-group-heading"><h3>Conference presentations</h3><span>{conferences.length}</span></div>
                    <ConferenceList items={conferences} />
                  </section>
                  <section className="record-group">
                    <div className="record-group-heading"><h3>Patents</h3><span>{patents.length}</span></div>
                    <ol className="compact-list patent-list">
                      {patents.map(([number, title, inventors]) => (
                        <li key={number}>
                          <span className="compact-year">{number.startsWith('US') ? 'US' : 'KR'}</span>
                          <div><p>{number}</p><h3>{title}</h3><p className="venue">{inventors}</p></div>
                        </li>
                      ))}
                    </ol>
                  </section>
                </div>
              </details>

              <details className="content-block">
                <summary><span>Teaching</span><strong>3 semesters</strong></summary>
                <div className="teaching-grid">
                  <article><span>Spring 2026</span><h3>Mechanical Vibration · Automobile Engineering · Probabilistic Design Optimization using AI · Python Programming</h3></article>
                  <article><span>Fall 2025</span><h3>Computer-Aided Design · Finite Element Method with Software</h3></article>
                  <article><span>Spring 2025</span><h3>Mechanical Vibration · Automobile Engineering · Probabilistic Design Optimization using AI · Engineer Entrepreneurship</h3></article>
                </div>
              </details>

            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-inner">
          <div><strong>Yongsu Jung</strong><span>Mechanical and Design Engineering</span></div>
          <a href="mailto:ys.jung@hongik.ac.kr">ys.jung@hongik.ac.kr</a>
        </div>
      </footer>
    </>
  );
}
