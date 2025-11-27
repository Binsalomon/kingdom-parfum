 // Product Data
        const products = [
            {
                id: 1,
                name: "Midnight Rose",
                brand: "Élégance",
                category: "women",
                image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "A captivating blend of Bulgarian rose, oud wood, and vanilla."
            },
            {
                id: 2,
                name: "OCQUA DI GIO",
                brand: "Élégance",
                category: "unisex",
                image: "img/1 (1).jpg",
                description: "Fresh aquatic notes with hints of sea salt and driftwood."
            },
            {
                id: 3,
                name: "Royal Oud",
                brand: "Élégance",
                category: "men",
                image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "Rich oud wood blended with spices and amber."
            },
            {
                id: 4,
                name: "BUHARI",
                brand: "Élégance",
                category: "women",
                image: "img/1 (2).jpg",
                description: "Luxurious orchid with hints of black truffle and bergamot."
            },
            {
                id: 5,
                name: "Tobacco Vanille",
                brand: "Élégance",
                category: "men",
                image: "img/1 (3).jpg",
                description: "Warm tobacco leaf with tonka bean and vanilla."
            },
            {
                id: 6,
                name: "POLO",
                brand: "Élégance",
                category: "unisex",
                image: "img/1 (4).jpg",
                description: "Zesty citrus notes with white flowers and musk."
            },
            {
                id: 7,
                name: "Sandalwood Mystique",
                brand: "Élégance",
                category: "unisex",
                image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "Earthy sandalwood with hints of lavender and amber."
            },
            {
                id: 8,
                name: "Jasmine Noir",
                brand: "Élégance",
                category: "women",
                image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "Intoxicating jasmine with dark berries and patchouli."
            },
             {
                id: 9,
                name: "LACOSTE",
                brand: "Élégance",
                category: "men",
                image: "img/1 (5).jpg",
                description: "Warm tobacco leaf with tonka bean and vanilla."
            },
            {
                id: 10,
                name: "POLO",
                brand: "Élégance",
                category: "unisex",
                image: "img/1 (6).jpg",
                description: "Zesty citrus notes with white flowers and musk."
            },
            {
                id: 11,
                name: "DRAKKAR",
                brand: "Élégance",
                category: "unisex",
                image: "img/1 (7).jpg",
                description: "Earthy sandalwood with hints of lavender and amber."
            },
            {
                id: 12,
                name: "STRONG WITH YOU",
                brand: "Élégance",
                category: "women",
                image: "img/1 (8).jpg",
                description: "Intoxicating jasmine with dark berries and patchouli."
            },
            {
                id: 13,
                name: "INTENSO",
                brand: "Élégance",
                category: "men",
                image: "img/1 (9).jpg",
                description: "Warm tobacco leaf with tonka bean and vanilla."
            },
            {
                id: 14,
                name: "HARAMAIN",
                brand: "Élégance",
                category: "unisex",
                image: "img/1 (10).jpg",
                description: "Zesty citrus notes with white flowers and musk."
            },
            {
                id: 15,
                name: "Ardute MEN",
                brand: "Élégance",
                category: "unisex",
                image: "img/1 (11).jpg",
                description: "Earthy sandalwood with hints of lavender and amber."
            },
            {
                id: 16,
                name: "SAUVAGE",
                brand: "Élégance",
                category: "women",
                image: "img/1 (12).jpg",
                description: "Intoxicating jasmine with dark berries and patchouli."
            },
            {
                id: 17,
                name: "BOSS",
                brand: "Élégance",
                category: "unisex",
                image: "img/1 (13).jpg",
                description: "Zesty citrus notes with white flowers and musk."
            },
            {
                id: 18,
                name: "ACQUA DI GIO",
                brand: "Élégance",
                category: "unisex",
                image: "img/1 (14).jpg",
                description: "Earthy sandalwood with hints of lavender and amber."
            },
            {
                id: 19,
                name: "SAUVAGE",
                brand: "Élégance",
                category: "women",
                image: "img/1 (15).jpg",
                description: "Intoxicating jasmine with dark berries and patchouli."
            },

        ];

        // Initialize liked products from localStorage or empty array
        let likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];

        // Function to render products
        function renderProducts(filter = 'all') {
            const productGrid = document.getElementById('product-grid');
            productGrid.innerHTML = '';
            
            const filteredProducts = filter === 'all' 
                ? products 
                : products.filter(product => product.category === filter);
            
            filteredProducts.forEach(product => {
                const isLiked = likedProducts.includes(product.id);
                
                const productCard = document.createElement('div');
                productCard.className = 'col-lg-3 col-md-4 col-sm-6';
                productCard.innerHTML = `
                    <div class="product-card" data-category="${product.category}">
                        <div class="product-image" style="background-image: url('${product.image}')">
                            <div class="product-overlay">
                                <button class="like-btn ${isLiked ? 'liked' : ''}" data-id="${product.id}">
                                    <i class="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">${product.name}</h3>
                            <p class="product-brand">${product.brand}</p>
                            <p class="product-description">${product.description}</p>
                        </div>
                    </div>
                `;
                
                productGrid.appendChild(productCard);
            });
            
            // Add event listeners to like buttons
            document.querySelectorAll('.like-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    toggleLike(productId, this);
                });
            });
        }

        // Function to toggle like status
        function toggleLike(productId, button) {
            const index = likedProducts.indexOf(productId);
            
            if (index === -1) {
                // Product not liked, add to liked products
                likedProducts.push(productId);
                button.classList.add('liked');
            } else {
                // Product already liked, remove from liked products
                likedProducts.splice(index, 1);
                button.classList.remove('liked');
            }
            
            // Update localStorage
            localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
            
            // Update like count display if needed
            updateLikeCount();
        }

        // Function to update like count display
        function updateLikeCount() {
            // This could be used to show total likes somewhere on the page
            console.log(`Total liked products: ${likedProducts.length}`);
        }

        // Filter products
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter products
                const filter = this.getAttribute('data-filter');
                renderProducts(filter);
            });
        });

        // Back to top functionality
        const backToTopButton = document.getElementById('backToTop');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            updateLikeCount();
        });