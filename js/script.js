// ==================== BANNER AUTO-CHANGE ==================== 
const bannerImages = ['assets/banner1.png', 'assets/banner2.png', 'assets/banner3.png'];
let currentBannerIndex = 0;

function changeBanner() {
    const bannerImage = document.getElementById('bannerImage');
    bannerImage.style.animation = 'fadeIn 0.5s ease-in-out';
    bannerImage.src = bannerImages[currentBannerIndex];
    currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
}

// Change banner every 2 seconds
setInterval(changeBanner, 2000);

// ==================== MODAL FUNCTIONS ==================== 
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }
});

// ==================== NEWS SECTION (Ready for Future Updates) ==================== 
// This function can be used to add news articles dynamically
function addNewsArticle(title, imageUrl, content) {
    const newsContainer = document.getElementById('newsContainer');
    const newsArticle = document.createElement('div');
    newsArticle.className = 'news-article';
    newsArticle.innerHTML = `
        <img src="${imageUrl}" alt="${title}">
        <div class="news-article-info">
            <h3>${title}</h3>
        </div>
    `;
    newsArticle.addEventListener('click', function() {
        alert(`${title}\n\n${content}`);
    });
    newsContainer.appendChild(newsArticle);
}

// Example: Uncomment to add a news article
// addNewsArticle('عنوان الخبر', 'assets/news-image.png', 'محتوى الخبر هنا');