import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const projectsData = {
  'capstone-2025': {
    title: '350 kW Three Phase EV Fast Charging System with V2G Integration',
    tag: '★ Capstone 2025 · EEE40005',
    tagColor: 'amber',
    description: 'This is my final year capstone project where me and two other electrical engineering students are designing a 350 kW three phase EV fast charging system with Vehicle to Grid (V2G) capability. The system spans three subsystems: a grid side D-STATCOM with an LCL filter for harmonic mitigation, a bidirectional buck boost converter with a three phase front end, and a charger based BMS with SoC and SoH estimation from the battery side. I am currently completing the Simulink and Simscape model integration with the models of my teammates after a deep literature review on passive and active filters, Kalman filter SoC estimation, and semi empirical SoH modelling.',
    details: [
      'Completed literature review spanning grid impacts, D-STATCOM, AFE converters, and BMS algorithms',
      'Designed full subsystem block diagram with PLL, DQ transformation, DC link control and VSI based D-STATCOM',
      'Defined 6 quantified objectives including THDv ≤ 3%, PF ≥ 0.98, and SoC/SoH RMSE < 5%',
      'Currently integrating Simulink subsystem models with IEEE referenced parameters'
    ],
    images: [
      `${import.meta.env.BASE_URL}capstone-1.png`,
      `${import.meta.env.BASE_URL}capstone-2.png`
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
        <Link to="/" className="font-serif text-[20px] hover:opacity-80 transition-opacity">Lomitha W.</Link>
        <Link to="/" className="text-[13px] text-text-grey hover:text-text-dark flex items-center gap-2 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </nav>

      <main className="flex-grow p-8 md:p-16 lg:p-24 max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className={`inline-block bg-accent-${project.tagColor}-bg text-accent-${project.tagColor}-text px-3 py-1 rounded-full text-[12px] font-medium`}>
              {project.tag}
            </div>
            {id === 'capstone-2025' && (
              <div className="bg-accent-green-bg text-accent-green-text px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold w-fit">
                In progress
              </div>
            )}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">{project.title}</h1>
          <p className="text-[16px] text-text-grey leading-relaxed max-w-3xl mb-12">
            {project.description}
          </p>

          {id === 'mv-cable' && (
            <div className="space-y-12 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden border border-border-light bg-bg-light shadow-sm">
                    <img 
                      src={`${import.meta.env.BASE_URL}main.jpg`}
                      alt="Report Analysis" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  <p className="text-[13px] text-text-grey font-medium tracking-wide uppercase opacity-70">Report Analysis</p>
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
                  <p className="text-[13px] text-text-grey font-medium tracking-wide uppercase opacity-70">Testing Equipment</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden border border-border-light bg-white shadow-sm flex items-center justify-center p-4 md:p-8">
                  <img 
                    src={`${import.meta.env.BASE_URL}field-sketch.jpg`}
                    alt="Sketch" 
                    className="w-full h-auto max-w-4xl mx-auto" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <p className="text-[13px] text-text-grey font-medium tracking-wide uppercase opacity-70">Field Sketch & Annotations</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            {id === 'mv-cable' ? (
              <div className="bg-bg-light rounded-xl p-8 border border-border-light border-dashed flex items-center justify-center text-text-grey italic text-[14px]">
                Field documentation and site photos displayed above.
              </div>
            ) : (
              project.images.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-border-light bg-bg-light">
                  <img src={img} alt={`${project.title} image ${idx + 1}`} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                </div>
              ))
            )}
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-bg-light rounded-xl p-8 border border-border-light">
              <h3 className="text-[13px] uppercase tracking-wider font-medium mb-6 text-text-dark">Key Details</h3>
              <ul className="space-y-4 text-[14px] text-text-grey">
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
      </main>
      
      <footer className="bg-bg-light px-8 py-12 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-border-light">
        <div className="font-serif text-[24px]">Let's work together.</div>
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href="https://www.linkedin.com/in/lomitha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-text-dark text-bg-light border border-border-light px-6 py-3 rounded-xl text-[14px] hover:opacity-90 transition-opacity"
          >
            LinkedIn
          </a>
          <a 
            href="/cv-lomitha.pdf" 
            download 
            className="bg-text-dark text-bg-light px-6 py-3 rounded-xl text-[14px] hover:opacity-90 transition-opacity"
          >
            Download CV
          </a>
        </div>
      </footer>
    </div>
  );
}
