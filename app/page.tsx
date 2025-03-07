'use client';

import { AnimatedSection } from './components/AnimatedSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ranjith Peram</h1>
            <p className="text-xl mb-8">Full Stack Developer</p>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="mailto:ranjithperam@my.unt.edu" className="hover:text-blue-200">ranjithperam@my.unt.edu</a>
              <a href="https://www.linkedin.com/in/peram-ranjith-872aa820a" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">LinkedIn</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              Recent Software Engineer with a foundation in full-stack development and a Master&apos;s in Computer Science. Contributed to developing software solutions with a focus on HTML, CSS, and JavaScript. Proven data analysis expertise using MS Excel to produce clear and insightful reports. Seeks to leverage problem-solving capabilities and collaborative experience in completing development projects as a Software Engineer Intern.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <AnimatedSection
              animation="slideLeft"
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold">University of North Texas</h3>
              <p className="text-gray-600">Master of Science, Computer Science</p>
              <p className="text-gray-600">Aug 2023 - May 2025</p>
              <p className="text-gray-700 mt-2">GPA: 3.66</p>
            </AnimatedSection>

            <AnimatedSection
              animation="slideLeft"
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold">Swarna Bharathi Institute of science & technology, Khammam</h3>
              <p className="text-gray-600">Bachelor of Technology, Electrical and Electronics Engineering</p>
              <p className="text-gray-600">Jul 2018 - May 2021</p>
              <p className="text-gray-700 mt-2">GPA: 3.07</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Capgemini Experience */}
            <AnimatedSection 
              animation="slideLeft"
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
              <p className="text-gray-600 mb-2">Capgemini Technology Services India Limited | Feb 2022 - Aug 2023</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Collaborated with cross-functional teams to design and implement application features</li>
                <li>Participated in code reviews and enhanced the quality of the codebase</li>
                <li>Contributed to the deployment of software solutions</li>
              </ul>
            </AnimatedSection>

            {/* Student Internship */}
            <AnimatedSection
              animation="slideLeft"
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">Student Intern</h3>
              <p className="text-gray-600 mb-2">Smart Bridge Educational Services | May 2019 - June 2019</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Implemented IoT project &quot;Child Tracker With Emergency Notifier&quot;</li>
                <li>Integrated diverse sensors resulting in 22% enhancement in device efficiency</li>
                <li>Developed firmware using C++ and created web interfaces for IoT devices</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection
              animation="slideUp"
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'HTML', 'CSS','MySql'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection
              animation="slideUp"
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Spring Boot', 'React', 'Node.js', 'Docker', 'Azure', 'AWS'].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <AnimatedSection
              animation="slideLeft"
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">Pet2Own</h3>
              <p className="text-gray-600 mb-4">Aug 2023 - Dec 2023</p>
              <p className="text-gray-700">
                Engineered a mobile application that revolutionized the pet adoption process by connecting pet owners and adopters.
                Used React Native for front end and Python as backend with SQLite Database.
              </p>
            </AnimatedSection>

            <AnimatedSection
              animation="slideLeft"
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">Child Tracker With Emergency Notifier</h3>
              <p className="text-gray-600 mb-4">Smart Bridge Educational Services</p>
              <p className="text-gray-700">
                IoT project using Arduino and GPS module to track location and health conditions of children.
                Implemented cloud integration with ThingSpeak for real-time monitoring.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}