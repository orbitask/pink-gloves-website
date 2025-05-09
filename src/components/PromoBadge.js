import React from 'react';
import { smoothScrollTo } from '../utils/scrollUtils';

function PromoBadge() {
    return (
        <a href="#contact" onClick={smoothScrollTo} className="promo-badge">
            <span className="promo-badge-icon">🎁</span>
            <div className="promo-badge-text">
                First Cleaning
                <span className="promo-badge-highlight">20% OFF</span>
            </div>
        </a>
    );
}

export default PromoBadge; 