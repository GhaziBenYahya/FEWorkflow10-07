import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../TokenService';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/common/models/user';
import { Access } from 'src/app/common/models/Access';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  constructor(private tokenService: TokenService,private srv: ServiceService , private router: Router,private route: ActivatedRoute,private dialog: MatDialog) {}
  user:User= new User('','','','','','','','','','')
  accesses:Access[]=[]
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
      this.user=res


      //get Access of User
      this.srv.getAccessByUserId(this.user.id).subscribe((res: any) => {
        console.log("les access:",res)
        this.accesses=res


      })


    }) 
  }




  nav(path:string){
    this.router.navigate([path]);
  }



  addUser() {
    this.router.navigate(['/mfe1/orderComponent/mfe-user/homeComponent/addUserComponent']);
  }

  addRole(){
    this.router.navigate(['/mfe1/orderComponent/mfe-user/homeComponent/addrolecomponent']);

  }
  ListUsers(){
    this.router.navigate(['/mfe1/orderComponent/mfe-user/homeComponent/userListComponent']);

  }

  ListRoles(){
    this.router.navigate(['/mfe1/orderComponent/mfe-user/homeComponent/roleListComponent']);

  }
  
}
