import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Role } from 'src/app/common/models/role';
import { WorkflowDto } from 'src/app/common/models/workflow-dto';
import Swal from 'sweetalert2';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TokenService } from '../../TokenService';


@Component({
  selector: 'app-addworkflow-modeler',
  templateUrl: './addworkflow-modeler.component.html',
  styleUrls: ['./addworkflow-modeler.component.css']
})
export class AddworkflowModelerComponent implements OnInit{

  token: string | null | undefined;
  form : FormGroup;
  roles: Role[]=[];
  workflow: WorkflowDto = {
    id: '',
    name: '',
    description: '',
    status:'false',
    role:[],
    creationDate: new Date(),
    nbExecution:0,
    steps: [],
  };  empty= false;
  empty_role=false;

  constructor(private srv: ServiceService, private srvRole: ServiceService, private router: Router, private dialog: MatDialog,private tokenService: TokenService) { }
  
  ngOnInit(): void {

      this.token = this.tokenService.getToken();
      this.srvRole.getAllRoles().subscribe((res: any) => {
          this.roles = res;
      })
  }

  selectedRoles: number[] = [];

  handleRoleChange(event: any, role: Role) {
    role.checked = event.target.checked;
    if (event.target.checked) {
      this.selectedRoles.push(role.id) ;
    }
    console.log(this.selectedRoles); 
  }

  updateEmptyRoleFlag() {
    this.empty_role = this.selectedRoles.length === 0;
  }
  
  resetinput () {
    this.workflow.name="";
    this.workflow.description="";  
    this.workflow.role=[];
  }
  
  ajoutWorkflow() {
    this.workflow.role = this.selectedRoles;
    this.workflow.status='false';
      console.log("this.workflow", this.workflow);
      
      this.srv.addWorkflow(this.workflow)
      .subscribe(
        (result) => { 
          console.log("workflow :", this.workflow)

          this.router.navigate(['/mfe1/modeler/creatFlowModelerComponent/'+result.id]);
          Swal.fire('Valider', '', 'success');
          
        },
        (err) => {
          Swal.fire('Invalid ', '', 'error');
        }
      );
  }

}
