const user = {
  name: 'Dima',
  surname: 'Oliynyk',
  userPhoto: 'my-photo.jpg',
  qrQode: 'qr-code.svg',
  dreams: [
    { src: 'iosImg.jpeg', alt: 'Програмування для IOS' },
    { src: 'car.jpg', alt: 'Авто мрії' },
    { src: 'usaFlag.png', alt: 'Подорож до Америки' },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500, 
  700, 
  800, 
  1000, 
  1200, 
  1500, 
  1800, 
  2100, 
  2400, 
  2700, 
  3000, 
  3300
];

const necessaryExpenses = 800;

const todo = [
  { month: 'Червень', skill: 'JavaScript' },
  { month: 'Липень', skill: 'Java' },
  { month: 'Серпень', skill: 'Python' },
  { month: 'Вересень', skill: 'Самостійність' },
  { month: 'Жовтень', skill: 'Гнучкість' },
  { month: 'Листопад', skill: 'Емоційний інтелект' },
  { month: 'Грудень', skill: 'PHP' },
  { month: 'Січень', skill: 'Swift' },
  { month: 'Лютий', skill: 'Лідерство' },
  { month: 'Березень', skill: 'Objective C' },
  { month: 'Квітень', skill: 'React JS' },
  { month: 'Травень', skill: 'Node JS' },
];

export { user, arr, necessaryExpenses, todo };