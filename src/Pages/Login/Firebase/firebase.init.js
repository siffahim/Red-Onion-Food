import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const firebaeAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default firebaeAuthentication;