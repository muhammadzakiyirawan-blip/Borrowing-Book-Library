// Check if already logged in
if (localStorage.getItem('pustakaflow_user')) {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Grab the email input value
            const email = document.getElementById('email').value.trim();
            
            if (email) {
                // Create a dummy user object
                const user = {
                    name: 'Alex (Member)',
                    email: email,
                    role: 'member'
                };

                // Save object as JSON string into localStorage
                localStorage.setItem('pustakaflow_user', JSON.stringify(user));

                // Redirect to index.html
                window.location.href = 'index.html';
            }
        });
    }
});
