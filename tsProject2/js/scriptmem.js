var MemoryGame;
(function (MemoryGame) {
    const memoryImages = [
        "images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"
    ];
    
    // duplicate each image to make pairs
    let memoryCardsData = memoryImages.flatMap((img, index) => [
        { id: index, img },
        { id: index, img }
    ]);
    
    // shuffle function
    function shuffleMemory(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    
    let memoryFirstCard = null;
    let memorySecondCard = null;
    let memoryLockBoard = false;
    let memoryMatchedPairs = 0;
    
    function createMemoryBoard() {
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
    }
    
    function flipMemoryCard(card) {
        if (memoryLockBoard || card === memoryFirstCard || card.classList.contains("matched")) return;
        
        card.classList.add("flipped");
        
        if (!memoryFirstCard) {
            memoryFirstCard = card;
        } else {
            memorySecondCard = card;
            checkMemoryMatch();
        }
    }
    
    function checkMemoryMatch() {
        if (!memoryFirstCard || !memorySecondCard) return;
        
        const id1 = memoryFirstCard.dataset.id;
        const id2 = memorySecondCard.dataset.id;
        
        if (id1 === id2) {
            memoryFirstCard.classList.add("matched");
            memorySecondCard.classList.add("matched");
            memoryMatchedPairs++;
            
            if (memoryMatchedPairs === memoryImages.length) {
                const statusElement = document.getElementById("status");
                if (statusElement) {
                    statusElement.textContent = "🎉 You found all pairs!";
                }
            }
            resetMemoryTurn();
        } else {
            memoryLockBoard = true;
            setTimeout(() => {
                memoryFirstCard.classList.remove("flipped");
                memorySecondCard.classList.remove("flipped");
                resetMemoryTurn();
            }, 1000);
        }
    }
    
    function resetMemoryTurn() {
        [memoryFirstCard, memorySecondCard] = [null, null];
        memoryLockBoard = false;
    }
    
    createMemoryBoard();
})(MemoryGame || (MemoryGame = {}));