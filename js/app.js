// API Configuration - замените на ваш URL после настройки бэкенда
const API_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';

function showMessage(elementId, message, type) {
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
        timestamp: new Date().toISOString(),
        language: currentLang
    };
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.status === 'ok') {
            const successMsg = currentLang === 'ru' 
                ? 'Заявка принята! Мы уведомим вас при совпадении.'
                : 'Report submitted! We will notify you if a match is found.';
            showMessage('resultMessage', successMsg, 'success');
            event.target.reset();
        } else {
            const errorMsg = currentLang === 'ru'
                ? 'Ошибка. Попробуйте снова.'
                : 'An error occurred. Please try again.';
            showMessage('resultMessage', errorMsg, 'error');
        }
    } catch (error) {
        const errorMsg = currentLang === 'ru'
            ? 'Ошибка сети. Проверьте соединение.'
            : 'Network error. Please check your connection.';
        showMessage('resultMessage', errorMsg, 'error');
    }
}

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
        timestamp: new Date().toISOString(),
        language: currentLang
    };
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.status === 'ok') {
            const successMsg = currentLang === 'ru'
                ? 'Спасибо! Владелец будет уведомлён при совпадении.'
                : 'Thank you! The owner will be notified if this matches a lost report.';
            showMessage('resultMessage', successMsg, 'success');
            event.target.reset();
        } else {
            const errorMsg = currentLang === 'ru'
                ? 'Ошибка. Попробуйте снова.'
                : 'An error occurred. Please try again.';
            showMessage('resultMessage', errorMsg, 'error');
        }
    } catch (error) {
        const errorMsg = currentLang === 'ru'
            ? 'Ошибка сети. Проверьте соединение.'
            : 'Network error. Please check your connection.';
        showMessage('resultMessage', errorMsg, 'error');
    }
}

async function searchMatches(event) {
    event.preventDefault();
    
    const searchParams = {
        itemName: document.getElementById('searchItem').value,
        city: document.getElementById('searchCity').value,
        category: document.getElementById('searchCategory').value
    };
    
    const resultsContainer = document.getElementById('resultsContainer');
    const loadingMsg = currentLang === 'ru' ? 'Поиск совпадений...' : 'Searching for matches...';
    resultsContainer.innerHTML = `<div class="loading">${loadingMsg}</div>`;
    
    try {
        const response = await fetch(`${API_URL}?action=search&item=${encodeURIComponent(searchParams.itemName)}&city=${encodeURIComponent(searchParams.city)}&category=${encodeURIComponent(searchParams.category)}&lang=${currentLang}`);
        const matches = await response.json();
        
        if (matches.length === 0) {
            const noResultsMsg = currentLang === 'ru'
                ? 'Совпадений не найдено. Попробуйте изменить параметры поиска.'
                : 'No matches found. Try changing your search criteria.';
            resultsContainer.innerHTML = `<div class="no-results">${noResultsMsg}</div>`;
        } else {
            resultsContainer.innerHTML = matches.map(match => `
                <div class="match-card">
                    <div class="match-header">
                        <h3>${match.itemName}</h3>
                        <span class="match-score">${match.score}% ${currentLang === 'ru' ? 'совпадение' : 'Match'}</span>
                    </div>
                    <div class="match-details">
                        <div class="match-detail"><strong>${currentLang === 'ru' ? 'Место:' : 'Location:'}</strong> ${match.location}, ${match.city}</div>
                        <div class="match-detail"><strong>${currentLang === 'ru' ? 'Категория:' : 'Category:'}</strong> ${match.category}</div>
                        <div class="match-detail"><strong>${currentLang === 'ru' ? 'Цвет:' : 'Color:'}</strong> ${match.color || (currentLang === 'ru' ? 'Не указан' : 'Not specified')}</div>
                    </div>
                    <div class="match-contact">
                        <strong>${currentLang === 'ru' ? 'Контакт:' : 'Contact:'}</strong> ${match.contactEmail}
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        const errorMsg = currentLang === 'ru'
            ? 'Ошибка поиска. Попробуйте снова.'
            : 'Search error. Please try again.';
        resultsContainer.innerHTML = `<div class="error">${errorMsg}</div>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('lostCount')) {
        loadStatistics();
    }
    
    const lostForm = document.getElementById('lostForm');
    if (lostForm) lostForm.addEventListener('submit', reportLost);
    
    const foundForm = document.getElementById('foundForm');
    if (foundForm) foundForm.addEventListener('submit', reportFound);
    
    const searchForm = document.getElementById('searchForm');
    if (searchForm) searchForm.addEventListener('submit', searchMatches);
    
    const today = new Date().toISOString().split('T')[0];
    const dateLostInput = document.getElementById('dateLost');
    const dateFoundInput = document.getElementById('dateFound');
    if (dateLostInput) dateLostInput.max = today;
    if (dateFoundInput) dateFoundInput.max = today;
});
