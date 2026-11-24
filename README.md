# Zync Call — Video Conferencing App

A full-stack real-time video conferencing platform built with **Next.js 15**, **React 19**, **Clerk**, and **GetStream Video SDK**.

![zync call Preview](/.github/images/img_main.png)

## Features

- **Authentication:** Secure sign-up, sign-in, and route protection powered by **Clerk**.
- **Instant Meetings:** Start a live audio/video call immediately and share the meeting URL.
- **Scheduled Meetings:** Schedule future meetings with a description and date/time picker, and copy invitation links.
- **Personal Room:** A permanent personal meeting room with a reusable invite link.
- **In-Meeting Controls:** Camera/mic toggles, device settings, screen sharing, reactions, call recording, call stats, participants list, and layout switching (Grid, Speaker Left, Speaker Right).
- **Meeting History & Recordings:** Browse upcoming meetings, previous calls, and recorded sessions.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router) & [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [Radix UI](https://www.radix-ui.com/)
- **Authentication:** [Clerk](https://clerk.com/) (`@clerk/nextjs` v7)
- **Video & Audio:** [GetStream Video SDK](https://getstream.io/video/) (`@stream-io/video-react-sdk` & `@stream-io/node-sdk`)

## Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- A [Clerk](https://dashboard.clerk.com/) account for authentication
- A [GetStream](https://dashboard.getstream.io/) account for real-time video/audio

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` (or `.env.local`) in the project root and fill in your credentials:

```env
# Disable Next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# Clerk authentication keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk auth routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# GetStream API keys
NEXT_PUBLIC_STREAM_API_KEY=...
STREAM_SECRET_KEY=...

# Base URL (update to your deployed HTTPS URL in production)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> **Security:** Never commit `.env` or `.env.local` to version control. Both are excluded in `.gitignore`.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint checks |

## Project Structure

```text
zoom-clone/
├── actions/          # Server actions (Stream token generation)
├── app/
│   ├── (auth)/       # Clerk sign-in and sign-up routes
│   ├── (root)/       # Home dashboard, upcoming, previous, recordings, personal room, meeting room
│   └── layout.tsx    # Root layout with ClerkProvider
├── components/       # UI components, modals, meeting room, and controls
├── config/           # Site metadata and configuration
├── constants/        # Sidebar links and static assets
├── hooks/            # Custom hooks for fetching Stream calls
├── lib/              # Utility helpers
├── providers/        # StreamVideoClient provider
├── public/           # Icons and static images
└── middleware.ts     # Clerk route protection middleware
```

## Joining & Sharing Meetings

- **Instant Meeting:** Click **New Meeting** → **Start Meeting**, then share the URL from your browser address bar (`/meeting/<id>`).
- **Scheduled Meeting:** Click **Schedule Meeting**, pick a date/time, and click **Copy meeting link**.
- **Personal Room:** Open **Personal Room** in the sidebar and click **Copy invitation**.
- **Join via Link:** Paste any meeting link into the browser or click **Join Meeting** on the home screen.

## Deployment

Deploy to **Vercel** or **Netlify** (a `netlify.toml` config is included):

1. Push the repository to your Git provider.
2. Add all environment variables from `.env.example` in your hosting platform's settings.
3. Set `NEXT_PUBLIC_BASE_URL` to your live `https://` domain (HTTPS is required by browsers for camera/microphone access).

## License

This project is licensed under the [MIT License](LICENSE).
