const stageSelect = document.getElementById('stage-filter');
const daySelect = document.getElementById('day-filter');
const performanceList = document.getElementById('performance-list');

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

function getCurrentDay() {
    const currentDayIndex = getCurrentTimeUTCPlus2().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    return currentDayIndex;
}

// Create a map of days
const daysMap = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
};

// Function to get the name of the current day
function getCurrentDayName() {
    const currentDayIndex = getCurrentDay();
    return daysMap[currentDayIndex];
}

function filterPerformances() {
    const selectedStage = stageSelect.value;
    const selectedDay = daySelect.value;

    performanceList.innerHTML = ''; // Clear existing performances

    const currentTime = getCurrentTimeUTCPlus2();
    const currentFormattedTime = formatTime(currentTime);
    console.log(getCurrentDayName())
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

            performanceElement.innerText = `${startTime} - ${performance.artist} (${performance.duration} hrs)`;

            // Highlight if the performance is currently happening
            if (currentFormattedTime >= startTime && currentFormattedTime < endTime && getCurrentDayName == selectedDay) {
                performanceElement.style.backgroundColor = '#ffcc00'; // Highlight color
                performanceFound = true;
            }

            performanceList.appendChild(performanceElement);
        });
    });

    if (!performanceFound && selectedDay == 'all' && selectedStage == 'all') {
        const noPerformanceElement = document.createElement('div');
        noPerformanceElement.className = 'performance';
        noPerformanceElement.innerText = 'No performances found.';
        performanceList.appendChild(noPerformanceElement);
    } else if (selectedDay == 'all' || selectedStage == 'all') {
        const noPerformanceElement = document.createElement('div');
        noPerformanceElement.className = 'performance';
        noPerformanceElement.innerText = 'Select Stage and Day above.';
        performanceList.appendChild(noPerformanceElement);
    } 
}

stageSelect.addEventListener('change', filterPerformances);
daySelect.addEventListener('change', filterPerformances);

// Initial call to display performances based on default selections
filterPerformances();
