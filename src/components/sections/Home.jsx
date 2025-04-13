import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-white dark:bg-black text-black dark:text-white"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent leading-tight">
            Jonathan Park
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Detail-oriented professional with over 7 years of experience in
            university administration and advisory roles. I understand the
            balance between student expectations and staff operations, and I
            deliver solutions that are both technically sound and culturally
            aware. With strong skills in streamlining workflows, CRM systems,
            Python-based automation, and analytics, I focus on practical
            improvements that respect institutional processes while driving
            innovative outcomes. I also have experience using design tools such
            as Canva and Premiere Pro to support communication and content
            delivery.{' '}
            <strong>Feel free to go to Projects page for more!</strong>
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="https://jp-page.vercel.app/projects/1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              View Analytics Portfolio
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-600 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:bg-blue-100/10 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
