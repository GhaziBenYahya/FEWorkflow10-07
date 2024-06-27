import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddworkflowComponent } from './addworkflow/addworkflow.component';
import { CreateFlowComponent } from './create-flow/create-flow.component';
import { CreateWorkflowComponent } from './create-flow/create-workflow/create-workflow.component';
import { StepInfoComponent } from './create-flow/step-info/step-info.component';
import { StepsComponent } from './create-flow/steps/steps.component';
import { ListworkflowComponent } from './listworkflow/listworkflow.component';
import { EditComponent } from './edit/edit.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ExecutorComponent } from './executor/executor.component';
import { WorkflowListComponent } from './executor/workflow-list/workflow-list.component';
import { WorkflowExecuteComponent } from './executor/workflow-execute/workflow-execute.component';
import { DescriptionComponent } from './executor/description/description.component';
import { ExecutionDetailsComponent } from './executor/execution-details/execution-details.component';
import { ProfilComponent } from './profil/profil.component';
import { UpdateProfilComponent } from './profil/update-profil/update-profil.component';
import { ExecutorUserComponent } from './executor-user/executor-user.component';
import { HomeComponent } from './executor-user/home/home.component';
import { WorkExdetailsComponent } from './executor-user/work-exdetails/work-exdetails.component';
import { ListWorkflowExComponent } from './executor-user/list-workflow-ex/list-workflow-ex.component';
import { ExecutionComponent } from './executor-user/execution/execution.component';
import { ModelerComponent } from './modeler/modeler.component';
import { HomeModelerComponent } from './modeler/home-modeler/home-modeler.component';
import { AddworkflowModelerComponent } from './modeler/addworkflow-modeler/addworkflow-modeler.component';
import { ListworkflowModelerComponent } from './modeler/listworkflow-modeler/listworkflow-modeler.component';
import { EditworkflowModelerComponent } from './modeler/editworkflow-modeler/editworkflow-modeler.component';
import { CreatFlowModelerComponent } from './modeler/creat-flow-modeler/creat-flow-modeler.component';
import { CreateWorkflowModelerComponent } from './modeler/creat-flow-modeler/create-workflow-modeler/create-workflow-modeler.component';
import { StepInfoModelerComponent } from './modeler/creat-flow-modeler/step-info-modeler/step-info-modeler.component';
import { StepsModelerComponent } from './modeler/creat-flow-modeler/steps-modeler/steps-modeler.component';
// import { ExecutorComponent } from './executor/executor.component';
// import { WorkflowListComponent } from './executor/workflow-list/workflow-list.component';
// import { WorkflowExecuteComponent } from './executor/workflow-execute/workflow-execute.component';
// import { DescriptionComponent } from './executor/description/description.component';

const orderRoutes: Routes = [


  { path: '', redirectTo:'orderComponent/dashbordComponent', pathMatch: 'full' },


  // {
  //   path: 'executor',
  //   component: ExecutorComponent,
  //   children:[{
  //     path:'workflowList',
  //     component: WorkflowListComponent
  //   },
  //   {
  //     path: 'workflowExecute/:workflowId',
  //     component: WorkflowExecuteComponent
  //   },
  //   {path : 'description',
  //     component :DescriptionComponent
  //   }

  //   ]
  // },
    {
        path: 'orderComponent',
        component: OrderComponent,
        children:[
          {
            path: 'dashbordComponent',
            component: DashbordComponent
          },
          {
            path: 'profil',
            component: ProfilComponent
          },          {
            path: 'updateProfil',
            component: UpdateProfilComponent
          },
          {
            path: 'addworkflowComponent',
            component: AddworkflowComponent
          },
          {
            path: 'create-flowComponent/:workflowId',
            component: CreateFlowComponent,
            children:[
              {
                path: 'create-workflowComponent',
                component: CreateWorkflowComponent
            
              },
              {
                path: 'step-infoComponent',
                component: StepInfoComponent
            
              },
              {
                path: 'stepsComponent',
                component: StepsComponent,
            
              },



            ]
            
          },
          {
            path: 'editComponent/:workflowId',
            component: EditComponent
        
          },
          {
            path: 'listworkflowComponent',
            component: ListworkflowComponent
        
          },
          {
            path: 'listworkflowComponent',
            component: ListworkflowComponent
        
          },
          {
            path: 'executor',
            component: ExecutorComponent,
            children:[{
              path:'workflowList',
              component: WorkflowListComponent
            },
            {
              path: 'workflowExecute/:workflowExId',
              component: WorkflowExecuteComponent
            },
            {path : 'description',
              component :DescriptionComponent
            },
            {path : 'executionDetails/:workflowId',
              component :ExecutionDetailsComponent
            }
        
            ]
          },
          {
            path:'MfeRule',
            loadChildren:()=>{
                return loadRemoteModule({
                    type:'module',
                    remoteEntry:"http://localhost:4002/remoteEntry.js",
                    exposedModule:"./RuleModule"
                }).then(m=>m.RuleModule).catch(e=>console.log(e));
            }
        },
        {
          path:'mfe-user',
          loadChildren:()=>{
              return loadRemoteModule({
                  type:'module',
                  remoteEntry:"http://localhost:4004/remoteEntry.js",
                  exposedModule:"./RuleModule"
              }).then(m=>m.RuleModule).catch(e=>console.log(e));
          }
        }
         
        ]
    
      },
      {
        path: 'executorUser',
        component: ExecutorUserComponent,
        children:[
          {
            path: 'homeComponent',
            component: HomeComponent
          },
          {
            path: 'WorkExdetailsComponent/:workflowId',
            component: WorkExdetailsComponent
          },
          {
            path: 'executionComponent/:workflowExId',
            component: ExecutionComponent
          },          {
            path: 'listWorkflowExComponent',
            component: ListWorkflowExComponent
          },
        ]
      },
      {
        path: 'modeler',
        component: ModelerComponent,
        children:[
          {
            path: 'homeModelerComponent',
            component: HomeModelerComponent
          }, 
            {
            path: 'addworkflowModelerComponent',
            component: AddworkflowModelerComponent
          },
          {
            path: 'listworkflowModelerComponent',
            component: ListworkflowModelerComponent
          },      
            {
            path: 'editworkflowModelerComponent/:workflowId',
            component: EditworkflowModelerComponent
          },
          {
            path: 'creatFlowModelerComponent/:workflowId',
            component: CreatFlowModelerComponent,
            children:[
              {
                path: 'createWorkflowModelerComponent',
                component: CreateWorkflowModelerComponent,
              }, 
              {
                path: 'stepInfoModelerComponent',
                component: StepInfoModelerComponent,
              }, 
              {
                path: 'stepsModelerComponent',
                component: StepsModelerComponent,
              }, 

            ]
          },
          {
            path:'MfeRuleModeler',
            loadChildren:()=>{
                return loadRemoteModule({
                    type:'module',
                    remoteEntry:"http://localhost:4002/remoteEntry.js",
                    exposedModule:"./RuleModule"
                }).then(m=>m.RuleModule).catch(e=>console.log(e));
            }
        },
        ]
      }
      


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(orderRoutes)
    ]
})
export class OrderRoutingModule { }
