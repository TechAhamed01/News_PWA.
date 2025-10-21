import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { categories } from '../data/mockData';

const HeroSlider = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (articles.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [articles.length]);

  const nextSlide = () => {
    if (articles.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    if (articles.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  if (!articles || articles.length === 0) {
    return (
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">No featured articles available</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Please check back later for updates</p>
        </div>
      </div>
    );
  }

  const currentArticle = articles[currentIndex];
  const category = categories.find(cat => cat.id === currentArticle?.category) || categories[0];

  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentArticle.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image with Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentArticle.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent ${category?.color || 'from-gradient-purple to-gradient-pink'} mix-blend-overlay`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {/* Category Badge */}
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${category?.color || 'from-gradient-purple to-gradient-pink'} backdrop-blur-sm`}>
                    {category?.name || 'General'}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{currentArticle.readTime} min read</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {currentArticle.title}
                </h1>

                {/* Excerpt */}
                <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl">
                  {currentArticle.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span>By {currentArticle.author}</span>
                  <span>•</span>
                  <span>{new Date(currentArticle.date).toLocaleDateString()}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full glass hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full glass hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;