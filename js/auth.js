// Check if user is logged in
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        window.location.href = 'signin.html';
        return;
    }
    return user;
}

// Update navigation based on auth state
function updateNavigation() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const authLink = document.getElementById('authLink');
    const signupLink = document.getElementById('signupLink');
    const profileLink = document.getElementById('profileLink');
    const logoutLink = document.getElementById('logoutLink');

    if (user) {
        if (authLink) authLink.style.display = 'none';
        if (signupLink) signupLink.style.display = 'none';
        if (profileLink) profileLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'block';
    } else {
        if (authLink) authLink.style.display = 'block';
        if (signupLink) signupLink.style.display = 'block';
        if (profileLink) profileLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'none';
    }
}

// Handle sign up
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Validate inputs
            if (!username || !email || !password || !confirmPassword) {
                alert('الرجاء ملء جميع الحقول');
                return;
            }

            if (password !== confirmPassword) {
                alert('كلمات المرور غير متطابقة');
                return;
            }

            // Check if user already exists
            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.find(user => user.email === email)) {
                alert('البريد الإلكتروني مسجل مسبقاً');
                return;
            }

            // Create new user
            const newUser = {
                username,
                email,
                password,
                displayName: username,
                bio: '',
                country: ''
            };

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(newUser));

            window.location.href = 'profile.html';
        });
    }

    // Handle sign in
    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                window.location.href = 'profile.html';
            } else {
                alert('البريد الإلكتروني أو كلمة المرور غير صحيحة');
            }
        });
    }

    // Handle logout
    const logoutLink = document.getElementById('logoutLink');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    }

    // Handle profile form
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        const user = checkAuth();
        if (user) {
            document.getElementById('username').textContent = user.username;
            document.getElementById('userEmail').textContent = user.email;
            document.getElementById('displayName').value = user.displayName || '';
            document.getElementById('bio').value = user.bio || '';
            document.getElementById('country').value = user.country || '';

            profileForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const displayName = document.getElementById('displayName').value;
                const bio = document.getElementById('bio').value;
                const country = document.getElementById('country').value;

                // Update user data
                user.displayName = displayName;
                user.bio = bio;
                user.country = country;

                // Update localStorage
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const userIndex = users.findIndex(u => u.email === user.email);
                if (userIndex !== -1) {
                    users[userIndex] = user;
                    localStorage.setItem('users', JSON.stringify(users));
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                alert('تم تحديث المعلومات بنجاح');
            });
        }
    }

    // Handle password form
    const passwordForm = document.getElementById('passwordForm');
    if (passwordForm) {
        const user = checkAuth();
        if (user) {
            passwordForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const currentPassword = document.getElementById('currentPassword').value;
                const newPassword = document.getElementById('newPassword').value;
                const confirmPassword = document.getElementById('confirmPassword').value;

                // Validate current password
                if (currentPassword !== user.password) {
                    alert('كلمة المرور الحالية غير صحيحة');
                    return;
                }

                // Validate new password
                if (newPassword !== confirmPassword) {
                    alert('كلمات المرور الجديدة غير متطابقة');
                    return;
                }

                // Update password
                user.password = newPassword;

                // Update localStorage
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const userIndex = users.findIndex(u => u.email === user.email);
                if (userIndex !== -1) {
                    users[userIndex] = user;
                    localStorage.setItem('users', JSON.stringify(users));
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                alert('تم تغيير كلمة المرور بنجاح');
                passwordForm.reset();
            });
        }
    }

    // Update navigation on page load
    updateNavigation();
}); 