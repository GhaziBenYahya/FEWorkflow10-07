import { Component, Inject, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit{

   // Copie de sauvegarde de parametre original
 newUser: any;

 constructor(
   private srvRole: ServiceService,
   public dialogRef: MatDialogRef<UpdateProfilComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any) {
         // Copie de l'objet d'origine pour les modifications
         this.newUser = { ...data.user };
   }


   ngOnInit(): void {
    console.log("succe")
   }



   onCancelClick(): void {
    // Fermer la boîte de dialogue sans appliquer de modifications
    this.dialogRef.close();
  }



  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Enregistrer le nom du fichier dans newUser.profileImageName
      this.newUser.docProfileId = "assets/"+file.name;
    }
  }





  onSaveClick(): void {
    // Appliquer les modifications à l'objet original et fermer la boîte de dialogue
    

  // Afficher un message d'alerte de confirmation avant la suppression
 Swal.fire({
  title: 'Êtes-vous sûr?',
  text: 'Cette action est irréversible et modifiera votre profil.',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Oui, Modifier!',
  cancelButtonText: 'Annuler'
}).then((result) => {
  if (result.isConfirmed) {
        // Appliquer les modifications à l'objet original et fermer la boîte de dialogue
     this.data.user.username = this.newUser.username;
     this.data.user.email = this.newUser.email;
     this.data.user.firstname = this.newUser.firstname;
     this.data.user.lastname = this.newUser.lastname;
     this.data.user.password = this.newUser.password;
     this.data.user.enabled = this.newUser.enabled;
     this.data.user.status = this.newUser.status;
     this.data.user.docProfileId = this.newUser.docProfileId;
    // L'utilisateur a cliqué sur "Oui, supprimer"
    this.srvRole.editUser(this.data.user)
      .subscribe(
        (result) => { // succès
          console.log(result);
          Swal.fire(' Utilisateur est modifier avec succès', '', 'success');
          this.dialogRef.close();
          window.location.reload();
        },
        (err) => {
         console.log('Error:', err);
         Swal.fire('Erreur', '', 'error');
        }
      );
  } else {
    // L'utilisateur a cliqué sur "Annuler" ou a cliqué en dehors de la boîte de dialogue
    Swal.fire('Modification annulée', '', 'info');
    this.dialogRef.close();
  }
});



}
}
