# ResumeAI Pro

AI-powered Resume Analyzer & Mock Interview platform.

**Stack:** Angular 20 (standalone components) · Node.js/Express · MongoDB (Atlas) · JWT + bcrypt · Multer · pdf-parse · OpenAI/Gemini · Chart.js · PDFKit · Bootstrap 5

## Publish to GitHub

The root `.gitignore` excludes dependencies, generated build output, local environment files, and uploaded resume/report PDFs. Keep real credentials in `backend/.env`; only commit `backend/.env.example`.

From the project root, after creating an empty repository on GitHub:

```bash
git init
git add .
git status --short
# Confirm backend/.env and backend/uploads/ are not listed before committing.
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repository>.git
git push -u origin main
```

Never commit real API keys, database connection strings, passwords, or user-uploaded resumes. If credentials have been exposed, rotate them before publishing.

---

## Quick start (one terminal)

From the project root:

```bash
npm install
npm start
```

That's it. `npm install` at the root also installs `backend/` and `frontend/` dependencies automatically (via a `postinstall` hook), and `npm start` runs both the backend (nodemon, port 5000) and frontend (`ng serve`, port 4200) together in the same terminal, color-tagged blue/green. Open **http://localhost:4200** once both show they're up. Press `Ctrl+C` once to stop both.

---

## 1. What's included and verified

This is a working scaffold, not a mockup — every piece listed below has been installed and built/boot-tested during development:

- **Backend**: `npm install` succeeds, every file passes `node --check`, and the server boots cleanly through to the point of connecting to MongoDB (it will only fail there if you haven't pointed it at a real database yet — that's expected).
- **Frontend**: a real `ng new` Angular 20 project (not hand-faked config), `npm install` succeeds, and `ng build --configuration production` completes with **zero errors and zero warnings**.

### Honest scope notes — read before you deploy

1. **Voice interview (STT/TTS)** uses the browser's built-in **Web Speech API** (`SpeechRecognition` + `speechSynthesis`) rather than a paid cloud speech service, since no such API key was available while building this. It works well in Chrome/Edge on desktop, has patchy support on Safari/Firefox, and **does not work at all in most mobile browsers**. If you need reliable, cross-browser voice interviews, swap the calls in `interview-session.component.ts` (`speakCurrentQuestion`, `startListening`) for a real service (e.g. Azure Speech, Google Cloud Speech-to-Text/Text-to-Speech, or OpenAI's audio APIs) called from the backend.
2. **Interview recording** (raw audio capture/storage) is *not* implemented — only the live transcript is saved. `InterviewAnswer.recordingUrl` exists in the schema so you can wire this up (e.g. `MediaRecorder` on the frontend + a new upload endpoint) without a schema change.
3. **Notification system** beyond email report delivery is not implemented — there's no in-app notification bell/feed. `emailService.js` supports SMTP-based report emailing (silently no-ops if `SMTP_*` env vars aren't set, so the rest of the app keeps working without email configured).
4. **AI Resume Builder** (build-a-resume-from-scratch flow) is not implemented — this scaffold focuses on analyzing/improving an *existing* uploaded resume. The `Resume` model's version-history fields (`version`, `previousVersion`) are ready to support a builder if you add one later.
5. This has **not** been run against a live MongoDB Atlas cluster or a real OpenAI/Gemini key (none were available in this environment) — you'll be the first to run it end-to-end with real credentials. Double-check the AI JSON-parsing path (`aiService.js` → `safeParseJSON`) against your actual model's output once you're testing live, as LLM output shape can drift.

Everything else in your original spec — auth, resume upload/parsing, ATS scoring, skill analysis, job-description matching, text + voice mock interviews (HR/Technical/Project-Based/Behavioral), PDF report generation, career guidance, user + admin dashboards, dark/light mode, resume version history — is implemented.

---

## 2. Project structure

```
resumeai-pro/
├── backend/                  Node.js + Express API
│   ├── config/db.js          Mongoose connection
│   ├── models/                9 Mongoose schemas (users, resumes, resumeAnalysis, interviews,
│   │                           interviewQuestions, interviewAnswers, reports, jobDescriptions, admin)
│   ├── controllers/           Route handler logic per feature
│   ├── routes/                Express routers, mounted in server.js
│   ├── middleware/            auth (JWT), upload (Multer), errorHandler
│   ├── services/               aiService (OpenAI/Gemini), atsService (rule-based checks),
│   │                           pdfParserService, pdfReportService (PDFKit), emailService (Nodemailer)
│   ├── utils/                  ApiError, asyncHandler, generateToken, seedAdmin
│   ├── uploads/                 Uploaded resume PDFs + generated report PDFs (gitignored)
│   ├── .env.example
│   └── server.js
│
└── frontend/                  Angular 20 standalone app
    └── src/app/
        ├── core/               models, services, guards, interceptors, speech.d.ts (Web Speech types)
        ├── shared/             navbar, sidebar, shell layout, toast, score-gauge
        └── features/           auth, dashboard, resume, job-match, interview, career, profile, admin
```

### API structure (all mounted under `/api`)

| Base path            | Covers |
|-----------------------|--------|
| `/auth`                | register, login, logout, forgot/reset password, profile, change password |
| `/resume`              | upload (PDF), list, get, version history, download, delete |
| `/analysis`            | run/re-run AI resume analysis, get latest, get history |
| `/ats`                 | deterministic (non-AI) ATS parsing checks |
| `/interview`           | create/list/get text interviews, submit answer, complete, abandon |
| `/voice-interview`     | same as `/interview` but forces `mode: 'voice'` on creation |
| `/job-match`           | compare resume vs. pasted job description |
| `/career`              | career path / certification / course guidance |
| `/reports`             | generate & download PDF reports (resume analysis or interview), email a report |
| `/admin`               | dashboard stats, user management, report oversight (admin role only) |

Full request/response shapes are typed in `frontend/src/app/core/models/models.ts` and mirrored in the backend Mongoose schemas.

---

## 3. Setup

### Prerequisites
- Node.js 18+
- A MongoDB Atlas cluster (or local MongoDB) connection string
- An OpenAI API key (or a Gemini API key, if you set `AI_PROVIDER=gemini`)

### Backend

```bash
cd backend
npm install
cp .env.example .env
# edit .env: set MONGO_URI, JWT_SECRET, JWT_REFRESH_SECRET, OPENAI_API_KEY (see below)
npm run seed:admin     # creates/promotes an admin user from ADMIN_EMAIL/ADMIN_PASSWORD in .env
npm run dev             # nodemon, http://localhost:5000
```

Key `.env` variables (see `.env.example` for the full list):

```
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/resumeai_pro
JWT_SECRET=<long random string>
JWT_REFRESH_SECRET=<different long random string>
AI_PROVIDER=openai              # or "gemini"
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
SMTP_HOST=... SMTP_USER=... SMTP_PASS=...   # optional — email report delivery no-ops without these
ADMIN_EMAIL=admin@resumeaipro.com
ADMIN_PASSWORD=Admin@12345
```

### Frontend

```bash
cd frontend
npm install
ng serve                # http://localhost:4200, proxies API calls to http://localhost:5000/api
# or for a production build:
ng build --configuration production   # outputs to frontend/dist/frontend
```

`frontend/src/environments/environment.ts` points at `http://localhost:5000/api` for local dev; `environment.prod.ts` uses a relative `/api` path for when you deploy the built frontend behind the same origin/reverse proxy as the backend.

---

## 4. Deploying

- **Backend**: any Node host (Render, Railway, Fly.io, EC2, etc.). Set the same env vars as `.env.example`. Make sure the `uploads/` directory is on persistent storage (or swap `multer.diskStorage` for S3/GCS if you need horizontal scaling — file paths are stored as strings in the `Resume`/`Report` models, so this is a contained change in `middleware/upload.js` and the report-generation services).
- **Frontend**: `ng build --configuration production`, then serve `frontend/dist/frontend/browser` from any static host (Vercel, Netlify, Nginx, or the same Node server via `express.static`). Put it behind the same domain as the API (or configure CORS/`CLIENT_URL` on the backend) so `environment.prod.ts`'s relative `/api` path resolves correctly.
- **Database**: MongoDB Atlas — the free M0 tier is enough to get started.

---

## 5. Where to go next

Realistic priorities if you're taking this to production:
1. Run the full flow end-to-end with real MongoDB + OpenAI credentials and fix any AI-JSON-shape mismatches you hit.
2. Add automated tests (none are included — this was scoped as a working scaffold, not a fully test-covered product).
3. Decide on a real STT/TTS provider for voice interviews if broad browser/mobile support matters to you.
4. Add the AI Resume Builder and audio-recording-storage features if you need them (both have room already left in the data model).
5. Add request validation (e.g. `express-validator`, already a dependency) on the write endpoints for defense-in-depth beyond the client-side checks.
