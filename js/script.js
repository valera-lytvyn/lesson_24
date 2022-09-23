function click_two_number() {
  function getNumber(firstNumber, lastNumber) {
    if (firstNumber === lastNumber) {
      return console.log(0);
    } else if (firstNumber < lastNumber) {
      return console.log(-1);
    } else {
      return console.log(1);
    }
  }
  getNumber(-1, 5);
  getNumber(0, 0);
  getNumber(7, 5);
}

function click_factorial() {
  function calcFactorial(number) {
    let result = 1;
    if (number === 0) {
      return console.log(result);
    } else if (number > 0) {
      for (number; number > 0; number--) {
        result *= number;
      }
      return console.log(result);
    } else if (number < 0) {
      return console.log("number is less than 0");
    }
  }
  calcFactorial(-4);
  calcFactorial(0);
  calcFactorial(4);
}

function click_three_numbers() {
  let transformToNumber = (numberOne, numberTwo, numberThree) => {
    let resultNumber;
    resultNumber = String(numberOne) + String(numberTwo) + String(numberThree);
    resultNumber = +resultNumber;
    console.log(resultNumber);
    };
  transformToNumber(0, 2, 0);
}

function click_calc_area() {
  function calcAreaRectangle(side_1, side_2) {
    if (side_2 == undefined) {
      return console.log(side_1 * side_1);
    } else if (side_1 < 0 || side_2 < 0) {
      return console.log("Area not found. Negative values.");
    } else {
      return console.log(side_1 * side_2);
    }
  }
  calcAreaRectangle(5, 4);
  calcAreaRectangle(5);
  calcAreaRectangle(0);
  calcAreaRectangle(5, -4);
}

function click_perfect_number() {
  function isPerfectNumber(number) {
    if (number <= 0) {
      return console.log("the number is less than 1");
    }
    let auxNumber = (numberSave = number);
    let zero = 0;
    let x;
    for (number; number > 0; --number) {
      if (auxNumber % number == 0 && auxNumber / number != 1) {
        zero += number;
      }
    }
    if (numberSave === zero) {
      return console.log(`the number ${numberSave} is perfect`);
    } else {
      return console.log(`the number ${numberSave} is not perfect`);
    }
  }
  isPerfectNumber(-50);
  isPerfectNumber(6);
  isPerfectNumber(8);
}


function click_search_perfect_number() {
  function isPerfectNumber(number) {
    if (number <= 0) {
      return console.log("the number is less than 1");
    }
    let auxNumber = (numberSave = number);
    let zero = 0;
    let x;
    for (number; number > 0; --number) {
      if (auxNumber % number == 0 && auxNumber / number != 1) {
        zero += number;
      }
    }
    if (numberSave === zero) {
      return console.log(`the number ${numberSave} is perfect`);
    } 
  }
  function selectPerfectNumbers(numberFirst, numberLast) {
    for (numberLast; numberLast > 1; --numberLast) {
      if (numberFirst > 1 || numberLast < numberFirst) break;
      numberSave = numberLast;
      isPerfectNumber(numberLast);
    }
  
  }
  selectPerfectNumbers(0, 3500);
}

function click_clock() {
  function showClock(hours, minutes, seconds) {
    if (
      hours < 0 ||
      hours > 24 ||
      minutes < 0 ||
      minutes > 60 ||
      seconds < 0 ||
      seconds > 60
    ) {
      return console.log("the entered data is incorrect");
    } else if (seconds < 10) {
      seconds = "0" + String(seconds);
    }
    if (minutes < 10) {
      minutes = "0" + String(minutes);
    }
    if (hours < 10) {
      hours = "0" + String(hours);
    }
    if (minutes == undefined || minutes == 60) {
      minutes = "00";
    }
    if (seconds == undefined || seconds == 60) {
      seconds = "00";
    }
    return console.log(`${hours}:${minutes}:${seconds}`);
  }
  showClock(0, 0, 0);
  showClock(25, 60, 40);
  showClock(24, 61, 2);
  showClock(20, 00, 61);
  showClock(1, 60, 60);
  showClock(2, 5);
  showClock(2);
  showClock(-1);
}
function click_seconds() {
  function SwitchingInSeconds(hours, minutes, seconds) {
    return console.log(hours * 3600 + minutes * 60 + seconds);
  }
  SwitchingInSeconds(01, 00, 01);
}

function click_converting_seconds() {
  function convertingSeconds(s) {
    let hours;
    let minutes;
    let seconds;
    if (s < 0) {
      return console.log("Only positive values for seconds");
    }
    hours = Math.floor(s / 3600);
    if (hours == 0 || hours < 10) {
      hours = "0" + String(hours);
    }
    minutes = Math.floor((s % 3600) / 60);
    if (minutes < 10) {
      minutes = "0" + String(minutes);
    }
    seconds = (s % 3600) % 60;
    if (seconds < 10) {
      seconds = "0" + String(seconds);
    }
    return console.log(`${hours}:${minutes}:${seconds}`);
  }
  convertingSeconds(3662);
  convertingSeconds(0);
  convertingSeconds(-52);
  convertingSeconds(60);
  convertingSeconds(62);
}
function click_date_comparison() {
  function SwitchingInSeconds(hours, minutes, seconds) {
     return result = hours * 3600 + minutes * 60 + seconds;
      }
      function convertingSeconds(s) {
        let hours;
        let minutes;
        let seconds;
        if (s < 0) {
          return console.log("Only positive values for seconds");
        }
        hours = Math.floor(s / 3600);
        if (hours == 0 || hours < 10) {
          hours = "0" + String(hours);
        }
        minutes = Math.floor((s % 3600) / 60);
        if (minutes < 10) {
          minutes = "0" + String(minutes);
        }
        seconds = (s % 3600) % 60;
        if (seconds < 10) {
          seconds = "0" + String(seconds);
        }
        return console.log(`${hours}:${minutes}:${seconds}`);
      }

  function dateComparison(
    hoursOne,
    minutesOne,
    secondsOne,
    hoursTwo,
    minutesTwo,
    secondsTwo
  ) {
    difference = Math.abs(SwitchingInSeconds(hoursOne, minutesOne, secondsOne) -
     SwitchingInSeconds(hoursTwo, minutesTwo, secondsTwo));
 convertingSeconds(difference);
     
}
  dateComparison(0, 0, 0, 0, 1, 0);
  dateComparison(1, 2, 3, 1, 2, 3);
  dateComparison(1, 2, 3, 1, 2, 0);
  
  }
  
