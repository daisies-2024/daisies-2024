function getCurrentTime() {
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const internetTime = `${String(utcHours).padStart(2, '0')}:${String(utcMinutes).padStart(2, '0')}`;
    return internetTime;
}

function displaySchedule(stageFilterValue, dayFilterValue) {
    const scheduleContainer = document.getElementById('schedule');
    scheduleContainer.innerHTML = '';

    const currentTime = getCurrentTime();

    const filteredSetTimes = setTimes.filter(set => {
        const stageMatch = stageFilterValue === 'all' || set.filterValue === stageFilterValue;
        const dayMatch = dayFilterValue === 'all' || set.day === dayFilterValue;
        return stageMatch && dayMatch;
    });

    filteredSetTimes.forEach(set => {
        const stageDiv = document.createElement('div');
        stageDiv.className = 'stage';

        const stageHeader = document.createElement('h2');
        stageHeader.textContent = `${set.stage} - ${set.day}`;
        stageDiv.appendChild(stageHeader);

        set.performances.forEach(performance => {
            const performanceDiv = document.createElement('div');
            performanceDiv.className = 'performance';
            performanceDiv.textContent = `${performance.time} - ${performance.artist}`;
            stageDiv.appendChild(performanceDiv);
        });

        scheduleContainer.appendChild(stageDiv);
    });

    // Show artist performing at the current time
    const artistMatch = filteredSetTimes.find(set =>
        set.performances.some(performance => performance.time === currentTime)
    );

    if (artistMatch) {
        const performance = artistMatch.performances.find(perf => perf.time >= currentTime);
        const artistMessage = document.createElement('div');
        artistMessage.textContent = `Currently performing at ${artistMatch.stage} is ${performance.artist}.`;
        scheduleContainer.appendChild(artistMessage);
    } else {
        const noPerformanceMessage = document.createElement('div');
        noPerformanceMessage.textContent = `No performances are happening right now for the selected stage and day.`;
        scheduleContainer.appendChild(noPerformanceMessage);
    }
}

document.getElementById('stageFilter').addEventListener('change', () => {
    const stageValue = document.getElementById('stageFilter').value;
    const dayValue = document.getElementById('dayFilter').value;
    displaySchedule(stageValue, dayValue);
});

document.getElementById('dayFilter').addEventListener('change', () => {
    const stageValue = document.getElementById('stageFilter').value;
    const dayValue = document.getElementById('dayFilter').value;
    displaySchedule(stageValue, dayValue);
});

// Initial display of all schedules
displaySchedule('all', 'all');
