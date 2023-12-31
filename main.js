"use strict";
// 1) Обновите содержимое массива с помощью метода map(). Выполните следу- ющие шаги.
// 1. Создайте массив чисел.
// 2. Верните обновленный массив, в котором все значения будут умножены на 2. Используйте для этого метод map() и анонимную функцию. Выведите результаты на экран.
// 3. В качестве альтернативного метода примените в одной строке кода стрелочную функцию для умножения каждого элемента массива на 2 и метод map().
// 4. Выведите результаты на экран.
const arr = [12, 25, 22, 36, 69, 885, 4];
const newArr = arr.map((elem) => elem * 2);
console.log(newArr);
const newArr2 = arr.map(function (num) {
  return num * 2;
});
console.log(newArr2);
//*********************************************** */
// 2) Удалите дубликаты значений из массива с помощью filter() и indexOf(). Начальный массив:
//    ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
//    "Laurence", "Mike", "Laurence", "Mike"]
// Используя метод filter(), создайте новый массив и включите в него элементы, которые проходят реализованное функцией условие проверки.Конечный результат должен быть таким:
//  [ 'Laurence', 'Mike', 'Larry', 'Kim', 'Joanne' ]
// Выполните следующие шаги.
// 1. Создайте массив имен. Убедитесь, что ввели повторяющиеся значения, — это необходимо для выполнения условий упражнения.
// 2. Используя метод filter(), назначьте результирующие значения каждого элемента из массива в качестве аргументов в анонимной функции. Используя значения, индекс и аргументы массива, верните отфильтрованный результат.
// ????? Вы можете временно установить возвращаемое значение true — при этом будет создан новый массив со всеми результатами в исходном массиве.?????
// 3. Добавьте внутри функции вызов console.log, который выведет индекс текущего элемента в массиве. Также добавьте значение, с помощью которого вы увидите значение элемента, имеющего текущий номер индекса, и индекс первого подходящего результата.
// 4. С помощью indexOf() текущее значение возвращает индекс элемента и проверяет, соответствует ли условие исходному индексу. Условие будет истинным только для первого совпадения, поэтому все последующие дубликаты не будут соответствовать условию и не добавятся в новый массив — значение false не позволит сделать это. Таким образом, все дубликаты будут ложными, раз indexof() получает только первое со- впадение в массиве.
// 5. Выведите новый массив уникальных значений на экран

// это из книги, которую я отправил Глава 8

const arrNames = [
  "Laurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
];
const newArrNames = arrNames.filter((item, index) => {
  const arr = arrNames.indexOf(item) === index;
  console.log(`элемент ${item} index ${arrNames.indexOf(item)}`);
  return arr;
});
console.log(newArrNames);
// const newArrNames = [...new Set(arrNames)];
// console.log(newArrNames);

//*********************************************** */

// 3)Преобразование массива в строку
let letters = ["a", "b", "c"];
let str = letters.join("");
console.log(typeof str);
console.log(str);
// output:  "abc"
//*********************************************** */
// 4)
// Используя строчный метод replace(), замените гласные буквы в строке цифрами. Можете начать со строки:
//   I love JavaScript
// и преобразовать ее в нечто подобное:
//   2 l3v1 j0v0scr2pt
const str2 = "I love JavaScript";
const arrVowel = ["a", "e", "i", "o", "u"];
function changeVowel(str) {
  const arr = str.toLowerCase().split("");
  arr.forEach((value, index) => {
    // console.log(value, index);
    if (arrVowel.includes(value)) {
      arr[index] = index;
    }
  });
  const arr3 = arr.join(" ");
  console.log(arr3);
}

changeVowel(str2);
// Выполните следующие шаги.
// 1. Создайте строку и конвертируйте ее в нижний регистр.
// 2. Создайте массив гласных: a, e, i, o, u.
// 3. Пройдитесь по всем буквам, которые уже есть в массиве, и выводите текущую букву на экран, чтобы видеть, какие буквы в итоге будут преобразованы.
// 4. Используйте replaceAll() в цикле и обновите каждую подстроку гласной значением индекса буквы из массива гласных.
// Метод replace() заменит только первое найденное значение. Метод replaceAll() обновит все совпадения.
// 5. Как только цикл завершится, выведите новую строку на экран

//*********************************************** */

// 5)Используя методы управления строками, создайте функцию, которая будет возвращать строку, где каждое слово будет написано с большой буквы. Иными словами, вы должны преобразовать предложение thIs will be capiTalized for each word в This Will Be Capitalized For Each Word.
const str1 = "thIs will be capiTalized for each word";
function changeStr(str) {
  let newStr = str.toLowerCase();
  console.log(newStr);
  const arr = newStr.split(" ");
  console.log(arr);
  arr.forEach((item, index) => {
    arr[index] = item.charAt(0).toUpperCase() + item.slice(1);
    console.log(arr[index]); //дальше застряла
  });
}
// return arr
//   .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
//   .join(" ");

changeStr(str1);
// 1. Создайте строку из нескольких слов, содержащих в себе буквы разного регистра.
// 2. Создайте функцию, получающую строку в качестве аргумента. Эта строка будет значением, которым мы будем управлять.
// 3. Преобразуйте в функции написание всех букв в нижний регистр.
// 4. Создайте пустой массив — в нем будут храниться значения слов, написанных с заглавной буквы.
// 5. Преобразуйте целую фразу в отдельные слова в массиве, используя метод split().
// 6. Переберите циклом все слова нового массива, чтобы обращаться независимо к любому из них. Можно для этого применить forEach().

//*********************************************** */
// 6)Обработка ошибки при работе с массивом:

// Создайте функцию getArrayElement, которая принимает массив и индекс. Попробуйте получить элемент массива по указанному индексу. Если индекс выходит за пределы массива, бросьте ошибку с сообщением "Индекс вне диапазона". В противном случае верните элемент массива.
const array = [1, 2, 3, 4, 5];
function getArrayElement(arr, index) {
  try {
    if (arr[index]) {
      console.log(arr[index]);
    } else {
      throw { message: "Error!EEEEERRR" };
    }
  } catch (err) {
    console.log(err.message);
  }
}
getArrayElement(array, 2); // Ожидаемый результат: 3
getArrayElement(array, 10); // Ожидаемый результат: Error с сообщением "
//*********************************************** */
// 7) Обработка ошибки при разборе JSON:
function parseJSON(str) {
  try {
    if (JSON.stringify(str)) {
      console.log(JSON.parse(str));
      JSON.parse(str);
    } else {
      throw { message: "Error!!!!" };
    }
  } catch (err) {
    console.log(err.message);
  }
}
parseJSON('{"name": "John", "age": 25}');
parseJSON("invalid-json");
// Создайте функцию parseJSON, которая принимает строку JSON и пытается разобрать её с использованием JSON.parse. Если разбор невозможен, бросьте ошибку с сообщением "Ошибка разбора JSON". В противном случае верните разобранный объект.
// parseJSON('{"name": "John", "age": 25}'); // Ожидаемый результат: { name: "John", age: 25 }
// parseJSON('invalid-json'); // Ожидаемый результат: Error с сообщением "Оши
//*********************************************** */
// 8)Обработка ошибки при делении строк:

// Создайте функцию divideStrings, которая принимает две строки и пытается поделить одну строку на другую. Если деление невозможно, бросьте ошибку с сообщением "Ошибка при делении строк". В противном случае верните результат деления.
function divideStrings(str1, str2) {
  const strNew1 = parseInt(str1);
  const strNew2 = parseInt(str2);
  try {
    if (!isNaN(strNew1) && !isNaN(strNew2)) {
      return strNew1 / strNew2;
    } else {
      throw new Error("Error! Invalid input.");
    }
  } catch (err) {
    console.log(err.message);
  }
}
console.log(divideStrings("15", "3"));
console.log(divideStrings("abc", "def"));
// divideStrings("15", "3"); // Ожидаемый результат: 5
// divideStrings("abc", "def"); // Ожидаемый результат: Error с сообщением
//*********************************************** */
// 9) Обработка ошибки парсинга числа:

// Создайте функцию parseNumber, которая принимает строку. Внутри функции попробуйте преобразовать строку в число с использованием parseInt. Если преобразование не удалось, бросьте ошибку с сообщением "Невозможно распознать число". В противном случае верните преобразованное число.
function parseNumber(str) {
  const num = parseInt(str);
  try {
    if (!isNaN(num)) {
      console.log(`Number:${num}`);
    } else {
      throw new Error("Error! Invalid input.");
    }
  } catch (err) {
    console.log(err.message);
  }
}
parseNumber("121544578");
parseNumber("Heeeeellllooo!");
//*********************************************** */
// 10)Слияние объектов:

// Создайте функцию mergeObjects, которая принимает два объекта. Внутри функции объедините свойства этих объектов в новом объекте и верните его.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
function mergeObjects(a, b) {
  const obj = { ...a, ...b };
  return obj;
}
console.log(mergeObjects(obj1, obj2));
// mergeObjects(obj1, obj2);
// // Ожидаемый результат: { a: 1, b: 3, c: 4 }
//*********************************************** */
// 11)Разделение объекта:

// Создайте функцию splitObject, которая принимает объект и массив свойств. Внутри функции создайте два объекта: один с указанными свойствами, а второй с остальными свойствами. Верните массив из двух объектов.

const inputObj = { a: 1, b: 2, c: 3, d: 4 };
const propertiesToKeep = ["a", "c"];
function splitObject(obj, arr) {
  const objIncluded = {};
  const objExcluded = {};
  for (let key in obj) {
    if (arr.includes(key)) {
      objIncluded[key] = obj[key];
    } else {
      objExcluded[key] = obj[key];
    }
  }
  return [objIncluded, objExcluded];
}
const res = splitObject(inputObj, propertiesToKeep);
console.log(res); //не сама решила

// splitObject(inputObj, propertiesToKeep);
// Ожидаемый результат: [{ a: 1, c: 3 }, { b: 2, d: 4 }]

//*********************************************** */
// 12) Разворачивание объекта:

// Создайте функцию flattenObject, которая принимает вложенный объект и возвращает объект с плоской структурой (без вложенности). Используйте спред-оператор для разворачивания объекта.

const nestedObj = { a: 1, b: { c: 2, d: { e: 3 } } };
function flattenObject(obj) {
  const newObj = { ...obj };
  return newObj;
}
console.log(flattenObject(nestedObj));
// flattenObject(nestedObj);
// Ожидаемый результат: { a: 1, 'b.c': 2, 'b.d.e': 3 }
//*********************************************** */
// 13) Фильтрация по значению:

// Создайте функцию filterByValue, которая принимает объект и значение. Внутри функции верните новый объект, содержащий только те свойства, у которых значение соответствует заданному.

const inputObj2 = { a: 1, b: 2, c: 1, d: 3 };
function filterByValue(obj, num) {
  const newObj = {};
  //   if(num = )
}
filterByValue(inputObj, 1);
// filterByValue(inputObj, 1);
// Ожидаемый результат: { a: 1, c: 1 }
//*********************************************** */
