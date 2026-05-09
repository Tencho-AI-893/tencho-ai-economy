import './style.css'

(function() {
    const deployCounter = document.getElementById('deployCounter');
    if (!deployCounter) return;
    let elapsedMinutes = 2;
    let elapsedSeconds = 0;

    function updateCounter() {
        elapsedSeconds++;
        if (elapsedSeconds >= 60) { 
            elapsedSeconds = 0;
            elapsedMinutes++; 
        }
        let timeStr;
        if (elapsedMinutes === 0) timeStr = elapsedSeconds + ' seconds ago';
        else if (elapsedMinutes === 1) timeStr = '1 minute ago';
        else if (elapsedMinutes < 60) timeStr = elapsedMinutes + ' minutes ago';
        else {
            const hours = Math.floor(elapsedMinutes / 60);
            const mins = elapsedMinutes % 60;
            timeStr = hours + 'h ' + mins + 'm ago';
        }
        deployCounter!.textContent = timeStr;
    }
    
    // Initial update to avoid wait
    updateCounter();
    
    // Update every 30 seconds as per original script logic (though interval is 30000)
    setInterval(updateCounter, 30000);
    
    const now = new Date();
    if (now.getSeconds() > 30) {
        elapsedSeconds += Math.floor(now.getSeconds() / 30);
        if (elapsedSeconds >= 60) { 
            elapsedSeconds = 0;
            elapsedMinutes++; 
        }
        updateCounter();
    }
})();
