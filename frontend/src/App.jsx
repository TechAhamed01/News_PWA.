import { useState, useEffect } from 'react';
import { fetchAllNews, fetchNewsByCategory } from './services/api';
import './styles/App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'technology', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'science', name: 'Science' },
    { id: 'sports', name: 'Sports' },
    { id: 'environment', name: 'Environment' },
    { id: 'culture', name: 'Culture' }
  ];

  useEffect(() => {
    // Handle online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    // Handle window resize
    const handleResize = () => setScreenWidth(window.innerWidth);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [isOnline, activeCategory]);

  const fetchArticles = async () => {
    if (!isOnline) {
      setLoading(false);
      return;
    }
    
    setLoading(true);
    try {
      let data;
      if (activeCategory === 'all') {
        data = await fetchAllNews();
      } else {
        data = await fetchNewsByCategory(activeCategory);
      }
      setArticles(data);
    } catch (error) {
      console.error('Failed to fetch articles:', error);
      // Fallback to mock data if API fails
      setArticles(mockArticles);
    } finally {
      setLoading(false);
    }
  };

  // Mock news data - fallback if API is not available
  const mockArticles = [
    {
      id: 1,
      title: "Breaking: New Technology Revolutionizes Web Development",
      excerpt: "A groundbreaking new framework promises to change how developers build modern web applications with improved performance and developer experience.",
      category: "technology",
      date: "2025-10-12",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      title: "Global Markets Respond to Economic Policy Changes",
      excerpt: "World markets show mixed reactions as major economies announce new fiscal measures aimed at stabilizing growth in uncertain times.",
      category: "business",
      date: "2025-10-11",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400"
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const handleRefresh = () => {
    fetchArticles();
  };

  return (
    <div className="app">
      {/* Online/Offline Status Indicator */}
      {!isOnline && (
        <div className="offline-banner">
          <div className="container">
            You are currently offline. Some features may be limited.
          </div>
        </div>
      )}
      
      {/* Header */}
      <header className="app-header">
        <div className="container">
          <div className="header-content">
            <h1 className="app-title">News<span>PWA</span></h1>
            <div className="header-actions">
              <button className="refresh-btn" onClick={handleRefresh} disabled={loading || !isOnline}>
                {loading ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="category-nav">
        <div className="container">
          <div className="category-list">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                disabled={!isOnline}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="app-main">
        <div className="container">
          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading latest news...</p>
            </div>
          ) : !isOnline && articles.length === 0 ? (
            <div className="offline-container">
              <div className="offline-icon">📡</div>
              <h2>No Internet Connection</h2>
              <p>You're offline. Please check your connection and try again.</p>
              <button className="retry-btn" onClick={() => window.location.reload()}>
                Retry
              </button>
            </div>
          ) : (
            <>
              <div className="articles-header">
                <h2>{activeCategory === 'all' ? 'Latest News' : categories.find(c => c.id === activeCategory)?.name}</h2>
                <p className="article-count">{filteredArticles.length} articles</p>
              </div>
              
              {filteredArticles.length > 0 ? (
                <div className="articles-grid">
                  {filteredArticles.map(article => (
                    <article key={article.id} className="article-card">
                      <div className="article-image">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1495020689067-95885607937b?auto=format&fit=crop&w=600&h=400';
                          }}
                        />
                      </div>
                      <div className="article-content">
                        <div className="article-meta">
                          <span className="article-category">{article.category}</span>
                          <span className="article-date">{article.date}</span>
                        </div>
                        <h3 className="article-title">{article.title}</h3>
                        <p className="article-excerpt">{article.excerpt}</p>
                        <div className="article-footer">
                          <span className="read-time">{article.readTime}</span>
                          <button className="read-more">Read More</button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="offline-container">
                  <div className="offline-icon">📰</div>
                  <h2>No Articles Found</h2>
                  <p>There are no articles available in this category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 News PWA App. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;