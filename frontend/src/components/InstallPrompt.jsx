import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

const InstallPrompt = () => {
  const { isInstallable, installApp } = usePWAInstall();

  return (
    <AnimatePresence>
      {isInstallable && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="glass-card rounded-2xl p-4 shadow-2xl max-w-sm mx-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-gradient-purple to-gradient-pink">
                <Download className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">Install Daily News</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Get the best reading experience
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={installApp}
                  className="px-3 py-1 bg-gradient-to-r from-gradient-purple to-gradient-pink text-white text-sm rounded-lg font-medium hover:shadow-lg transition-shadow"
                >
                  Install
                </button>
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InstallPrompt;