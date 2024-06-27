import { Component, OnInit } from '@angular/core';
import { WorkflowDto } from 'src/app/common/models/workflow-dto';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { forkJoin } from 'rxjs';
import { ListRoleComponent } from '../../list-role/list-role.component';

@Component({
  selector: 'app-listworkflow-modeler',
  templateUrl: './listworkflow-modeler.component.html',
  styleUrls: ['./listworkflow-modeler.component.css']
})
export class ListworkflowModelerComponent implements OnInit{

  WorkflowDto: WorkflowDto[] = [];
  pageIndex = 1;
  pageSize = 6;

  filteredWorkflows: any[] = [];
  searchTerm: string = '';

  constructor(private srv: ServiceService , private router: Router,private dialog: MatDialog) {}
  
  ngOnInit(): void {
    this.srv.getWorkflows().subscribe((res: any) => {
      console.log(res)
      this.WorkflowDto = res.filter((workflow: { status: string; }) => workflow.status === 'false');
      this.filteredWorkflows = this.WorkflowDto
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
    this.router.navigate(['/mfe1/modeler/editworkflowModelerComponent/',workflowId]);
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
