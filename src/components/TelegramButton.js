import React from 'react';

function TelegramButton() {
    // The username without @ (you can replace with a specific username if desired)
    const telegramUsername = '9412879038';
    const message = "Hello! I'm interested in your cleaning services."; // Default message

    // Create the Telegram URL with the username and pre-filled message
    const telegramUrl = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={telegramUrl}
            className="telegram-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on Telegram"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="white"
            >
                <path d="M12,0c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M17.6,8.445  c-0.156,1.656-0.834,5.677-1.177,7.533c-0.145,0.797-0.431,1.062-0.708,1.089c-0.599,0.052-1.056-0.395-1.636-0.776  c-0.909-0.598-1.423-0.97-2.297-1.547c-1.016-0.672-0.358-1.042,0.22-1.646c0.152-0.158,2.798-2.561,2.85-2.773  c0.005-0.027,0.012-0.127-0.046-0.18c-0.061-0.053-0.148-0.036-0.212-0.021c-0.091,0.021-1.524,0.967-4.303,2.839  c-0.407,0.28-0.775,0.416-1.105,0.41c-0.363-0.008-1.062-0.206-1.581-0.374c-0.636-0.207-1.142-0.316-1.097-0.668  c0.022-0.181,0.272-0.365,0.748-0.552c2.93-1.272,4.882-2.112,5.855-2.52c2.787-1.175,3.366-1.379,3.745-1.388  c0.082-0.001,0.267,0.018,0.388,0.111c0.1,0.077,0.127,0.181,0.14,0.254C17.598,8.182,17.616,8.293,17.6,8.445z" />
            </svg>
        </a>
    );
}

export default TelegramButton; 