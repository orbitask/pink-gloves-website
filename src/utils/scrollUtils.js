/**
 * Handles smooth scrolling to anchor points with header offset
 * 
 * @param {Event} e - The click event
 */
export const smoothScrollTo = (e) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        // Get the height of the header to offset the scroll position
        const headerHeight = document.querySelector('.header').offsetHeight;

        // Calculate the target position with an offset for the header
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

        // Scroll to the target position smoothly
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}; 