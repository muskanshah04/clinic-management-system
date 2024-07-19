// Ensure Firebase is initialized
const db = firebase.firestore();
const auth = firebase.auth();

// Load billing details
function loadBillingDetails() {
  db.collection("patients").get().then(querySnapshot => {
    const billingTable = document.querySelector('#billingDetails tbody');
    billingTable.innerHTML = ""; // Clear previous data
    querySnapshot.forEach(doc => {
      const patient = doc.data();
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${patient.name}</td>
        <td>${patient.details}</td>
        <td>${calculateBill(patient.details)}</td>
      `;
      billingTable.appendChild(row);
    });
  }).catch(error => {
    console.error("Error loading billing details:", error);
  });
}

// Calculate bill based on patient details (example implementation)
function calculateBill(details) {
  // Dummy calculation based on patient details
  return details.length * 10; // Example calculation
}

// Load billing details when the page loads
window.onload = function() {
  loadBillingDetails();
}
