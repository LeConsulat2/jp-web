import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ChatGPT Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                ChatGPT Document Summarizer
              </h3>
              <p className="text-gray-400 mb-4">
                Created a ChatGPT-powered application using Python, LangChain,
                and Streamlit to summarize documents and support conversational
                Q&A on uploaded files.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python', 'LangChain', 'Streamlit'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://leconsulat2-fullstack-gpt-home-yuvpqy.streamlit.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Student Aid Calculator */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Student Aid Calculator</h3>
              <p className="text-gray-400 mb-4">
                Built an income calculator for AUT Student Hub advisors using
                HTML, CSS, and JavaScript to assess financial aid eligibility.
                It reduces calculation time and improves accuracy in delivering
                the correct aid amount.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['HTML', 'CSS', 'JavaScript'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://leconsulat2.github.io/average-calculator/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Kakaotalk UI Clone */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Kakaotalk UI Clone</h3>
              <p className="text-gray-400 mb-4">
                Designed a clone of Korea's most popular messenger, Kakaotalk,
                using HTML and CSS. Focused on beautiful UI and layout to
                replicate the original design aesthetics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['HTML', 'CSS'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://leconsulat2.github.io/kakaotalk_clone_final/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Portfolio Page */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">This Portfolio Page!</h3>
              <p className="text-gray-400 mb-4">
                Designed using React Router v7, Vite, and TailwindCSS. Features
                custom sections for profile, projects, and contact, with scroll
                animations and responsive layout.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React Router v7', 'Vite', 'TailwindCSS'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://jp-page.vercel.app"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
