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
              <img src="/photo.jpg" alt="Mahmoud Elwazeer" className="rounded-full w-48 h-48 mx-auto object-cover shadow-lg" />
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
            {/* <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Task Management Api</h3>
                <p className="text-gray-600 mb-4">The Task Management API is a scalable, event-driven, and high-performance backend service.</p>
                <p className="text-gray-600 mb-4"> Technologies: Node.js, TypeScript, Express, MongoDB, Redis, BullMQ, and RabbitMQ,  all orchestrated with Docker. Also assisted in setting up CI/CD using GitHub Actions.</p>
                <a href="https://github.com/Mahmoud-Elwazeer/Task_Management_API" target="_blank" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div> */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-Commerce API</h3>
                <p className="text-gray-600 mb-4"> This E-commerce API is built using Django and Django REST Framework (DRF).</p>
                <p className="text-gray-600 mb-4"> Technologies: Python, Django, MySQL.</p>
                <a href="https://github.com/Mahmoud-Elwazeer/Django-app"  target="_blank" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Company Management System</h3>
                <p className="text-gray-600 mb-4">A system for managing companies, departments, employees, and projects with a workflow for employee performance reviews.</p>
                <p className="text-gray-600 mb-4"> Technologies: Python, Frappe, MySQL.</p>
                <a href="https://github.com/Mahmoud-Elwazeer/company_management_system"  target="_blank" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Financial-Instruments</h3>
                <p className="text-gray-600 mb-4">Full-stack web application  designed to manage, and visualize market data efficiently</p>
                <p className="text-gray-600 mb-4">Technologies: React, Node.js, Express, MongoDB, and Redis, all orchestrated with Docker. Also assisted in setting up CI/CD using GitHub Actions.</p>
                <a href="https://github.com/Mahmoud-Elwazeer/financial-instruments" target="_blank" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Social Media API</h3>
                <p className="text-gray-600 mb-4">Technologies: Node js, Express, MongoDB</p>
                <a href="https://github.com/Mahmoud-Elwazeer/Social-Media-Dashboard" target="_blank" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">GitStore</h3>
                <p className="text-gray-600 mb-4">Full-stack web application For E-Commerce</p>
                <p className="text-gray-600 mb-4">Technologies: Python, Flask, Javascript, Bootstrap </p>
                <a href="https://github.com/Mahmoud-Elwazeer/GitStore" target="_blank" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AirBnB Clone</h3>
                <p className="text-gray-600 mb-4">Full-stack web application For AirBnB Clone</p>
                <p className="text-gray-600 mb-4">Technologies: Python, Flask, HTML,CSS, Javascript </p>
                <a href="https://github.com/Mahmoud-Elwazeer/AirBnB_clone_v4" target="_blank" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dockerized Application Development</h3>
                <p className="text-gray-600 mb-4">This repository includes examples, configurations, and best practices for building, deploying, and managing applications in Docker containers.</p>
                <p className="text-gray-600 mb-4">Technologies: Docker, Bash scripting, System Monitoring, Grafana, Web Applications, Nginx, DevOps</p>
                <a href="https://github.com/Mahmoud-Elwazeer/Developing_APPS_Docker" target="_blank" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Linux Administration and Devops Projects</h3>
                <p className="text-gray-600 mb-4">This repository covers a wide range of topics, including shell scripting, Linux system administration, networking, and DevOps practices.</p>
                <p className="text-gray-600 mb-4">Technologies: Docker, Bash scripting, Networking, Nginx, DevOps</p>
                <a href="https://github.com/Mahmoud-Elwazeer/alx-system_engineering-devops" target="_blank" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Linux Shell</h3>
                <p className="text-gray-600 mb-4">Implemented my own shell in C using system call and avoiding standard library.</p>
                <a href="https://github.com/Mahmoud-Elwazeer/simple_shell" target="_blank" className="text-blue-600 hover:text-blue-800">View Project →</a>
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
                <li> <a href="https://career.usamif.com/" target="_blank" className="text-blue-600 hover:text-blue-800">Career Platform </a>  Job portal & CV Builder</li>
                <li> <a href="https://freelancing.usamif.com/" target="_blank" className="text-blue-600 hover:text-blue-800"> Freelancing Platform </a></li>
                <li> <a href="https://www.3akl-books.store/" target="_blank" className="text-blue-600 hover:text-blue-800"> Bookstore</a> An e-commerce platform for purchasing books.</li>
                <li>Designed and implemented REST API backend applications from the ground up to meet the startup business requirements using Node.js and Python</li>
                <li>
                  Built a scalable and secure backend infrastructure on AWS (RDS, EC2) to support high traffic,
                  ensuring optimal performance,
                </li>
                <li>
                Secure data transmission with HTTPS/SSL, and protection against
                excessive requests through rate limiting.
                </li>
                <li>setting up CI/CD using Github Actions</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Backend Engineering Intern, KeenSight - US (Remote)</h3>
              <p className="text-gray-600 mb-2">Oct. 2024 – Jan. 2025</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Designed and implemented a REST API backend solutions </li> 
                <li> Integrated with Photopea to facilitate advanced image processing
                workflows, including mockup automation by inserting images into PSD templates.</li>
                <li>Supported batch operations with automated tasks such as resizing, cropping, grayscale conversion, adding borders, watermarking, inverting colors, and more.</li>
                <li>integrated with social media, enabling automated posting to platforms such
                as Facebook, Instagram, Twitter, Reddit, TikTok, YouTube Shorts, and Bluesky.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Software Engineer Intern, ALX SE (Remote)</h3>
              <p className="text-gray-600 mb-2">Feb. 2023 – April 2024</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Implemented several algorithms as well as improved my problem-solving skills by a great amount and applied said skills in several
                projects</li> 
                <li>Managed infrastructure, deploying apps to servers using tools like Fabric, and Datadog for monitoring.</li>
                <li>Hosted applications using Nginx as the web server, with Gunicorn as the application server for Python and PM2 for Node.js apps.</li>
                <li> <a href="https://drive.google.com/file/d/1l2AzJBZZWD0vOCCq2IuvQnPndZMZgrUH/view?usp=sharing" target="_blank" className="text-blue-600 hover:text-blue-800"> ALX-Software-Engineering-Curriculum</a>.</li>
                <li> <a href="https://drive.google.com/file/d/1iklqS359Mob0N530O7OzXev4cis-dGzu/view?usp=sharing" target="_blank" className="text-blue-600 hover:text-blue-800"> Transcript</a>.</li>
                <li> <a href="https://intranet.alxswe.com/certificates/6yzN3BRFfp" target="_blank" className="text-blue-600 hover:text-blue-800"> Certification</a>.</li>
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