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
        radial-gradient(ellipse 120% 80% at 15% 20%, rgba(155, 140, 195, 0.45) 0%, rgba(135, 120, 175, 0.25) 20%, rgba(115, 100, 155, 0.1) 40%, transparent 60%),
        radial-gradient(ellipse 100% 70% at 25% 30%, rgba(150, 135, 190, 0.42) 0%, rgba(130, 115, 170, 0.22) 18%, rgba(110, 95, 150, 0.08) 38%, transparent 58%),
        radial-gradient(ellipse 110% 75% at 10% 15%, rgba(160, 145, 200, 0.4) 0%, rgba(140, 125, 180, 0.2) 22%, rgba(120, 105, 160, 0.09) 42%, transparent 62%),
        radial-gradient(ellipse 95% 65% at 20% 25%, rgba(145, 130, 185, 0.38) 0%, rgba(125, 110, 165, 0.18) 25%, rgba(105, 90, 145, 0.07) 45%, transparent 65%),
        radial-gradient(ellipse 105% 72% at 12% 35%, rgba(148, 133, 188, 0.41) 0%, rgba(128, 113, 168, 0.21) 19%, rgba(108, 93, 148, 0.08) 39%, transparent 59%),
        radial-gradient(ellipse 85% 55% at 30% 50%, rgba(140, 125, 180, 0.32) 0%, rgba(120, 105, 160, 0.14) 28%, rgba(100, 85, 140, 0.05) 48%, transparent 68%),
        radial-gradient(ellipse 70% 50% at 50% 60%, rgba(135, 120, 175, 0.28) 0%, rgba(115, 100, 155, 0.12) 32%, rgba(95, 80, 135, 0.04) 52%, transparent 72%),
        radial-gradient(ellipse 60% 45% at 70% 75%, rgba(130, 115, 170, 0.24) 0%, rgba(110, 95, 150, 0.1) 35%, rgba(90, 75, 130, 0.03) 55%, transparent 75%),
        radial-gradient(ellipse 55% 40% at 80% 80%, rgba(125, 110, 165, 0.22) 0%, rgba(105, 90, 145, 0.09) 38%, rgba(85, 70, 125, 0.02) 58%, transparent 78%),
        radial-gradient(ellipse 50% 38% at 85% 85%, rgba(120, 105, 160, 0.2) 0%, rgba(100, 85, 140, 0.08) 40%, rgba(80, 65, 120, 0.02) 60%, transparent 80%),
        radial-gradient(ellipse 65% 48% at 75% 70%, rgba(132, 117, 172, 0.26) 0%, rgba(112, 97, 152, 0.11) 33%, rgba(92, 77, 132, 0.03) 53%, transparent 73%),
        radial-gradient(ellipse 58% 42% at 88% 78%, rgba(127, 112, 167, 0.23) 0%, rgba(107, 92, 147, 0.09) 36%, rgba(87, 72, 127, 0.02) 56%, transparent 76%),
        radial-gradient(ellipse 45% 35% at 92% 88%, rgba(118, 103, 158, 0.18) 0%, rgba(98, 83, 138, 0.07) 42%, rgba(78, 63, 118, 0.01) 62%, transparent 82%),
        linear-gradient(135deg, #5a4a7a 0%, #6c5b92 25%, #7a6ba0 50%, #6c5b92 75%, #5a4a7a 100%)
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
                ? { backgroundColor: 'rgba(29, 31, 43, 0.5)', color: '#ffffff' }
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
        <div className="max-w-5xl mx-auto w-full px-8">
          <div className="rounded-3xl shadow-md p-6 md:p-10 glass-box" style={{ minHeight: '280px', 
          backgroundColor: 'rgba(29, 31, 43, 0.5)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.1)',
        }}>
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#e8e6e3' }}>About Me</h2>
            <div className="prose max-w-none space-y-4 text-base" style={{ color: '#b8b5b0', fontSize: '0.9rem' }}>
              <p>
                Welcome! I'm a [your field] professional with expertise in [key areas]. 
                My work focuses on [main research/work interests].
              </p>
              <p>
                Replace this text with your professional biography. Include your background, 
                current role, research interests, and what drives your work.
              </p>
              <h3 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#e8e6e3' }}>Research Interests</h3>
              <ul className="list-disc list-inside space-y-2" style={{ color: '#b8b5b0', fontSize: '0.9rem' }}>
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
        <div className="max-w-5xl mx-auto w-full px-8">
          <h2 className="text-4xl font-bold mb-12" style={{ color: '#e8e6e3' }}>Education</h2>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-3xl shadow-md p-6 glass-box" style={{ minHeight: '220px', 
          backgroundColor: 'rgba(29, 31, 43, 0.5)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.1)',
        }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: '#e8e6e3' }}>Degree Name</h3>
                    <p className="text-lg" style={{ color: '#e8e6e3' }}>University Name</p>
                  </div>
                  <span className="font-medium" style={{ color: '#e8e6e3' }}>Graduation Year</span>
                </div>
                <p style={{ color: '#b8b5b0', fontSize: '0.9rem' }}>
                  Field of study, thesis title (if applicable), advisor, honors, or other relevant details.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-5xl mx-auto w-full px-8">
          <h2 className="text-4xl font-bold mb-12" style={{ color: '#e8e6e3' }}>Professional Experience</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-3xl shadow-md p-6 glass-box" style={{ minHeight: '220px', 
          backgroundColor: 'rgba(29, 31, 43, 0.5)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.1)',
        }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: '#e8e6e3' }}>Position Title</h3>
                    <p className="text-lg" style={{ color: '#e8e6e3' }}>Organization Name</p>
                  </div>
                  <span className="font-medium" style={{ color: '#e8e6e3' }}>Start - End Date</span>
                </div>
                <p style={{ color: '#b8b5b0', fontSize: '0.9rem' }}>
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
        <div className="max-w-5xl mx-auto w-full px-8">
          <h2 className="text-4xl font-bold mb-12" style={{ color: '#e8e6e3' }}>Skills</h2>
          <div className="rounded-3xl shadow-md p-6 glass-box" style={{ 
          backgroundColor: 'rgba(29, 31, 43, 0.5)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.1)',
        }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Skill Category 1', 'Skill Category 2', 'Skill Category 3'].map((category, i) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#e8e6e3' }}>{category}</h3>
                  <ul className="space-y-2" style={{ color: '#b8b5b0', fontSize: '0.9rem' }}>
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
        <div className="max-w-5xl mx-auto w-full px-8">
          <h2 className="text-4xl font-bold mb-12" style={{ color: '#e8e6e3' }}>Academic Works</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-3xl shadow-md p-6 glass-box" style={{ minHeight: '220px', 
          backgroundColor: 'rgba(29, 31, 43, 0.5)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.1)',
        }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#e8e6e3' }}>
                  "Publication Title Goes Here"
                </h3>
                <p className="mb-3" style={{ color: '#b8b5b0', fontSize: '0.9rem' }}>
                  Author Names (Year). <em>Journal/Conference Name</em>, Volume(Issue), pages.
                </p>
                <p className="mb-4" style={{ color: '#b8b5b0', fontSize: '0.9rem' }}>
                  Brief description of the publication and its key findings or contributions.
                </p>
                <a href="#" className="font-medium" style={{ color: '#e8e6e3' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#c4b5a0'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#e8e6e3'}>
                  View Publication →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Initiatives Section */}
      <section id="leadership" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-5xl mx-auto w-full px-8">
          <h2 className="text-4xl font-bold mb-12" style={{ color: '#e8e6e3' }}>Leadership Initiatives</h2>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-3xl shadow-md p-6 glass-box" style={{ minHeight: '220px', 
          backgroundColor: 'rgba(29, 31, 43, 0.5)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.1)',
        }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: '#e8e6e3' }}>Leadership Role / Initiative</h3>
                    <p className="text-lg" style={{ color: '#e8e6e3' }}>Organization / Group</p>
                  </div>
                  <span className="font-medium" style={{ color: '#e8e6e3' }}>Date Range</span>
                </div>
                <p style={{ color: '#b8b5b0', fontSize: '0.9rem' }}>
                  Describe your leadership role, initiatives you led, impact made, and key achievements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-5xl mx-auto w-full px-8">
          <div className="rounded-lg shadow-md p-8 md:p-12 text-center" style={{ 
          backgroundColor: 'rgba(29, 31, 43, 0.5)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.1)',
        }}>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#e8e6e3' }}>Curriculum Vitae</h2>
            <p className="text-base mb-8" style={{ color: '#b8b5b0', fontSize: '0.9rem' }}>
              Download my complete CV to view my full academic and professional background.
            </p>
            <a
              href="#"
              className="inline-block text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md"
              style={{ backgroundColor: '#1d1f2b' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6c5b92'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1d1f2b'}
            >
              Download CV (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-5xl mx-auto w-full px-8">
          <div className="rounded-3xl shadow-md p-6 md:p-10 glass-box" style={{ minHeight: '280px', 
          backgroundColor: 'rgba(29, 31, 43, 0.5)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.1)',
        }}>
            <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#e8e6e3' }}>Get In Touch</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-center gap-4 justify-center">
                <Mail className="w-6 h-6" style={{ color: '#e8e6e3' }} />
                <a href="mailto:your.email@example.com" className="text-lg transition" style={{ color: '#e8e6e3' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#c4b5a0'}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#e8e6e3'}>
                  your.email@example.com
                </a>
              </div>
              <p className="text-center mt-8" style={{ color: '#b8b5b0', fontSize: '0.9rem' }}>
                Feel free to reach out for collaborations, questions, or opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8" style={{ backgroundColor: 'rgba(29, 31, 43, 0.5)', borderTop: '1px solid #1d1f2b' }}>
        <div className="max-w-6xl mx-auto px-6 text-center" style={{ color: '#938eb8' }}>
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
