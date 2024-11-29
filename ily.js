const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function mergeSortedArrays(arr1, arr2, order = 'asc') {
const sortedArr1 = [...arr1].sort((a, b) => (order === 'asc' ? a - b : b - a));
const sortedArr2 = [...arr2].sort((a, b) => (order === 'asc' ? a - b : b - a));

const result = [];
let i = 0;
let j = 0;

const compare = (a, b) => (order === 'asc' ? a < b : a > b);

while (i < sortedArr1.length && j < sortedArr2.length) {
if (compare(sortedArr1[i], sortedArr2[j])) {
result.push(sortedArr1[i]);
i++;
} else {
result.push(sortedArr2[j]);
j++;
}
}

while (i < sortedArr1.length) {
result.push(sortedArr1[i]);
i++;
}

 while (j < sortedArr2.length) {
result.push(sortedArr2[j]);
j++;
}

return result;
}

rl.question('Введіть перший масив (через кому): ', (input1) => {
const arr1 = input1.split(',').map(Number);

rl.question('Введіть другий масив (через кому): ', (input2) => {
const arr2 = input2.split(',').map(Number);

rl.question('Виберіть напрям сортування (asc/desc): ', (order) => {
if (order !== 'asc' && order !== 'desc') {
console.log('Невірний напрям сортування. Спробуйте знову.');
rl.close();
return;
}

const sorted = mergeSortedArrays(arr1, arr2, order);
console.log(`Результат сортування (${order}):`, sorted);

rl.close();
});
});
});
