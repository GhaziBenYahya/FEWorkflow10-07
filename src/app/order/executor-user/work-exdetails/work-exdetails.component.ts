import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../service.service';
import { Workflow } from '../../executor/models/workflow';
import { WorkflowExecution } from '../../executor/models/workflow-execute';
import { StepEx } from '../../executor/models/stepEx';

@Component({
  selector: 'app-work-exdetails',
  templateUrl: './work-exdetails.component.html',
  styleUrls: ['./work-exdetails.component.css']
})
export class WorkExdetailsComponent implements OnInit{

  constructor(private route: ActivatedRoute ,private router:Router,private srv: ServiceService){}
  workflowId=this.route.snapshot.params['workflowId'];



  workflow:Workflow;
  listWorkflowEx:WorkflowExecution[]=[];


  filteredWorkflows: any[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.workflowId = params.get('workflowId');
      
    });

          //get information sur le workflow qui veux executer
          this.srv.getWorkflowById(this.workflowId).subscribe((res: any) => {
            this.workflow=res;
          });

          // getWorkflowExsByIdWorkflow pour le tableau de historique 
          this.srv.getWorkflowExsByIdWorkflow(this.workflowId).subscribe((res: any) => {
            this.listWorkflowEx=res;
            this.filteredWorkflows = this.listWorkflowEx
          

            //console.log("haw tableau:",this.listWorkflowEx)
          });


          this.newWorkflowExecution = {
            id:0,
            description: '',
            state: '',
            level: 0,
            user_id: 0,
            start_date: '',
            end_date: '',
            workflow: this.workflow
          };

          this.workflow={
            id:0,
            name: '',
            description: '',
            role_id: 1,
            creationDate: '',
            steps:[],
            stepCount: 0 
          }
  }


  filterWorkflows(): void {
    this.filteredWorkflows = this.listWorkflowEx.filter(workflow => 
      workflow.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

   /**************Si ona nouvelle execution***************** */
      newWorkflowExecution:WorkflowExecution ;
      listStep:StepEx[]=[];
      roleUser:number=1;
      IdUser:number=1;
      AddNewExecution(){
        this.listStep=[];
        //Creer un nouvelle WorkflowExecution
        this.newWorkflowExecution.workflow=this.workflow;
        
        this.newWorkflowExecution.state="Ouvert";
        this.newWorkflowExecution.user_id=this.IdUser;
        this.srv.AddWorkflowEx(this.newWorkflowExecution).subscribe((res: any) => {
          this.newWorkflowExecution=res;
          console.log("AddWorkflowEx +",this.newWorkflowExecution)

                  //recuperation de tous les Steps avec workflowId
                  let listStep2:StepEx[]=[];
                  this.srv.getAllStepsByWorkflowIdAndRoleId(this.workflowId,this.roleUser).subscribe((res: any) => {
                    listStep2=res;
                    console.log("getAllStepsByWorkflowIdAndRoleId :",this.listStep)

      
                              this.srv.AddStepsInStepsExwithIdWorkflowEx(this.newWorkflowExecution.id,this.IdUser,listStep2).subscribe((res: any) => {
                                this.listWorkflowEx=res;
                                console.log(" tous il marche bien");
                                this.router.navigate(['/mfe1/executorUser/executionComponent/',this.newWorkflowExecution.id]);
                              },
                              (err) => {
                                console.log("tous il marche bien");
                                this.router.navigate(['/mfe1/executorUser/executionComponent/',this.newWorkflowExecution.id]);
                              });
                            



                  });


        });

        


      }




   /*^^^^^^^^^^^^^^^^^^^^^^^^^^*fin nouvelle execution***************** */

     /**************pour continue l'execution d'un workflow***************** */
     continue(idWorkflowEx:any){
      this.router.navigate(['/mfe1/executorUser/executionComponent/',idWorkflowEx]);

     }
    /*************fin pour continue l'execution d'un workflow***************** */
    pageIndex = 1;
    pageSize = 6;
    onPageChange(event: any): void {
      this.pageIndex = event.pageIndex + 1;
    }

}
