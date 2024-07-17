import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import { WorkflowDto } from '../../common/models/workflow-dto';
import { ListRoleComponent } from '../list-role/list-role.component';
import { MatDialog } from '@angular/material/dialog';
import { Role } from 'src/app/common/models/role';
import { forkJoin } from 'rxjs';
import { User } from 'src/app/common/models/user';
import { Access } from 'src/app/common/models/Access';
import { TokenService } from '../TokenService';


@Component({
    selector: 'app-listworkflow',
    templateUrl: './listworkflow.component.html',
    styleUrls: ['./listworkflow.component.css']
})
export class ListworkflowComponent implements OnInit {
  
  WorkflowDto: WorkflowDto[] = [];
  pageIndex = 1;
  pageSize = 5;

  filteredWorkflows: any[] = [];
  searchTerm: string = '';


  user:User= new User('','','','','','','','','','')
  accesses:Access[]=[]
  userN: string | null;
  par:any='';
  addWorkflow:boolean=false;
  edittWorkflow:boolean=false;
  deleteeWorkflow:boolean=false;

  constructor(private tokenService: TokenService,private srv: ServiceService , private router: Router,private dialog: MatDialog) {}
  
  ngOnInit(): void {
    const token = this.tokenService.getToken();
    const accessrole = this.tokenService.getRole();


  console.log("aaaaaaaaaaa number Role",accessrole)


    this.srv.getAllworkflowByRole(accessrole).subscribe((res: any) => {
      console.log(res)
      this.WorkflowDto = res.filter((workflow: { status: string; }) => workflow.status === 'false');
      this.filteredWorkflows = this.WorkflowDto
    })



    //get username and access
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
        this.accesses=res.filter((access: { code: string; }) => access.code === 'managesWorkflow');
        //console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",this.accesses)

        for(let i=0;i<this.accesses[0].subAccess.length;i++){
          if(this.accesses[0].subAccess[i].code =="addWorkflow"){
            this.addWorkflow=true;
          }
          if(this.accesses[0].subAccess[i].code =="editWorkflow"){
            this.edittWorkflow=true;
          }
          if(this.accesses[0].subAccess[i].code =="deleteWorkflow"){
            this.deleteeWorkflow=true;
          }
        }
        


      })


    }) 
  }

  filterWorkflows(): void {
    this.filteredWorkflows = this.WorkflowDto.filter(workflow => 
      workflow.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }









  
  deleteWorkflow(workflow: WorkflowDto) {
    console.log(workflow)
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Cette action est irréversible et supprimera le workflow.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        workflow.status='true'
        this.srv.editworkflow(workflow,workflow.id)
          .subscribe(
            (result) => { 
              console.log(result);
              Swal.fire('Workflow supprimé avec succès', '', 'success');
              window.location.reload();
            },
            (err) => {
              console.log(err);
              Swal.fire('Workflow supprimé avec succès', '', 'success');
              window.location.reload();
            }
          );
      } else {
        Swal.fire('Suppression annulée', '', 'info');
      }
    });
  }

  editWorkflow(id: number): void {
    console.log(`Modification du workflow avec l'ID ${id}`);
  }

  viewWorkflow(id: number): void {
    console.log(`Voir les détails du workflow avec l'ID ${id}`);
  }

  nav(workflowId : any) {
    this.router.navigate(['/mfe1/orderComponent/editComponent/',workflowId]);
  }

  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex + 1;
  }



 //************************************************************Liste Role********************************************************** */

 
 openEditObjetDialog(role: any[]): void {
  const roleRequests = role.map(roleId => this.srv.getRoleById(roleId));
  forkJoin(roleRequests).subscribe((roles: any[]) => {
    console.log('mon roles', roles);
    
    const dialogRef = this.dialog.open(ListRoleComponent, {
      width: '500px',
      data: { roles }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Boîte de dialogue fermée');
    });
  }, error => {
    console.error('Error fetching roles', error);
  });
}



//*************************************************************Liste Role************************************************************** */





}
