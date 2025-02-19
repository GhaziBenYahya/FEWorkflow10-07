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
import { ChangePasswordComponent } from './profil/change-password/change-password.component';


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
          path: 'changePassWord/:userId',
          component: ChangePasswordComponent
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


      


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(orderRoutes)
    ]
})
export class OrderRoutingModule { }
