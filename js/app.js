// API Configuration
const API_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // Replace with your Apps Script URL

// Utility Functions
function showMessage(elementId, message, type = 'success') {
    const messageEl = document.getElementById(elementId);
    if (messageEl) {
        messageEl.textContent = message;
        messageEl.className = `result-message ${type}`;
        messageEl.style.display = 'block';
        setTimeout(() => {
            messageEl.style.display = 'none';
        }, 5000);
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Load Statistics
async function loadStatistics() {
    try {
        const response = await fetch(`${API_URL}?action=getStats`);
        const stats = await response.json();
        
        if (document.getElementById('lostCount')) {
            document.getElementById('lostCount').textContent = stats.lost || 0;
        }
        if (document.getElementById('foundCount')) {
            document.getElementById('foundCount').textContent = stats.found || 0;
        }
        if (document.getElementById('matchedCount')) {
            document.getElementById('matchedCount').textContent = stats.matched || 0;
        }
    } catch (error) {
        console.error('Error loading statistics:', error);
    }
}

// Report Lost Item
async function reportLost(event) {
    event.preventDefault();
    
    const formData = {
        type: 'lost',
        itemName: document.getElementById('itemName').value,
        category: document.getElementById('category').value,
        color: document.getElementById('color').value,
        brand: document.getElementById('brand').value,
        location: document.getElementById('location').value,
        city: document.getElementById('city').value,
        country: document.getElementById('country').value,
        dateLost: document.getElementById('dateLost').value,
        description: document.getElementById('description').value,
        contactEmail: document.getElementById('contactEmail').value,
        timestamp: new Date().toISOString()
    };
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.status === 'ok') {
            showMessage('resultMessage', 'Your report has been submitted successfully. We will notify you if a match is found.', 'success');
            event.target.reset();
        } else {
            showMessage('resultMessage', 'An error occurred. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Error submitting report:', error);
        showMessage('resultMessage', 'Network error. Please check your connection.', 'error');
    }
}

// Report Found Item
async function reportFound(event) {
    event.preventDefault();
    
    const formData = {
        type: 'found',
        itemName: document.getElementById('itemName').value,
        category: document.getElementById('category').value,
        color: document.getElementById('color').value,
        brand: document.getElementById('brand').value,
        location: document.getElementById('location').value,
        city: document.getElementById('city').value,
        country: document.getElementById('country').value,
        dateFound: document.getElementById('dateFound').value,
        description: document.getElementById('description').value,
        contactEmail: document.getElementById('contactEmail').value,
        timestamp: new Date().toISOString()
    };
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.status === 'ok') {
            showMessage('resultMessage', 'Thank you for helping! The owner will be notified if this matches a lost report.', 'success');
            event.target.reset();
        } else {
            showMessage('resultMessage', 'An error occurred. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Error submitting report:', error);
        showMessage('resultMessage', 'Network error. Please check your connection.', 'error');
    }
}

// Search Matches
async function searchMatches(event) {
    event.preventDefault();
    
    const searchParams = {
        itemName: document.getElementById('searchItem').value,
        city: document.getElementById('searchCity').value,
        category: document.getElementById('searchCategory').value
    };
    
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '<div class="loading">Searching for matches...</div>';
    
    try {
        const response = await fetch(`${API_URL}?action=search&item=${encodeURIComponent(searchParams.itemName)}&city=${encodeURIComponent(searchParams.city)}&category=${encodeURIComponent(searchParams.category)}`);
        const matches = await response.json();
        
        if (matches.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results">No matches found yet. Check back later or adjust your search criteria.</div>';
        } else {
            resultsContainer.innerHTML = matches.map(match => `
                <div class="match-card">
                    <div class="match-header">
                        <h3>${match.itemName}</h3>
                        <span class="match-score">${match.score}% Match</span>
                    </div>
                    <div class="match-details">
                        <div class="match-detail">
                            <strong>Location:</strong> ${match.location}, ${match.city}
                        </div>
                        <div class="match-detail">
                            <strong>Date:</strong> ${formatDate(match.date)}
                        </div>
                        <div class="match-detail">
                            <strong>Category:</strong> ${match.category}
                        </div>
                        <div class="match-detail">
                            <strong>Color:</strong> ${match.color || 'Not specified'}
                        </div>
                    </div>
                    <div class="match-contact">
                        <strong>Contact:</strong> ${match.contactEmail}
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error searching matches:', error);
        resultsContainer.innerHTML = '<div class="error">An error occurred while searching. Please try again.</div>';
    }
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', () => {
    // Load statistics on homepage
    if (document.getElementById('lostCount')) {
        loadStatistics();
    }
    
    // Initialize lost report form
    const lostForm = document.getElementById('lostForm');
    if (lostForm) {
        lostForm.addEventListener('submit', reportLost);
    }
    
    // Initialize found report form
    const foundForm = document.getElementById('foundForm');
    if (foundForm) {
        foundForm.addEventListener('submit', reportFound);
    }
    
    // Initialize search form
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', searchMatches);
    }
    
    // Set default date values
    const today = new Date().toISOString().split('T')[0];
    const dateLostInput = document.getElementById('dateLost');
    const dateFoundInput = document.getElementById('dateFound');
    
    if (dateLostInput) dateLostInput.max = today;
    if (dateFoundInput) dateFoundInput.max = today;
});
