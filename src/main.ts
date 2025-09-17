import { bootstrapApplication } from '@angular/platform-browser';
//import { importProvidersFrom } from '@angular/core';
import { App } from './app/app';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './app/environment/environment';

const firebaseConfig = {
  apiKey: "AIzaSyB6WyVicYPcimCBkNnkv5T97-aowGbJDfI",
  authDomain: "task-tracker-a1f31.firebaseapp.com",
  projectId: "task-tracker-a1f31",
  storageBucket: "task-tracker-a1f31.firebasestorage.app",
  messagingSenderId: "671980480986",
  appId: "1:671980480986:web:623a1251428da9844bb8e3"
};

bootstrapApplication(App, {
  providers: [
    
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore())
    
  ]
}).catch((err) => console.error(err));


