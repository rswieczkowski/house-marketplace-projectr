import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAeOznEMUYHAJONHuCd3esulBbuY9NsZ1M',
  authDomain: 'house-marketplace-48756.firebaseapp.com',
  projectId: 'house-marketplace-48756',
  storageBucket: 'house-marketplace-48756.appspot.com',
  messagingSenderId: '265457954988',
  appId: '1:265457954988:web:df3c17efd2b6fa932eef09',
  measurementId: 'G-7B22W801GQ',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
