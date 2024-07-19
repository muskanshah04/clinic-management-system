// Ensure Firebase is initialized
const db = firebase.firestore();
const auth = firebase.auth();

// Load patient history
function loadPatientHistory() {
  db.collection("patients").get().then(querySnapshot => {
    const patientHistoryTable = document.querySelector('#patientHistory tbody');
    patientHistoryTable.innerHTML = ""; // Clear previous data
    querySnapshot.forEach(doc => {
      const patient = doc.data();
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${patient.name}</td>
        <td>${patient.details}</td>
        <td>${patient.prescription || ''}</td>
        <td>${patient.token}</td>
      `;
      patientHistoryTable.appendChild(row);
    });
  }).catch(error => {
    console.error("Error loading patient history:", error);
  });
}

// Load patient history when the page loads
window.onload = function() {
  loadPatientHistory();
}
