import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAjQuHa8tSV-jrskNZwEDV3Hx-D3fc_sws",
    authDomain: "nba-app-complete.firebaseapp.com",
    databaseURL: "https://nba-app-complete.firebaseio.com",
    projectId: "nba-app-complete",
    storageBucket: "nba-app-complete.appspot.com",
    messagingSenderId: "1096028117681"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}


export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}

