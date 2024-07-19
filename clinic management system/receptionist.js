// Ensure Firebase is initialized
const db = firebase.firestore();
const auth = firebase.auth();

// Load patient details
function loadPatientDetails() {
  db.collection("patients").get().then(querySnapshot => {
    const patientDetailsDiv = document.getElementById('patientDetails');
    patientDetailsDiv.innerHTML = ""; // Clear previous data
    querySnapshot.forEach(doc => {
      const patient = doc.data();
      const patientDiv = document.createElement('div');
      patientDiv.className = 'card';
      patientDiv.innerHTML = `
        <p><strong>Name:</strong> ${patient.name}</p>
        <p><strong>Details:</strong> ${patient.details}</p>
        <p><strong>Token:</strong> ${patient.token}</p>
        <button onclick="generateToken('${doc.id}')">Generate Token</button>
      `;
      patientDetailsDiv.appendChild(patientDiv);
    });
  }).catch(error => {
    console.error("Error loading patient details:", error);
  });
}

// Generate token
function generateToken(patientId) {
  const token = Math.floor(Math.random() * 100000); // Example token generation
  db.collection("patients").doc(patientId).update({
    token: token
  }).then(() => {
    alert("Token generated!");
    loadPatientDetails(); // Refresh the patient details
  }).catch(error => {
    console.error("Error generating token:", error);
  });
}

// Load patient details when the page loads
window.onload = function() {
  loadPatientDetails();
}
