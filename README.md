# Premium AWS DevOps & DevSecOps Portfolio

A production-ready, futuristic personal portfolio designed specifically for AWS DevOps and DevSecOps recruiters. The codebase is built using a dark, glassmorphic design system modeled on premium engineering portals (Linear, Stripe, Vercel) and optimized for 100% mobile responsiveness.

---

## 🚀 Live Demo & Deployment
This website is optimized for one-click Vercel deployment:
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

---

## 🛠️ Technology Stack
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server-side Layouts)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Smooth transitions, floats, scroll triggers)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO**: Fully optimized semantic layouts, OpenGraph tags, search keywords, and mobile viewports

---

## 📂 Project Architecture
```text
/pro-website
├── /app                  # Next.js 14 Router (Layout & Entry Pages)
├── /components           # Core Modular Components
│   ├── /ui               # Custom UI primitives (Buttons, Cards, Badges)
│   ├── Background.tsx    # Cyber Dotted Grid & Ambient Orbs Background
│   ├── Navbar.tsx        # Responsive Sticky Header & Mobile Drawer
│   ├── Hero.tsx          # Professional summary & direct prefilled CTAs
│   ├── About.tsx         # Philosophy, stats dashboard, core skills
│   ├── Skills.tsx        # Categorized capability bars (AWS, EKS, CI/CD)
│   ├── Experience.tsx    # Pipeline-inspired professional timeline
│   ├── Projects.tsx      # Real-world DR, Security scans, K8s pipelines
│   ├── Certifications.tsx# credential chest (AWS Pro, CKA, Terraform)
│   ├── Contact.tsx       # Recruitment card & click-to-copy email utility
│   └── MobileCTA.tsx     # Sticky bottom CTAs for thumb-friendly mobile taps
├── /lib                  # Utility class mixers (tailwind merge)
├── /public               # Static assets (contains dinesh.png avatar)
└── /styles               # Global layers & custom CSS animations
```

---

## ⚡ Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### 3. Verify Code Quality & Type Safety
To perform type compilation checks:
```bash
npx tsc --noEmit
```

### 4. Build Production Bundle
```bash
npm run build
```

---

## 🔧 Production Customization Guide
To fully prepare the site for your custom URLs, open the following files and search/replace the temporary keys:

1. **GitHub Link**: Open [components/Hero.tsx](file:///c:/Users/dinesh.chary/Downloads/pro-website/components/Hero.tsx) and [components/Contact.tsx](file:///c:/Users/dinesh.chary/Downloads/pro-website/components/Contact.tsx) and replace `GITHUB_URL_HERE` with your absolute GitHub URL.
2. **LinkedIn Link**: Open [components/Hero.tsx](file:///c:/Users/dinesh.chary/Downloads/pro-website/components/Hero.tsx) and [components/Contact.tsx](file:///c:/Users/dinesh.chary/Downloads/pro-website/components/Contact.tsx) and replace `LINKEDIN_URL_HERE` with your absolute LinkedIn URL.
3. **Canonical Link**: Update the `metadataBase` field in [app/layout.tsx](file:///c:/Users/dinesh.chary/Downloads/pro-website/app/layout.tsx) with your custom deployed domain URL.

---

## 🔒 Security & Performance Features
- **Strict Content Headers**: Configured custom vercel protection layers against frame hijacking and sniffing.
- **Image Performance**: Implemented Next.js unoptimized static images for maximum rendering speed and standard cross-platform serving compatibility.
- **Micro-Animations**: All motion triggers are throttled and hardware-accelerated using specialized cubic-beziers.
