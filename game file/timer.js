const minutesSpan = clock.querySelector('.minutes');
const secondsSpan = clock.querySelector('.seconds');

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);

    return {
        total,
        minutes,
        seconds
    };
}


const total = Date.parse(endtime) - Date.parse(new Date());

const seconds = Math.floor((t / 1000) % 60);

getTimeRemaining(deadline).minutes


// iterate over each element in the schedule
for (var i=0; i<schedule.length; i++) {
    var startDate = schedule[i][0];
    var endDate = schedule[i][1];
  
    // put dates in milliseconds for easy comparisons
    var startMs = Date.parse(startDate);
    var endMs = Date.parse(endDate);
    var currentMs = Date.parse(new Date());
  
    // if current date is between start and end dates, display clock
    if (endMs > currentMs && currentMs >= startMs ) {
      initializeClock('clockdiv', endDate);
    }
  }
  
  schedule.forEach(([startDate, endDate]) => {
    // put dates in milliseconds for easy comparisons
    const startMs = Date.parse(startDate);
    const endMs = Date.parse(endDate);
    const currentMs = Date.parse(new Date());
  
    // if current date is between start and end dates, display clock
    if (endMs > currentMs && currentMs >= startMs ) {
      initializeClock('clockdiv', endDate);
    }
  });

    
    
    initializeClock('clockdiv', deadline);