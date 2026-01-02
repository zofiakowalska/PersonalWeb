import React, { useState, useEffect } from 'react';
import { Linkedin, Home, User, GraduationCap, Briefcase, Code, BookOpen, Award, FileText, Mail } from 'lucide-react';

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', title: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'about', title: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'education', title: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'experience', title: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'skills', title: 'Skills', icon: <Code className="w-4 h-4" /> },
    { id: 'academic-works', title: 'Academic Works', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'leadership', title: 'Leadership Initiatives', icon: <Award className="w-4 h-4" /> },
    { id: 'cv', title: 'CV', icon: <FileText className="w-4 h-4" /> },
    { id: 'contact', title: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg px-2 py-2 flex items-center gap-1 border border-gray-200">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {section.icon}
              <span className="hidden sm:inline">{section.title}</span>
            </button>
          ))}
        </div>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/90 backdrop-blur-md rounded-full shadow-lg p-3 text-blue-600 hover:text-blue-700 hover:bg-white transition-all border border-gray-200"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-5xl font-bold mx-auto mb-8 shadow-xl">
            YN
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Your Name</h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8">Job Title / Academic Position</p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Welcome to my personal website. Scroll down to learn more about my background, experience, and work.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
            <div className="prose max-w-none text-gray-700 space-y-4 text-lg">
              <p>
                Welcome! I'm a [your field] professional with expertise in [key areas]. 
                My work focuses on [main research/work interests].
              </p>
              <p>
                Replace this text with your professional biography. Include your background, 
                current role, research interests, and what drives your work.
              </p>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Research Interests</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Research Area 1</li>
                <li>Research Area 2</li>
                <li>Research Area 3</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Education</h2>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Degree Name</h3>
                    <p className="text-lg text-gray-600">University Name</p>
                  </div>
                  <span className="text-gray-500 font-medium">Graduation Year</span>
                </div>
                <p className="text-gray-700">
                  Field of study, thesis title (if applicable), advisor, honors, or other relevant details.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Professional Experience</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Position Title</h3>
                    <p className="text-lg text-gray-600">Organization Name</p>
                  </div>
                  <span className="text-gray-500 font-medium">Start - End Date</span>
                </div>
                <p className="text-gray-700">
                  Describe your responsibilities, achievements, and key projects in this role. 
                  Highlight measurable impacts and important contributions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Skills</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Skill Category 1', 'Skill Category 2', 'Skill Category 3'].map((category, i) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{category}</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Skill 1</li>
                    <li>• Skill 2</li>
                    <li>• Skill 3</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Works Section */}
      <section id="academic-works" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Academic Works</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  "Publication Title Goes Here"
                </h3>
                <p className="text-gray-600 mb-3">
                  Author Names (Year). <em>Journal/Conference Name</em>, Volume(Issue), pages.
                </p>
                <p className="text-gray-700 mb-4">
                  Brief description of the publication and its key findings or contributions.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  View Publication →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Initiatives Section */}
      <section id="leadership" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Leadership Initiatives</h2>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Leadership Role / Initiative</h3>
                    <p className="text-lg text-gray-600">Organization / Group</p>
                  </div>
                  <span className="text-gray-500 font-medium">Date Range</span>
                </div>
                <p className="text-gray-700">
                  Describe your leadership role, initiatives you led, impact made, and key achievements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Curriculum Vitae</h2>
            <p className="text-lg text-gray-700 mb-8">
              Download my complete CV to view my full academic and professional background.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              Download CV (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-center gap-4 justify-center">
                <Mail className="w-6 h-6 text-gray-600" />
                <a href="mailto:your.email@example.com" className="text-lg text-gray-700 hover:text-blue-600 transition">
                  your.email@example.com
                </a>
              </div>
              <p className="text-center text-gray-600 mt-8">
                Feel free to reach out for collaborations, questions, or opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
