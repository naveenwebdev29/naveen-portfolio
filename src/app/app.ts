import { Component, signal, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

interface Project {
  title: string;
  description: string;
  stack: string[];
  features: string[];
  liveUrl?: string;
  repoUrl?: string;
}

interface ExperienceItem {
  role: string;
  org: string;
  location: string;
  period: string;
  badge: string;
  points: string[];
  stack: string[];
}

interface NavSection {
  id: string;
  label: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  // ---------------- Identity ----------------
  name = 'Kumar Naveen';
  initials = 'NK';
  role = 'Full Stack Software Developer';
  headlineLine1 = 'Building Reliable';
  headlineLine2 = 'Web Platforms';
  tagline =
    'Full Stack Developer with 2 years of hands-on development and 6 years of operations & data management experience — building and maintaining live web platforms end-to-end.';
  email = 'naveenkumarb29@gmail.com';
  phone = '+91-9953418617';
  location = 'New Delhi, India';
  noticePeriod = '1 Month';
  resumeUrl = 'resume.pdf';
  profileImageUrl = 'profile.png';

  socials = [
    { label: 'GitHub', url: 'https://github.com/naveenwebdev29', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/naveen-kumarb29', icon: 'linkedin' }
  ];

  navSections: NavSection[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  activeSection = signal('home');
  menuOpen = signal(false);

  heroStats = [
    { value: '2+', label: 'Years Dev Experience' },
    { value: '3+', label: 'Live Platforms' },
    { value: '6+', label: 'Years in Operations' }
  ];

  professionalSummary =
    'Results-driven Full Stack Developer with 2 years of hands-on software development experience and 6 years of prior operations & data management expertise. Proficient in Angular, Node.js, Next.js, and MongoDB with a strong track record of building and maintaining live web platforms.';

  aboutHighlights = [
    'Angular, Node.js & Express',
    'MongoDB & RESTful APIs',
    'JWT Authentication & RBAC',
    'Next.js (SSR, Basic)',
    'Git, GitHub & Postman',
    'MIS Reporting & Data Accuracy'
  ];

  education = {
    institute: 'Sri Satya Sai University (SSSUTMS)',
    degree: 'Master of Computer Applications (MCA)',
    year: '2017'
  };

  achievements = [
    'Shipped and maintained Stuintern.com and Vidyapun.com — live platforms serving thousands of active users.',
    'Maintained large-scale student database with zero data errors across 10,000+ records.',
    'Streamlined repetitive data workflows using Excel VBA macros, reducing manual effort significantly.',
    'Combined 6 years of operations expertise with modern full-stack development skills.'
  ];

  skillCategories: Skill['category'][] = ['Frontend', 'Backend', 'Database', 'Tools'];
  activeSkillCategory = signal<Skill['category']>('Frontend');

  skills: Skill[] = [
    { name: 'JavaScript (ES6+)', level: 90, category: 'Frontend' },
    { name: 'Angular', level: 88, category: 'Frontend' },
    { name: 'Next.js', level: 70, category: 'Frontend' },
    { name: 'Responsive UI Design', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express.js', level: 82, category: 'Backend' },
    { name: 'RESTful APIs', level: 88, category: 'Backend' },
    { name: 'JWT Authentication', level: 80, category: 'Backend' },
    { name: 'RBAC', level: 78, category: 'Backend' },
    { name: 'MongoDB', level: 82, category: 'Database' },
    { name: 'Git & GitHub', level: 85, category: 'Tools' },
    { name: 'Postman', level: 80, category: 'Tools' },
    { name: 'VS Code', level: 90, category: 'Tools' }
  ];

  developmentApproachTags = [
    'Component-Based Architecture',
    'RESTful APIs',
    'JWT Authentication',
    'RBAC',
    'SSR Optimization',
    'Responsive Design'
  ];

  experience: ExperienceItem[] = [
    {
      role: 'Software Developer',
      org: 'Stuvalley Technology Pvt. Ltd.',
      location: 'New Delhi, India',
      period: 'Jul 2024 — Present',
      badge: 'Full-Time',
      points: [
        'Developed and maintained Stuintern.com, a live internship listing platform connecting students with companies across India.',
        'Built and maintained Vidyapun.com, an e-learning management system with course management, enrollment, and progress-tracking.',
        'Designed and implemented RESTful APIs for seamless frontend-backend integration and third-party services.',
        'Collaborated with product and design teams to translate requirements into production-ready features.'
      ],
      stack: ['Angular', 'Next.js', 'Node.js', 'MongoDB', 'REST API']
    },
    {
      role: 'Senior Executive – Operations',
      org: 'ARG Academy, Sagplan Consulting Pvt. Ltd.',
      location: 'Delhi, India',
      period: 'Apr 2018 — Jun 2024',
      badge: 'Full-Time',
      points: [
        'Managed and maintained large-scale student databases with high accuracy across 10,000+ records.',
        'Built advanced MIS reports using MS Excel (Pivot Tables, VLOOKUP, HLOOKUP, COUNTIF, SUMIF, INDEX-MATCH).',
        'Generated daily, weekly, and monthly operational reports for senior management decision-making.',
        'Coordinated with 5+ cross-functional teams to ensure timely and accurate data updates and compliance.'
      ],
      stack: ['MS Excel', 'MIS Reporting', 'Data Management']
    }
  ];

  activeExperienceIndex = signal(0);

  experienceStats = [
    { value: '2+', label: 'Years Building' },
    { value: '3+', label: 'Live Platforms' },
    { value: '6+', label: 'Years in Ops' }
  ];

  projects: Project[] = [
    {
      title: 'Stuintern.com',
      description: 'Internship discovery platform connecting students with companies across India.',
      stack: ['Angular', 'Node.js', 'MongoDB'],
      features: [
        'Dynamic listing filters and search',
        'Company dashboards',
        'Student application tracking',
        'Real-time data rendering via REST API'
      ],
      liveUrl: 'https://stuintern.com'
    },
    {
      title: 'Vidyapun.com',
      description: 'E-learning management system for course delivery and student progress tracking.',
      stack: ['Next.js', 'Node.js', 'MongoDB'],
      features: [
        'Course management & enrollment',
        'Student progress tracking',
        'Next.js SSR for performance',
        'Responsive UI components'
      ],
      liveUrl: 'https://vidyapun.com'
    },
    {
      title: 'StuMount.in',
      description: 'Multi-tenant CRM portal for PhD students to manage thesis and journal submissions.',
      stack: ['Angular', 'Node.js', 'MongoDB'],
      features: [
        'Separate student, vendor, executive & admin portals',
        'JWT authentication across all portals',
        'Role-based access control (RBAC)',
        'Multi-tenant architecture'
      ],
      liveUrl: 'https://stumount.in'
    }
  ];

  contactForm = { name: '', email: '', phone: '', message: '' };
  formStatus = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');

  currentYear = new Date().getFullYear();

  // ---------------- Theme toggle ----------------
  theme = signal<'dark' | 'light'>('dark');

  ngOnInit(): void {
    this.initTheme();
  }

  ngOnDestroy(): void {}

  // ---------------- Scroll-spy nav ----------------
  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    for (const section of this.navSections) {
      const el = document.getElementById(section.id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          this.activeSection.set(section.id);
        }
      }
    }
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  // ---------------- Theme toggle ----------------
  private initTheme(): void {
    const saved = localStorage.getItem('portfolio-theme');
    const preferred: 'dark' | 'light' =
      saved === 'light' || saved === 'dark'
        ? saved
        : window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark';
    this.applyTheme(preferred);
  }

  toggleTheme(): void {
    this.applyTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private applyTheme(next: 'dark' | 'light'): void {
    this.theme.set(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  }

  // ---------------- Skills tab filter ----------------
  setSkillCategory(category: Skill['category']): void {
    this.activeSkillCategory.set(category);
  }

  skillsInActiveCategory(): Skill[] {
    return this.skills.filter((s) => s.category === this.activeSkillCategory());
  }

  // ---------------- Experience tab ----------------
  setActiveExperience(index: number): void {
    this.activeExperienceIndex.set(index);
  }

  get activeExperience(): ExperienceItem {
    return this.experience[this.activeExperienceIndex()];
  }

  // ---------------- Contact form ----------------
  onSubmitContact(event: Event): void {
    event.preventDefault();
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      this.formStatus.set('error');
      return;
    }

    this.formStatus.set('sending');

    // Wire this up to your own backend / form service (e.g. Formspree,
    // EmailJS, or your own API endpoint). Simulated success for now.
    setTimeout(() => {
      this.formStatus.set('sent');
      this.contactForm = { name: '', email: '', phone: '', message: '' };
    }, 900);
  }
}