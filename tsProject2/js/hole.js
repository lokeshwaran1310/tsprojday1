var WhackGame;
(function (WhackGame) {
    const whackCharacters = [
        { src: "images/img1.jpg", name: "Jeff", type: "good" },
        { src: "images/img2.jpg", name: "Captain Hari", type: "bad" },
        { src: "images/img3.jpg", name: "GPR Sounder", type: "good" },
        { src: "images/img4.jpg", name: "Big man Bharath", type: "good" },
        { src: "images/img5.jpg", name: "Lokesh", type: "good" },
        { src: "images/img6.jpg", name: "Adrin", type: "good" },
        { src: "images/img7.jpg", name: "Pravin sir", type: "good" },
        { src: "images/img8.jpg", name: "Aaditya", type: "good" }
    ];
    
    let whackScores = 0;
    let whackGameOver = false;
    
    const whackHoles = document.querySelectorAll(".hole");
    const whackScoreDisplay = document.getElementById("score");
    const whackGameOverText = document.getElementById("game-over");
    const whackStartBtn = document.getElementById("start-btn");
    
    if (!whackScoreDisplay || !whackGameOverText || !whackStartBtn) {
        console.error('Required elements not found');
    }
    
    function randomWhackHole() {
        const index = Math.floor(Math.random() * whackHoles.length);
        return whackHoles[index];
    }
    
    function randomWhackCharacter() {
        const index = Math.floor(Math.random() * whackCharacters.length);
        return whackCharacters[index];
    }
    
    function showWhackCharacter() {
        if (whackGameOver) return;
        
        const hole = randomWhackHole();
        const char = randomWhackCharacter();
        
        // Clear existing image
        hole.innerHTML = "";
        
        const img = document.createElement("img");
        img.src = char.src;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.borderRadius = "15px";
        img.style.cursor = "pointer";
        
        img.onclick = () => {
            if (whackGameOver) return;
            
            if (char.type === "good") {
                whackScores++;
                whackScoreDisplay.textContent = whackScores.toString();
                console.log(`+1 point for clicking ${char.name}!`);
            } else {
                console.log(`Game Over! You clicked ${char.name} (the bad one)`);
                endWhackGame();
            }
            hole.classList.remove("active");
            hole.innerHTML = "";
        };
        
        hole.appendChild(img);
        hole.classList.add("active");
        
        // Hide after some time
        setTimeout(() => {
            if (!whackGameOver) {
                hole.classList.remove("active");
                hole.innerHTML = "";
            }
        }, 1000);
    }
    
    let whackGameInterval;
    
    function startWhackGame() {
        whackScores = 0;
        whackGameOver = false;
        whackScoreDisplay.textContent = "0";
        whackGameOverText.style.display = "none";
        
        whackGameInterval = setInterval(showWhackCharacter, 1200);
    }
    
    function endWhackGame() {
        whackGameOver = true;
        clearInterval(whackGameInterval);
        whackGameOverText.style.display = "block";
    }
    
    if (whackStartBtn) {
        whackStartBtn.addEventListener("click", startWhackGame);
    }
})(WhackGame || (WhackGame = {}));