import { Injectable, inject } from '@angular/core';
import { Firestore,collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  firestore :Firestore = inject(Firestore);
  constructor() { }

  public getCollectionChanges<tipo> (path: string){

    // get a reference to the user-profile collection
    const itemCollection = collection(this.firestore, path);
    
    // get documents (data) from the collection using collectionData
    return collectionData(itemCollection) as Observable<tipo[]>;
  }

  
}
