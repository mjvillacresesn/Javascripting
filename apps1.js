// // from data.js
//var tableData = data;

// YOUR CODE HERE!
// var table = d3.select("table");
//   table.html("");
//   filterData.forEach(person => {
//     var row = table.append("tr");
//     Object.entries(person).forEach(([key,value]) => {
//       var cell = row.append("td").text(value);
//     })
//   })


//--------------------------------------------------------------------------------------------
// --- Title: LOOPING through array using ForEach and creating table
var numbers = ["one", "two", "three", "four"]

// tr for row and th for header
document.write('<table>');
document.write('<tr><th> Index </th>','<th> Date </th></tr>');

// --- For Loop Method ---
// for(var i = 0; i < numbers.length; i++){
//   document.write("<tr><td>" + numbers[i] + "</td></tr>");
// }
// --- OR Use For Each Method Below ---
numbers.forEach(function(item, index, array){
  document.write('<tr><td>' + index + '</td>', "<td>" + item + "</td></tr>");
  console.log(index, item);
})
document.write('</table>');

// -------------------------------------------------------------------------------------
