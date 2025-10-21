import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Share2 } from 'lucide-react';
import { categories } from '../data/mockData';

const NewsCard = ({ article, index }) => {
  const category = categories.find(cat => cat.id === article.category) || categories[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group cursor-pointer"
    >
      <div className="glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1495020689067-95885607937b?w=800&h=500&fit=crop';
            }}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${category?.color || 'from-gradient-purple to-gradient-pink'} mix-blend-overlay`} />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${category?.color || 'from-gradient-purple to-gradient-pink'} backdrop-blur-sm`}>
              {category?.name || 'General'}
            </span>
          </div>

          {/* Share Button */}
          <button className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
            <Share2 className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min read</span>
            </div>
            <span>•</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>

          <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-gradient-purple dark:group-hover:text-gradient-cyan transition-colors">
            {article.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              By {article.author}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-gradient-purple to-gradient-pink text-white text-sm font-medium hover:shadow-lg transition-shadow"
            >
              Read More
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const NewsGrid = ({ articles }) => {
  // Group articles by category for better organization
  const articlesByCategory = articles.reduce((acc, article) => {
    const category = categories.find(cat => cat.id === article.category) || { name: 'General', id: 'general' };
    if (!acc[category.name]) {
      acc[category.name] = [];
    }
    acc[category.name].push(article);
    return acc;
  }, {});

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          Latest News
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Stay updated with the latest stories from around the world
        </p>
      </motion.div>

      {/* All Articles Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {articles.map((article, index) => (
          <NewsCard key={article.id} article={article} index={index} />
        ))}
      </motion.div>

      {/* Articles by Category Sections */}
      {Object.entries(articlesByCategory).map(([categoryName, categoryArticles], categoryIndex) => (
        <motion.section
          key={categoryName}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + categoryIndex * 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                {categoryName}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Latest {categoryName.toLowerCase()} news and updates
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2 rounded-full glass hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
            >
              View All
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.slice(0, 3).map((article, index) => (
              <NewsCard 
                key={article.id} 
                article={article} 
                index={index}
              />
            ))}
          </div>

          {categoryArticles.length > 3 && (
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-gradient-purple to-gradient-pink text-white font-medium hover:shadow-xl transition-shadow"
              >
                Load More {categoryName} News
              </motion.button>
            </div>
          )}
        </motion.section>
      ))}

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-6 p-3 rounded-full glass shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg 
          className="w-6 h-6 text-gray-700 dark:text-gray-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* Toast Notification for New Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 glass rounded-2xl p-4 shadow-2xl z-40 max-w-sm mx-4"
      >
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-gradient-to-r from-gradient-cyan to-gradient-blue rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            New articles available
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs bg-gradient-to-r from-gradient-purple to-gradient-pink text-white px-3 py-1 rounded-full font-medium"
          >
            Refresh
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsGrid;