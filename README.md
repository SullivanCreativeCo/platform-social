# Dispatch
## Social Media Management Platform
### Powered by Keegareaux Labs

> **Your social media, handled.**

Dispatch is a calm, thoughtful social media management platform built for small business owners and marketing managers. Create content with AI, schedule across Instagram, Facebook, and LinkedIn, and maintain your unique brand voice.

## ✨ Features (MVP)

- **🏠 HQ** - Mission control dashboard with at-a-glance stats
- **✍️ Compose** - Create posts with image upload and AI assistance
- **✨ Signal** - AI-powered caption generation using Anthropic Claude
- **🎯 Voiceprint** - Define your brand voice for personalized AI captions
- **🔗 Channels** - Connect and manage Instagram, Facebook, LinkedIn accounts
- **⏰ Queue** - Schedule posts for future publishing
- **📅 Planner** - Calendar view of your content schedule
- **📦 Holding** - Save drafts for later
- **🏢 Brands** - Multi-client support with brand switching

## 🎨 Design System

Dispatch uses a warm, calm design system that feels approachable rather than corporate:

- **Color Palette:** Ember (accent), Charcoal (text), Warm White (backgrounds), Stone (borders)
- **Typography:** DM Serif Display (headings), Inter (body), JetBrains Mono (data)
- **Components:** Thoughtfully crafted UI primitives with Dispatch branding

## 🛠 Tech Stack

- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js
- **AI:** Anthropic Claude API
- **File Storage:** AWS S3
- **Job Queue:** BullMQ + Redis
- **Social APIs:** Meta Graph API, LinkedIn API
- **UI:** Tailwind CSS + Lucide Icons
- **Hosting:** Vercel

## 🚀 Getting Started

### Prerequisites

Before running Dispatch, you'll need:

1. **PostgreSQL Database** - Use Supabase (free), Neon, or Railway
2. **Redis Instance** - Use Upstash (free) or Redis Cloud
3. **Anthropic API Key** - Sign up at console.anthropic.com
4. **AWS Account** - For S3 file storage
5. **Meta Developer Account** - For Instagram/Facebook API
6. **LinkedIn Developer Account** - For LinkedIn API (Phase 2)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd platform-social
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env and add your credentials
   ```

4. **Run database migrations**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
dispatch/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Authentication routes
│   ├── (dashboard)/         # Protected dashboard routes
│   │   ├── dashboard/       # HQ
│   │   ├── compose/         # Post creation
│   │   ├── channels/        # Social accounts
│   │   ├── planner/         # Calendar
│   │   ├── holding/         # Drafts
│   │   └── brands/          # Client switcher
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # UI primitives (Button, Input, Card, Badge)
│   ├── layout/              # Layout components (Sidebar, TopBar, EmptyState)
│   ├── dashboard/           # HQ components
│   ├── posts/               # Compose components
│   ├── social/              # Channels components
│   ├── calendar/            # Planner components
│   └── brands/              # Brand management
├── lib/
│   ├── db/                  # Prisma client
│   ├── auth/                # NextAuth config
│   ├── ai/                  # Claude API integration
│   ├── social/              # Social media services
│   ├── storage/             # S3 integration
│   ├── queue/               # BullMQ job queue
│   └── utils.ts             # Utility functions
├── prisma/
│   └── schema.prisma        # Database schema (15+ models)
├── types/                   # TypeScript types
└── public/                  # Static assets
```

## 🗄 Database Schema

Dispatch uses a comprehensive multi-tenant database schema:

- **Authentication:** User, Account, Session, VerificationToken
- **Multi-Tenant:** Client, ClientMembership, Subscription
- **Brand Management:** Brand (with Voiceprint settings)
- **Social Accounts:** SocialAccount (Instagram, Facebook, LinkedIn)
- **Content:** Post, ScheduledPost
- **Templates:** Template (Blueprints - Phase 2)
- **AI History:** CaptionGeneration (Signal logs)
- **Analytics:** PostAnalytics (Debrief - Phase 2)

## 🎯 Phase 1 Status (Days 1-3)

**✅ Completed:**
- Next.js 14 project initialization with TypeScript
- Tailwind CSS configured with Dispatch design tokens
- Core UI components (Button, Input, Card, Badge)
- Layout components (Sidebar, TopBar, EmptyState)
- HQ dashboard page
- Comprehensive Prisma schema (15+ models)
- Environment variables template
- Project structure and directory organization

**⏭️ Next Steps (Phase 2):**
- NextAuth.js authentication setup
- Client and brand management
- Multi-tenant RBAC

## 📝 Environment Variables

Required for production:

```bash
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="..."

# AWS S3
AWS_REGION="us-east-1"
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_S3_BUCKET="dispatch-uploads"

# Anthropic Claude
ANTHROPIC_API_KEY="sk-ant-..."

# Redis
REDIS_HOST="..."
REDIS_PORT="6379"
REDIS_PASSWORD="..."

# Meta (Instagram & Facebook)
META_APP_ID="..."
META_APP_SECRET="..."
META_REDIRECT_URI="https://yourdomain.com/api/social/meta/callback"
```

## 💰 Estimated Costs (MVP)

- **Anthropic API:** ~$20-100/month (main variable cost)
- **PostgreSQL:** FREE (Supabase/Neon/Railway free tier)
- **Redis:** FREE (Upstash/Redis Cloud free tier)
- **AWS S3:** FREE first year, then ~$5-20/month
- **Vercel Hosting:** FREE (Hobby tier)

**Total MVP Cost:** ~$20-50/month for modest usage

## 🔒 Security

- Input validation with Zod on all API routes
- Multi-tenant data isolation (clientId filtering)
- Role-based access control (RBAC)
- Encrypted OAuth tokens
- SQL injection prevention (Prisma)
- XSS prevention (React)
- CSRF protection (NextAuth)
- Rate limiting on AI and upload endpoints

## 📚 Key Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Anthropic Claude API](https://docs.anthropic.com)
- [Meta Graph API](https://developers.facebook.com/docs/graph-api)
- [LinkedIn API](https://docs.microsoft.com/en-us/linkedin/)

## 🤝 Contributing

This is a private project for client use. If you're part of the team, follow the standard Git workflow:

1. Create a feature branch from `main`
2. Make your changes
3. Submit a pull request for review
4. After approval, merge to `main`

## 📄 License

Proprietary - © 2024 Keegareaux Labs

---

**Built with ❤️ by Keegareaux Labs**
