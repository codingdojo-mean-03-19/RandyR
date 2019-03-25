function fib() {
  count1 = 1;
  count0 = 0;
  function nacci() {
    var temp = count0;
    count0 = count1;
    count1 = count1 + temp;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
