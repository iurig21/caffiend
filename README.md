# Coffee Tracking App Using React.JS FantaCSS & Firebase

**Caffiend** is a coffee tracking app built with React.js, FantaCSS, and Firebase. It allows users to log, analyze, and explore their coffee and caffeinated beverage consumption over time.

## Features

- **User Authentication:** Secure signup, login, and password reset powered by Firebase Auth.
- **Coffee History Tracking:** Easily log coffees or energy drinks, including type and cost, and view your historical consumption.
- **Caffeine Analytics:** Get detailed stats such as average daily caffeine intake, cost, and most consumed drinks.
- **Caffeine Metabolism Calculation:** Estimate current caffeine levels based on drink history and caffeine half-life.
- **Top 3 Coffees:** Discover your favorite drinks, with breakdowns of your most consumed types.
- **Interactive UI:** Hover for quick info, visualizations, and breakdowns of your coffee stats.
- **Responsive Design:** Built using React and FantaCSS for a modern, mobile-friendly experience.

## Tech Stack

- **Frontend:** React.js
- **Styling:** FantaCSS
- **Backend/Data:** Firebase (Firestore & Auth)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iurig21/caffiend.git
   cd caffiend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Firebase:**
   - Create a Firebase project.
   - Copy your Firebase credentials to a `.env` file:
     ```
     VITE_FIREBASE_APIKEY=your_api_key
     VITE_FIREBASE_AUTHDOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECTID=your_project_id
     VITE_FIREBASE_STORAGEBUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGINGSENDERID=your_messaging_sender_id
     VITE_FIREBASE_APPID=your_app_id
     ```

4. **Run the app:**
   ```bash
   npm run dev
   ```

## Usage

- **Log In/Sign Up:** Create an account or sign in to start tracking.
- **Add a Coffee:** Enter your drink, type, and cost. The app will automatically calculate caffeine content.
- **View Stats:** Access your dashboard for detailed analytics.

## File Structure

- `src/components/`: React UI components (e.g., History, Stats, etc.).
- `src/utils/`: Utility functions for caffeine calculations and statistics.
- `src/Context/`: App-wide context providers (Auth, etc.).
- `firebase.js`: Firebase configuration and initialization.

## Development

- **Linting:** Uses ESLint with recommended settings for React and Vite.
- **Hot Reload:** Vite for fast development workflow.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT

## Author

- [iurig21](https://github.com/iurig21)
