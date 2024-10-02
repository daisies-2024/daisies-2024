// Assuming you have already linked data.js in your HTML file
const setTimesContainer = document.getElementById('set-times');
const stageSelect = document.getElementById('stage-select');
const daySelect = document.getElementById('day-select');

// Function to render performances based on selected stage and day
function renderPerformances(selectedStage, selectedDay) {
    // Clear existing performances
    setTimesContainer.innerHTML = '';

    // Filter performances based on selected stage and day
    const filteredSetTimes = setTimes.filter(set => set.stage === selectedStage && set.day === selectedDay);

    // Check if there are performances to display
    if (filteredSetTimes.length === 0) {
        setTimesContainer.innerHTML = '<p>No performances found.</p>';
        return;
    }

    // Render filtered performances
    filteredSetTimes.forEach(set => {
        const performances = set.performances.map(p => `<li>${p.time} - ${p.artist}</li>`).join('');
        const stageHeader = `<h2>${set.stage} (${set.day})</h2>`;
        setTimesContainer.innerHTML += `${stageHeader}<ul>${performances}</ul>`;
    });
}

// Event listeners for stage and day selection
stageSelect.addEventListener('change', () => {
    const selectedStage = stageSelect.value;
    const selectedDay = daySelect.value;
    renderPerformances(selectedStage, selectedDay);
});

daySelect.addEventListener('change', () => {
    const selectedStage = stageSelect.value;
    const selectedDay = daySelect.value;
    renderPerformances(selectedStage, selectedDay);
});

// Initial render (if needed)
renderPerformances(stageSelect.value, daySelect.value);
