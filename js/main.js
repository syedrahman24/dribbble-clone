// Main JavaScript file for Dribbble Clone
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeApp();
    } catch (error) {
        console.error('Error initializing app:', error);
    }
});

function initializeApp() {
    // Initialize all components
    initMobileMenu();
    initTabSwitching();
    initFilterInteractions();
    initShotInteractions();
    initColorFilters();
    initLoadMore();
}

// Mobile Menu Toggle
function initMobileMenu() {
    try {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const nav = document.getElementById('nav');
        
        if (mobileMenuToggle && nav) {
            mobileMenuToggle.addEventListener('click', function() {
                nav.classList.toggle('nav-open');
                mobileMenuToggle.classList.toggle('active');
                
                // Toggle hamburger animation
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans.forEach((span, index) => {
                    span.style.transform = mobileMenuToggle.classList.contains('active') 
                        ? getHamburgerTransform(index) 
                        : 'none';
                });
            });
        }
    } catch (error) {
        console.error('Error initializing mobile menu:', error);
    }
}

function getHamburgerTransform(index) {
    const transforms = [
        'rotate(45deg) translate(5px, 5px)',
        'opacity: 0',
        'rotate(-45deg) translate(7px, -6px)'
    ];
    return transforms[index] || 'none';
}

// Tab Switching Functionality
function initTabSwitching() {
    try {
        const tabButtons = document.querySelectorAll('.tab-btn');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all tabs
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Get tab type
                const tabType = this.getAttribute('data-tab');
                
                // Simulate content change (in a real app, this would fetch different data)
                updateContentForTab(tabType);
            });
        });
    } catch (error) {
        console.error('Error initializing tab switching:', error);
    }
}

function updateContentForTab(tabType) {
    try {
        const shotsGrid = document.querySelector('.shots-grid');
        if (!shotsGrid) return;
        
        // Add loading state
        shotsGrid.style.opacity = '0.5';
        
        // Simulate API call delay
        setTimeout(() => {
            // In a real app, you would fetch different content based on tabType
            console.log(`Switched to ${tabType} tab`);
            
            // Remove loading state
            shotsGrid.style.opacity = '1';
            
            // Update page title or other elements based on tab
            updatePageTitle(tabType);
        }, 300);
    } catch (error) {
        console.error('Error updating content for tab:', error);
    }
}

function updatePageTitle(tabType) {
    const titles = {
        shots: 'Discover the World\'s Top Designers',
        designers: 'Find Top Designers',
        services: 'Design Services'
    };
    
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && titles[tabType]) {
        heroTitle.textContent = titles[tabType];
    }
}

// Filter Interactions
function initFilterInteractions() {
    try {
        const filterLinks = document.querySelectorAll('.filter-link');
        
        filterLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from siblings
                const siblings = this.parentElement.parentElement.querySelectorAll('.filter-link');
                siblings.forEach(sibling => sibling.classList.remove('active'));
                
                // Add active class to clicked filter
                this.classList.add('active');
                
                // Apply filter
                const filterText = this.textContent.trim();
                applyFilter(filterText);
            });
        });
    } catch (error) {
        console.error('Error initializing filter interactions:', error);
    }
}

function applyFilter(filterText) {
    try {
        const shotsGrid = document.querySelector('.shots-grid');
        if (!shotsGrid) return;
        
        // Add loading animation
        shotsGrid.style.opacity = '0.7';
        
        setTimeout(() => {
            console.log(`Applied filter: ${filterText}`);
            
            // In a real app, you would filter the shots based on the selected filter
            // For now, we'll just simulate the filtering
            
            shotsGrid.style.opacity = '1';
            
            // Show feedback to user
            showFilterFeedback(filterText);
        }, 200);
    } catch (error) {
        console.error('Error applying filter:', error);
    }
}

function showFilterFeedback(filterText) {
    // Create temporary feedback element
    const feedback = document.createElement('div');
    feedback.textContent = `Showing ${filterText.toLowerCase()} shots`;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(feedback);
    
    // Animate in
    setTimeout(() => feedback.style.opacity = '1', 100);
    
    // Remove after 2 seconds
    setTimeout(() => {
        feedback.style.opacity = '0';
        setTimeout(() => document.body.removeChild(feedback), 300);
    }, 2000);
}

// Shot Card Interactions
function initShotInteractions() {
    try {
        const shotCards = document.querySelectorAll('.shot-card');
        
        shotCards.forEach(card => {
            // Add click handler
            card.addEventListener('click', function() {
                const title = this.querySelector('.shot-title')?.textContent || 'Untitled';
                handleShotClick(title);
            });
            
            // Add hover effects for stats
            const stats = card.querySelectorAll('.likes, .views');
            stats.forEach(stat => {
                stat.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.1)';
                });
                
                stat.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            });
        });
    } catch (error) {
        console.error('Error initializing shot interactions:', error);
    }
}

function handleShotClick(title) {
    try {
        // In a real app, this would navigate to the shot detail page
        console.log(`Clicked on shot: ${title}`);
        
        // Show modal or navigate (simulated)
        showShotModal(title);
    } catch (error) {
        console.error('Error handling shot click:', error);
    }
}

function showShotModal(title) {
    // Create simple modal overlay
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 12px;
        max-width: 500px;
        text-align: center;
        transform: scale(0.9);
        transition: transform 0.3s ease;
    `;
    
    modalContent.innerHTML = `
        <h2 style="margin-bottom: 20px; color: var(--text-dark);">${title}</h2>
        <p style="color: var(--text-light); margin-bottom: 30px;">This would open the full shot view in a real application.</p>
        <button id="closeModal" style="
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
        ">Close</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 100);
    
    // Close modal handlers
    const closeModal = () => {
        modal.style.opacity = '0';
        modalContent.style.transform = 'scale(0.9)';
        setTimeout(() => document.body.removeChild(modal), 300);
    };
    
    document.getElementById('closeModal').addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    
    // Close on escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// Color Filter Interactions
function initColorFilters() {
    try {
        const colorSwatches = document.querySelectorAll('.color-swatch');
        
        colorSwatches.forEach(swatch => {
            swatch.addEventListener('click', function() {
                const color = this.getAttribute('data-color');
                
                // Remove active state from all swatches
                colorSwatches.forEach(s => s.classList.remove('active'));
                
                // Add active state to clicked swatch
                this.classList.add('active');
                
                // Apply color filter
                applyColorFilter(color);
            });
        });
    } catch (error) {
        console.error('Error initializing color filters:', error);
    }
}

function applyColorFilter(color) {
    try {
        console.log(`Applied color filter: #${color}`);
        
        // In a real app, this would filter shots by dominant color
        const shotsGrid = document.querySelector('.shots-grid');
        if (shotsGrid) {
            shotsGrid.style.opacity = '0.7';
            
            setTimeout(() => {
                shotsGrid.style.opacity = '1';
                showFilterFeedback(`Color: #${color}`);
            }, 300);
        }
    } catch (error) {
        console.error('Error applying color filter:', error);
    }
}

// Load More Functionality
function initLoadMore() {
    try {
        const loadMoreBtn = document.querySelector('.load-more .btn-outline');
        
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // In a real app, this would load more shots
                simulateLoadMore();
            });
        }
        
        // Infinite scroll simulation
        initInfiniteScroll();
    } catch (error) {
        console.error('Error initializing load more:', error);
    }
}

function simulateLoadMore() {
    try {
        const loadMoreSection = document.querySelector('.load-more');
        const loadMoreText = document.querySelector('.load-more-text');
        
        if (loadMoreText) {
            loadMoreText.textContent = 'Loading more shots...';
        }
        
        // Simulate loading delay
        setTimeout(() => {
            if (loadMoreText) {
                loadMoreText.textContent = 'Sign up to see more shots';
            }
            
            console.log('Simulated loading more shots');
        }, 1500);
    } catch (error) {
        console.error('Error simulating load more:', error);
    }
}

function initInfiniteScroll() {
    try {
        let isLoading = false;
        
        window.addEventListener('scroll', debounce(() => {
            if (isLoading) return;
            
            const scrollPosition = window.innerHeight + window.scrollY;
            const documentHeight = document.documentElement.offsetHeight;
            
            // Load more when user is 200px from bottom
            if (scrollPosition >= documentHeight - 200) {
                isLoading = true;
                
                setTimeout(() => {
                    console.log('Infinite scroll triggered');
                    isLoading = false;
                }, 1000);
            }
        }, 250));
    } catch (error) {
        console.error('Error initializing infinite scroll:', error);
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS for mobile menu animation
function addMobileMenuStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border-top: 1px solid var(--border-light);
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .nav.nav-open {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .nav-list {
                flex-direction: column;
                padding: 20px;
                gap: 16px;
            }
            
            .mobile-menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .mobile-menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
            
            .color-swatch.active {
                transform: scale(1.2);
                box-shadow: 0 0 0 3px var(--primary-color);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize mobile menu styles
addMobileMenuStyles();

// Error handling for uncaught errors
window.addEventListener('error', function(e) {
    console.error('Uncaught error:', e.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        }, 0);
    });
}

// Accessibility improvements
function initAccessibility() {
    try {
        // Add keyboard navigation for shot cards
        const shotCards = document.querySelectorAll('.shot-card');
        shotCards.forEach(card => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
        
        // Add ARIA labels to interactive elements
        const colorSwatches = document.querySelectorAll('.color-swatch');
        colorSwatches.forEach(swatch => {
            const color = swatch.getAttribute('data-color');
            swatch.setAttribute('aria-label', `Filter by color ${color}`);
            swatch.setAttribute('tabindex', '0');
            
            swatch.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    } catch (error) {
        console.error('Error initializing accessibility features:', error);
    }
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initAccessibility);
