// Candidate Search Page
document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Fetch search results
  const location = document.querySelector('input[name="location"]').value;
  const role = document.querySelector('input[name="role"]').value;

  // Replace the following code with your actual logic to fetch search results from the server
  const searchResults = [
    { name: 'Candidate 1', experience: '3 years', location: 'New York' },
    { name: 'Candidate 2', experience: '5 years', location: 'London' },
    { name: 'Candidate 3', experience: '2 years', location: 'Paris' },
  ];

  // Display search results dynamically
  const searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.innerHTML = '';

  if (searchResults.length > 0) {
    searchResults.forEach(candidate => {
      const candidateElement = document.createElement('div');
      candidateElement.classList.add('candidate');
      candidateElement.innerHTML = `
        <h3>${candidate.name}</h3>
        <p>Experience: ${candidate.experience}</p>
        <p>Location: ${candidate.location}</p>
      `;
      searchResultsContainer.appendChild(candidateElement);
    });
  } else {
    const noResultsElement = document.createElement('p');
    noResultsElement.textContent = 'No candidates found.';
    searchResultsContainer.appendChild(noResultsElement);
  }
});

// User Registration Page
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Perform form validation
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  if (!name || !email || !password) {
    alert('Please fill in all the required fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Submit the form if all validations pass
  this.submit();
});

// Email validation helper function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



