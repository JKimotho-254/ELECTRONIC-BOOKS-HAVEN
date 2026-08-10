// Global variables to track the current purchase
let selectedBook = '';
let selectedPrice = 0;

// Toggle the hidden details section on a book card
function toggleDetails(detailId, button) {
    const detailsDiv = document.getElementById(detailId);
    
    if (detailsDiv.classList.contains('hidden')) {
        detailsDiv.classList.remove('hidden');
        button.innerText = 'SHOW LESS ▲';
    } else {
        detailsDiv.classList.add('hidden');
        button.innerText = 'SHOW MORE ▼';
    }
}

// Triggered when clicking "BUY NOW" on any book
function startCheckout(bookTitle, price) {
    selectedBook = bookTitle;
    selectedPrice = price;
    
    const checkoutSection = document.getElementById('checkout-section');
    checkoutSection.classList.remove('hidden');
    checkoutSection.scrollIntoView({ behavior: 'smooth' });
}

// Validate customer details and move forward with payment steps
function proceedToPaymentDetails() {
    const name = document.getElementById('cust-name').value.trim();
    const email = document.getElementById('cust-email').value.trim();

    if (!name || !email) {
        alert('Please enter your name and email first.');
        return;
    }

    alert(`Thanks, ${name}! You're getting "${selectedBook}" for KSh ${selectedPrice}. Reach out via WhatsApp (+254112828590) with your email confirmation to complete your payment.`);
}

// Basic initialization check on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Electronic Books Haven app script initialized.');
});
