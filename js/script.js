function getRandomCard(numCards) {
    // สัญลักษณ์ของไพ่
    const suits = ['D', 'S', 'H', 'C'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    for (let i = 0; i < numCards; i++) {
        const randomSuitIndex = Math.floor(Math.random() * 4);
        const randomRankIndex = Math.floor(Math.random() * 13);
        const selectedSuit = suits[randomSuitIndex];
        const selectedRank = ranks[randomRankIndex];

        console.log(`Random Card ${i + 1}: ${selectedRank}${selectedSuit}`);
    }
}