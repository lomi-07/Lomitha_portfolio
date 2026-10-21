import { Link } from 'react-router-dom';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FadeIn } from '../components/FadeIn';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-text-dark selection:bg-accent-green-bg selection:text-accent-green-text">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-bg-light border-b border-border-light px-6 py-4 flex items-center justify-between">
        <div className="font-serif text-[20px]">Lomitha W.</div>
        <div className="hidden md:flex items-center gap-8 text-[13px] text-text-grey">
          <a href="#" className="hover:text-text-dark transition-all duration-300 hover:translate-y-[-2px] relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-text-dark transition-all duration-300 group-hover:w-full"></span>
          </a>
          <button
            onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover:text-text-dark transition-all duration-300 hover:translate-y-[-2px] relative group bg-transparent border-none cursor-pointer text-[13px] text-text-grey"
          >
            Research
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-text-dark transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
  className="hover:text-text-dark transition-all duration-300 hover:translate-y-[-2px] relative group bg-transparent border-none cursor-pointer text-[13px] text-text-grey"
>
  Projects
  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-text-dark transition-all duration-300 group-hover:w-full"></span>
</button>
        </div>
        <div className="w-[100px] md:hidden"></div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border-light">
          {/* Left Column */}
          <div className="p-8 md:p-16 lg:p-24 bg-bg-light md:border-r border-border-light flex flex-col justify-center">
            <FadeIn delay={0} direction="up">
              <div className="inline-flex items-center gap-2 bg-accent-green-bg text-accent-green-text px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-medium w-fit mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green-text"></span>
                Open to opportunities
              </div>
            </FadeIn>
            <FadeIn delay={100} direction="up">
              <h1 className="font-serif text-5xl md:text-[52px] leading-[1.1] tracking-[-1.5px] mb-6">
                Lomitha<br />
                <span className="italic text-text-grey">Wickramarachchi</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200} direction="up">
              <p className="text-[14px] text-text-grey leading-relaxed max-w-md mb-10">
                I am a final year Electrical and Electronics Engineering student at Swinburne University. My studies and projects focus on power systems, renewable energy, and the latest in electric vehicle charging technology.
              </p>
            </FadeIn>
            <FadeIn delay={300} direction="up">
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/lomitha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-text-dark text-bg-light px-6 py-3 rounded-xl text-[14px] hover:opacity-90 transition-opacity"
                >
                  LinkedIn
                </a>
                <button className="bg-bg-light text-text-dark border border-border-light px-6 py-3 rounded-xl text-[14px] hover:opacity-80 transition-opacity">
                  a.lomitha@gmail.com
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="p-8 md:p-16 lg:p-24 bg-bg-light flex flex-col justify-center gap-6">
            <div className="w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] bg-bg-light border border-border-light rounded-xl flex items-end relative overflow-hidden group">
              <img 
                src={`${import.meta.env.BASE_URL}hero.jpg`}
                alt="Lomitha Wickramarachchi"
                className="w-full h-full object-cover object-[center_50%]"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <FadeIn delay={100}>
                <div className="bg-bg-light border border-border-light rounded-xl p-4 flex flex-col justify-center items-center text-center hover:bg-black/20 transition-colors h-full">
                  <div className="text-[14px] font-medium">VESI</div>
                  <div className="text-[12px] text-text-grey">Trained</div>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="bg-bg-light border border-border-light rounded-xl p-4 flex flex-col justify-center items-center text-center hover:bg-black/20 transition-colors h-full">
                  <div className="text-[14px] font-medium">ESI</div>
                  <div className="text-[12px] text-text-grey">Worker</div>
                </div>
              </FadeIn>
              <FadeIn delay={300}>
                <div className="bg-bg-light border border-border-light rounded-xl p-4 flex flex-col justify-center items-center text-center hover:bg-black/20 transition-colors h-full">
                  <div className="text-[14px] font-medium"><AnimatedCounter end={100} duration={1500} suffix="+" /></div>
                  <div className="text-[12px] text-text-grey">Volunteer hrs</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Research Experience Section */}
        <section id="research" className="p-8 md:p-16 lg:p-24 border-b border-border-light">
          <FadeIn delay={0} direction="up">
            <div className="flex items-baseline gap-4 mb-12">
              <h2 className="font-serif text-[28px]">Research experience</h2>
              <span className="text-text-grey text-[14px]">Siemens Energy Hub, Swinburne</span>
            </div>
          </FadeIn>

          <FadeIn delay={0} direction="up">
          <Link to="/project/fimer-native-inverter" className="grid grid-cols-1 lg:grid-cols-2 border border-border-light rounded-xl overflow-hidden hover:bg-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group cursor-pointer">
            <div className="p-8 md:p-12 bg-bg-light group-hover:bg-transparent transition-colors flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="bg-accent-blue-bg text-accent-blue-text px-3 py-1 rounded-full text-[12px] font-medium w-fit">
                  Research Assistant · Industry project
                </div>
                <div className="bg-accent-green-bg text-accent-green-text px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold w-fit">
                  May 2026 to present
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-4 group-hover:text-accent-blue-text transition-colors">Native PSCAD Model of a FIMER Central Solar Inverter</h3>
              <p className="text-[14px] text-text-grey leading-relaxed mb-8">
                FIMER's inverter control only runs in PSCAD as a sealed, compiled DLL. I led the team's work to replace it with a fully native PSCAD and Fortran model that drops into FIMER's own test case and reproduces their results through faults, voltage swells, phase jumps and frequency events.
              </p>
              <div className="flex flex-wrap gap-2">
                {['PSCAD/EMTDC', 'Fortran', 'MATLAB/Simulink', 'Python', 'Fault ride-through', 'Grid connection', 'Model validation'].map(tag => (
                  <span key={tag} className="px-3 py-1 border border-border-light rounded-full text-[12px] text-text-grey bg-bg-light">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="h-64 lg:h-auto bg-[#141414] lg:border-l border-border-light overflow-hidden relative flex items-center">
              <img src={`${import.meta.env.BASE_URL}hub-dll-to-native.svg`} alt="Replacing a sealed DLL with a native PSCAD model" className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105" />
            </div>
          </Link>
          </FadeIn>
        </section>

        {/* Projects Section */}
        <section id="projects" className="p-8 md:p-16 lg:p-24 border-b border-border-light">
          <FadeIn delay={0} direction="up">
            <div className="flex items-baseline gap-4 mb-12">
              <h2 className="font-serif text-[28px]">Projects</h2>
              <span className="text-text-grey text-[14px]">4 projects</span>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-6">
            {/* Featured Project */}
            <FadeIn delay={0} direction="up">
            <Link to="/project/capstone-2025" className="grid grid-cols-1 lg:grid-cols-2 border border-border-light rounded-xl overflow-hidden hover:bg-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group cursor-pointer">
              <div className="p-8 md:p-12 bg-bg-light group-hover:bg-transparent transition-colors flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent-amber-bg text-accent-amber-text px-3 py-1 rounded-full text-[12px] font-medium w-fit">
                    ★ Capstone · EEE40005
                  </div>
                  <div className="bg-accent-green-bg text-accent-green-text px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold w-fit">
                    IEEE ICEI 2026
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-4 group-hover:text-accent-amber-text transition-colors">Active Filtering and Autonomous V2G Dispatch for EV Fast Charging Sites</h3>
                <p className="text-[14px] text-text-grey leading-relaxed mb-8">
                  My final year capstone, now written up as a journal paper. A bidirectional EV charger and a shunt active power filter share a 400 V connection with a 29 kW rectifier load, and a fuzzy energy management system switches the charger into V2G during voltage sags using only local voltage and battery charge. The filter cut grid current distortion from 15.4 % to 2.75 % TDD, inside the IEEE Std 519 limit, in both power flow directions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['MATLAB/Simulink', 'Simscape Electrical', 'V2G', 'Active power filter', 'Fuzzy control', 'SRF-PLL', 'IEEE Std 519'].map(tag => (
                    <span key={tag} className="px-3 py-1 border border-border-light rounded-full text-[12px] text-text-grey bg-bg-light">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-64 lg:h-auto bg-bg-light lg:border-l border-border-light overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}capstone-site-diagram.png`} alt="Single line diagram of the charging site" className="w-full h-full object-contain bg-white p-4 transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>
            </Link>
            </FadeIn>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 2: Railway */}
              <FadeIn delay={100} direction="up">
              <Link to="/project/railway-crossing" className="border border-border-light rounded-xl overflow-hidden bg-bg-light hover:bg-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col group cursor-pointer h-full">
                <div className="h-48 overflow-hidden relative border-b border-border-light">
                  <img src={`${import.meta.env.BASE_URL}railway-labview-true-true.jpg`} alt="Railway Crossing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="inline-block bg-accent-purple-bg text-accent-purple-text px-3 py-1 rounded-full text-[12px] font-medium mb-6 w-fit">
                    Team project · ENG20010
                  </div>
                  <h3 className="font-serif text-xl mb-3 group-hover:text-accent-purple-text transition-colors">Sensor Controlled Railway Level Crossing System</h3>
                  <p className="text-[14px] text-text-grey leading-relaxed mb-6 flex-grow">
                    I worked with a team to build a functional scale model of an automated railway crossing. We used infrared sensors and servo motors to simulate real world traffic scenarios, all controlled through a LabVIEW program.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {['NI LabVIEW', 'IR sensors', 'Servo motors', 'DAQ', 'Embedded systems'].map(tag => (
                      <span key={tag} className="px-3 py-1 border border-border-light rounded-full text-[12px] text-text-grey bg-bg-light">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              </FadeIn>

              {/* Project 3: MQTT */}
              <FadeIn delay={200} direction="up">
              <Link to="/project/mqtt-monitoring" className="border border-border-light rounded-xl overflow-hidden bg-bg-light hover:bg-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col group cursor-pointer h-full">
                <div className="h-48 overflow-hidden relative border-b border-border-light">
                  <img src={`${import.meta.env.BASE_URL}mqtt-realtime-graph.jpg`} alt="Data Dashboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="inline-block bg-accent-blue-bg text-accent-blue-text px-3 py-1 rounded-full text-[12px] font-medium mb-6 w-fit">
                    IoT &amp; Networking · TNE20003
                  </div>
                  <h3 className="font-serif text-xl mb-3 group-hover:text-accent-blue-text transition-colors">MQTT Real Time Sensor Monitoring System</h3>
                  <p className="text-[14px] text-text-grey leading-relaxed mb-6 flex-grow">
                    I built a complete IoT monitoring system using Python and the MQTT protocol. The system simulates sensor data and displays it on a real time dashboard, allowing for remote monitoring and control.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {['Python', 'MQTT', 'Paho', 'Matplotlib', 'IoT', 'Networking'].map(tag => (
                      <span key={tag} className="px-3 py-1 border border-border-light rounded-full text-[12px] text-text-grey bg-bg-light">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              </FadeIn>

              {/* Project 4: MV Cable */}
              <FadeIn delay={300} direction="up">
              <Link to="/project/mv-cable" className="border border-border-light rounded-xl overflow-hidden bg-bg-light hover:bg-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col group cursor-pointer h-full">
                <div className="h-48 overflow-hidden relative border-b border-border-light">
                  <img src={`${import.meta.env.BASE_URL}main.jpg`} alt="MV Commissioning Field Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="inline-block bg-accent-teal-bg text-accent-teal-text px-3 py-1 rounded-full text-[12px] font-medium mb-6 w-fit">
                    Internship · ESI
                  </div>
                  <h3 className="font-serif text-xl mb-3 group-hover:text-accent-teal-text transition-colors">MV Cable Commissioning &amp; Diagnostics</h3>
                  <p className="text-[14px] text-text-grey leading-relaxed mb-6 flex-grow">
                    During my internship, I assisted senior engineers with the pre commissioning validation of medium voltage cables. This involved performing VLF testing and partial discharge analysis on live network infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {['VLF testing', 'Partial discharge', 'Tan Delta', 'AusNet', 'HV systems'].map(tag => (
                      <span key={tag} className="px-3 py-1 border border-border-light rounded-full text-[12px] text-text-grey bg-bg-light">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Skills & Credentials Section */}
        <section className="p-8 md:p-16 lg:p-24 border-b border-border-light">
          <FadeIn delay={0} direction="up">
            <h2 className="font-serif text-[28px] mb-12">Skills &amp; credentials</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <FadeIn delay={0} direction="up">
            <div className="bg-bg-light rounded-xl p-8 border border-border-light">
              <h4 className="text-[11px] uppercase tracking-wider font-medium text-text-grey mb-6">Simulation &amp; power</h4>
              <div className="flex flex-wrap gap-2">
                {['PSCAD/EMTDC', 'PSS/E', 'PSS SINCAL', 'MATLAB', 'Simulink', 'Simscape Electrical', 'Psim', 'NI LabVIEW', 'SCADA'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-bg-light border border-border-light rounded-full text-[13px]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </FadeIn>

            <FadeIn delay={100} direction="up">
            <div className="bg-bg-light rounded-xl p-8 border border-border-light">
              <h4 className="text-[11px] uppercase tracking-wider font-medium text-text-grey mb-6">Programming &amp; automation</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Fortran', 'C++', 'PSCAD automation', 'Claude Code', 'AI agents', 'Arduino', 'pandas'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-bg-light border border-border-light rounded-full text-[13px]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </FadeIn>

            <FadeIn delay={200} direction="up">
            <div className="bg-bg-light rounded-xl p-8 border border-border-light">
              <h4 className="text-[11px] uppercase tracking-wider font-medium text-text-grey mb-6">Standards &amp; testing</h4>
              <div className="flex flex-wrap gap-2">
                {['AEMO DMAT', 'IEEE Std 519', 'AS/NZS 4777.2', 'VLF testing', 'Partial discharge', 'Tan delta', 'MQTT', 'IEEE report writing'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-bg-light border border-border-light rounded-full text-[13px]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </FadeIn>
          </div>

          {/* Credentials Row */}
          <div className="flex flex-wrap gap-4">
            {['PSS/E Modules 1 & 2 completed', 'PSS SINCAL training completed', 'VESI trained', 'Active ESI worker', 'AusNet site inducted', 'Swinburne University'].map((cred, idx) => (
              <FadeIn key={cred} delay={idx * 80} direction="up">
                <div className="inline-flex items-center gap-2 bg-bg-light border border-border-light px-4 py-2 rounded-full text-[13px] hover:scale-105 transition-transform duration-200 cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green-text"></span>
                  {cred}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bg-light px-8 py-12 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
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
            href={`${import.meta.env.BASE_URL}Lomitha_Wickramarachchi_CV.pdf`} 
            download="Lomitha_Wickramarachchi_CV.pdf"
            className="bg-text-dark text-bg-light px-6 py-3 rounded-xl text-[14px] hover:opacity-90 transition-opacity"
          >
            Download CV
          </a>
        </div>
      </footer>
    </div>
  );
}
