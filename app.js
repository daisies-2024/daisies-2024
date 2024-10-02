const stageSelect = document.getElementById('stageSelect');
const daySelect = document.getElementById('daySelect');
const performanceList = document.getElementById('performanceList');

// Function to get the current time in UTC+2
function getCurrentTimeUTCPlus2() {
    const currentTime = new Date();
    const utcTime = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
    const utcPlus2Time = new Date(utcTime + (2 * 3600000)); // Add 2 hours in milliseconds
    return utcPlus2Time;
}

// Function to format time to HH:mm
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function filterPerformances() {
    const selectedStage = stageSelect.value;
    const selectedDay = daySelect.value;

    performanceList.innerHTML = ''; // Clear existing performances

    const currentTime = getCurrentTimeUTCPlus2();
    const currentFormattedTime = formatTime(currentTime);
    let performanceFound = false;

    const filteredData = setTimes.filter(set => 
        (selectedStage === '' || set.stage === selectedStage) && 
        (selectedDay === '' || set.day === selectedDay)
    );

    filteredData.forEach(set => {
        set.performances.forEach(performance => {
            const performanceElement = document.createElement('div');
            performanceElement.className = 'performance';

            // Calculate start and end time of the performance
            const [startHour, startMinute] = performance.time.split(':').map(Number);
            const durationParts = performance.duration.split(':').map(Number);
            const durationInMinutes = durationParts[0] * 60 + durationParts[1];
            const endHour = startHour + Math.floor((startMinute + durationInMinutes) / 60);
            const endMinute = (startMinute + durationInMinutes) % 60;

            // Create formatted strings for start and end times
            const startTime = formatTime(new Date(currentTime.setHours(startHour, startMinute, 0, 0)));
            const endTime = formatTime(new Date(currentTime.setHours(endHour, endMinute, 0, 0)));

            performanceElement.innerText = `${startTime} - ${performance.artist} (${performance.duration})`;

            // Highlight if the performance is currently happening
            if (currentFormattedTime >= startTime && currentFormattedTime < endTime) {
                performanceElement.style.backgroundColor = '#ffcc00'; // Highlight color
                performanceFound = true;
            }

            performanceList.appendChild(performanceElement);
        });
    });

    if (!performanceFound) {
        const noPerformanceElement = document.createElement('div');
        noPerformanceElement.className = 'performance';
        noPerformanceElement.innerText = 'No performances currently happening.';
        performanceList.appendChild(noPerformanceElement);
    }
}

stageSelect.addEventListener('change', filterPerformances);
daySelect.addEventListener('change', filterPerformances);

// Initial call to display performances based on default selections
filterPerformances();
