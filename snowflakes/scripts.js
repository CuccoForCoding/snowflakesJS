function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '&#10052;'; // Snowflake icon
    snowflake.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
    snowflake.style.animationDuration = Math.random() * 5 + 4 + 's'; // Random duration
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove(); // Remove snowflake after animation ends
    }, 5000); // Adjust timing as needed
}

function snowfall() {
    setInterval(createSnowflake, 500); // Interval for creating snowflakes
}

snowfall(); // Start snowfall