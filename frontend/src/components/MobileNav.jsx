import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, Grid3X3, User } from 'lucide-react';

const MobileNav = () => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Search' },
    { icon: Grid3X3, label: 'Categories' },
    { icon: User, label: 'Profile' },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 glass rounded-2xl shadow-2xl z-40 px-3 py-3 border border-white/20 dark:border-white/10 backdrop-blur-lg"
      style={{ minWidth: '280px' }}
    >
      <div className="flex items-center justify-between gap-2">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col items-center justify-center rounded-xl transition-all duration-200 w-16 h-16 ${
              item.active
                ? 'bg-gradient-to-r from-gradient-purple to-gradient-pink text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:bg-white/10 dark:hover:bg-black/10'
            }`}
          >
            <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
              item.active 
                ? 'bg-white/20' 
                : 'bg-white/10 dark:bg-black/10'
            }`}>
              <item.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium mt-1">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default MobileNav;