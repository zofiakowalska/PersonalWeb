import React, { useState } from 'react';
import { Mail, Linkedin, Github, BookOpen, Briefcase, Award, FileText } from 'lucide-react';

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = {
    about: {
      title: 'About Me',
      icon: <BookOpen className="w-5 h-5" />
    },
    experience: {
      title: 'Experience',
      icon: <Briefcase className="w-5 h-5" />
    },
    education: {
      title: 'Education',
      icon: <Award className="w-5 h-5" />
    },
    publications: {
      title: 'Publications',
      icon: <FileText className="w-5 h-5" />
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              YN
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900">Your Name</h1>
              <p className="text-xl text-gray-600 mt-2">Job Title / Academic Position</p>
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 transition">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition whitespace-nowrap ${
                  activeSection === key
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {section.icon}
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {activeSection === 'about' && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Welcome! I'm a [your field] professional with expertise in [key areas]. 
                My work focuses on [main research/work interests].
              </p>
              <p>
                Replace this text with your professional biography. Include your background, 
                current role, research interests, and what drives your work.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Research Interests</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Research Area 1</li>
                <li>Research Area 2</li>
                <li>Research Area 3</li>
              </ul>
            </div>
          </div>
        )}

        {activeSection === 'experience' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Experience</h2>
            
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
        )}

        {activeSection === 'education' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
            
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
        )}

        {activeSection === 'publications' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Publications & Research</h2>
            
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
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-600">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
