import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
  const coreKnowledge = [
    'University Systems (AUT)',
    'CRM',
    'Arion',
    'Canvas',
    'MyAUT',
    'AUT App',
    'Student Lifecycle Operations',
  ];

  const techSkills = [
    'Excel Automation',
    'Python',
    'HTML',
    'CSS',
    'TailwindCSS',
    'React',
    'Canva',
    'Premiere Pro',
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Experienced and adaptable professional with 6+ years working
              across university administration, student advisory, and
              operational improvement. I’m skilled in aligning digital systems
              with human needs—bringing together process insight, technical
              fluency, and cross-team communication. Having worked across
              departments at AUT, I understand institutional culture, student
              needs, and how to deliver practical, tech-driven solutions that
              support both.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Core Knowledge</h3>
                <div className="flex flex-wrap gap-2">
                  {coreKnowledge.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {' '}
                🏫 Education & Qualifications{' '}
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Graduate Diploma in Computer Science </strong> –
                  Auckland University of Technology (Ongoing)
                </li>
                <li>
                  <strong>
                    {' '}
                    Bachelor of Sport and Recreation -Exercise Science 2014{' '}
                  </strong>{' '}
                  – Auckland University of Technology
                </li>
                <li>
                  <strong> NZPGA Golf Tour Professional 2014 </strong> – New
                  Zealand Professional Golfers Association
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Student Advisor / Senior Programme Administrator – AUT
                    (2018–2024)
                  </h4>
                  <p>
                    Drove enrolment, compliance, and cross-team coordination
                    across AUT. Improved student workflows and system clarity by
                    identifying service gaps and streamlining backend
                    operations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Freelance Translator & Tech Contributor – Nomad Coders (Nov
                    2024–)
                  </h4>
                  <p>
                    Translated coding lectures using Whisper AI. Delivered
                    smoother learning flow through subtitle optimization and
                    UX-focused content coordination for Korean audiences.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Golf Operations Manager – Terrace Downs Resort (2015–2017)
                  </h4>
                  <p>
                    Ran daily golf ops, events, and guest services. Led
                    promotions and kept systems up-to-date for a premium resort
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
