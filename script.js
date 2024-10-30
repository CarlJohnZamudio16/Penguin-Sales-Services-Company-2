    // Search function
    function handleSearch(event) {
        event.preventDefault();
        const query = document.getElementById('search-bar').value.toLowerCase();
        
        const pages = {
            bridal: 'bridal.html',
            towing: 'towing.html',
            trucking: 'trucking.html',
            heavy: 'heavy.html',
            maintenance: 'maintainance.html',
            hotel: 'hotel.html',
            auto: 'auto.html',
            contact: 'contact.html',
            about: 'about.html',
            Penguin: 'about.html',
            Services: 'service.html',
            furniture: 'hotel.html',
            autoparts: 'auto.html',
            beds: 'hotel.html',
            truck: 'trucking.html',
            equipment: 'heavy.html',
            repair: 'maintainance.html',
        };
    
        const page = pages[query];
        if (page) {
            window.location.href = page;
        } else {
            window.location.href = 'blank.html'; 
        }
    }

    
    // Show and hide form with animation

function showQuoteForm() {
    document.querySelector(".container .row").style.display = "none"; // Hide main content
    const form = document.getElementById("quote-form");
    form.style.display = "block";
    setTimeout(() => form.classList.add("show"), 10); // Add 'show' for animation
}

function cancelQuote() {
    const form = document.getElementById("quote-form");
    form.classList.remove("show");
    setTimeout(() => {
        form.style.display = "none";
        document.querySelector(".container .row").style.display = "flex"; // Show main content
    }, 500);
}

function submitQuote(event) {
    event.preventDefault();
    alert("Quote submitted!");
    cancelQuote();
}

// Assign event listeners after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("get-quote-btn").addEventListener("click", showQuoteForm);
    document.getElementById("cancel-quote-btn").addEventListener("click", cancelQuote);
    document.getElementById("quote-form-details").addEventListener("submit", submitQuote);
});
