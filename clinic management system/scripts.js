// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

// Redirect based on user role
auth.onAuthStateChanged(user => {
  if (user) {
    const userRef = db.collection('users').doc(user.uid);
    userRef.get().then(doc => {
      if (doc.exists) {
        const role = doc.data().role;
        if (role === 'doctor') {
          window.location.href = 'doctor-dashboard.html';
        } else if (role === 'receptionist') {
          window.location.href = 'receptionist-dashboard.html';
        }
      } else {
        console.error('No such document!');
      }
    }).catch(error => {
      console.error('Error getting document:', error);
    });
  }
});

// Login function
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Login successful, user state change will handle the redirect
    })
    .catch(error => {
      console.error('Login failed:', error);
    });
});

// Logout function
function logout() {
  auth.signOut().then(() => {
    window.location.href = 'index.html';
  }).catch(error => {
    console.error('Logout failed:', error);
  });
}
