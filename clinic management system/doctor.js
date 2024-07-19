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
        <textarea id="prescription-${doc.id}" placeholder="Enter prescription">${patient.prescription || ''}</textarea>
        <button onclick="savePrescription('${doc.id}')">Save Prescription</button>
      `;
      patientDetailsDiv.appendChild(patientDiv);
    });
  }).catch(error => {
    console.error("Error loading patient details:", error);
  });
}

// Save prescription
function savePrescription(patientId) {
  const prescription = document.getElementById(`prescription-${patientId}`).value;
  db.collection("patients").doc(patientId).update({
    prescription: prescription
  }).then(() => {
    alert("Prescription saved!");
  }).catch(error => {
    console.error("Error saving prescription:", error);
  });
}

// Load patient details when the page loads
window.onload = function() {
  loadPatientDetails();
}
