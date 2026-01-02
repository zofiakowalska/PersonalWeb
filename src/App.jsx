import React, { useState, useEffect } from 'react';
import { Home, User, GraduationCap, Briefcase, Code, BookOpen, Award, FileText, Mail } from 'lucide-react';

// LinkedIn Logo SVG Component
const LinkedInLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

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
    <div className="min-h-screen" style={{
      backgroundColor: '#5a4a7a',
      backgroundImage: `
        radial-gradient(circle at 20% 30%, rgba(140, 125, 180, 0.9) 0%, rgba(140, 125, 180, 0.4) 30%, transparent 60%),
        radial-gradient(circle at 80% 70%, rgba(100, 85, 140, 0.8) 0%, rgba(100, 85, 140, 0.3) 35%, transparent 65%),
        radial-gradient(circle at 50% 85%, rgba(90, 75, 120, 0.7) 0%, rgba(90, 75, 120, 0.2) 40%, transparent 70%),
        radial-gradient(circle at 75% 15%, rgba(150, 135, 190, 0.85) 0%, rgba(150, 135, 190, 0.3) 25%, transparent 55%),
        radial-gradient(circle at 10% 60%, rgba(80, 65, 110, 0.6) 0%, transparent 50%),
        radial-gradient(circle at 90% 40%, rgba(120, 105, 160, 0.75) 0%, transparent 45%),
        linear-gradient(135deg, #4a3a6a 0%, #5a4a7a 20%, #6c5b92 40%, #7a6ba0 50%, #6c5b92 60%, #5a4a7a 80%, #4a3a6a 100%)
      `,
      backgroundAttachment: 'fixed',
      backgroundSize: '100% 100%'
    }}>
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg px-2 py-2 flex items-center gap-1" style={{ border: '1px solid #1d1f2b' }}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === section.id
                  ? 'text-white shadow-md'
                  : 'hover:bg-opacity-10'
              }`}
              style={activeSection === section.id 
                ? { backgroundColor: '#1d1f2b', color: '#ffffff' }
                : { color: '#1d1f2b' }
              }
              onMouseEnter={(e) => {
                if (activeSection !== section.id) {
                  e.currentTarget.style.backgroundColor = 'rgba(29, 31, 43, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== section.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {section.icon}
              <span className="hidden sm:inline">{section.title}</span>
            </button>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/zofia-kowalska-50944a222"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/90 backdrop-blur-md rounded-full shadow-lg px-4 py-2.5 hover:bg-white transition-all flex items-center gap-2 font-medium"
          style={{ border: '1px solid #1d1f2b', color: '#0077b5' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#005885';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#0077b5';
          }}
          aria-label="LinkedIn"
        >
          <LinkedInLogo className="w-5 h-5" />
          <span className="text-sm font-semibold">LinkedIn</span>
        </a>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#1d1f2b' }}>Zofia Kowalska</h1>
          <p className="text-2xl md:text-3xl mb-8" style={{ color: '#1d1f2b' }}>Job Title / Academic Position</p>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#1d1f2b' }}>
            Welcome to my personal website. Scroll down to learn more about my background, experience, and work.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="rounded-lg shadow-md p-8 md:p-12" style={{ backgroundColor: '#715ca3' }}>
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#1d1f2b' }}>About Me</h2>
            <div className="prose max-w-none space-y-4 text-lg" style={{ color: '#1d1f2b' }}>
              <p>
                Welcome! I'm a [your field] professional with expertise in [key areas]. 
                My work focuses on [main research/work interests].
              </p>
              <p>
                Replace this text with your professional biography. Include your background, 
                current role, research interests, and what drives your work.
              </p>
              <h3 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#1d1f2b' }}>Research Interests</h3>
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
          <h2 className="text-4xl font-bold mb-12" style={{ color: '#1d1f2b' }}>Education</h2>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-lg shadow-md p-8" style={{ backgroundColor: '#715ca3' }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: '#1d1f2b' }}>Degree Name</h3>
                    <p className="text-lg" style={{ color: '#1d1f2b' }}>University Name</p>
                  </div>
                  <span className="font-medium" style={{ color: '#1d1f2b' }}>Graduation Year</span>
                </div>
                <p style={{ color: '#1d1f2b' }}>
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
          <h2 className="text-4xl font-bold mb-12" style={{ color: '#1d1f2b' }}>Professional Experience</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg shadow-md p-8" style={{ backgroundColor: '#715ca3' }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: '#1d1f2b' }}>Position Title</h3>
                    <p className="text-lg" style={{ color: '#1d1f2b' }}>Organization Name</p>
                  </div>
                  <span className="font-medium" style={{ color: '#1d1f2b' }}>Start - End Date</span>
                </div>
                <p style={{ color: '#1d1f2b' }}>
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
          <h2 className="text-4xl font-bold mb-12" style={{ color: '#1d1f2b' }}>Skills</h2>
          <div className="rounded-lg shadow-md p-8" style={{ backgroundColor: '#715ca3' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Skill Category 1', 'Skill Category 2', 'Skill Category 3'].map((category, i) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#1d1f2b' }}>{category}</h3>
                  <ul className="space-y-2" style={{ color: '#1d1f2b' }}>
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
          <h2 className="text-4xl font-bold mb-12" style={{ color: '#1d1f2b' }}>Academic Works</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg shadow-md p-8" style={{ backgroundColor: '#715ca3' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1d1f2b' }}>
                  "Publication Title Goes Here"
                </h3>
                <p className="mb-3" style={{ color: '#1d1f2b' }}>
                  Author Names (Year). <em>Journal/Conference Name</em>, Volume(Issue), pages.
                </p>
                <p className="mb-4" style={{ color: '#1d1f2b' }}>
                  Brief description of the publication and its key findings or contributions.
                </p>
                <a href="#" className="font-medium" style={{ color: '#1d1f2b' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#938eb8'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#1d1f2b'}>
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
          <h2 className="text-4xl font-bold mb-12" style={{ color: '#1d1f2b' }}>Leadership Initiatives</h2>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-lg shadow-md p-8" style={{ backgroundColor: '#715ca3' }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: '#1d1f2b' }}>Leadership Role / Initiative</h3>
                    <p className="text-lg" style={{ color: '#1d1f2b' }}>Organization / Group</p>
                  </div>
                  <span className="font-medium" style={{ color: '#1d1f2b' }}>Date Range</span>
                </div>
                <p style={{ color: '#1d1f2b' }}>
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
          <div className="rounded-lg shadow-md p-8 md:p-12 text-center" style={{ backgroundColor: '#715ca3' }}>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1d1f2b' }}>Curriculum Vitae</h2>
            <p className="text-lg mb-8" style={{ color: '#1d1f2b' }}>
              Download my complete CV to view my full academic and professional background.
            </p>
            <a
              href="#"
              className="inline-block text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md"
              style={{ backgroundColor: '#1d1f2b' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#938eb8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1d1f2b'}
            >
              Download CV (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="rounded-lg shadow-md p-8 md:p-12" style={{ backgroundColor: '#715ca3' }}>
            <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#1d1f2b' }}>Get In Touch</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-center gap-4 justify-center">
                <Mail className="w-6 h-6" style={{ color: '#1d1f2b' }} />
                <a href="mailto:your.email@example.com" className="text-lg transition" style={{ color: '#1d1f2b' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#938eb8'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#1d1f2b'}>
                  your.email@example.com
                </a>
              </div>
              <p className="text-center mt-8" style={{ color: '#1d1f2b' }}>
                Feel free to reach out for collaborations, questions, or opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8" style={{ backgroundColor: '#1d1f2b', borderTop: '1px solid #1d1f2b' }}>
        <div className="max-w-6xl mx-auto px-6 text-center" style={{ color: '#938eb8' }}>
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
