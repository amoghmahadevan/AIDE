# AIDE

[AIDE](https://aide-ai.vercel.app/) is an all-in-one AI Tool platform where you can generate Conversation, Imagery, Music, Video, and even Code!

## Description

AIDE serves as a comprehensive AI Toolkit which can assist you in providing content in all forms. The list of models that AIDE uses to generate its responses include:
 
 - OpenAI GPT-3.5 Turbo Language Model - Conversation and Code Generation
 - OpenAI DALL-E Generative Image Model - Image Generation
 - ReplicateAI Riffusion Stable Diffusion Model - Audio Generation
 - ReplicateAI Zeroscope v2 ModelScope-based Video Model - Video Generation

AIDE also utilizes:
 - Next.js 13, React, and Tailwind CSS to produce a responsive web design
 - Prisma, a type-safe database client, which keeps account of user's prompt generations
 - Clerk Authentication which handles login authentication and user management
 - Stripe API for AIDE Pro subscription payments
 - Crisp Chat for Customer Support 

## Screenshots

Landing Page: 

(Title contains Typewriting Component so loops over Conversation, Image Generation, Music Generation, Video Generation, and Code Generation)

![LandingPage](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-landingpage.png?raw=true)

Dashboard: 

![Dashboard](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-dashboard.png?raw=true)

Conversation:

![Conversation](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-conversation.png?raw=true)

Image Generation:

![Image](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-image-generation.png?raw=true)

Video Generation:

![Video](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-video-generation.png?raw=true)

Music Generation:

![Music](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-music-generation.png?raw=true)

Code Generation:

![Code](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-code-generation.png?raw=true)

Settings Page (Free Version):

![Settings-free](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-settings-free.png?raw=true)

Upgrade Pro Modal: 

![ProModal](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-upgrade-modal.png?raw=true)

Stripe Integration:

![Stripe](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-stripe-redirect.png?raw=true)

Settings Page (Pro Version):

![Settings-pro](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-settings-pro.png?raw=true)

Built-In Crisp Chat Support:

![Crisp](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-crisp-chat.png?raw=true)

Responsive Mobile Web Design:

![Mobile-Dashboard](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-mobile-dashboard.png?raw=true)

Mobile Sidebar:

![Mobile-Sidebar](https://github.com/amoghmahadevan/AIDE/blob/master/aide-screenshots/aide-mobile-sidebar.png?raw=true)


## Getting Started
If you want to run AIDE on your localhost follow the steps down below:
### Prerequisites

Node version 18.x.x. 

### Cloning the repository

```bash
git clone git@github.com:amoghmahadevan/AIDE.git
```

### Installing

```bash
npm install
```

### Creating your .env file
Create a .env file in the root directory with the following variable names and add the appropriate API Keys

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=

STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL=http://localhost:3000

```
### Prisma
Run the following prisma commands if you make any changes to the schema:

```bash
npx prisma generate
npx prisma db push
```
To access and edit the Prisma database, run the following command:

```bash
npx prisma studio
```

### Running the application
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Future Plans

I intend to add an AI Image Captioning Tool using the BLIP Model created by Salesforce. This feature allows users to upload images and receive AI-generated captions of what's happening in the image.

## Authors

[@amoghmahadevan](https://github.com/amoghmahadevan)
