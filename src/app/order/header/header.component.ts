import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from '../TokenService';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/common/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  popDownProfile = false
  userN: string | null;
  par:any='';


  constructor(private tokenService: TokenService,private srv: ServiceService , private router: Router,private route: ActivatedRoute,private dialog: MatDialog) {}
  user:User= new User('','','','','','','','','','')
  
  ngOnInit(): void {
    const userName = this.tokenService.getUserName();
    let userN: string=''
    this.userN = userName
    this.par=this.userN
    console.log("voila le User",this.par)
     this.srv.getUserByUserName(this.par).subscribe((res: any) => {
      console.log(res)
      this.user=res


    }) 
  }
  
  showPopdownProfile () {
    this.popDownProfile= !this.popDownProfile;
  }
  showPopUpLogout () {
    Swal.fire({
      title: 'Se Deconnecter',
      text: "Etes vous sur de se déconnecter",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#056809',
      cancelButtonColor: 'red',
      confirmButtonText: 'Confirmer!'
    }).then((result) => {
      
      if(result.isConfirmed){
        this.router.navigate(['/']);
      localStorage.clear();
      }
      
    });
  }

  profil(){
    console.log("hello profil")
    this.router.navigate(['/mfe1/orderComponent/profil']);
  }
}
