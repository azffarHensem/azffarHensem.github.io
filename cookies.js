// Function to set cookies with expiration of 1 month
function setCookies(selectedItems) {
    const expires = new Date();
    expires.setMonth(expires.getMonth() + 1);
    document.cookie = `selectedItems=${JSON.stringify(selectedItems)}; expires=${expires.toUTCString()}; path=/`;
}

// Function to get cookies
function getCookies() {
    const name = "selectedItems=";
    const decodedCookies = decodeURIComponent(document.cookie);
    const ca = decodedCookies.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return JSON.parse(c.substring(name.length, c.length));
        }
    }
    return {}; // If no cookie found, return an empty object
}

// Function to clear cookies
function clearCookies() {
    document.cookie = "selectedItems=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    alert('Cookies cleared.');
}
