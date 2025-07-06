# DocuWizard 🧙‍♂️

Transform documents with ancient wisdom & modern AI. DocuWizard is an AI-powered PDF document analysis application that uses local Ollama models to provide intelligent question-answering capabilities for your documents.

## ✨ Features

- 🧙‍♂️ **Ancient Wisdom** - Local AI models powered by Ollama, no cloud dependency
- 📜 **Scroll Analysis** - Extract knowledge from any PDF document  
- 💬 **Mystical Conversations** - Chat with your documents naturally
- 🔮 **Crystal Ball Insights** - Get precise answers with source citations
- 🏰 **Fortress Privacy** - All magic happens locally on your machine
- ⚡ **Lightning Spells** - Instant responses, no waiting for external APIs

## 🏗️ Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/docs), [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), [Framer Motion](https://www.framer.com/motion/)
- **Backend**: [PostgreSQL](https://www.postgresql.org/), [Supabase](https://supabase.com/), [Drizzle ORM](https://orm.drizzle.team/), [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- **Authentication**: [Clerk](https://clerk.com/)
- **Payments**: [Stripe](https://stripe.com/)
- **AI**: [Ollama](https://ollama.ai/) (Local AI Models)
- **Document Processing**: PDF parsing and text extraction

## 🎭 Medieval Wizard Theme

DocuWizard features a beautiful medieval wizard aesthetic with:
- Custom wizard iconography and illustrations
- Parchment-textured UI components
- Mystical purple and gold color scheme
- Medieval typography (Cinzel & Crimson Text fonts)
- Magical animations and effects

## 📋 Prerequisites

You will need accounts for the following services (all have free tiers):

- [GitHub](https://github.com/) account
- [Supabase](https://supabase.com/) account  
- [Clerk](https://clerk.com/) account
- [Stripe](https://stripe.com/) account
- [Vercel](https://vercel.com/) account (for deployment)
- [Ollama](https://ollama.ai/) installed locally

## 🔧 Local Setup

### 1. Install Ollama
```bash
# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Pull some models for document analysis
ollama pull llama2:7b
ollama pull mistral:7b
ollama pull phi:2.7b

# Start Ollama service
ollama serve
```

### 2. Clone and Setup Project
```bash
# Clone the repository
git clone https://github.com/yourusername/DocuWizard.git
cd DocuWizard

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

### 3. Environment Variables
```bash
# Database
DATABASE_URL=your_supabase_database_url

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup

# Stripe Payments
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_YEARLY=your_yearly_payment_link
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_MONTHLY=your_monthly_payment_link

# Ollama Configuration
OLLAMA_BASE_URL=http://localhost:11434
DEFAULT_MODEL=mistral:7b
MAX_CONTEXT_LENGTH=4096
```

### 4. Database Setup
```bash
# Start local Supabase (optional for local development)
npm run db:local

# Generate and run migrations
npm run db:generate
npm run db:migrate

# Seed the database
npm run db:seed
```

### 5. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your DocuWizard application!

## 🚀 Available Scripts

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run types` - Run TypeScript type checking
- `npm run format:write` - Format code with Prettier
- `npm run clean` - Run both lint:fix and format:write

### Database
- `npm run db:local` - Start local Supabase instance
- `npm run db:generate` - Generate migration files
- `npm run db:migrate` - Run migrations
- `npm run db:seed` - Seed database

### Testing
- `npm run test` - Run all tests
- `npm run test:unit` - Run Jest unit tests
- `npm run test:e2e` - Run Playwright e2e tests

## 🏛️ Architecture

DocuWizard uses Next.js 15 App Router with clear separation:

### Route Structure
- `/app/(unauthenticated)` - Public routes
  - `(marketing)` - Landing pages, pricing, features
  - `(auth)` - Login and signup flows
- `/app/(authenticated)` - Protected routes requiring authentication
  - `dashboard` - Main application interface
  - Document upload and management
  - AI chat interface

### Key Features
- **Server Actions** for data mutations
- **Drizzle ORM** with PostgreSQL for data persistence
- **Clerk middleware** for authentication
- **Stripe integration** for subscription management
- **Local Ollama integration** for AI processing

## 🎨 UI Components

DocuWizard includes custom medieval-themed components:

- `WizardLogo` - Animated wizard hat and staff logo
- `WizardButton` - Magical buttons with shimmer effects
- `SpellCard` - Parchment-textured content cards
- `GrimoireCard` - Decorative document cards
- `MysticalCard` - Glowing mystical containers
- Medieval icon set (staff, crystal ball, spell book, etc.)

## 🔮 Planned Features

- [ ] PDF upload and text extraction
- [ ] Multi-model Ollama integration
- [ ] Document chunking for large files
- [ ] Vector embeddings for semantic search
- [ ] Chat interface with document context
- [ ] Document highlighting and citations
- [ ] Usage analytics and limits
- [ ] Export conversations
- [ ] Batch document processing

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built on [Mckay's App Template](https://github.com/mckaywrigley/mckays-app-template)
- Powered by [Ollama](https://ollama.ai/) for local AI
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Medieval fonts: [Cinzel](https://fonts.google.com/specimen/Cinzel) & [Crimson Text](https://fonts.google.com/specimen/Crimson+Text)

---

*"Any sufficiently advanced technology is indistinguishable from magic."* - Arthur C. Clarke
