var PenaltyGame;
(function (PenaltyGame) {
    // Get elements
    const penaltyField = document.querySelector('.field');
    const penaltyKeeper = document.querySelector('.keeper');
    const penaltyScoreboard = document.querySelector('.scoreboard');
    
    // Ball creation
    const penaltyBall = document.createElement('div');
    penaltyBall.classList.add('ball');
    if (penaltyField) {
        penaltyField.appendChild(penaltyBall);
    }
    
    // Inline styling for ball
    penaltyBall.style.width = "40px";
    penaltyBall.style.height = "40px";
    penaltyBall.style.borderRadius = "50%";
    penaltyBall.style.background = "white";
    penaltyBall.style.position = "absolute";
    penaltyBall.style.bottom = "30px";
    penaltyBall.style.left = "50%";
    penaltyBall.style.transform = "translateX(-50%)";
    
    // Score variables
    let penaltyScore = 0;
    let penaltySaves = 0;
    
    // Reset ball position
    function resetPenaltyBall() {
        penaltyBall.style.transition = "none";
        penaltyBall.style.bottom = "30px";
        penaltyBall.style.left = "50%";
    }
    
    // Update scoreboard
    function updatePenaltyScore() {
        if (penaltyScoreboard) {
            penaltyScoreboard.innerHTML = `Goals: ${penaltyScore} | Saves: ${penaltySaves}`;
        }
    }
    
    // Handle shot
    if (penaltyField) {
        penaltyField.addEventListener('click', (e) => {
            const rect = penaltyField.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            // Animate ball
            penaltyBall.style.transition = "all 0.7s linear";
            penaltyBall.style.left = `${clickX}px`;
            penaltyBall.style.bottom = `${penaltyField.offsetHeight - clickY}px`;
            
            // After animation, check collision
            setTimeout(() => {
                if (penaltyKeeper) {
                    const keeperRect = penaltyKeeper.getBoundingClientRect();
                    const ballRect = penaltyBall.getBoundingClientRect();
                    
                    if (
                        ballRect.left < keeperRect.right &&
                        ballRect.right > keeperRect.left &&
                        ballRect.top < keeperRect.bottom &&
                        ballRect.bottom > keeperRect.top
                    ) {
                        penaltySaves++;
                        alert("🥅 Saved by Keeper!");
                    } else {
                        penaltyScore++;
                        alert("⚽ GOAL!");
                    }
                    
                    updatePenaltyScore();
                    resetPenaltyBall();
                }
            }, 700);
        });
    }
})(PenaltyGame || (PenaltyGame = {}));