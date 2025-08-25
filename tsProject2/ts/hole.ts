namespace FriendWhackGame {
  interface WhackGameCharacter {
    src: string;
    name: string;
    type: "good" | "bad";
  }

  const whackCharacters: WhackGameCharacter[] = [
    { src: "images/img1.jpg", name: "Jeff", type: "good" },
    { src: "images/img2.jpg", name: "Captain Hari", type: "bad" },
    { src: "images/img3.jpg", name: "GPR Sounder", type: "good" },
    { src: "images/img4.jpg", name: "Big man Bharath", type: "good" },
    { src: "images/img5.jpg", name: "Lokesh", type: "good" },
    { src: "images/img6.jpg", name: "Adrin", type: "good" },
    { src: "images/img7.jpg", name: "Pravin sir", type: "good" },
    { src: "images/img8.jpg", name: "Aaditya", type: "good" }
  ];

  let whackScore = 0;
  let whackGameActive = false;

  const whackHoles = document.querySelectorAll(".hole") as NodeListOf<HTMLDivElement>;
  const whackScoreDisplay = document.getElementById("score");
  const whackGameOverText = document.getElementById("game-over");
  const whackStartBtn = document.getElementById("start-btn") as HTMLButtonElement | null;

  function randomWhackHole(): HTMLDivElement {
    const index = Math.floor(Math.random() * whackHoles.length);
    return whackHoles[index];
  }

  function randomWhackCharacter(): WhackGameCharacter {
    const index = Math.floor(Math.random() * whackCharacters.length);
    return whackCharacters[index];
  }

  function showWhackCharacter(): void {
    if (!whackGameActive) return;

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
      if (!whackGameActive) return;

      if (char.type === "good") {
        whackScore++;
        if (whackScoreDisplay) {
          whackScoreDisplay.textContent = whackScore.toString();
        }
        showWhackMessage(`+1 for ${char.name}!`, '#00ff00');
      } else {
        endWhackGame();
        showWhackMessage(`Game Over! You hit ${char.name}!`, '#ff0000');
      }
      hole.classList.remove("active");
      hole.innerHTML = "";
    };

    hole.appendChild(img);
    hole.classList.add("active");

    // Hide after some time
    setTimeout(() => {
      if (whackGameActive) {
        hole.classList.remove("active");
        hole.innerHTML = "";
      }
    }, 1000);
  }

  let whackGameInterval: number;

  function startWhackGame(): void {
    whackScore = 0;
    whackGameActive = true;
    if (whackScoreDisplay) whackScoreDisplay.textContent = "0";
    if (whackGameOverText) whackGameOverText.style.display = "none";
    if (whackStartBtn) {
      (whackStartBtn as HTMLButtonElement).disabled = true;
      whackStartBtn.textContent = "Playing...";
    }

    whackGameInterval = setInterval(showWhackCharacter, 1200);
  }

  function endWhackGame(): void {
    whackGameActive = false;
    clearInterval(whackGameInterval);
    if (whackGameOverText) whackGameOverText.style.display = "block";
    if (whackStartBtn) {
      (whackStartBtn as HTMLButtonElement).disabled = false;
      whackStartBtn.textContent = "Start Game";
    }
    
    // Clear all holes
    whackHoles.forEach(hole => {
      hole.classList.remove("active");
      hole.innerHTML = "";
    });
  }

  function showWhackMessage(text: string, color: string): void {
    const message = document.createElement('div');
    message.textContent = text;
    message.style.cssText = `
      position: fixed; top: 20%; left: 50%; transform: translateX(-50%);
      background: ${color}; color: white; padding: 10px 20px;
      border-radius: 10px; font-weight: bold; z-index: 1000;
      animation: whackMessageFade 2s ease-out forwards;
    `;
    
    document.body.appendChild(message);
    setTimeout(() => message.remove(), 2000);
  }

  if (whackStartBtn) {
    whackStartBtn.addEventListener("click", startWhackGame);
  }
} // End FriendWhackGame namespace
