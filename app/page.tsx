import Link from "next/link"
import BackgroundPath from "@/components/background-path"
import ProjectCard from "@/components/project-card"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <BackgroundPath />

      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-black">
            Anish Parepalli
          </Link>
          <div className="flex gap-6">
            <Link href="#about" className="text-black hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-black hover:text-gray-600 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-black hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Intro Section */}
        <section id="about" className="mb-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            CS & Stats at UNC 
            </h1>
            <p className="text-lg text-gray-800 mb-8">
            Incoming Software Engineer Intern @ The Vanguard Group
            </p>
            <div className="flex gap-4">
              <Link
                href="#projects"
                className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                View My Projects
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20 relative z-10">
          <h2 className="text-3xl font-bold text-black mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="The Pastebin + URL Shortener"
              description="Developed a web-based Paste Bin and URL Shortener using Python and RESTful API design principles. Deployed on Kubernetes OKD, leveraging oc for cluster management. Users can shorten URLs and store text snippets."
              tags={["Python", "RESTful API", "Kubernetes", "OKD"]}
              link="https://github.com/comp423-25s/ex01-api-design-team_0_17"
            />
            <ProjectCard
              title="Personal Website for Teacher"
              description="Created a Personal Website for a Teacher using JavaScript, HTML, CSS, and Bootstrap and hosted on Github-Pages. Implemented responsive design using Bootstrap's grid system and custom media queries."
              tags={["JavaScript", "HTML", "CSS", "Bootstrap"]}
              link="https://github.com/apcodes"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative z-10">
          <h2 className="text-3xl font-bold text-black mb-8">Get In Touch</h2>
          <div className="max-w-xl">
            <p className="text-lg text-gray-800 mb-6">
              I'm always open to discussing new projects, opportunities, or collaborations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:Aparepalli@gmail.com"
                className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Email Me
              </Link>
              <Link
                href="https://linkedin.com/in/anish-parepalli"
                target="_blank"
                className="px-6 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/apcodes"
                target="_blank"
                className="px-6 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition-colors"
              >
                GitHub
              </Link>
              <a
                href="Anish_Parepalli_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Anish Parepalli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

