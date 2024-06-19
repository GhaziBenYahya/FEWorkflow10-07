import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TokenService } from '../TokenService';
import { User } from 'src/app/common/models/user';
import { Role } from 'src/app/common/models/role';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{
  userN: string | null;

  constructor(private tokenService: TokenService,private srv: ServiceService , private router: Router,private route: ActivatedRoute,private dialog: MatDialog) {}

  user:User= new User('','','','','','','','','','')
  roles2:Role[]=[];
  par:any='';

  ngOnInit(): void {
    const userName = this.tokenService.getUserName();
    let userN: string=''
    this.userN = userName
    this.par=this.userN
    console.log("voila le User",this.par)
     this.srv.getUserByUserName(this.par).subscribe((res: any) => {
      console.log(res)
      this.user=res
      this.roles2=this.user.roles
      console.log("les roles",this.roles2)

    }) 
  }
    


}
