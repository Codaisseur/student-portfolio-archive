const initial = ["E303", "E201", "E458", "E303", "E200", "E201", "E303"]

// const whatsName = initial.reduce(function(initV, acc){
//   initV.push({name: acc})
//   return initV
// }, [])
// console.log(`whatsName:`,whatsName)

const uniqueCount = initial

var count = [];

uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(`count:`,count);

const dataToGraph = Object.keys(count).map(key => ({ name: key, value: count[key] }))
console.log(`dataToGraph:`,dataToGraph)