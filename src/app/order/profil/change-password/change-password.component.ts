import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../TokenService';
import { ServiceService } from '../../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/models/user';
import { ChangePassword } from 'src/app/common/models/ChangePassword';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{

  constructor(private tokenService: TokenService,private srv: ServiceService , private router: Router,private route: ActivatedRoute) {}

  user:User= new User('','','','','','','','','','')
  userN: string | null;
  par:any='';

  ngOnInit(): void {
    const userName = this.tokenService.getUserName();
    let userN: string=''
    this.userN = userName
    this.par=this.userN
    console.log("voila le User",this.par)
     this.srv.getUserByUserName(this.par).subscribe((res: any) => {
      console.log(res)
      this.user=res;
  

    }) 
  }

  passWord : ChangePassword = new ChangePassword('','','','','');
  
  changePassWord(){
    this.passWord.userId = this.user.id
    this.passWord.username= this.user.username
    console.log("les mot de passe",this.passWord)




      // Afficher un message d'alerte de confirmation avant la suppression
 Swal.fire({
  title: 'Êtes-vous sûr?',
  text: 'Cette action est irréversible et modifiera votre mot de passe.',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Oui, Modifier!',
  cancelButtonText: 'Annuler'
}).then((result) => {
  if (result.isConfirmed) {

    this.srv.changePassWord(this.passWord)
      .subscribe(
        (result) => { // succès
          console.log(result);
          Swal.fire(' Le mot de passe a été changé avec succès.', '', 'success');
          //window.location.reload();
        },
        (err) => {
         console.log('Error:', err);
         Swal.fire('Erreur', '', 'error');
        }
      );
  } else {
    // L'utilisateur a cliqué sur "Annuler" ou a cliqué en dehors de la boîte de dialogue
    Swal.fire('Demande de changement annulée.', '', 'info');
  }
});
    
  }





  annuler(){
    this.router.navigate(['/mfe1/orderComponent/profil']);
  }

}
