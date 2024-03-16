import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { User } from '../common/models/users.models';
import { FirestoreService } from '../common/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonItem,IonLabel],
})
export class HomePage {

  user: User[] = [];

  constructor(private firestoreService : FirestoreService) {

    this.loadusers();
  }

  public loadusers(){
    this.firestoreService.getCollectionChanges<User>('Usuarios').subscribe(data => {
      if (data){
        this.user = data
      }

    });
  }
  
}
