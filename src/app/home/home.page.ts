import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { User } from '../common/models/users.models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonItem,IonLabel],
})
export class HomePage {
  user: User[] = [];
  constructor() {
    this.loadusers();
  }

   public loadusers(){
    const user={
      nombre:'uba',
      edad:10
    }
    const user1={
      nombre:'bet',
      edad:10
    }
    this.user.push(user,user1);
  }
}
