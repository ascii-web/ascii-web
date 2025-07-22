# ASCII-Web

A modern web application for creating and sharing ASCII art with AI-powered tools.

## Features

- 🎨 **ASCII Art Creator**: Advanced tools for creating ASCII art
- 🤖 **AI-Powered**: Train custom models for ASCII art generation
- 👥 **Community**: Share and discover ASCII art from other creators
- 🔐 **Authentication**: Secure login with email/password and Google Sign-In
- 📱 **Responsive**: Works on desktop and mobile devices
- ⚡ **Fast**: Built with Next.js and optimized for performance

## Authentication

This project uses Firebase Authentication with support for:

- Email/Password authentication
- Google Sign-In
- Email verification
- Password reset
- User profile management

## Getting Started

### Prerequisites

- Node.js 18+
- Firebase project with Authentication and Firestore enabled

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd ascii-web
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up Firebase:

   - Create a Firebase project at https://console.firebase.google.com
   - Enable Authentication (Email/Password and Google)
   - Enable Firestore Database
   - Copy your Firebase configuration

4. Configure environment variables:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

Fill in your Firebase configuration in `.env.local`:

\`\`\`env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
\`\`\`

5. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Firebase Setup

1.  **Authentication Setup**:

    - Go to Firebase Console > Authentication > Sign-in method
    - Enable "Email/Password" provider
    - Enable "Google" provider and configure OAuth consent screen

2.  **Firestore Setup**:

    - Go to Firebase Console > Firestore Database
    - Create database in production mode
    - Set up security rules (example rules provided below)

3.  **Firestore Security Rules**:
    \`\`\`javascript
    rules_version = '2';
    service cloud.firestore {
    match /databases/{database}/documents {
    // Users can read and write their own user document
    match /users/{userId} {
    allow read, write: if request.auth != null && request.auth.uid == userId;
    }
        // Add more rules for other collections as needed
    }
    }
    \`\`\`

## Project Structure

\`\`\`
├── app/ # Next.js app directory
│ ├── auth/ # Authentication pages
│ ├── dashboard/ # Dashboard pages
│ └── layout.tsx # Root layout
├── components/ # React components
│ ├── auth/ # Authentication components
│ ├── dashboard/ # Dashboard components
│ └── ui/ # UI components (shadcn/ui)
├── lib/ # Utility libraries
│ ├── firebase.tsx # Firebase configuration
│ └── firebase-auth.tsx # Firebase authentication context
└── public/ # Static assets
\`\`\`

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
