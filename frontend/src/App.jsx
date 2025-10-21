import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import HeroSlider from './components/HeroSlider';
import NewsGrid from './components/NewsGrid';
import InstallPrompt from './components/InstallPrompt';
import { articles } from './data/mockData';

function App() {
  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 theme-transition">
        <Navbar />
        
        <main className="pb-20">
          <AnimatePresence>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HeroSlider articles={featuredArticles} />
            </motion.section>
          </AnimatePresence>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="container mx-auto px-4 py-8"
          >
            <NewsGrid articles={regularArticles} />
          </motion.section>
        </main>

        <MobileNav />
        <InstallPrompt />
      </div>
    </ThemeProvider>
  );
}

export default App;