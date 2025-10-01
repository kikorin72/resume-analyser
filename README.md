# 📄 Resume Analyser

An AI-powered resume analysis web application that helps candidates optimize their resumes for ATS systems and tech job applications.
Built with React.js + Tailwind CSS on the frontend and powered by Puter’s cloud storage, AI feedback engine, and key-value store for smart resume processing.

## 🚀 Features

Resume Upload & Parsing – Supports PDF → Image conversion for better text extraction.

ATS Compatibility Analysis – Highlights missing keywords & formatting issues.

AI-Powered Feedback – Uses Puter’s AI infra to provide personalized resume improvement tips.

Cloud Storage Integration – Store and manage resumes securely with Puter.

Interactive Dashboard – View Resume Cards, Scorecards, and Feedback Reports in a modern UI.

Authentication Support – Secure login for personalized resume history.

## 🛠️ Tech Stack

### Frontend

⚛️ React.js

🎨 Tailwind CSS

🔄 React Router (SPA mode enabled)

### Infra

☁️ Puter (cloud storage, key-value store, AI feedback API)

### Others

PDF/Image Conversion libraries

TypeScript (strong typing & better dev experience)

📂 Project Structure
resume-analyser/
│── app/               # Core application logic
│── constants/         # Cloud storage, AI feedback, config values
│── public/            # Static files (ResumeCard, Scorecard, etc.)
│── types/             # TypeScript type definitions
│── Dockerfile         # Container setup
│── vite.config.ts     # Vite build config
│── react-router.config.ts  # SPA routing config
│── tsconfig.json      # TypeScript configuration

## 🧑‍💻 How It Works

Upload your resume (PDF/DOCX).

File is stored & processed via Puter cloud storage.

Resume is parsed → converted to text → analyzed using AI feedback engine.

A Resume Card + Scorecard is generated showing:

Missing keywords

Formatting issues

Skill gap analysis

Overall resume score

Users can log in & save their resume history securely.

## ⚙️ Installation & Setup
## ⚙️ Installation & Setup  

```bash
# Clone the repository
git clone https://github.com/kikorin72/resume-analyser.git

# Navigate into project
cd resume-analyser

# Install dependencies
npm install

# Run dev server
npm run dev
```

## 💡 Future Roadmap

🔍 Job-specific resume tailoring (upload JD → compare with resume)

📊 Advanced data visualizations of skills & ATS scores

🌐 Multi-language support

☁️ Resume version history (cloud sync with Puter)

## 👩‍💻 Author

Kriti Gupta : 
Frontend Developer | AI + Web3 Enthusiast | Resume Tools Builder

[LinkedIn](https://www.linkedin.com/in/kritigupta45/)
[Portfolio](https://your-portfolio-link.com)

