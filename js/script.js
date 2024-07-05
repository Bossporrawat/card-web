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
const fs = require('fs');

// ข้อมูลที่คุณต้องการเพิ่ม
const newData = {
  asfhg: {
    name: {
      0: 'Boss',
      1: 'Korn',
    },
    usedcard: {
      0: '2D',
      1: 'AD',
    },
  },
};

// อ่านข้อมูลปัจจุบันจากไฟล์ id.json
const existingData = JSON.parse(fs.readFileSync('id.json', 'utf8'));

// เพิ่มข้อมูลใหม่ลงในข้อมูลที่มีอยู่
const updatedData = { ...existingData, ...newData };

// เขียนข้อมูลใหม่กลับลงในไฟล์ id.json
fs.writeFileSync('id.json', JSON.stringify(updatedData, null, 2), 'utf8');

console.log('ข้อมูลถูกเพิ่มเข้าไปในไฟล์ id.json แล้ว');
