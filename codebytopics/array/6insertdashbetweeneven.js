/**
 * javascript insert dash (-) between each even number
 * 025468      0-254-6-8
 */
function insertDashBetweenEven(num) {
  numtostr = num.toString();
  resutingstr = "";
  for (let i = 0; i < numtostr.length; i++) {
    console.log(i);
    if (Number(numtostr[i]) % 2 === 0 && Number(numtostr[i + 1]) % 2 === 0) {
      resutingstr += numtostr[i] + "-";
    } else {
      resutingstr += numtostr[i];
    }
  }
  return resutingstr;
}

console.log(insertDashBetweenEven(225468));
