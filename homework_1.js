console.log('number' + 3 + 3)
// Результат = 'number33'. Підсумовуються введені числа та додаються до рядка, і отримується рядок 'number33'

console.log(null + 3)
// Результат = 3. Значення Null перетворюється на 0 та додається до 3 "0 + 3 = 3"

console.log(5 && "qwerty")
// Рузультат = "qwerty". Число 5, є істинним та тескт qwerty є істиним, у результаті виводиться останне істине значення. а саме "qwerty"

console.log (+'40' + +'2' + "hillel")
/* Результат = "42hillel" Унарний плюс перетворює дані у числовий тип, потім оператор + додає ці числа та намагається додати до них данні які не є числом
"hillel" - це NaN, тому результат буде "42hillel" тому що при додаванні чисел до NaN залишається ісходні текстові данні.
*/

console.log ('10' - 5 === 6)
/* Результат = false
Рядок '10' автоматично конвертовано у число, тобто 10 - 5 = 5,
потім оператор строгого порівняння '===' порівнює данні і у разі їх відмінності видає результат false */

console.log (true + false)
// Результат = 1. У контексті числових операцій логічне значення 'true' = 1 а 'false' = 0, тому 1+0=1 

console.log ('4px' - 3)
// Результат = NaN. Вираз '4px' - 3 взагалі не валідний математичний вираз, і JavaScript поверне NaN, що вказує на те, що операція не може бути виконана через некоректні дані.

console.log ('4' - 3)
// Результат = 1. Рядок '4' конвертується в число, і відбувається віднімання, результатом якого буде число 1.

console.log ('6' + 3 ** 0)
// Результат = 61. 3 у ступені 0 = 1 додається до рядка 6, виходить 61

console.log (12 / '6')
// Результат = 2. 12 ділиться 6, перед цим рядок 6 автоматично конвертується в число.

console.log ('10' + (5 === 6))
// Результат = "10false" до рядка 10 додається результат строгого порівняння, а саме 'false'

console.log (null == '')
// Результат = false. Оператор == перевіряє рівність значень, у цьому випадку значення різних типів, тому результат false.

console.log (3 ** (9 / 3))
// Результат = 27. Цифра 3 підноситься до ступеню результату ділення у лапках. 

console.log (!!'false' == !!'true')
/* Результат = true. За допомогою оператора !! (not not) рядоки `false` та 'true` вважаться не порожніми рядками тому автоматично конвертується у булеве значення true,
після чого двічі перетворюються на протилежні значення, у результаті чого з обох боків оператора рівносі буде true, тому і результат буде = true */

0 || '0' && 1

(+null == false) < 1;

false && true || true

false && (false || true);

(+null == false) < 1 ** 5;