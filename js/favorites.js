// Favorites functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get current user
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        // If no user is logged in, hide all favorite buttons
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.style.display = 'none';
        });
        return;
    }

    // Initialize user's favorites if not exists
    if (!user.favorites) {
        user.favorites = {};
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    // Add favorite buttons to all sections
    document.querySelectorAll('.about-section, .history-section, .culture-section, .places-section').forEach(section => {
        const sectionId = section.id;
        const favoriteBtn = document.createElement('button');
        favoriteBtn.className = 'favorite-btn';
        favoriteBtn.innerHTML = '<i class="fas fa-star"></i>';
        
        // Set initial state
        if (user.favorites[sectionId]) {
            favoriteBtn.classList.add('active');
        }

        // Add click event
        favoriteBtn.addEventListener('click', function() {
            if (!user) {
                alert('الرجاء تسجيل الدخول لإضافة المفضلة');
                window.location.href = 'signin.html';
                return;
            }

            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                user.favorites[sectionId] = true;
            } else {
                delete user.favorites[sectionId];
            }

            // Update localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            // Update users array
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userIndex = users.findIndex(u => u.email === user.email);
            if (userIndex !== -1) {
                users[userIndex] = user;
                localStorage.setItem('users', JSON.stringify(users));
            }
        });

        section.insertBefore(favoriteBtn, section.firstChild);
    });
}); 