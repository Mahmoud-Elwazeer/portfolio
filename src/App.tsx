import { Terminal, Server, Database, Code2, Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Mahmoud Elwazeer</h1>
              <h2 className="text-xl text-gray-600 mb-6">Backend Developer | DevOps Engineer | Linux Administrator</h2>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/Mahmoud-Elwazeer" className="text-gray-600 hover:text-gray-900">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/mahmoud-elwazeer/" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:mahmoud.m.elwazeer@gmail.com" className="text-gray-600 hover:text-gray-900">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img src="./photo.jpg" alt="Mahmoud Elwazeer" className="rounded-full w-48 h-48 mx-auto object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <Code2 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                <p className="text-gray-600">Python (Flask, Django, FastAPI, Frappe), Node.js (Express), RESTful APIs, Sockets and Unit Testing</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <Database className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Databases</h3>
              <p className="text-gray-600">MySQL, PostgreSQL, MongoDB, Redis (caching), and database optimization</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <Terminal className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Linux Administration</h3>
              <p className="text-gray-600">Expert in Linux system administration, shell scripting, and system optimization</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <Server className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">DevOps</h3>
              <p className="text-gray-600">Docker, CI/CD, Ansible, Terraform, AWS, and infrastructure automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Simple Shell</h3>
                <p className="text-gray-600 mb-4">A custom shell implementation in C, supporting basic commands and pipeline operations</p>
                <a href="https://github.com/Mahmoud-Elwazeer/simple_shell" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AirBnB Clone</h3>
                <p className="text-gray-600 mb-4">Full-stack web application clone of AirBnB with Python backend and RESTful API</p>
                <a href="https://github.com/Mahmoud-Elwazeer/AirBnB_clone_v2" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">GitStore</h3>
                <p className="text-gray-600 mb-4">Version control system implementation with basic Git functionality</p>
                <a href="https://github.com/Mahmoud-Elwazeer/GitStore" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Professional Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Backend Developer (Freelancer)</h3>
              <p className="text-gray-600 mb-2">Aug. 2024 - Present</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Career Platform <a href="https://career.usamif.com/" target="_blank" className="format"> USAM </a> Job portal & CV Builder</li>
                <li>Developed and maintained RESTful APIs using Node.js and Express</li>
                <li>Implemented database solutions using MySQL and MongoDB</li>
                <li>Collaborated with frontend developers to integrate API endpoints</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">DevOps Engineer</h3>
              <p className="text-gray-600 mb-2">3akl Books | 2023</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Set up and maintained CI/CD pipelines</li>
                <li>Managed Docker containers and orchestration</li>
                <li>Implemented monitoring and logging solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-8">I'm always interested in hearing about new projects and opportunities.</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:mahmoud.m.elwazeer@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Send me an email
              </a>
              <a href="https://www.linkedin.com/in/mahmoud-elwazeer/" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                Connect on LinkedIn
              </a>
              <a href="https://github.com/Mahmoud-Elwazeer/" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                GitHub is Here
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Mahmoud Elwazeer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;