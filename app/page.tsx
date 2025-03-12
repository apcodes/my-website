import Link from "next/link"
import ProjectCard from "@/components/project-card"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">

      <header className="text-center">
        <h1 className="text-5xl font-bold">Anish Parepalli</h1>
        <p className="mt-2 text-xl text-gray-600">
          CS & Stats @ UNC Chapel Hill
        </p>
        <p className="mt-1 text-lg text-gray-500">
          Incoming Software Engineer Intern @ The Vanguard Group
        </p>
      </header>

      <main className="container mx-auto px-4 py-12">
      <section className="mb-20 relative z-10">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="photo.jpg"
            alt="Anish Parepalli"
            className="rounded-full w-40 h-40 object-cover"
          />
          <p className="text-gray-800 leading-relaxed">
            Hi! I'm Anish Parepalli, a 3rd year at UNC.  I’m a junior at the University of North Carolina at Chapel Hill double majoring in Computer Science (B.S.) and Statistics and Analytics (B.S.).
            My interests are in software engineering, data science, and solving challenging problems. Outside of tech, I'm an avid Tottenham Hotspur fan ⚽️ and hold a First Degree Black Belt in Taekwondo 🥋.
          </p>
        </div>
      </section>


        {/* Projects Section */}
        <section id="projects" className="mb-20 relative z-10">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="The Pastebin + URL Shortener"
              description="Developed a web-based Paste Bin and URL Shortener using Python and RESTful API design principles. Deployed on Kubernetes OKD, leveraging oc for cluster management. Users can shorten URLs and store text snippets."
              tags={["Python", "RESTful API", "Kubernetes", "OKD"]}
              link="https://ex01-comp590-140-25sp-anishpa.apps.unc.edu/docs"
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
          <h2 className="text-3xl font-bold text-black mb-4">Get In Touch</h2>
          <div className="space-x-4 mt-3">
            <p className="text-lg text-gray-800 mb-6">
             I am always open to discussing new projects, opportunities, or collaborations.

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
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Anish Parepalli. All rights reserved.</p>
        </div>
        <blockquote className="italic font-light text-center">
          "I'm always hungry. I can be better always." — Son Heung-min
        </blockquote>
      </footer>
    </div>
  )
}

