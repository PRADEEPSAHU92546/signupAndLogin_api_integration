const signupFormContainer = document.getElementById('signupFormContainer');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const toggleButton = document.getElementById('toggleForm');

    toggleButton.addEventListener('click', () => {
      signupFormContainer.style.display = 
        signupFormContainer.style.display === 'none' ? 'block' : 'none';
      loginFormContainer.style.display = 
        loginFormContainer.style.display === 'none' ? 'block' : 'none';
    });

    // Signup Form Handling
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;

      try {
        const response = await fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
          alert(data.message);
          // Redirect to login page or success page
          window.location.href = 'http://localhost:3000/login'; 
        } else {
          alert(data.message);
        }

      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during signup.');
      }
    });

    // Login Form Handling
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
          alert(data.message);
          // Redirect to the user's dashboard or a protected area
          window.location.href = 'http://localhost:3000/dashboard'; 
        } else {
          alert(data.message);
        }

      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login.');
      }
    });
