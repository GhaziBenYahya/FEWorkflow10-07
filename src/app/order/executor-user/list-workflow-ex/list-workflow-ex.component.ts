import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../TokenService';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RoleEX } from '../../executor/models/roleEx';
import { Workflow } from '../../executor/models/workflow';
import { StepEx } from '../../executor/models/stepEx';

@Component({
  selector: 'app-list-workflow-ex',
  templateUrl: './list-workflow-ex.component.html',
  styleUrls: ['./list-workflow-ex.component.css']
})
export class ListWorkflowExComponent implements OnInit{

  pageIndex = 1;
  pageSize = 8;
  // constructor(private srv: RuleService , private router: Router) {}
  constructor(private tokenService: TokenService, private srvRole: ServiceService, private router: Router,private dialog: MatDialog) {}


  

  /***************************methode getAllWorkflowByRole********************************** */
role :RoleEX = new RoleEX(0,'','','');
Workflow: Workflow[] = [];
numRole: number = 1;

filteredWorkflows: any[] = [];
searchTerm: string = '';
ngOnInit(): void {
  const token = this.tokenService.getToken();
  const accessrole = this.tokenService.getRole();
  const userName = this.tokenService.getUserName();
  //this.role.name=accessrole
  //const numRole: number = 1;
  console.log('le token de listWorkflow =', token)
  console.log('le Role de listWorkflow =', accessrole)
  console.log('le UserName de profil =', userName)

  console.log('succes')
/*     const token = this.tokenService.getToken();
  console.log('le token de execute est la :'+ token) */
  this.srvRole.getAllworkflowByRole(this.numRole).subscribe((res: any) => {

    console.log(res)
    this.Workflow = res.filter((workflow: { status: string; }) => workflow.status === 'false');
    this.filteredWorkflows = this.Workflow
  
  
   })

}

filterWorkflows(): void {
  this.filteredWorkflows = this.Workflow.filter(workflow => 
    workflow.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}




onPageChange(event: any): void {
  this.pageIndex = event.pageIndex + 1;
}
/*************************mise a jour 01/06/2024******************************* */
executerDetails(workflowId : any){
  this.router.navigate(['/mfe1/executorUser/WorkExdetailsComponent/',workflowId]);


}
/*********************************fin mise a jour 01/06/2024**************************** */

steps: StepEx[]=[];
userId:number = 1;
executer(workflowId : any) {
  
 // ici on faire le affectation des steps
 //1)getAllStepsByWorkflowIdAndRoleId
 
 this.srvRole.getAllStepsByWorkflowIdAndRoleId(workflowId ,this.numRole).subscribe((res: any) => {
  this.steps =res;
  console.log(this.steps)

            //AddSteps to be executed
            this.srvRole.AddStepsTobeExecuted(this.userId,this.steps)
                .subscribe(
                  (result) => { // success
                    console.log("AddStepsTobeExecuted",result);
                    this.router.navigate(['/mfe1/executorUser/WorkExdetailsComponent/',workflowId]);



                    
                  },
                  (err) => {
                    // traitement du cas d'erreur
                    console.log(err.text);
                   // Swal.fire('Invalid ', '', 'error');
                    this.router.navigate(['/mfe1/executorUser/WorkExdetailsComponent/',workflowId]);

                    console.log("il y a un erreur lors de AddStepToExecuted:",err)
                    
                  }
                );
  


 }, (error) => {
   console.error('Error serveur', error);
   alert('Une erreur est survenue lors de la récupération les stpes de workflow.');
 });

 ////////////////
  }

















 










}
