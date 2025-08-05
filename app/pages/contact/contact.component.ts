import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // Méthode qui est appelée lors de la soumission du formulaire
  onSubmit(event: Event): void {
    event.preventDefault(); // Empêche le rechargement de la page
    console.log('Formulaire soumis');
    // Ici, tu peux ajouter des actions comme l'envoi des données du formulaire
  }
}
