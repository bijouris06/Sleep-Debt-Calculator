// hours of sleep in each day
const getSleepHours = day =>{
  if (day === 'monday'){
    return 8;
  } else if (day === 'tuesday'){
    return 6;
  } else if (day === 'wednesday'){
    return 7;
  }else if (day === 'thursday'){
    return 8;
  }else if (day === 'friday'){
    return 5;
  }else if (day === 'saturday'){
    return 4;
  }else if (day === 'sunday'){
    return 7;
  } else{
    return error;
  }
};

// actual total slept hours
const getActualSleepHours= () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

// ideal sleep hours
const getIdealSleepHours = () =>{
  const idealHours = 7;
  return idealHours*7;
}

// sleep debt
const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log('user got the perfect amount of sleep')
  } else if (actualSleepHours > idealSleepHours){
    console.log('user got more sleep than needed')
  } else if (actualSleepHours < idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.')
  } else{
    console.log('error');
  }
}

console.log('Total hours you slept : ' + getActualSleepHours());
console.log('Ideal sleep hours: ' + getIdealSleepHours());
calculateSleepDebt();