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
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 glass rounded-2xl shadow-2xl z-40"
    >
      <div className="flex items-center p-2">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col items-center px-4 py-2 rounded-xl transition-all duration-200 ${
              item.active
                ? 'bg-gradient-to-r from-gradient-purple to-gradient-pink text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gradient-purple dark:hover:text-gradient-cyan'
            }`}
          >
            <item.icon className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default MobileNav;