// News data
const newsData = [
    {
        id: 1,
        title: "Smart Farming: The Future of Agriculture",
        category: "technology",
        summary: "Discover how IoT and AI are revolutionizing traditional farming practices, making agriculture more efficient and sustainable.",
        content: "Smart farming technologies are transforming the agricultural landscape. From automated irrigation systems to AI-powered crop monitoring, these innovations are helping farmers increase yields while reducing resource consumption. Key developments include precision agriculture, drone technology, and automated machinery.",
        date: "2024-03-15",
        views: 1200,
        featured: true
    },
    {
        id: 2,
        title: "New Government Subsidies for Organic Farming",
        category: "market",
        summary: "The government announces new subsidies to encourage farmers to transition to organic farming methods.",
        content: "In a bid to promote sustainable agriculture, the government has introduced new subsidies for farmers adopting organic farming practices. The scheme includes financial support for certification, training programs, and infrastructure development.",
        date: "2024-03-14",
        views: 850
    },
    {
        id: 3,
        title: "Monsoon Forecast: Above Average Rainfall Expected",
        category: "weather",
        summary: "Meteorological department predicts above-average rainfall for the upcoming monsoon season.",
        content: "The Indian Meteorological Department has released its monsoon forecast, predicting above-average rainfall for the upcoming season. This is good news for farmers, especially those in rain-fed agricultural regions.",
        date: "2024-03-13",
        views: 1500
    },
    {
        id: 4,
        title: "Breakthrough in Drought-Resistant Crops",
        category: "research",
        summary: "Scientists develop new varieties of drought-resistant crops that could revolutionize farming in arid regions.",
        content: "A team of agricultural scientists has successfully developed new varieties of drought-resistant crops. These new varieties show promising results in field trials, maintaining good yields even under water stress conditions.",
        date: "2024-03-12",
        views: 2000
    },
    {
        id: 5,
        title: "Agricultural Export Policy Update",
        category: "market",
        summary: "New policies aim to boost agricultural exports and improve market access for farmers.",
        content: "The government has announced updates to the agricultural export policy, focusing on improving market access and reducing trade barriers. The new policy includes measures to enhance quality standards and streamline export procedures.",
        date: "2024-03-11",
        views: 950
    },
    {
        id: 6,
        title: "Vertical Farming Gains Popularity in Urban Areas",
        category: "technology",
        summary: "Urban farmers are adopting vertical farming techniques to maximize space and reduce water usage.",
        content: "Vertical farming is becoming increasingly popular in urban areas, offering a sustainable solution to food production in cities. This innovative approach allows for year-round cultivation with minimal water usage and no pesticides.",
        date: "2024-03-10",
        views: 1800
    },
    {
        id: 7,
        title: "Revolutionary Soil Health Monitoring System Launched",
        category: "technology",
        summary: "New AI-powered soil monitoring system helps farmers optimize soil health and crop yields.",
        content: "A breakthrough in soil health monitoring has been achieved with the launch of a new AI-powered system. This innovative technology provides real-time analysis of soil conditions, nutrient levels, and moisture content, helping farmers make data-driven decisions for better crop management.",
        date: "2024-03-09",
        views: 1600
    },
    {
        id: 8,
        title: "Global Wheat Prices Hit Record High",
        category: "market",
        summary: "International wheat prices reach unprecedented levels due to supply chain disruptions.",
        content: "Global wheat prices have surged to record levels following supply chain disruptions and increased demand. Market analysts predict continued volatility in the coming months, affecting both farmers and consumers worldwide.",
        date: "2024-03-08",
        views: 2200
    },
    {
        id: 9,
        title: "New Organic Certification Standards Announced",
        category: "market",
        summary: "Updated organic certification standards aim to improve transparency and consumer trust.",
        content: "The agricultural regulatory body has announced new organic certification standards, introducing stricter guidelines and improved verification processes. These changes aim to enhance consumer trust and ensure the integrity of organic products in the market.",
        date: "2024-03-07",
        views: 1100
    },
    {
        id: 10,
        title: "Climate-Smart Agriculture Training Program",
        category: "research",
        summary: "New training program helps farmers adapt to climate change and reduce environmental impact.",
        content: "A comprehensive climate-smart agriculture training program has been launched to help farmers adapt to changing climate conditions. The program focuses on sustainable practices, water conservation, and reducing carbon footprint in agricultural operations.",
        date: "2024-03-06",
        views: 950
    },
    {
        id: 11,
        title: "Drone Technology for Precision Agriculture",
        category: "technology",
        summary: "Advanced drone systems revolutionize crop monitoring and spraying operations.",
        content: "The latest advancements in agricultural drone technology are transforming how farmers monitor and manage their crops. These sophisticated systems offer precise spraying capabilities, detailed crop health analysis, and efficient field mapping.",
        date: "2024-03-05",
        views: 1800
    },
    {
        id: 12,
        title: "Sustainable Irrigation Methods Show Promise",
        category: "research",
        summary: "New irrigation techniques demonstrate significant water savings while maintaining crop yields.",
        content: "Research findings show that innovative irrigation methods can reduce water usage by up to 40% while maintaining or improving crop yields. These sustainable approaches combine traditional knowledge with modern technology.",
        date: "2024-03-04",
        views: 1300
    }
];

// DOM Elements
const newsGrid = document.querySelector('.news-grid');
const searchInput = document.getElementById('newsSearch');
const filterButtons = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const modal = document.getElementById('newsModal');
const modalContent = document.getElementById('newsDetails');
const closeModal = document.querySelector('.close');

// Initialize the page
function initializePage() {
    renderNewsCards(newsData);
    setupEventListeners();
    addSortingOptions();
    addBookmarkFeature();
    setupInfiniteScroll();
    addArticlePreview();
}

// Render news cards
function renderNewsCards(newsToRender) {
    newsGrid.innerHTML = '';
    newsToRender.forEach(news => {
        if (!news.featured) {
            const card = createNewsCard(news);
            newsGrid.appendChild(card);
        }
    });
}

// Create a news card
function createNewsCard(news) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
        <div class="news-card-content">
            <span class="category">${news.category}</span>
            <h3>${news.title}</h3>
            <p>${news.summary}</p>
            <div class="meta">
                <span><i class="far fa-clock"></i> ${formatDate(news.date)}</span>
                <span><i class="far fa-eye"></i> ${formatViews(news.views)}</span>
            </div>
        </div>
    `;
    card.addEventListener('click', () => showNewsDetails(news));
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            handleFilters(button.dataset.category);
        });
    });

    // Modal functionality
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Load more functionality
    loadMoreBtn.addEventListener('click', loadMoreNews);
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredNews = newsData.filter(news => 
        news.title.toLowerCase().includes(searchTerm) ||
        news.summary.toLowerCase().includes(searchTerm) ||
        news.content.toLowerCase().includes(searchTerm)
    );
    renderNewsCards(filteredNews);
}

// Handle filters
function handleFilters(category) {
    const filteredNews = category === 'all' 
        ? newsData 
        : newsData.filter(news => news.category === category);
    renderNewsCards(filteredNews);
}

// Show news details in modal
function showNewsDetails(news) {
    modal.dataset.currentNews = JSON.stringify(news);
    modalContent.innerHTML = `
        <h2>${news.title}</h2>
        <div class="news-details">
            <div class="meta">
                <span><i class="far fa-clock"></i> ${formatDate(news.date)}</span>
                <span><i class="far fa-eye"></i> ${formatViews(news.views)}</span>
                <span class="category">${news.category}</span>
                <span class="reading-time"><i class="far fa-clock"></i> ${calculateReadingTime(news.content)}</span>
            </div>
            <p>${news.content}</p>
            <div class="share-section">
                <h4>Share this article</h4>
                ${addSocialSharing(news).outerHTML}
            </div>
        </div>
    `;
    modal.style.display = 'block';
    
    // Update bookmark button state
    const bookmarkedNews = JSON.parse(localStorage.getItem('bookmarkedNews') || '[]');
    const isBookmarked = bookmarkedNews.some(n => n.id === news.id);
    const bookmarkBtn = document.querySelector('.bookmark-btn');
    if (bookmarkBtn) {
        bookmarkBtn.innerHTML = isBookmarked 
            ? '<i class="fas fa-bookmark"></i> Bookmarked'
            : '<i class="far fa-bookmark"></i> Bookmark';
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
}

// Format views
function formatViews(views) {
    if (views >= 1000) {
        return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
}

// Load more news
function loadMoreNews() {
    const itemsPerPage = 6;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const moreNews = newsData.slice(start, end);
    
    if (moreNews.length > 0) {
        moreNews.forEach(news => {
            const card = createNewsCard(news);
            newsGrid.appendChild(card);
        });
        currentPage++;
    }
    
    isLoading = false;
}

// Add sorting functionality
function addSortingOptions() {
    const sortContainer = document.createElement('div');
    sortContainer.className = 'sort-options';
    sortContainer.innerHTML = `
        <select id="sortSelect">
            <option value="date-desc">Latest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="views-desc">Most Viewed</option>
            <option value="views-asc">Least Viewed</option>
        </select>
    `;
    document.querySelector('.news-filters').appendChild(sortContainer);
    
    document.getElementById('sortSelect').addEventListener('change', handleSort);
}

// Handle sorting
function handleSort() {
    const sortValue = document.getElementById('sortSelect').value;
    const [field, order] = sortValue.split('-');
    
    const sortedNews = [...newsData].sort((a, b) => {
        if (field === 'date') {
            return order === 'desc' 
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date);
        } else {
            return order === 'desc' 
                ? b.views - a.views
                : a.views - b.views;
        }
    });
    
    renderNewsCards(sortedNews);
}

// Add social sharing functionality
function addSocialSharing(news) {
    const shareButtons = document.createElement('div');
    shareButtons.className = 'share-buttons';
    shareButtons.innerHTML = `
        <button onclick="shareOnSocial('twitter', '${news.title}')">
            <i class="fab fa-twitter"></i> Twitter
        </button>
        <button onclick="shareOnSocial('facebook', '${news.title}')">
            <i class="fab fa-facebook"></i> Facebook
        </button>
        <button onclick="shareOnSocial('linkedin', '${news.title}')">
            <i class="fab fa-linkedin"></i> LinkedIn
        </button>
    `;
    return shareButtons;
}

// Share on social media
function shareOnSocial(platform, title) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    
    let shareUrl;
    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// Add reading time estimation
function calculateReadingTime(content) {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

// Add bookmark functionality
function addBookmarkFeature() {
    const bookmarkButton = document.createElement('button');
    bookmarkButton.className = 'bookmark-btn';
    bookmarkButton.innerHTML = '<i class="far fa-bookmark"></i> Bookmark';
    document.querySelector('.news-filters').appendChild(bookmarkButton);
    
    bookmarkButton.addEventListener('click', () => {
        const bookmarkedNews = JSON.parse(localStorage.getItem('bookmarkedNews') || '[]');
        const modal = document.getElementById('newsModal');
        if (modal.style.display === 'block') {
            const currentNews = JSON.parse(modal.dataset.currentNews);
            const isBookmarked = bookmarkedNews.some(n => n.id === currentNews.id);
            
            if (isBookmarked) {
                const updatedBookmarks = bookmarkedNews.filter(n => n.id !== currentNews.id);
                localStorage.setItem('bookmarkedNews', JSON.stringify(updatedBookmarks));
                bookmarkButton.innerHTML = '<i class="far fa-bookmark"></i> Bookmark';
            } else {
                bookmarkedNews.push(currentNews);
                localStorage.setItem('bookmarkedNews', JSON.stringify(bookmarkedNews));
                bookmarkButton.innerHTML = '<i class="fas fa-bookmark"></i> Bookmarked';
            }
        }
    });
}

// Add infinite scroll
function setupInfiniteScroll() {
    let isLoading = false;
    let currentPage = 1;
    const itemsPerPage = 6;
    
    window.addEventListener('scroll', () => {
        if (isLoading) return;
        
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            isLoading = true;
            loadMoreNews();
        }
    });
}

// Add article preview on hover
function addArticlePreview() {
    const cards = document.querySelectorAll('.news-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const news = newsData.find(n => n.title === card.querySelector('h3').textContent);
            if (news) {
                const preview = document.createElement('div');
                preview.className = 'article-preview';
                preview.innerHTML = `
                    <div class="preview-content">
                        <p>${news.content.substring(0, 150)}...</p>
                        <span class="reading-time">${calculateReadingTime(news.content)}</span>
                    </div>
                `;
                card.appendChild(preview);
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const preview = card.querySelector('.article-preview');
            if (preview) {
                preview.remove();
            }
        });
    });
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage); 