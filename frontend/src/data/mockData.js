export const categories = [
  { id: 'tech', name: 'Technology', color: 'from-gradient-cyan to-gradient-blue' },
  { id: 'world', name: 'World', color: 'from-gradient-purple to-gradient-pink' },
  { id: 'business', name: 'Business', color: 'from-gradient-cyan to-gradient-blue' },
  { id: 'sports', name: 'Sports', color: 'from-gradient-orange to-gradient-red' },
  { id: 'entertainment', name: 'Entertainment', color: 'from-gradient-purple to-gradient-pink' },
];

export const articles = [
  {
    id: '1',
    title: 'AI Breakthrough Revolutionizes Healthcare Diagnostics',
    excerpt: 'New artificial intelligence system can detect diseases with 99% accuracy, transforming medical diagnostics worldwide.',
    content: 'A groundbreaking AI system developed by researchers at Stanford University has demonstrated remarkable accuracy in diagnosing various diseases from medical images. The system, which leverages deep learning algorithms, has shown 99% accuracy in early detection of conditions including cancer, cardiovascular diseases, and neurological disorders. This breakthrough promises to make advanced diagnostic capabilities accessible to healthcare facilities worldwide, potentially saving millions of lives through early intervention.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
    category: 'tech',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: 4,
    featured: true
  },
  {
    id: '2',
    title: 'Global Climate Summit Reaches Historic Agreement',
    excerpt: 'World leaders unite on ambitious climate targets with binding commitments for carbon neutrality by 2040.',
    content: 'In a historic moment for global environmental cooperation, world leaders at the United Nations Climate Summit have reached a comprehensive agreement that sets binding carbon neutrality targets for 2040. The agreement includes substantial funding for developing nations, technology transfer programs, and strict monitoring mechanisms. Environmental activists have hailed this as the most significant climate agreement since the Paris Accord, with concrete action plans and accountability measures.',
    image: 'https://images.unsplash.com/photo-1569163139394-de44cb54d0c2?w=800&h=500&fit=crop',
    category: 'world',
    author: 'James Rodriguez',
    date: '2024-01-14',
    readTime: 6,
    featured: true
  },
  {
    id: '3',
    title: 'Tech Giant Reports Record Quarterly Earnings',
    excerpt: 'Company shares surge 15% after exceeding revenue expectations and announcing major AI investments.',
    content: 'Tech conglomerate InnovateCorp has reported record-breaking quarterly earnings that surpassed all analyst expectations. The company announced a 45% year-over-year revenue growth, driven by strong performance in their cloud computing and artificial intelligence divisions. CEO Maria Gonzalez revealed plans to invest $50 billion in AI research and development over the next five years, signaling the company\'s commitment to maintaining technological leadership in the rapidly evolving digital landscape.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    category: 'business',
    author: 'Michael Thompson',
    date: '2024-01-14',
    readTime: 3,
    featured: false
  },
  {
    id: '4',
    title: 'Underdog Team Wins Championship in Dramatic Final',
    excerpt: 'Rookie quarterback leads stunning comeback in the final minutes of the championship game.',
    content: 'In one of the most dramatic championship games in recent memory, the underdog Phoenix Ravens staged an incredible fourth-quarter comeback to claim their first-ever championship title. Rookie quarterback Alex Johnson, playing with a shoulder injury, threw three touchdown passes in the final five minutes to secure a 35-34 victory. The win marks a Cinderella story for the franchise that finished last in the league just two seasons ago.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop',
    category: 'sports',
    author: 'Lisa Wang',
    date: '2024-01-13',
    readTime: 5,
    featured: true
  },
  {
    id: '5',
    title: 'Award-Winning Film Director Announces New Project',
    excerpt: 'Acclaimed filmmaker returns with ambitious sci-fi epic featuring all-star cast.',
    content: 'Oscar-winning director Elena Martinez has officially announced her next project, "Stellar Drift," a science fiction epic that promises to push the boundaries of visual storytelling. The film will feature an all-star cast including several Academy Award winners and is scheduled to begin production next month. Martinez described the project as "a deeply human story set against the vast canvas of interstellar exploration," with groundbreaking visual effects being developed specifically for the film.',
    image: 'https://images.unsplash.com/photo-1489599809505-fb44931c26e3?w=800&h=500&fit=crop',
    category: 'entertainment',
    author: 'Robert Kim',
    date: '2024-01-13',
    readTime: 4,
    featured: false
  },
  {
    id: '6',
    title: 'Breakthrough in Quantum Computing Announced',
    excerpt: 'Scientists achieve quantum supremacy with new 512-qubit processor.',
    content: 'Researchers at the Quantum Research Institute have announced a major breakthrough in quantum computing, achieving quantum supremacy with their new 512-qubit processor. The system successfully solved a problem in three minutes that would take the world\'s most powerful supercomputer 10,000 years to complete. This milestone opens up new possibilities for drug discovery, climate modeling, and cryptography, potentially revolutionizing multiple industries.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop',
    category: 'tech',
    author: 'Dr. Amanda Zhou',
    date: '2024-01-12',
    readTime: 7,
    featured: false
  },
  {
    id: '7',
    title: 'Major Trade Deal Signed Between Economic Powers',
    excerpt: 'New agreement eliminates tariffs on 95% of goods, creating the world\'s largest free trade zone.',
    content: 'In a move that will reshape global trade, the major economic powers have signed a comprehensive trade agreement that eliminates tariffs on 95% of goods and establishes the world\'s largest free trade zone. The deal includes provisions for digital trade, intellectual property protection, and environmental standards. Economists predict the agreement could boost global GDP by 3% annually and create millions of new jobs across participating nations.',
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&h=500&fit=crop',
    category: 'business',
    author: 'Jennifer Lopez',
    date: '2024-01-12',
    readTime: 5,
    featured: false
  },
  {
    id: '8',
    title: 'Space Agency Reveals Mars Colony Plans',
    excerpt: 'Ambitious timeline set for establishing permanent human settlement on Mars by 2035.',
    content: 'The Global Space Agency has unveiled detailed plans for establishing the first permanent human settlement on Mars, with an ambitious timeline targeting 2035 for the initial crew landing. The comprehensive plan includes developing sustainable life support systems, radiation protection habitats, and in-situ resource utilization technology. The agency\'s director called this "humanity\'s next great leap," comparing it to the Apollo moon landings in historical significance.',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=500&fit=crop',
    category: 'world',
    author: 'David Park',
    date: '2024-01-11',
    readTime: 6,
    featured: false
  },
  {
    id: '9',
    title: 'Olympic Champion Announces Comeback',
    excerpt: 'Gold medalist returns to training after three-year hiatus, targets next Olympic Games.',
    content: 'Four-time Olympic gold medalist swimmer Marcus Johnson has announced his return to competitive swimming after a three-year hiatus. The champion, who holds multiple world records, revealed he has been training secretly for the past six months and feels "better than ever." His coach confirmed they are targeting the next Olympic Games, where Johnson could become the most decorated Olympian in his sport\'s history.',
    image: 'https://images.unsplash.com/photo-1540496905036-5937c10647cc?w=800&h=500&fit=crop',
    category: 'sports',
    author: 'Rachel Green',
    date: '2024-01-11',
    readTime: 3,
    featured: false
  },
  {
    id: '10',
    title: 'Streaming Platform Launches Interactive Series',
    excerpt: 'Groundbreaking format allows viewers to influence story outcomes in real-time.',
    content: 'Leading streaming service VisionStream has launched an innovative interactive series that allows viewers to influence story outcomes through real-time voting. The psychological thriller "Crossroads" features multiple branching narratives and endings based on audience decisions. Early reviews praise the format for creating unprecedented viewer engagement and potentially revolutionizing how stories are told in the digital age.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
    category: 'entertainment',
    author: 'Thomas Reed',
    date: '2024-01-10',
    readTime: 4,
    featured: false
  }
];