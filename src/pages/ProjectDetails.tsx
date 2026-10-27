import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const projectsData = {
  'fimer-native-inverter': {
    title: 'Native PSCAD Model of a FIMER Central Solar Inverter',
    tag: 'Research Assistant · Siemens Energy Hub',
    tagColor: 'blue',
    description: 'FIMER designs the control software for its central solar inverter in MATLAB/Simulink. In PSCAD/EMTDC, the electromagnetic transient simulator used for grid connection studies, that control only runs as a compiled DLL, so nothing inside it can be seen or edited. Our team at Swinburne set out to replace the black box with a fully native PSCAD model that behaves the same way. I led the conversion: I set the scope, made the engineering decisions, ran and reviewed every validation run in PSCAD, and handled the technical contact with FIMER. The build scripts and Fortran were produced through AI assisted development that I directed and checked. The work moved in three stages. First, single Simulink subsystems such as fault ride-through and the reactive power chain were rebuilt as native PSCAD blocks and checked against Simulink. Then 59 numbered changes to the team\'s integrated models were each run side by side with FIMER\'s own DLL model. Finally, a native model in FIMER\'s own format takes the DLL\'s place inside FIMER\'s test case and reproduces FIMER\'s results across their test matrix.',
    details: [
      'Rebuilt the fault ride-through and reactive power subsystems as native PSCAD blocks, matching Simulink at every output before moving on',
      'Built a native model with no DLL that keeps the original block\'s pins and settings, so it drops straight into FIMER\'s own PSCAD test case',
      'Reproduced FIMER\'s results across balanced and unbalanced dips, voltage swells, a phase jump, a frequency step and a long dip ending in an LVRT trip, with every remaining difference traced and documented',
      'Covered PLLs, inner current control, P(f) and under frequency control, the Q(U) reactive power chain, fault ride-through with negative sequence support, and LVRT, HVRT and frequency protection',
      'Ran each change through offline gates against a reference, a clean PSCAD build, a bit identity check and a side by side run against the vendor model',
      'Solved undocumented PSCAD behaviour, time step artefacts and block execution order effects, and built crash resumable scripted builds through PSCAD\'s automation interface',
      'Found that two problems reported in the model came from test bench wiring, and supplied corrected test cases'
    ],
    images: [
      `${import.meta.env.BASE_URL}hub-dll-to-native.svg`,
      `${import.meta.env.BASE_URL}hub-validation-pipeline.svg`
    ],
    captions: [
      'The goal: replace the sealed DLL inside the PSCAD case with control that can be read, edited and checked',
      'The validation workflow every model change went through before it was accepted'
    ]
  },
  'capstone-2025': {
    title: 'Active Filtering and Autonomous V2G Dispatch for EV Fast Charging Sites',
    tag: '★ Capstone · EEE40005',
    tagColor: 'amber',
    description: 'Fast charging sites concentrate rectifier harmonics at a single connection point, and the usual fix, a D-STATCOM, can only exchange reactive power. For my capstone, fellow student Nijil Sunil Mathew and I modelled a site where a bidirectional EV charger and a shunt active power filter (SAPF) share a 400 V point of common coupling with a 29 kW six pulse rectifier load. A Mamdani fuzzy energy management system watches only the local voltage and the battery state of charge, and switches the charger from charging (G2V) to discharging (V2G) during a voltage sag, while refusing to discharge a depleted battery. The whole site was built as a switched model in MATLAB/Simulink and Simscape Electrical, and the results were assessed against IEEE Std 519-2022. Preliminary results were accepted at the IEEE ICEI 2026 conference, and the full study has been written up as a journal paper with our supervisors.',
    details: [
      'SAPF cut grid current TDD from 15.4 % to 2.75 % in G2V and 2.89 % in V2G, inside the 8 % IEEE Std 519-2022 limit, with individual harmonic limits met up to the 35th order',
      'Showed compensation is independent of power flow direction: residual harmonic current of 1.93 A in G2V against 2.02 A in V2G, so the higher V2G THD comes from a smaller fundamental, not weaker filtering',
      'Fuzzy EMS reversed the battery current autonomously through a 0.85 pu sag with no external command, keeping the 750 V DC link within +6.25 % and −5.66 %',
      'Traced the 24 % current overshoot to the zero of the battery current PI controller through small signal analysis, and showed the supervisory loop gain stays below 0.2',
      'SoC gating withheld discharge at 20 % SoC while harmonic filtering and unity power factor continued',
      'Unity displacement power factor in both directions, and a 78 % cut in net site import (47.8 kW to 10.6 kW) during V2G',
      'Built the dq frame AFE control with SRF-PLL, current decoupling and 10 kHz SPWM, plus the bidirectional DC/DC stage and 350 V, 285 Ah battery model'
    ],
    images: [
      `${import.meta.env.BASE_URL}capstone-site-diagram.png`,
      `${import.meta.env.BASE_URL}capstone-harmonics.png`,
      `${import.meta.env.BASE_URL}capstone-sag-response.png`
    ],
    captions: [
      'Site single line diagram: SAPF, six pulse load and two stage bidirectional charger on a shared 400 V PCC, with the supervisory fuzzy EMS',
      'Grid current with the SAPF switched out and back in (left), and the harmonic spectrum with the filter off and on (right)',
      'Autonomous G2V to V2G to G2V reversal through a 0.85 pu sag: PCC voltage, battery current against the EMS command, and EV DC link voltage'
    ]
  },
  'railway-crossing': {
    title: 'Sensor Controlled Railway Level Crossing System',
    tag: 'Team Project · ENG20010',
    tagColor: 'purple',
    description: 'Working in a team of four at Swinburne University, I helped design and construct a functional scale model of an automated railway level crossing. We used infrared sensors to detect oncoming trains, which then triggered servo actuated gate arms and alternating LED warning signals. The entire operation was managed through a LabVIEW program using a DAQ system. We spent significant time troubleshooting both the hardware and software to ensure the system was reliable, eventually documenting its performance and suggesting future safety enhancements.',
    details: [
      'Functional crossing using 7 of 8 DAQ pins — 4 IR sensors, 2 servo gates, and 2 LED warning pairs',
      'Resolved servo power failure and DAQ voltage port fault within 48 hours of the presentation deadline',
      'Dual routine flowchart covering True True, True False, and False sensor states with 6 second gate delay logic',
      'Documented two critical safety gaps with sensor expansion recommendations for future iterations'
    ],
    images: [
      `${import.meta.env.BASE_URL}railway-code-flowchart.jpg`,
      `${import.meta.env.BASE_URL}railway-labview-true-true.jpg`,
      `${import.meta.env.BASE_URL}railway-labview-true-false.jpg`
    ]
  },
  'mqtt-monitoring': {
    title: 'MQTT Real Time Sensor Monitoring System',
    tag: 'IoT & Networking · TNE20003',
    tagColor: 'blue',
    description: 'I developed a complete IoT sensor data pipeline using Python to simulate and monitor environmental conditions. The system sends temperature and humidity data via the MQTT protocol to a central broker. I built a real time dashboard that visualizes this data using Matplotlib and logs everything to CSV files for later analysis. To make the system more robust, I included threshold based controls and conducted a thorough security analysis, recommending measures like SSL and TLS encryption to protect the data stream.',
    details: [
      'Multi client MQTT architecture authenticated to rule28.i4t.swin.edu.au:1883',
      'Real time Matplotlib temperature graph updating continuously as broker messages arrive',
      'Automated threshold based ON OFF control commands posted to a dedicated control topic',
      'Security analysis covering MitM, eavesdropping, brute force, and DoS vectors with specific countermeasures'
    ],
    images: [
      `${import.meta.env.BASE_URL}mqtt-realtime-graph.jpg`,
      `${import.meta.env.BASE_URL}mqtt-public-server.jpg`,
      `${import.meta.env.BASE_URL}mqtt-control-commands.jpg`,
      `${import.meta.env.BASE_URL}mqtt-temperature-readings.jpg`,
      `${import.meta.env.BASE_URL}mqtt-subscriber-datalog.jpg`
    ]
  },
  'mv-cable': {
    title: 'MV Cable Commissioning & Diagnostics',
    tag: 'Internship · ESI',
    tagColor: 'teal',
    description: 'During my internship, I worked closely with senior commissioning engineers to validate medium voltage kiosk cables for AusNet before they were put into service. I gained practical experience performing VLF testing, partial discharge analysis, and Tan Delta diagnostics. I also analyzed transformer reports and learned the critical safety protocols required for working on live network infrastructure, including handling permits and controlled discharge procedures.',
    details: [
      'VLF testing on medium voltage cables at AusNet kiosk and substation sites',
      'Partial discharge analysis and Tan Delta diagnostics completed',
      'Transformer testing report analysis',
      'VESI trained, active ESI Worker, fully inducted for AusNet sites'
    ],
    images: [
      `${import.meta.env.BASE_URL}main.jpg`,
      `${import.meta.env.BASE_URL}second.jpg`
    ]
  }
};

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id as keyof typeof projectsData] : null;
  // The hub page's explanatory diagrams run full width (about 1.5 times the usual image size)
  const wideImages = id === 'fimer-native-inverter';

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="font-serif text-3xl mb-4">Project not found</h1>
        <Link to="/" className="text-text-grey hover:text-text-dark flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-text-dark selection:bg-accent-green-bg selection:text-accent-green-text">
      <nav className="sticky top-0 z-50 bg-bg-light border-b border-border-light px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-[22px] hover:opacity-80 transition-opacity">Lomitha W.</Link>
        <Link to="/" className="text-[15px] text-text-grey hover:text-text-dark flex items-center gap-2 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </nav>

      <main className="flex-grow p-8 md:p-16 lg:p-24 max-w-5xl mx-auto w-full">
        <FadeIn delay={0} direction="up">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className={`inline-block bg-accent-${project.tagColor}-bg text-accent-${project.tagColor}-text px-3 py-1 rounded-full text-[14px] font-medium`}>
              {project.tag}
            </div>
            {id === 'fimer-native-inverter' && (
              <div className="bg-accent-green-bg text-accent-green-text px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold w-fit">
                May 2026 to present
              </div>
            )}
            {id === 'capstone-2025' && (
              <div className="bg-accent-green-bg text-accent-green-text px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold w-fit">
                IEEE ICEI 2026
              </div>
            )}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">{project.title}</h1>
          <p className="text-[18px] text-text-grey leading-relaxed max-w-3xl mb-12">
            {project.description}
          </p>

          {id === 'mv-cable' && (
            <div className="space-y-12 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden border border-border-light bg-bg-light shadow-sm">
                    <img 
                      src={`${import.meta.env.BASE_URL}main.jpg`}
                      alt="Van" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  <p className="text-[15px] text-text-grey font-medium tracking-wide uppercase opacity-70">Report Analysis</p>
                </div>
                <div className="space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden border border-border-light bg-bg-light shadow-sm">
                    <img 
                      src={`${import.meta.env.BASE_URL}testing-equipment.jpg`}
                      alt="Testing Equipment" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  <p className="text-[15px] text-text-grey font-medium tracking-wide uppercase opacity-70">Testing Equipment</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden border border-border-light bg-white shadow-sm flex items-center justify-center p-4 md:p-8">
                  <img 
                    src={`${import.meta.env.BASE_URL}field-truck.jpg`}
                    alt="Sketch" 
                    className="w-full h-auto max-w-4xl mx-auto" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <p className="text-[15px] text-text-grey font-medium tracking-wide uppercase opacity-70">field yute</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className={`${wideImages ? 'lg:col-span-3' : 'lg:col-span-2'} space-y-8`}>
            {id === 'mv-cable' ? (
              <div className="bg-bg-light rounded-xl p-8 border border-border-light border-dashed flex items-center justify-center text-text-grey italic text-[16px]">
                Some of the site photos taken.
              </div>
            ) : (
              project.images.map((img, idx) => {
                const caption = 'captions' in project ? project.captions[idx] : undefined;
                return (
                  <figure key={idx} className="space-y-3">
                    <div className="rounded-xl overflow-hidden border border-border-light bg-bg-light">
                      <img src={img} alt={caption ?? `${project.title} image ${idx + 1}`} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                    </div>
                    {caption && (
                      <figcaption className="text-[15px] text-text-grey leading-relaxed">{caption}</figcaption>
                    )}
                  </figure>
                );
              })
            )}
          </div>
          
          <div className={wideImages ? 'lg:col-span-3' : 'lg:col-span-1'}>
            <div className="sticky top-24 bg-bg-light rounded-xl p-8 border border-border-light">
              <h3 className="text-[15px] uppercase tracking-wider font-medium mb-6 text-text-dark">Key Details</h3>
              <ul className="space-y-4 text-[16px] text-text-grey">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-text-dark opacity-30">0{idx + 1}</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </FadeIn>
      </main>
      
      <footer className="bg-bg-light px-8 py-12 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-border-light">
        <div className="font-serif text-[27px]">Let's work together.</div>
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href="https://www.linkedin.com/in/lomitha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-text-dark text-bg-light border border-border-light px-6 py-3 rounded-xl text-[16px] hover:opacity-90 transition-opacity"
          >
            LinkedIn
          </a>
          <a 
            href={`${import.meta.env.BASE_URL}Lomitha%20Wickramarachchi%20CV.pdf`} 
            download="Lomitha Wickramarachchi CV.pdf"
            className="bg-text-dark text-bg-light px-6 py-3 rounded-xl text-[16px] hover:opacity-90 transition-opacity"
          >
            Download CV
          </a>
        </div>
      </footer>
    </div>
  );
}
