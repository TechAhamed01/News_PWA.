import { useState, useEffect } from 'react';
import './styles/App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Mock news data - in a real app, this would come from your Django backend
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
    },
    {
      id: 3,
      title: "Scientists Discover New Species in Remote Rainforest",
      excerpt: "Biologists document previously unknown creatures during expedition to uncharted territories, highlighting the importance of biodiversity conservation.",
      category: "science",
      date: "2025-10-10",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 4,
      title: "Championship Finals Draw Record-Breaking Viewership",
      excerpt: "Sports fans around the globe tune in for the most-watched event of the year, with streaming platforms reporting unprecedented engagement.",
      category: "sports",
      date: "2025-10-09",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 5,
      title: "Renewable Energy Investments Reach All-Time High",
      excerpt: "Global funding for sustainable technologies surpasses previous records as climate goals accelerate and green initiatives gain momentum.",
      category: "environment",
      date: "2025-10-08",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 6,
      title: "Cultural Festival Celebrates Diversity in Major Cities",
      excerpt: "Annual multicultural event brings together communities from around the world in celebration of art, music, and shared human experiences.",
      category: "culture",
      date: "2025-10-07",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&h=400"
    }
  ];

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
    // Simulate API call to Django backend
    const fetchArticles = () => {
      if (!isOnline) {
        setLoading(false);
        return;
      }
      
      setTimeout(() => {
        setArticles(mockArticles);
        setLoading(false);
      }, 1000);
    };

    fetchArticles();
  }, [isOnline]);

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setArticles([...mockArticles]);
      setLoading(false);
    }, 800);
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