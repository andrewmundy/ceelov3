import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp ({
        apiKey: "AIzaSyBr6J_AVfNqP58PjqZIdRY7IVcY4ugZIa0",
        authDomain: "catch-of-the-day-56b87.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-56b87.firebaseio.com",
})
const base = Rebase.createClass(firebaseApp.database());
// This is a named export
export {firebaseApp}
// this is a default export
export default base;