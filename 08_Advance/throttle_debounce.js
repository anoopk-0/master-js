/**
 * 
 * TOPIC:THROTTLE
 * Throttling or sometimes is also called throttle function is a practice used in websites. Throttling is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately.

Advantages of throttling function: 

    It prevent frequent calling of the function.
    It makes the website faster and controls the rate at which a particular function is called.

Like debounce, throttle is also used to limit the number of times a function is called, but, unlike debounce, throttle will call the function passed to it every time the delay ends as long as the trigger for the function is still happening

Throttle: the original function will be called at most once per specified period. Debounce: the original function will be called after the caller stops calling the decorated function after a specified period.


Debounce: Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.
 */

const throttle = function (callback, limit) {
  let isFistCall = true;
  return function () {
    if (isFistCall) {
      callback.apply(this, arguments);
      isFistCall = false;
      setTimeout(() => (isFistCall = true), limit);
    }
  };
};

const someExpensiveFun = function () {
  console.log("calling some time taking API...");
};

const withBetterExpensiveFunc = throttle(someExpensiveFun, 4000);

let getButton = document.getElementById("button1");

getButton.addEventListener("click", withBetterExpensiveFunc);

//Debounce

const getData = () => {
  //call API

  console.log("Fetching data...");
};

const debounce = (callback, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(this, arguments), delay);
  };
};

const betterAPICalling = debounce(getData, 300);
