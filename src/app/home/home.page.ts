import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Página Inicial</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-img src="assets/foto.jpg"></ion-img>
        <ion-card-header>
          <ion-card-title>Juan Pérez</ion-card-title>
          <ion-card-subtitle>juan.perez@email.com</ion-card-subtitle>
        </ion-card-header>
      </ion-card>
    </ion-content>
  `
})
export class HomePage {}
