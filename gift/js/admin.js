/* ========================================
   S N Gift - Admin Panel JavaScript
   Complete Management System
   ======================================== */

// ========================================
// INITIALIZATION & DATA MANAGEMENT
// ========================================

// Default Data (will be stored in localStorage)
const defaultData = {
    products: [
        {
            id: '1',
            name: 'Luxury Gift Box',
            category: 'birthday',
            price: 1499,
            image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=400&h=400&fit=crop',
            badge: 'Bestseller'
        },
        {
            id: '2',
            name: 'Romantic Hamper',
            category: 'anniversary',
            price: 2299,
            image: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400&h=400&fit=crop',
            badge: ''
        },
        {
            id: '3',
            name: 'Couple Gift Set',
            category: 'couple',
            price: 1899,
            image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400&h=400&fit=crop',
            badge: ''
        },
        {
            id: '4',
            name: 'Personalized Frame',
            category: 'customized',
            price: 999,
            image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=400&h=400&fit=crop',
            badge: 'New'
        },
        {
            id: '5',
            name: 'Surprise Box',
            category: 'birthday',
            price: 1699,
            image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop',
            badge: ''
        },
        {
            id: '6',
            name: 'Premium Collection',
            category: 'anniversary',
            price: 3499,
            image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=400&fit=crop',
            badge: ''
        }
    ],
    
    categories: [
        { id: '1', name: 'Birthday Gifts', icon: 'fas fa-birthday-cake', description: 'Make birthdays special with our curated selection' },
        { id: '2', name: 'Anniversary Gifts', icon: 'fas fa-rings-wedding', description: 'Celebrate love with romantic and elegant gifts' },
        { id: '3', name: 'Couple Gifts', icon: 'fas fa-heart', description: 'Perfect presents for couples who have everything' },
        { id: '4', name: 'Surprise Gift Boxes', icon: 'fas fa-box-open', description: 'Mystery boxes filled with delightful surprises' },
        { id: '5', name: 'Customized Gifts', icon: 'fas fa-magic', description: 'Personalized gifts that touch the heart' },
        { id: '6', name: 'Decorative Items', icon: 'fas fa-home', description: 'Beautiful decor pieces for every occasion' }
    ],
    
    features: [
        { id: '1', title: '16+ Years Experience', icon: 'fas fa-medal', description: 'Decades of expertise in curating perfect gifts' },
        { id: '2', title: 'Premium Quality Gifts', icon: 'fas fa-gem', description: 'Only the finest products for your loved ones' },
        { id: '3', title: 'Custom Gift Options', icon: 'fas fa-palette', description: 'Personalized gifts tailored to your preferences' },
        { id: '4', title: 'Trusted by Hundreds', icon: 'fas fa-users', description: '474+ happy customers can\'t be wrong' }
    ],
    
    reviews: [
        { id: '1', name: 'Rajesh Patel', location: 'Ahmedabad', rating: 5, text: 'Amazing collection! I ordered an anniversary hamper and my wife absolutely loved it. The quality was exceptional and the presentation was beautiful.' },
        { id: '2', name: 'Priya Sharma', location: 'Gandhinagar', rating: 5, text: 'S N Gift has been my go-to for all special occasions. Their customized gifts are truly special and the service is outstanding!' },
        { id: '3', name: 'Amit Desai', location: 'Surat', rating: 5, text: 'Excellent quality and timely delivery. The surprise gift box exceeded my expectations. Highly recommended!' }
    ],
    
    instagram: [
        { id: '1', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop' },
        { id: '2', image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=400&h=400&fit=crop' },
        { id: '3', image: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400&h=400&fit=crop' },
        { id: '4', image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400&h=400&fit=crop' },
        { id: '5', image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=400&h=400&fit=crop' },
        { id: '6', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop' }
    ],
    
    contact: {
        address: 'F/7 to 15, Shailly Complex, Surdhara Circle,\nNear SAL Hospital Road, Thaltej,\nAhmedabad – 380054',
        phone1: '+91 85112 95508',
        phone2: '+91 79268 58588',
        weekdayHours: 'Monday - Saturday: 10:00 AM - 9:00 PM',
        sundayHours: 'Sunday: By Appointment',
        instagramHandle: '@sn_gifteez',
        whatsappNumber: '+91 8511295508',
        mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5!2d72.5!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzAwLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890'
    },
    
    statistics: {
        yearsExperience: 16,
        happyCustomers: 474,
        giftsDelivered: 1000,
        overallRating: 4.9
    }
};

// Initialize localStorage if not exists
function initializeData() {
    if (!localStorage.getItem('snGiftData')) {
        localStorage.setItem('snGiftData', JSON.stringify(defaultData));
    }
}

// Get data from localStorage
function getData(key) {
    const data = JSON.parse(localStorage.getItem('snGiftData'));
    return key ? data[key] : data;
}

// Save data to localStorage
function saveData(key, value) {
    const data = getData();
    data[key] = value;
    localStorage.setItem('snGiftData', JSON.stringify(data));
}

// Generate unique ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// ========================================
// AUTHENTICATION
// ========================================

let isLoggedIn = false;

// Check login status
function checkAuth() {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
        isLoggedIn = true;
        showDashboard();
    }
}

// Login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication (in production, use proper backend)
    if (username === 'admin' && password === 'admin123') {
        sessionStorage.setItem('isLoggedIn', 'true');
        isLoggedIn = true;
        showToast('Login successful!', 'success');
        showDashboard();
    } else {
        showToast('Invalid credentials!', 'error');
    }
});

// Logout
document.getElementById('logoutBtn')?.addEventListener('click', function() {
    sessionStorage.removeItem('isLoggedIn');
    isLoggedIn = false;
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('adminDashboard').style.display = 'none';
    showToast('Logged out successfully!', 'success');
});

// Show dashboard after login
function showDashboard() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'flex';
    loadDashboard();
}

// ========================================
// NAVIGATION & UI
// ========================================

// Sidebar navigation
document.querySelectorAll('.nav-item')?.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all items
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Get section to show
        const section = this.getAttribute('data-section');
        showSection(section);
    });
});

// Menu toggle for mobile
document.getElementById('menuToggle')?.addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('collapsed');
});

// Show specific section
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Update page title
    const titles = {
        dashboard: 'Dashboard',
        products: 'Products Management',
        categories: 'Categories Management',
        features: 'Features Management',
        reviews: 'Reviews Management',
        instagram: 'Instagram Gallery',
        contact: 'Contact Information',
        stats: 'Statistics'
    };
    
    document.getElementById('pageTitle').textContent = titles[sectionName] || 'Dashboard';
    
    // Show selected section
    document.getElementById(`${sectionName}Section`).classList.add('active');
    
    // Load data for section
    loadSectionData(sectionName);
    
    // Update sidebar active state
    document.querySelectorAll('.nav-item').forEach(nav => {
        nav.classList.remove('active');
        if (nav.getAttribute('data-section') === sectionName) {
            nav.classList.add('active');
        }
    });
}

// Load section data
function loadSectionData(sectionName) {
    switch(sectionName) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'products':
            loadProducts();
            break;
        case 'categories':
            loadCategories();
            break;
        case 'features':
            loadFeatures();
            break;
        case 'reviews':
            loadReviews();
            break;
        case 'instagram':
            loadInstagram();
            break;
        case 'contact':
            loadContact();
            break;
        case 'stats':
            loadStatistics();
            break;
    }
}

// ========================================
// DASHBOARD
// ========================================

function loadDashboard() {
    const products = getData('products');
    const categories = getData('categories');
    const reviews = getData('reviews');
    const features = getData('features');
    const statistics = getData('statistics');
    
    // Update stat cards
    document.getElementById('dashProductCount').textContent = products.length;
    document.getElementById('dashCategoryCount').textContent = categories.length;
    document.getElementById('dashReviewCount').textContent = reviews.length;
    document.getElementById('dashFeatureCount').textContent = features.length;
    
    // Update badges in sidebar
    document.getElementById('productCount').textContent = products.length;
    document.getElementById('reviewCount').textContent = reviews.length;
    
    // Load Enhanced Analytics
    loadProductAnalytics(products);
    loadCategoryDistribution(products, categories);
    loadReviewAnalytics(reviews);
    loadBusinessMetrics(statistics);
    loadPriceRangeAnalysis(products);
    
    // Load recent products
    const recentProductsHtml = products.slice(0, 3).map(product => `
        <div style="display: flex; gap: 10px; margin-bottom: 15px; align-items: center;">
            <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;">
            <div>
                <h4 style="font-size: 0.95rem; margin-bottom: 3px;">${product.name}</h4>
                <p style="color: var(--primary-color); font-weight: 600;">₹${product.price.toLocaleString()}</p>
            </div>
        </div>
    `).join('');
    
    document.getElementById('recentProducts').innerHTML = recentProductsHtml || '<p>No products yet</p>';
    
    // Load recent reviews
    const recentReviewsHtml = reviews.slice(0, 3).map(review => `
        <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <strong>${review.name}</strong>
                <span style="color: var(--gold);">${'⭐'.repeat(review.rating)}</span>
            </div>
            <p style="color: var(--gray); font-size: 0.85rem;">${review.location}</p>
            <p style="font-size: 0.9rem; margin-top: 5px; color: #666;">\"${review.text.substring(0, 80)}...\"</p>
        </div>
    `).join('');
    
    document.getElementById('recentReviews').innerHTML = recentReviewsHtml || '<p>No reviews yet</p>';
}

// Product Analytics
function loadProductAnalytics(products) {
    if (products.length === 0) {
        document.getElementById('avgProductPrice').textContent = '₹0';
        document.getElementById('highestPrice').textContent = '₹0';
        document.getElementById('lowestPrice').textContent = '₹0';
        document.getElementById('productsWithBadges').textContent = '0';
        document.getElementById('totalInventoryValue').textContent = '₹0';
        return;
    }
    
    const prices = products.map(p => p.price);
    const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length;
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);
    const withBadges = products.filter(p => p.badge).length;
    const totalValue = prices.reduce((a, b) => a + b, 0);
    
    document.getElementById('avgProductPrice').textContent = `₹${Math.round(avgPrice).toLocaleString()}`;
    document.getElementById('highestPrice').textContent = `₹${maxPrice.toLocaleString()}`;
    document.getElementById('lowestPrice').textContent = `₹${minPrice.toLocaleString()}`;
    document.getElementById('productsWithBadges').textContent = withBadges;
    document.getElementById('totalInventoryValue').textContent = `₹${totalValue.toLocaleString()}`;
}

// Category Distribution
function loadCategoryDistribution(products, categories) {
    const container = document.getElementById('categoryDistribution');
    
    if (products.length === 0) {
        container.innerHTML = '<p style="color: var(--gray); text-align: center;">No products to analyze</p>';
        return;
    }
    
    const categoryCount = {};
    products.forEach(product => {
        const cat = product.category.toLowerCase();
        categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    });
    
    const html = Object.entries(categoryCount).map(([cat, count]) => {
        const percentage = (count / products.length) * 100;
        const catName = categories.find(c => c.name.toLowerCase() === cat)?.name || cat.charAt(0).toUpperCase() + cat.slice(1);
        
        return `
            <div class="category-bar">
                <div class="category-bar-header">
                    <span class="category-bar-name">${catName}</span>
                    <span class="category-bar-count">${count} products (${Math.round(percentage)}%)</span>
                </div>
                <div class="category-progress-bar">
                    <div class="category-progress-fill" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = html;
}

// Review Analytics
function loadReviewAnalytics(reviews) {
    if (reviews.length === 0) {
        document.getElementById('avgRating').textContent = '0⭐';
        document.getElementById('fiveStarReviews').textContent = '0';
        document.getElementById('totalReviewers').textContent = '0';
        document.getElementById('topLocations').textContent = '-';
        return;
    }
    
    const totalStars = reviews.reduce((sum, r) => sum + r.rating, 0);
    const avgRating = totalStars / reviews.length;
    const fiveStars = reviews.filter(r => r.rating === 5).length;
    
    // Get top locations
    const locationCount = {};
    reviews.forEach(review => {
        locationCount[review.location] = (locationCount[review.location] || 0) + 1;
    });
    
    const topLocations = Object.entries(locationCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([loc, count]) => `${loc} (${count})`)
        .join(', ');
    
    document.getElementById('avgRating').textContent = `${avgRating.toFixed(1)}⭐`;
    document.getElementById('fiveStarReviews').textContent = fiveStars;
    document.getElementById('totalReviewers').textContent = reviews.length;
    document.getElementById('topLocations').textContent = topLocations;
}

// Business Metrics
function loadBusinessMetrics(stats) {
    document.getElementById('bizYears').textContent = stats.yearsExperience + '+';
    document.getElementById('bizCustomers').textContent = stats.happyCustomers.toLocaleString();
    document.getElementById('bizGifts').textContent = stats.giftsDelivered.toLocaleString() + '+';
    document.getElementById('bizRating').textContent = `${stats.overallRating}/5`;
}

// Price Range Analysis
function loadPriceRangeAnalysis(products) {
    const container = document.getElementById('priceRangeBars');
    
    if (products.length === 0) {
        container.innerHTML = '<p style="color: var(--gray); text-align: center;">No products to analyze</p>';
        return;
    }
    
    const ranges = [
        { label: 'Under ₹1000', min: 0, max: 999 },
        { label: '₹1000-₹1500', min: 1000, max: 1500 },
        { label: '₹1500-₹2000', min: 1501, max: 2000 },
        { label: '₹2000-₹2500', min: 2001, max: 2500 },
        { label: 'Above ₹2500', min: 2501, max: Infinity }
    ];
    
    const maxCount = Math.max(...ranges.map(range => 
        products.filter(p => p.price >= range.min && p.price <= range.max).length
    ));
    
    const html = ranges.map(range => {
        const count = products.filter(p => p.price >= range.min && p.price <= range.max).length;
        const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
        
        return `
            <div class="price-bar-item">
                <span class="price-bar-label">${range.label}</span>
                <div class="price-bar-container">
                    <div class="price-bar-fill" style="width: ${percentage}%">
                        <span class="price-bar-value">${count} products</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = html;
}

// ========================================
// PRODUCTS MANAGEMENT
// ========================================

function loadProducts() {
    const products = getData('products');
    const tbody = document.getElementById('productsTableBody');
    
    tbody.innerHTML = products.map(product => `
        <tr>
            <td><img src="${product.image}" alt="${product.name}"></td>
            <td>${product.name}</td>
            <td><span style="text-transform: capitalize;">${product.category}</span></td>
            <td>₹${product.price.toLocaleString()}</td>
            <td>${product.badge ? `<span style="background: ${product.badge === 'New' ? 'var(--primary-color)' : 'var(--gold)'}; color: white; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem;">${product.badge}</span>` : '-'}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editProduct('${product.id}')"><i class="fas fa-edit"></i> Edit</button>
                    <button class="btn-delete" onclick="deleteProduct('${product.id}')"><i class="fas fa-trash"></i> Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function openProductModal(productId = null) {
    const modal = document.getElementById('productModal');
    const form = document.getElementById('productForm');
    
    form.reset();
    
    if (productId) {
        const products = getData('products');
        const product = products.find(p => p.id === productId);
        
        document.getElementById('productModalTitle').textContent = 'Edit Product';
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productImage').value = product.image;
        document.getElementById('productBadge').value = product.badge;
    } else {
        document.getElementById('productModalTitle').textContent = 'Add New Product';
        document.getElementById('productId').value = '';
    }
    
    modal.classList.add('show');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('show');
}

function editProduct(id) {
    openProductModal(id);
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        const products = getData('products');
        const updatedProducts = products.filter(p => p.id !== id);
        saveData('products', updatedProducts);
        loadProducts();
        loadDashboard();
        showToast('Product deleted successfully!', 'success');
    }
}

document.getElementById('productForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('productId').value;
    const products = getData('products');
    
    const productData = {
        id: id || generateId(),
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        price: parseFloat(document.getElementById('productPrice').value),
        image: document.getElementById('productImage').value,
        badge: document.getElementById('productBadge').value
    };
    
    if (id) {
        // Update existing product
        const index = products.findIndex(p => p.id === id);
        products[index] = productData;
    } else {
        // Add new product
        products.push(productData);
    }
    
    saveData('products', products);
    closeProductModal();
    loadProducts();
    loadDashboard();
    showToast(`Product ${id ? 'updated' : 'added'} successfully!`, 'success');
});

// ========================================
// CATEGORIES MANAGEMENT
// ========================================

function loadCategories() {
    const categories = getData('categories');
    const grid = document.getElementById('categoriesGrid');
    
    grid.innerHTML = categories.map(category => `
        <div class="category-card-admin">
            <div class="category-icon-preview">
                <i class="${category.icon}"></i>
            </div>
            <h4>${category.name}</h4>
            <p>${category.description}</p>
            <div class="action-buttons" style="justify-content: center; margin-top: 15px;">
                <button class="btn-edit" onclick="editCategory('${category.id}')"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn-delete" onclick="deleteCategory('${category.id}')"><i class="fas fa-trash"></i> Delete</button>
            </div>
        </div>
    `).join('');
}

function openCategoryModal(categoryId = null) {
    const modal = document.getElementById('categoryModal');
    const form = document.getElementById('categoryForm');
    
    form.reset();
    
    if (categoryId) {
        const categories = getData('categories');
        const category = categories.find(c => c.id === categoryId);
        
        document.getElementById('categoryModalTitle').textContent = 'Edit Category';
        document.getElementById('categoryId').value = category.id;
        document.getElementById('categoryName').value = category.name;
        document.getElementById('categoryIcon').value = category.icon;
        document.getElementById('categoryDescription').value = category.description;
    } else {
        document.getElementById('categoryModalTitle').textContent = 'Add New Category';
        document.getElementById('categoryId').value = '';
    }
    
    modal.classList.add('show');
}

function closeCategoryModal() {
    document.getElementById('categoryModal').classList.remove('show');
}

function editCategory(id) {
    openCategoryModal(id);
}

function deleteCategory(id) {
    if (confirm('Are you sure you want to delete this category?')) {
        const categories = getData('categories');
        const updatedCategories = categories.filter(c => c.id !== id);
        saveData('categories', updatedCategories);
        loadCategories();
        loadDashboard();
        showToast('Category deleted successfully!', 'success');
    }
}

document.getElementById('categoryForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('categoryId').value;
    const categories = getData('categories');
    
    const categoryData = {
        id: id || generateId(),
        name: document.getElementById('categoryName').value,
        icon: document.getElementById('categoryIcon').value,
        description: document.getElementById('categoryDescription').value
    };
    
    if (id) {
        const index = categories.findIndex(c => c.id === id);
        categories[index] = categoryData;
    } else {
        categories.push(categoryData);
    }
    
    saveData('categories', categories);
    closeCategoryModal();
    loadCategories();
    loadDashboard();
    showToast(`Category ${id ? 'updated' : 'added'} successfully!`, 'success');
});

// ========================================
// FEATURES MANAGEMENT
// ========================================

function loadFeatures() {
    const features = getData('features');
    const grid = document.getElementById('featuresGrid');
    
    grid.innerHTML = features.map(feature => `
        <div class="feature-card-admin">
            <div class="feature-icon-preview">
                <i class="${feature.icon}"></i>
            </div>
            <h4>${feature.title}</h4>
            <p>${feature.description}</p>
            <div class="action-buttons" style="justify-content: center; margin-top: 15px;">
                <button class="btn-edit" onclick="editFeature('${feature.id}')"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn-delete" onclick="deleteFeature('${feature.id}')"><i class="fas fa-trash"></i> Delete</button>
            </div>
        </div>
    `).join('');
}

function openFeatureModal(featureId = null) {
    const modal = document.getElementById('featureModal');
    const form = document.getElementById('featureForm');
    
    form.reset();
    
    if (featureId) {
        const features = getData('features');
        const feature = features.find(f => f.id === featureId);
        
        document.getElementById('featureModalTitle').textContent = 'Edit Feature';
        document.getElementById('featureId').value = feature.id;
        document.getElementById('featureTitle').value = feature.title;
        document.getElementById('featureIcon').value = feature.icon;
        document.getElementById('featureDescription').value = feature.description;
    } else {
        document.getElementById('featureModalTitle').textContent = 'Add New Feature';
        document.getElementById('featureId').value = '';
    }
    
    modal.classList.add('show');
}

function closeFeatureModal() {
    document.getElementById('featureModal').classList.remove('show');
}

function editFeature(id) {
    openFeatureModal(id);
}

function deleteFeature(id) {
    if (confirm('Are you sure you want to delete this feature?')) {
        const features = getData('features');
        const updatedFeatures = features.filter(f => f.id !== id);
        saveData('features', updatedFeatures);
        loadFeatures();
        loadDashboard();
        showToast('Feature deleted successfully!', 'success');
    }
}

document.getElementById('featureForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('featureId').value;
    const features = getData('features');
    
    const featureData = {
        id: id || generateId(),
        title: document.getElementById('featureTitle').value,
        icon: document.getElementById('featureIcon').value,
        description: document.getElementById('featureDescription').value
    };
    
    if (id) {
        const index = features.findIndex(f => f.id === id);
        features[index] = featureData;
    } else {
        features.push(featureData);
    }
    
    saveData('features', features);
    closeFeatureModal();
    loadFeatures();
    loadDashboard();
    showToast(`Feature ${id ? 'updated' : 'added'} successfully!`, 'success');
});

// ========================================
// REVIEWS MANAGEMENT
// ========================================

function loadReviews() {
    const reviews = getData('reviews');
    const tbody = document.getElementById('reviewsTableBody');
    
    tbody.innerHTML = reviews.map(review => `
        <tr>
            <td>${'⭐'.repeat(review.rating)}</td>
            <td>${review.name}</td>
            <td>${review.location}</td>
            <td>${review.text.substring(0, 60)}${review.text.length > 60 ? '...' : ''}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editReview('${review.id}')"><i class="fas fa-edit"></i> Edit</button>
                    <button class="btn-delete" onclick="deleteReview('${review.id}')"><i class="fas fa-trash"></i> Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function openReviewModal(reviewId = null) {
    const modal = document.getElementById('reviewModal');
    const form = document.getElementById('reviewForm');
    
    form.reset();
    
    if (reviewId) {
        const reviews = getData('reviews');
        const review = reviews.find(r => r.id === reviewId);
        
        document.getElementById('reviewModalTitle').textContent = 'Edit Review';
        document.getElementById('reviewId').value = review.id;
        document.getElementById('reviewerName').value = review.name;
        document.getElementById('reviewerLocation').value = review.location;
        document.getElementById('reviewRating').value = review.rating;
        document.getElementById('reviewText').value = review.text;
    } else {
        document.getElementById('reviewModalTitle').textContent = 'Add New Review';
        document.getElementById('reviewId').value = '';
    }
    
    modal.classList.add('show');
}

function closeReviewModal() {
    document.getElementById('reviewModal').classList.remove('show');
}

function editReview(id) {
    openReviewModal(id);
}

function deleteReview(id) {
    if (confirm('Are you sure you want to delete this review?')) {
        const reviews = getData('reviews');
        const updatedReviews = reviews.filter(r => r.id !== id);
        saveData('reviews', updatedReviews);
        loadReviews();
        loadDashboard();
        showToast('Review deleted successfully!', 'success');
    }
}

document.getElementById('reviewForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('reviewId').value;
    const reviews = getData('reviews');
    
    const reviewData = {
        id: id || generateId(),
        name: document.getElementById('reviewerName').value,
        location: document.getElementById('reviewerLocation').value,
        rating: parseInt(document.getElementById('reviewRating').value),
        text: document.getElementById('reviewText').value
    };
    
    if (id) {
        const index = reviews.findIndex(r => r.id === id);
        reviews[index] = reviewData;
    } else {
        reviews.push(reviewData);
    }
    
    saveData('reviews', reviews);
    closeReviewModal();
    loadReviews();
    loadDashboard();
    showToast(`Review ${id ? 'updated' : 'added'} successfully!`, 'success');
});

// ========================================
// INSTAGRAM GALLERY MANAGEMENT
// ========================================

function loadInstagram() {
    const instagram = getData('instagram');
    const grid = document.getElementById('instagramGrid');
    
    grid.innerHTML = instagram.map(item => `
        <div class="insta-item-admin">
            <img src="${item.image}" alt="Instagram Post">
            <div class="insta-overlay-admin">
                <button class="btn-edit" onclick="editInstagram('${item.id}')"><i class="fas fa-edit"></i></button>
                <button class="btn-delete" onclick="deleteInstagram('${item.id}')"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

function openInstagramModal(instagramId = null) {
    const modal = document.getElementById('instagramModal');
    const form = document.getElementById('instagramForm');
    
    form.reset();
    
    if (instagramId) {
        const instagram = getData('instagram');
        const item = instagram.find(i => i.id === instagramId);
        
        document.getElementById('instagramModalTitle').textContent = 'Edit Image';
        document.getElementById('instagramId').value = item.id;
        document.getElementById('instagramImageUrl').value = item.image;
    } else {
        document.getElementById('instagramModalTitle').textContent = 'Add New Image';
        document.getElementById('instagramId').value = '';
    }
    
    modal.classList.add('show');
}

function closeInstagramModal() {
    document.getElementById('instagramModal').classList.remove('show');
}

function editInstagram(id) {
    openInstagramModal(id);
}

function deleteInstagram(id) {
    if (confirm('Are you sure you want to delete this image?')) {
        const instagram = getData('instagram');
        const updatedInstagram = instagram.filter(i => i.id !== id);
        saveData('instagram', updatedInstagram);
        loadInstagram();
        showToast('Image deleted successfully!', 'success');
    }
}

document.getElementById('instagramForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('instagramId').value;
    const instagram = getData('instagram');
    
    const imageData = {
        id: id || generateId(),
        image: document.getElementById('instagramImageUrl').value
    };
    
    if (id) {
        const index = instagram.findIndex(i => i.id === id);
        instagram[index] = imageData;
    } else {
        instagram.push(imageData);
    }
    
    saveData('instagram', instagram);
    closeInstagramModal();
    loadInstagram();
    showToast(`Image ${id ? 'updated' : 'added'} successfully!`, 'success');
});

// ========================================
// CONTACT INFORMATION MANAGEMENT
// ========================================

function loadContact() {
    const contact = getData('contact');
    
    document.getElementById('storeAddress').value = contact.address;
    document.getElementById('phone1').value = contact.phone1;
    document.getElementById('phone2').value = contact.phone2;
    document.getElementById('weekdayHours').value = contact.weekdayHours;
    document.getElementById('sundayHours').value = contact.sundayHours;
    document.getElementById('instagramHandle').value = contact.instagramHandle;
    document.getElementById('whatsappNumber').value = contact.whatsappNumber;
    document.getElementById('mapsEmbed').value = contact.mapsEmbed;
}

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const contactData = {
        address: document.getElementById('storeAddress').value,
        phone1: document.getElementById('phone1').value,
        phone2: document.getElementById('phone2').value,
        weekdayHours: document.getElementById('weekdayHours').value,
        sundayHours: document.getElementById('sundayHours').value,
        instagramHandle: document.getElementById('instagramHandle').value,
        whatsappNumber: document.getElementById('whatsappNumber').value,
        mapsEmbed: document.getElementById('mapsEmbed').value
    };
    
    saveData('contact', contactData);
    showToast('Contact information updated successfully!', 'success');
});

// ========================================
// STATISTICS MANAGEMENT
// ========================================

function loadStatistics() {
    const stats = getData('statistics');
    
    document.getElementById('yearsExperience').value = stats.yearsExperience;
    document.getElementById('happyCustomers').value = stats.happyCustomers;
    document.getElementById('giftsDelivered').value = stats.giftsDelivered;
    document.getElementById('overallRating').value = stats.overallRating;
}

function updateStatistics() {
    const statsData = {
        yearsExperience: parseInt(document.getElementById('yearsExperience').value),
        happyCustomers: parseInt(document.getElementById('happyCustomers').value),
        giftsDelivered: parseInt(document.getElementById('giftsDelivered').value),
        overallRating: parseFloat(document.getElementById('overallRating').value)
    };
    
    saveData('statistics', statsData);
    loadDashboard();
    showToast('Statistics updated successfully!', 'success');
}

// ========================================
// TOAST NOTIFICATIONS
// ========================================

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// INITIALIZATION
// ========================================

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    checkAuth();
});

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
}

console.log('🎁 S N Gift Admin Panel Loaded Successfully!');
