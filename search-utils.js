// search-utils.js
// Search utility functions that use the centralized database

// Search function that works with the SEARCH_DATABASE
window.performSearch = function(query) {
    if (!query?.trim()) {
        window.showElegantMessage('Enter a search term', 'info');
        return;
    }
    
    query = query.toLowerCase().trim();
    const results = window.SEARCH_DATABASE.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.keywords.some(k => k.includes(query))
    );
    
    if (results.length === 0) {
        window.showElegantMessage(`No results found for "${query}"`, 'info');
        return;
    }
    
    if (results.length === 1) {
        window.showElegantMessage(`Found: ${results[0].title}`, 'success');
        setTimeout(() => window.location.href = results[0].url, 800);
    } else {
        window.showElegantMessage(`Found ${results.length} results`, 'success');
        setTimeout(() => window.location.href = results[0].url, 1000);
    }
};

// Generate search hints for autocomplete
window.generateSearchHints = function(query, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (!query || query.length < 2) {
        container.classList.remove('show');
        container.innerHTML = '';
        return;
    }
    
    query = query.toLowerCase().trim();
    const matches = window.SEARCH_DATABASE.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.keywords.some(k => k.includes(query))
    ).slice(0, 5);
    
    if (matches.length === 0) {
        container.classList.remove('show');
        container.innerHTML = '';
        return;
    }
    
    let html = '';
    matches.forEach(m => {
        html += `<div class="hint-item" onclick="window.selectHint('${m.title.replace(/'/g, "\\'")}', '${m.url}')">
            <i class="${m.icon}"></i>
            <span>${m.title}</span>
            <span class="hint-category">${m.category}</span>
        </div>`;
    });
    
    container.innerHTML = html;
    container.classList.add('show');
};

// Select hint function
window.selectHint = function(title, url) {
    window.location.href = url;
};
