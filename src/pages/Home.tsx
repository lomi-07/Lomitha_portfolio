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
          <a href="#projects" className="hover:text-text-dark transition-all duration-300 hover:translate-y-[-2px] relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-text-dark transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <div className="w-[100px] md:hidden"></div> {/* Spacer to keep logo centered if needed, or just remove button */}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border-light">
          {/* Left Column */}
          <div className="p-8 md:p-16 lg:p-24 bg-bg-light md:border-r border-border-light flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-accent-green-bg text-accent-green-text px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-medium w-fit mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green-text"></span>
              Open to opportunities
            </div>
            
            <h1 className="font-serif text-5xl md:text-[52px] leading-[1.1] tracking-[-1.5px] mb-6">
              Lomitha<br />
              <span className="italic text-text-grey">Wickramarachchi</span>
            </h1>
            
            <p className="text-[14px] text-text-grey leading-relaxed max-w-md mb-10">
              I am a final year Electrical and Electronics Engineering student at Swinburne University. My studies and projects focus on power systems, renewable energy, and the latest in electric vehicle charging technology.
            </p>
            
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
          </div>

          {/* Right Column */}
          <div className="p-8 md:p-16 lg:p-24 bg-bg-light flex flex-col justify-center gap-6">
            <div className="w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] bg-bg-light border border-border-light rounded-xl flex items-end relative overflow-hidden group">
              {/* Using the user's uploaded image */}
              <img 
                src="https://i.imgur.com/Jli7cGX.jpeg" 
                alt="Lomitha Wickramarachchi" 
                className="w-full h-full object-cover object-[center_65%]"
                referrerPolicy="no-referrer"
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

        {/* Projects Section */}
        <section id="projects" className="p-8 md:p-16 lg:p-24 border-b border-border-light">
          <div className="flex items-baseline gap-4 mb-12">
            <h2 className="font-serif text-[28px]">Projects</h2>
            <span className="text-text-grey text-[14px]">4 projects</span>
          </div>

          <div className="flex flex-col gap-6">
            {/* Featured Project */}
            <Link to="/project/capstone-2025" className="grid grid-cols-1 lg:grid-cols-2 border border-border-light rounded-xl overflow-hidden hover:bg-black/20 transition-colors group cursor-pointer">
              <div className="p-8 md:p-12 bg-bg-light group-hover:bg-transparent transition-colors flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent-amber-bg text-accent-amber-text px-3 py-1 rounded-full text-[12px] font-medium w-fit">
                    ★ Capstone 2025 · EEE40005
                  </div>
                  <div className="bg-accent-green-bg text-accent-green-text px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold w-fit">
                    In progress
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-4 group-hover:text-accent-amber-text transition-colors">350 kW Three Phase EV Fast Charging System with V2G Integration</h3>
                <p className="text-[14px] text-text-grey leading-relaxed mb-8">
                  This is my final year capstone project where I am designing a 350 kW three phase EV fast charging system with Vehicle to Grid (V2G) capability. The system is split into three main subsystems: a grid side D-STATCOM with an LCL filter to handle harmonics, a bidirectional buck boost converter with a three phase front end, and a charger based BMS for SoC and SoH estimation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['MATLAB/Simulink', 'V2G', 'D-STATCOM', 'BMS', 'LCL filter', 'Power electronics', 'DQ transformation'].map(tag => (
                    <span key={tag} className="px-3 py-1 border border-border-light rounded-full text-[12px] text-text-grey bg-bg-light">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-64 lg:h-auto bg-bg-light lg:border-l border-border-light overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}capstone-1.png`} alt="EV Charging Station" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>
            </Link>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 2: Railway */}
              <Link to="/project/railway-crossing" className="border border-border-light rounded-xl overflow-hidden bg-bg-light hover:bg-black/20 transition-colors flex flex-col group cursor-pointer">
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

              {/* Project 3: MQTT */}
              <Link to="/project/mqtt-monitoring" className="border border-border-light rounded-xl overflow-hidden bg-bg-light hover:bg-black/20 transition-colors flex flex-col group cursor-pointer">
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

              {/* Project 4: MV Cable */}
              <Link to="/project/mv-cable" className="border border-border-light rounded-xl overflow-hidden bg-bg-light hover:bg-black/20 transition-colors flex flex-col group cursor-pointer">
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
            </div>
          </div>
        </section>

        {/* Skills & Credentials Section */}
        <section className="p-8 md:p-16 lg:p-24 border-b border-border-light">
          <h2 className="font-serif text-[28px] mb-12">Skills &amp; credentials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Box 1 */}
            <div className="bg-bg-light rounded-xl p-8 border border-border-light">
              <h4 className="text-[11px] uppercase tracking-wider font-medium text-text-grey mb-6">Simulation &amp; power</h4>
              <div className="flex flex-wrap gap-2">
                {['MATLAB', 'Simulink', 'Simscape', 'Psim', 'NI LabVIEW', 'SCADA'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-bg-light border border-border-light rounded-full text-[13px]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-bg-light rounded-xl p-8 border border-border-light">
              <h4 className="text-[11px] uppercase tracking-wider font-medium text-text-grey mb-6">Programming</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'Arduino', 'PyTorch', 'scikit learn', 'pandas'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-bg-light border border-border-light rounded-full text-[13px]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-bg-light rounded-xl p-8 border border-border-light">
              <h4 className="text-[11px] uppercase tracking-wider font-medium text-text-grey mb-6">Protocols &amp; tools</h4>
              <div className="flex flex-wrap gap-2">
                {['MQTT', 'TCP/UDP', 'IEEE report writing', 'Excel', 'VLF testing'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-bg-light border border-border-light rounded-full text-[13px]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Credentials Row */}
          <div className="flex flex-wrap gap-4">
            {['VESI trained', 'Active ESI worker', 'AusNet site inducted', 'Swinburne University'].map(cred => (
              <div key={cred} className="inline-flex items-center gap-2 bg-bg-light border border-border-light px-4 py-2 rounded-full text-[13px]">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green-text"></span>
                {cred}
              </div>
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
            href={`${import.meta.env.BASE_URL}cv-lomitha.pdf`} 
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
