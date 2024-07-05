// ในไฟล์ script.js
import fs from 'fs';

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
