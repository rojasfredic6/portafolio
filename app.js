const firebaseConfig = {
    apiKey: "AIzaSyDFttjdzdQQS1N299VG2T6XZ4CwYKxCHxE",
    authDomain: "portafolio-7dc60.firebaseapp.com",
    projectId: "portafolio-7dc60",
    storageBucket: "portafolio-7dc60.appspot.com",
    messagingSenderId: "534327096219",
    appId: "1:534327096219:web:33bed076ce722b15eda73e"
};

firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
var pathReference = storage.ref('Diplomas/');

const getReference = (target) => {
    new Promise(() => {
        pathReference.child(target).getDownloadURL().then(function(url) {
            alert(url)
        }).catch(function(error) {
            console.log('Error Gonorrea!!')
        })
    })
}