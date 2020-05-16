const refs = {
  timer: document.querySelector('#timer-1'),
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
}

class CountdownTimer {

  constructor({
    selector,
    targetDate
  }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }


  timerStart() {
    if (this.selector === refs.timer.id) {
      let countDownDate = this.targetDate.getTime();

      let clockFace = setInterval(() => {

        let now = new Date().getTime();

        let distance = countDownDate - now;


        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }

        this.updateClockFace(distance);
      }, 1000);
    }
    console.log(refs.timer.id);
  }

  updateClockFace(distance) {

    refs.days.textContent = this.pad(Math.floor(distance / (1000 * 60 * 60 * 24)));
    refs.hours.textContent = this.pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    refs.mins.textContent = this.pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    refs.secs.textContent = this.pad(Math.floor((distance % (1000 * 60)) / 1000));
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: 'timer-1',
  targetDate: new Date('Jul 17, 2020'),
});

timer.timerStart();