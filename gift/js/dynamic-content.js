/* ========================================
   S N Gift - Dynamic Content Loader
   Loads data from localStorage to display on website
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    loadDynamicContent();
});

// Load all dynamic content
function loadDynamicContent() {
    try {
        const storedData = localStorage.getItem('snGiftData');
        
        if (!storedData) {
            console.log('No admin data found, using default HTML content');
            return; // Use default HTML content
        }
        
        const data = JSON.parse(storedData);
        
        // Load Products
        if (data.products && data.products.length > 0) {
            loadProducts(data.products);
        }
        
        // Load Categories
        if (data.categories && data.categories.length > 0) {
            loadCategories(data.categories);
        }
        
        // Load Features (Why Choose Us)
        if (data.features && data.features.length > 0) {
            loadFeatures(data.features);
        }
        
        // Load Reviews
        if (data.reviews && data.reviews.length > 0) {
            loadReviews(data.reviews);
        }
        
        // Load Statistics
        if (data.statistics) {
            loadStatistics(data.statistics);
        }
        
        // Load Contact Info
        if (data.contact) {
            loadContactInfo(data.contact);
        }
        
        // Load Instagram Gallery
        if (data.instagram && data.instagram.length > 0) {
            loadInstagramGallery(data.instagram);
        }
        
        console.log('✅ Dynamic content loaded successfully!');
    } catch (error) {
        console.error('Error loading dynamic content:', error);
    }
}

// Load Products Section
function loadProducts(products) {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;
    
    const productsHTML = products.map(product => {
        const badgeHTML = product.badge ? 
            `<div class="product-badge ${product.badge === 'New' ? 'new' : ''}">${product.badge}</div>` : '';
        
        return `
            <div class="product-card" data-category="${product.category}">
                ${badgeHTML}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-actions">
                        <a href="https://wa.me/918511295508?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}" class="action-btn whatsapp">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="tel:+918511295508" class="action-btn call">
                            <i class="fas fa-phone"></i>
                        </a>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-price">₹${product.price.toLocaleString()}</p>
                    <a href="https://wa.me/918511295508?text=Order%20${encodeURIComponent(product.name)}" class="btn-order">
                        <i class="fab fa-whatsapp"></i> Order on WhatsApp
                    </a>
                </div>
            </div>
        `;
    }).join('');
    
    productsGrid.innerHTML = productsHTML;
}

// Load Categories Section
function loadCategories(categories) {
    const categoriesGrid = document.querySelector('.categories-grid');
    if (!categoriesGrid) return;
    
    const categoriesHTML = categories.map(category => `
        <div class="category-card">
            <div class="category-icon">
                <i class="${category.icon}"></i>
            </div>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
            <a href="#products" class="category-link">Explore <i class="fas fa-arrow-right"></i></a>
        </div>
    `).join('');
    
    categoriesGrid.innerHTML = categoriesHTML;
}

// Load Features Section (Why Choose Us)
function loadFeatures(features) {
    const featuresGrid = document.querySelector('.features-grid');
    if (!featuresGrid) return;
    
    const featuresHTML = features.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">
                <i class="${feature.icon}"></i>
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');
    
    featuresGrid.innerHTML = featuresHTML;
}

// Load Reviews Section
function loadReviews(reviews) {
    const reviewsGrid = document.querySelector('.reviews-grid');
    if (!reviewsGrid) return;
    
    const reviewsHTML = reviews.map(review => `
        <div class="review-card">
            <div class="stars">
                ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
            </div>
            <p class="review-text">"${review.text}"</p>
            <div class="reviewer">
                <div class="reviewer-name">${review.name}</div>
                <div class="reviewer-location">${review.location}</div>
            </div>
        </div>
    `).join('');
    
    reviewsGrid.innerHTML = reviewsHTML;
}

// Load Statistics
function loadStatistics(stats) {
    // Update stats in About section
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length >= 3) {
        // Years Experience
        const yearsStat = statCards[0].querySelector('.stat-number');
        if (yearsStat) yearsStat.textContent = stats.yearsExperience + '+';
        
        // Happy Customers
        const customersStat = statCards[1].querySelector('.stat-number');
        if (customersStat) customersStat.textContent = stats.happyCustomers;
        
        // Gifts Delivered
        const giftsStat = statCards[2].querySelector('.stat-number');
        if (giftsStat) giftsStat.textContent = stats.giftsDelivered + '+';
    }
    
    // Update overall rating
    const ratingNumber = document.querySelector('.rating-number');
    if (ratingNumber) ratingNumber.textContent = stats.overallRating;
}

// Load Contact Information
function loadContactInfo(contact) {
    // Update address
    const addressCards = document.querySelectorAll('.info-card');
    if (addressCards.length >= 3) {
        // Address
        const addressPara = addressCards[0].querySelector('p');
        if (addressPara) addressPara.innerHTML = contact.address.replace(/\n/g, '<br>');
        
        // Phone
        const phonePara = addressCards[1].querySelector('p');
        if (phonePara) phonePara.innerHTML = `${contact.phone1}<br>${contact.phone2}`;
        
        // Hours
        const hoursPara = addressCards[2].querySelector('p');
        if (hoursPara) hoursPara.innerHTML = `${contact.weekdayHours}<br>${contact.sundayHours}`;
    }
    
    // Update Google Maps
    const mapIframe = document.querySelector('.map-container iframe');
    if (mapIframe && contact.mapsEmbed) {
        mapIframe.src = contact.mapsEmbed;
    }
    
    // Update social links in footer
    updateSocialLinks(contact);
}

// Update Social Links
function updateSocialLinks(contact) {
    // Update WhatsApp links
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        if (!link.href.includes('text=')) {
            link.href = `https://wa.me/${contact.whatsappNumber.replace('+', '')}`;
        }
    });
    
    // Update Instagram handle
    const instaHandles = document.querySelectorAll('[href*="@sn_gifteez"]');
    instaHandles.forEach(el => {
        el.setAttribute('href', `https://www.instagram.com/${contact.instagramHandle.replace('@', '')}/`);
    });
}

// Load Instagram Gallery
function loadInstagramGallery(images) {
    const instagramGrid = document.querySelector('.instagram-grid');
    if (!instagramGrid) return;
    
    const instagramHTML = images.map(item => `
        <div class="insta-item">
            <a href="https://www.instagram.com/sn_gifteez/" target="_blank">
                <img src="${item.image}" alt="Instagram Post">
                <div class="insta-overlay">
                    <i class="fab fa-instagram"></i>
                </div>
            </a>
        </div>
    `).join('');
    
    instagramGrid.innerHTML = instagramHTML;
}
