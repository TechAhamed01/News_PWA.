# News PWA - Progressive Web App for News

A modern, responsive, and feature-rich Progressive Web App built with React + Vite for reading news articles with offline capabilities.

## 🌟 Features Implemented

### ✅ Progressive Web App (PWA)
- **Installable**: Can be installed from browser as a native app
- **Offline Support**: Cached articles available when offline
- **Service Worker**: Background sync and caching
- **App Manifest**: Proper PWA configuration with icons
- **Add to Home Screen**: Native app-like experience

### ✅ Core Functionality
- **Home Page**: Featured articles, latest news, and category sections
- **Article View**: Full article display with rich content
- **Category Pages**: Filter articles by Technology, Business, Sports, Entertainment, etc.
- **Search**: Real-time search with results preview
- **Bookmarks**: Save articles for offline reading
- **Navigation**: Responsive header with mobile-friendly menu

### ✅ User Experience
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first design that works on all devices
- **Loading Skeletons**: Smooth loading states
- **Error Handling**: Graceful error states and fallbacks
- **Offline Banner**: Visual indicator when offline

### ✅ Technical Features
- **Caching Strategy**: Smart caching for articles and assets
- **Background Sync**: Sync when back online
- **IndexedDB Storage**: Local storage for articles and bookmarks
- **Push Notifications**: Firebase Cloud Messaging integration (configured)
- **Network Detection**: Automatic offline/online state detection

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env.local` and configure:

```env
# Firebase Configuration (for push notifications)
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_VAPID_KEY=your-vapid-key

# API Configuration
VITE_API_BASE_URL=http://localhost:8000
VITE_USE_MOCK_API=true
```

### Backend Integration
The app expects a Django backend with these endpoints:
- `GET /api/articles` - List articles
- `GET /api/articles/{id}` - Get article details
- `GET /api/categories` - List categories
- `GET /api/search?q={query}` - Search articles
- `POST /api/subscribe` - Subscribe to notifications

Currently configured to use mock data when `VITE_USE_MOCK_API=true`.

## 📱 PWA Features

### Installation
1. Open the app in a supported browser (Chrome, Edge, Firefox)
2. Look for the "Install" prompt or menu option
3. Click "Install" to add to home screen/desktop

### Offline Usage
- Articles are automatically cached when viewed
- Bookmarked articles are stored locally
- Offline banner appears when disconnected
- Cached content available without internet

### Push Notifications
1. Configure Firebase project
2. Update Firebase config in environment variables
3. Deploy `firebase-messaging-sw.js` to public directory
4. User will be prompted to allow notifications

## 🎨 Styling & Themes

### SCSS Architecture
```
src/styles/
├── variables.scss    # Design tokens and variables
├── global.scss      # Global styles and utilities
└── components/      # Component-specific styles
```

### Dark Mode
- Automatic system preference detection
- Manual toggle in header
- Persistent user preference storage
- Smooth transitions between themes

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── Icons.jsx       # SVG icon components
│   ├── ArticleCard.jsx # Article display card
│   ├── NewsCard.jsx    # News item card
│   └── LoadingSkeleton.jsx # Loading states
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Article.jsx     # Article detail view
│   ├── Category.jsx    # Category pages
│   ├── Search.jsx      # Search results
│   ├── Bookmarks.jsx   # Saved articles
│   └── NotFound.jsx    # 404 page
├── hooks/              # Custom React hooks
│   ├── useApi.js       # API data fetching
│   ├── useTheme.js     # Theme management
│   ├── useNotifications.js # Push notifications
│   └── useOnlineStatus.js # Network detection
├── services/           # Service layer
│   ├── apiService.js   # HTTP client
│   ├── offlineStorage.js # IndexedDB operations
│   ├── serviceWorker.js # SW registration
│   └── firebaseNotificationService.js # FCM
└── styles/             # SCSS styling
    ├── variables.scss  # Design system
    └── global.scss     # Global styles
```

## 🔍 Testing

### PWA Validation
1. Use Chrome DevTools → Lighthouse
2. Run PWA audit
3. Verify installability and offline functionality

### Performance Testing
- Core Web Vitals optimization
- Image lazy loading
- Code splitting with React Router
- Service worker caching strategies

## 🚀 Deployment

### Build Optimization
```bash
npm run build
```

### PWA Requirements
- HTTPS deployment (required for service workers)
- Proper manifest.json configuration
- Service worker registration
- Icon assets in multiple sizes

### Recommended Hosting
- Netlify (automatic PWA support)
- Vercel (serverless deployment)
- Firebase Hosting (integrated with FCM)

## 🛠️ Customization

### Adding New Categories
1. Update category list in `Home.jsx`
2. Add route in `App.jsx`
3. Update API endpoints

### Styling Modifications
1. Edit design tokens in `variables.scss`
2. Component styles are modular and isolated
3. Dark mode variables in CSS custom properties

### API Integration
1. Replace mock service in `apiService.js`
2. Update endpoints for your backend
3. Modify data structure if needed

## 📊 Performance Features

- **Code Splitting**: Route-based splitting
- **Lazy Loading**: Images and components
- **Caching**: Aggressive asset caching
- **Compression**: Vite build optimization
- **Tree Shaking**: Dead code elimination

## 🎯 Browser Support

- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **PWA Features**: Chrome, Edge, Firefox (limited), Safari (iOS 14.3+)
- **Service Workers**: All modern browsers
- **IndexedDB**: Universal support

## 📈 Monitoring & Analytics

Ready for integration with:
- Google Analytics
- Firebase Analytics
- Web Vitals tracking
- Error monitoring (Sentry)

---

**Built with ❤️ using React, Vite, and modern web technologies**

Enjoy your modern, offline-capable news reading experience! 📰✨