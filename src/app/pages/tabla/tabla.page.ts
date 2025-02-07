import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TablaPage {
  numero: number = 1;
  resultados: number[] = [];

  generarTabla() {
    this.resultados = Array.from({ length: 13 }, (_, i) => this.numero * (i + 1));
  }
}
