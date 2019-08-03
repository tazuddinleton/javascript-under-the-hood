const productsData = [
  { name: "Product 1", unit: "PCS", qty: 200 },
  { name: "Product 1", unit: "PCS", qty: 300 },
  { name: "Product 1", unit: "PCS", qty: 1000 },
  { name: "Product 1", unit: "DZ", qty: 200 },
  { name: "Product 1", unit: "MTR", qty: 200 },
  { name: "Product 2", unit: "PCS", qty: 200 },
  { name: "Product 2", unit: "DZ", qty: 200 },
  { name: "Product 2", unit: "MTR", qty: 200 },
  { name: "Product 3", unit: "PCS", qty: 200 },
  { name: "Product 3", unit: "DZ", qty: 200 },
  { name: "Product 3", unit: "MTR", qty: 200 },
  { name: "Product 4", unit: "PCS", qty: 200 },
  { name: "Product 4", unit: "DZ", qty: 200 },
  { name: "Product 4", unit: "MTR", qty: 200 }
];

var unitDict = {};
// approach 1

// for (var i = 0; i < productsData.length; i++) {
//   if (unitDict[productsData[i].unit] != undefined) {
//     unitDict[productsData[i].unit] += productsData[i].qty;
//   } else {
//     unitDict[productsData[i].unit] = productsData[i].qty;
//   }
// }
// approach 2
// productsData.forEach(prod => {
//   unitDict[prod.unit] = unitDict[prod.unit]
//     ? (unitDict[prod.unit] += prod.qty)
//     : prod.qty;
// });

// approach 3

// unitDict = productsData.reduce((dict, prod) => {

//   if (dict[prod.unit]) {
//     dict[prod.unit] += prod.qty;
//   } else {
//     dict[prod.unit] = prod.qty;
//   }
//   return dict;
// }, {});

// group by product name and unit
// unitDict = productsData.reduce((dict, prod) => {
//   let group = dict[prod.name];
//   if (group) {
//     if (group[prod.unit]) {
//       group[prod.unit] += prod.qty;
//     } else {
//       group[prod.unit] = prod.qty;
//     }
//   } else {
//     dict[prod.name] = { name: prod.name };
//   }

//   return dict;
// }, {});

var arr = [];
Object.keys(unitDict).forEach(itm => arr.push(unitDict[itm]));
console.log(arr);

// // concise
// unitDict = productsData.reduce((dict, prod) => {
//   let row = (dict[prod.name] = dict[prod.name] || { name: prod.name });
//   row[prod.unit] = !row[prod.unit] ? prod.qty : row[prod.unit];
//   row[prod.unit] += prod.qty;
//   return dict;
// }, {});

// make it useful
// group by product name and unit
unitDict = productsData.reduce((dict, prod) => {
  let group = dict[prod.name];
  if (group) {
    if (group[prod.unit]) {
      group[prod.unit] += prod.qty;
    } else {
      group[prod.unit] = prod.qty;
    }
  } else {
    dict[prod.name] = { name: prod.name };
  }

  return dict;
}, {});

console.log(unitDict);
