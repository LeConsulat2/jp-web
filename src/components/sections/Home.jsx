import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-900"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Jonathan Park
          </h1>

          <p className="text-gray-500 dark:text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
            I'm a bilingual operations and marketing specialist with 7+ years of
            experience enhancing systems, engaging stakeholders, and delivering
            data-informed strategies. With a portfolio that blends content,
            analytics, and technical tools, I bring a unique mix of creativity,
            precision, and digital fluency to every project.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="https://jp-page.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              View Portfolio
            </a>

            <a
              href="mailto:wooine2@gmail.com"
              className="border border-blue-500/50 text-blue-600 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:bg-blue-100/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
