import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import { WorkflowDto } from '../../common/models/workflow-dto';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/common/models/role';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  workflow: WorkflowDto = {
    id:"",
    name: "",
    description: "",
    status:"false",
    role: [],
    creationDate: "",
    nbExecution:0,
    steps: [],
    // workflowId: 1,
    };
    
  roles: Role[]=[];
  checkedRole: String;
  roleAr:number[]=[];
  constructor(private route: ActivatedRoute, private srvRole: ServiceService ,private router:Router, private srv: ServiceService ) { }
  workflowId=this.route.snapshot.params['workflowId'];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.workflowId = params.get('workflowId');
      this.srv.getWorkflowById(this.workflowId).subscribe((res: any) => {
        this.workflow = res;
        this.roleAr=this.workflow.role

        console.log("workflow",this.workflow);
      })

      this.srvRole.getAllRoles().subscribe((res: any) => {
        this.roles =res;
                    // Marquez les rôles présents dans roleAr comme sélectionnés
                    this.roles.forEach(role => {
                      if (this.roleAr.some(arRole => arRole === role.id)) {
                        role.checked = true;
                      }
                    });
       })
    });
  }

  isRoleSelected(role: Role): boolean {
    return !!this.roleAr.find(arRole => arRole === role.id);
  }

  selectedRoles: number[] = [];


  handleRoleChange(event: any, role: Role) {
    role.checked = event.target.checked;
    if (event.target.checked) {
      // Si la case est cochée, ajoutez le rôle au tableau
      this.selectedRoles.push(role.id);
    } else {
      // Si la case est décochée, retirez le rôle du tableau
      const index = this.selectedRoles.findIndex(selectedRole => selectedRole === role.id);
      if (index !== -1) {
        this.selectedRoles.splice(index, 1);
      }
    }

    //console.log(this.selectedRoles)
    
  }

  editWorkflow2(){
    this.workflow.role=this.selectedRoles;

    console.log("workflowedit:",this.workflow)
    this.srv.editworkflow(this.workflow , this.workflowId)
    .subscribe(
      (result) => { 
      console.log(result)
      this.ngOnInit()
      Swal.fire('Valider', '', 'success')
      this.router.navigate(['/mfe1/orderComponent/create-flowComponent/'+ this.workflowId]);
    },
    (err) => {
      console.log(err)
      Swal.fire('Invalid ', '', 'error')
    }
    )
  }
  
}
