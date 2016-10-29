function getTempCallback (location, callback) {
  callback(undefined, 66);
  callback('City not found');
}

getTempCallback('Portland', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp)
  }
});


//using Promises
function getTempPromise (location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve(71);
      reject('wrong city');
    }, 1000);
  });
}

getTempPromise('Portland').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});

//Challenge Area
function addPromise (a,b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    } else {
      reject('need to be numbers');
    }
  });
}

addPromise(2,3).then(function(sum) {
  console.log('yay', sum);
}, function(err) {
  console.log('error', err);
});

addPromise('andrew', 9).then(function(sum){
  console.log('this should not show up');
}, function (err) {
  console.log('This should appear', err);
});
