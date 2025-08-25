namespace MemoryMatchGame {
  interface MemoryGameCardData {
    id: number;
    img: string;
    name: string;
  }

  interface MemoryGameImageData {
    src: string;
    name: string;
  }

  const memoryImages: MemoryGameImageData[] = [
    { src: "images/img1.jpg", name: "Jeff" },
    { src: "images/img2.jpg", name: "Captain Hari" },
    { src: "images/img3.jpg", name: "GPR Sounder" },
    { src: "images/img4.jpg", name: "Big man Bharath" },
    { src: "images/img5.jpg", name: "Lokesh" },
    { src: "images/img6.jpg", name: "Adrin" },
    { src: "images/img7.jpg", name: "Pravin sir" },
    { src: "images/img8.jpg", name: "Aaditya" }
  ];

  // duplicate each image to make pairs
  let memoryCardsData: MemoryGameCardData[] = memoryImages.flatMap((imgData, index) => [
    { id: index, img: imgData.src, name: imgData.name },
    { id: index, img: imgData.src, name: imgData.name }
  ]);

  // shuffle function
  function shuffleMemory(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
  }

  let memoryFirstCard: HTMLElement | null = null;
  let memorySecondCard: HTMLElement | null = null;
  let memoryLockBoard = false;
  let memoryMatchedPairs = 0;
  let memoryMoves = 0;
  let memoryFoundNames: string[] = [];

  function createMemoryBoard(): void {
    const board = document.getElementById("gameBoard");
    if (!board) return;
    
    board.innerHTML = "";
    
    shuffleMemory(memoryCardsData).forEach((cardData, i) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.dataset.id = cardData.id.toString();

      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front"></div>
          <div class="card-back" style="background-image: url('${cardData.img}')"></div>
        </div>
      `;

      card.addEventListener("click", () => flipMemoryCard(card));
      board.appendChild(card);
    });
    
    // Reset counters
    memoryMoves = 0;
    memoryMatchedPairs = 0;
    memoryFoundNames = [];
    updateMemoryScores();
    const namesList = document.getElementById("namesList");
    if (namesList) namesList.innerHTML = "";
  }

  function flipMemoryCard(card: HTMLElement): void {
    if (memoryLockBoard || card === memoryFirstCard || card.classList.contains("matched")) return;

    card.classList.add("flipped");

    if (!memoryFirstCard) {
      memoryFirstCard = card;
    } else {
      memorySecondCard = card;
      memoryMoves++;
      updateMemoryScores();
      checkMemoryMatch();
    }
  }

  function checkMemoryMatch(): void {
    if (!memoryFirstCard || !memorySecondCard) return;

    const id1 = memoryFirstCard.dataset.id;
    const id2 = memorySecondCard.dataset.id;

    if (id1 === id2) {
      memoryFirstCard.classList.add("matched");
      memorySecondCard.classList.add("matched");
      memoryMatchedPairs++;

      const matchedName = memoryCardsData.find(card => card.id.toString() === id1)?.name || "Unknown";
      
      showMemoryMatchPopup(matchedName);
      addMemoryFoundName(matchedName);
      
      const statusElement = document.getElementById("status");
      if (statusElement) {
        statusElement.textContent = `✨ ${matchedName} found! Keep going!`;
      }
      
      updateMemoryScores();

      if (memoryMatchedPairs === memoryImages.length) {
        setTimeout(() => {
          showMemoryWinAnimation();
          if (statusElement) {
            statusElement.textContent = "🏆 Congratulations! All friends found!";
          }
        }, 1000);
      }
      resetMemoryTurn();
    } else {
      memoryLockBoard = true;
      setTimeout(() => {
        memoryFirstCard!.classList.remove("flipped");
        memorySecondCard!.classList.remove("flipped");
        resetMemoryTurn();
      }, 1000);
    }
  }

  function resetMemoryTurn(): void {
    [memoryFirstCard, memorySecondCard] = [null, null];
    memoryLockBoard = false;
  }

  function updateMemoryScores(): void {
    const matchesElement = document.getElementById("matches");
    const movesElement = document.getElementById("moves");
    if (matchesElement) matchesElement.textContent = memoryMatchedPairs.toString();
    if (movesElement) movesElement.textContent = memoryMoves.toString();
  }

  function showMemoryMatchPopup(name: string): void {
    const popup = document.getElementById("matchPopup");
    if (popup) {
      popup.textContent = `🎉 ${name} Found!`;
      popup.classList.add("show");
      
      setTimeout(() => {
        popup.classList.remove("show");
      }, 2000);
    }
  }

  function addMemoryFoundName(name: string): void {
    if (!memoryFoundNames.includes(name)) {
      memoryFoundNames.push(name);
      const namesList = document.getElementById("namesList");
      if (namesList) {
        const nameTag = document.createElement("div");
        nameTag.classList.add("name-tag");
        nameTag.textContent = name;
        namesList.appendChild(nameTag);
      }
    }
  }

  function showMemoryWinAnimation(): void {
    const container = document.querySelector(".memory-container");
    if (container) {
      container.classList.add("win-animation");
    }
    
    for (let i = 0; i < 50; i++) {
      createMemoryConfetti();
    }
  }

  function createMemoryConfetti(): void {
    const confetti = document.createElement("div");
    confetti.style.cssText = `
      position: fixed; width: 10px; height: 10px;
      background: ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][Math.floor(Math.random() * 5)]};
      left: ${Math.random() * 100}vw; top: -10px; z-index: 1000;
      animation: confettiFall 3s linear forwards;
    `;
    
    document.body.appendChild(confetti);
    setTimeout(() => { confetti.remove(); }, 3000);
  }

  createMemoryBoard();
} // End MemoryMatchGame namespace
