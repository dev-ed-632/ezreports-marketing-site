// Blog articles data (moved from blogdata.js)
const blogArticles = [
  {
    id: 1,
    title: "The Future of Reporting: Trends for 2025",
    summary: "Explore the latest trends shaping the reporting landscape in 2025, from AI-driven insights to real-time dashboards.",
    author: "Alex Morgan",
    date: "2025-01-10",
    tags: ["Reporting", "Trends", "AI"],
    category: "Reporting",
    image: "images/blog1.png",
    featured: true
  },
  {
    id: 2,
    title: "Why Data Security Matters in Business Analytics",
    summary: "Understand the importance of data security in analytics and how to protect your business intelligence workflows.",
    author: "Jamie Lee",
    date: "2024-12-15",
    tags: ["Security", "Analytics"],
    category: "Analytics",
    image: "images/blog2.png",
    featured: true
  },
  {
    id: 3,
    title: "5 Ways to Improve Your Dashboard Design",
    summary: "Practical tips to create dashboards that are both beautiful and actionable for your team.",
    author: "Morgan Patel",
    date: "2024-11-20",
    tags: ["Dashboards", "Design", "Tips"],
    category: "Dashboards",
    image: "images/blog3.png",
    featured: false
  },
  {
    id: 4,
    title: "Mastering Data Visualization for Better Insights",
    summary: "Learn how to turn complex data into clear, compelling visuals that drive smarter decisions.",
    author: "Taylor Brooks",
    date: "2024-10-05",
    tags: ["Data Viz", "Business"],
    category: "Data Visualization",
    image: "images/blog1.png",
    featured: false
  },
  {
    id: 5,
    title: "Automating Reports: Save Time, Reduce Errors",
    summary: "Discover how automation can streamline your reporting process and eliminate manual mistakes.",
    author: "Jordan Kim",
    date: "2024-09-18",
    tags: ["Automation", "Reporting"],
    category: "Reporting",
    image: "images/blog1.png",
    featured: false
  }
];

const fallbackImages = [
  'images/blog1.png',
  'images/blog2.png',
  'images/blog3.png'
];

function getArticleImage(article, idx) {
  if (article.image && article.image.trim() !== '') return article.image;
  return fallbackImages[idx % fallbackImages.length];
}

// --- DOM Elements ---
const featuredContainer = document.getElementById('blog-featured');
const filtersContainer = document.getElementById('blog-filters');
const articlesContainer = document.getElementById('blog-articles');

// --- State ---
let selectedFilter = 'All';

// --- Helpers ---
function getAllTags() {
  const tags = new Set();
  blogArticles.forEach(a => a.tags.forEach(t => tags.add(t)));
  return Array.from(tags);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

// --- Renderers ---
function renderFeatured() {
  const featured = blogArticles.filter(a => a.featured).slice(0,2);
  featuredContainer.innerHTML = featured.map((article, idx) => `
    <a href="blog-detail.html" class="blog-featured-link" tabindex="0" aria-label="Read more about ${article.title}" style="text-decoration:none;color:inherit;display:block;">
      <div class="blog-featured-card">
        <div class="blog-featured-img-wrap">
          <img src="${getArticleImage(article, idx)}" alt="${article.title}" class="blog-featured-img">
        </div>
        <div class="blog-featured-content">
          <div class="blog-featured-title">${article.title}</div>
          <div class="blog-featured-summary">${article.summary}</div>
          <div class="blog-featured-meta">
            <span class="blog-featured-author"><img src="images/avatar-default.png" class="blog-featured-avatar" alt="${article.author}"> ${article.author} &bull; ${formatDate(article.date)}</span>
            <span class="blog-featured-tag">${article.tags[0]}</span>
          </div>
        </div>
      </div>
    </a>
  `).join('');
}

function renderFilters() {
  const tags = getAllTags();
  filtersContainer.innerHTML = [
    `<button class="blog-filter-pill${selectedFilter==='All' ? ' active' : ''}" data-filter="All">All Articles</button>`,
    ...tags.map(tag => `<button class="blog-filter-pill${selectedFilter===tag ? ' active' : ''}" data-filter="${tag}">${tag}</button>`)
  ].join('');
}

function renderArticles() {
  let filtered = blogArticles.filter(a => !a.featured);
  if (selectedFilter !== 'All') {
    filtered = filtered.filter(a => a.tags.includes(selectedFilter));
  }
  articlesContainer.innerHTML = filtered.map((article, idx) => `
    <a href="blog-detail.html" class="blog-article-link" tabindex="0" aria-label="Read more about ${article.title}" style="text-decoration:none;color:inherit;display:block;">
      <div class="blog-article-card">
        <div class="blog-article-img-wrap">
          <img src="${getArticleImage(article, idx)}" alt="${article.title}" class="blog-article-img">
        </div>
        <div class="blog-article-content">
          <div class="blog-article-category">${article.tags[0]}</div>
          <div class="blog-article-title">${article.title}</div>
          <div class="blog-article-summary">${article.summary}</div>
        </div>
      </div>
    </a>
  `).join('');
}

// --- Event Listeners ---
filtersContainer?.addEventListener('click', e => {
  if (e.target.matches('.blog-filter-pill')) {
    selectedFilter = e.target.dataset.filter;
    renderFilters();
    renderArticles();
  }
});

// --- Initial Render ---
renderFeatured();
renderFilters();
renderArticles();
