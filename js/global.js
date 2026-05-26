// Global JS logic (e.g. sidebar navigation, global event listeners)

// --- Auth Guard ---
if (!window.location.pathname.includes('auth.html')) {
    if (!localStorage.getItem('pustakaflow_user')) {
        window.location.href = 'auth.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // --- Profile Dropdown Toggle ---
    const profileBtn = document.getElementById('profileToggleBtn');
    const profileDropdown = document.getElementById('profileDropdown');

    if (profileBtn && profileDropdown) {
        // Toggle dropdown on button click
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
                profileDropdown.classList.add('hidden');
            }
        });
    }

    // --- Logout Logic ---
    const logoutBtns = document.querySelectorAll('.logout-btn');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('pustakaflow_user');
            window.location.href = 'auth.html';
        });
    });
});
