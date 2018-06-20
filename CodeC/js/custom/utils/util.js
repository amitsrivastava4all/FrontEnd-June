


var config = {
  apiKey: "AIzaSyBYjTOXfv0CAH4-7FUwUv8psaFFjDS2yHA",
  authDomain: "testapp-5bfe6.firebaseapp.com",
  databaseURL: "https://testapp-5bfe6.firebaseio.com",
  projectId: "testapp-5bfe6",
  storageBucket: "",
  messagingSenderId: "224740197844"
};
firebase.initializeApp(config);

function* autoGen(){
  var counter = 1;
  while(true){
  yield counter;
  counter++;
  }
  }

