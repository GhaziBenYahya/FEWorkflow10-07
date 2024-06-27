import { Component, OnInit } from '@angular/core';
import { WorkflowDto } from 'src/app/common/models/workflow-dto';
import { WorkflowExecution } from '../../executor/models/workflow-execute';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-home-modeler',
  templateUrl: './home-modeler.component.html',
  styleUrls: ['./home-modeler.component.css']
})
export class HomeModelerComponent implements OnInit{

  doughnutChart: any;
  barChart: any;
/*************************************************************************************************************** */


nbWorkflow:any=0;
WorkflowDto: WorkflowDto[] = [];
nbUser:any=0;
users:any[]=[]
nbWorkflowEx:any=0;
workflowEx:WorkflowExecution[]=[]
nbWorkflowNoEx:any=0;

constructor(private srv: ServiceService , private router: Router) {}


ngOnInit(): void {
  

  // Nombre total des workflows
  this.srv.getWorkflows().subscribe((res: any) => {
    console.log(res)
    this.WorkflowDto = res.filter((workflow: { status: string; }) => workflow.status === 'false');
    this.nbWorkflow = this.WorkflowDto.length;
    console.log("le workflow aaaaaaaa:",this.WorkflowDto)



            // Nombre de workflows exécutés
            this.srv.getAllWorkflowEx().subscribe((res: any) => {
              console.log(res)
              this.workflowEx = res
              console.log("le workflow Ex bbbbbbbbb:",this.workflowEx)

              


              //Nombre de workflows executes et non exécutés
                for(let i=0;i<this.WorkflowDto.length;i++){
                  for(let j=0;j<this.workflowEx.length;j++){
                    if(this.WorkflowDto[i].id == this.workflowEx[j].workflow.id){
                      this.nbWorkflowEx = this.nbWorkflowEx + 1;
                      break
                    }


                  }

/*                   const existe = this.workflowEx.some(objet => objet.id === this.WorkflowDto[i].id);
                  if(existe){
                    this.nbWorkflowEx = this.nbWorkflowEx + 1;

                  } */

                }
                console.log("le workflow Excccc:",this.nbWorkflowEx)
                this.nbWorkflowNoEx = this.nbWorkflow - this.nbWorkflowEx
                if(this.nbWorkflowNoEx < 0){
                  this.nbWorkflowNoEx =0

                }
                //graphe 1
                let ex = this.nbWorkflowEx;
                let noEx = this.nbWorkflowNoEx;

                console.log("ex:",ex)

                console.log("noEx:",noEx)
              
                
                ///count by status 
                this.doughnutChart = new Chart('doughnutCanvas', {
                  type: 'doughnut',
                  data: {
                    labels: ['non exécutés',  'exécutés'],
                    datasets: [{
                      data: [noEx, ex],
                      backgroundColor: ['#5271FF', '#66E199']
                    }]
                  },
                  options: {
                    responsive: true
                  }
                });






                //graphe2

                  // get all workflow existe
                for(let i=0;i<this.WorkflowDto.length;i++){
                  this.WorkflowDto[i].nbExecution = 0;
                  for(let j=0;j<this.workflowEx.length;j++){
                    if(this.WorkflowDto[i].id == this.workflowEx[j].workflow.id){
                      this.WorkflowDto[i].nbExecution =  this.WorkflowDto[i].nbExecution +1; 
                    }

                  }
                }
                let namesWorkflow: string[]=[];
                let nbExecution:number[]=[];
                for(let i=0;i<this.WorkflowDto.length;i++){
                  namesWorkflow.push(this.WorkflowDto[i].name)
                  nbExecution.push(this.WorkflowDto[i].nbExecution)
                }
                console.log("names workflow :",namesWorkflow)
                console.log("nbEx workflow :",nbExecution)




                 // Graphique à barres animé 
                this.barChart = new Chart('barCanvas', {
                  type: 'bar',
                  data: {
                    labels: namesWorkflow,
                    datasets: [{
                      label: 'Nombre d\'exécutions par workflow',
                      data: nbExecution,
                      backgroundColor: '#4e73df', 
                      borderColor: '#4e73df', 
                      borderWidth: 1
                    }]
                  },
                  options: {
                    responsive: true,
                    animation: {
                      duration: 2000, // Durée de l'animation en millisecondes
                      easing: 'easeOutQuart' // Fonction d'assouplissement de l'animation
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        ticks: {
                          stepSize: 1 // Intervalle des graduations de l'axe Y à 1
                        }
                      }
                    }
                  }
                });









                      

                  
                    })

  })






        


            // Nombre total des Utilisateurs
            this.srv.getAllUsers().subscribe((res: any) => {
              console.log(res)
              this.users = res
              this.nbUser = this.users.length;
          
            })



















    /********************************************************************************************************** */





  }

}
