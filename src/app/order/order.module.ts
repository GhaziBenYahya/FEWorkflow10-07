import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddworkflowComponent } from './addworkflow/addworkflow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StepsComponent } from './create-flow/steps/steps.component';
import { CreateFlowComponent } from './create-flow/create-flow.component';
import { CreateWorkflowComponent } from './create-flow/create-workflow/create-workflow.component';
import { StepInfoComponent } from './create-flow/step-info/step-info.component';
import { EditComponent } from './edit/edit.component';
import { ListworkflowComponent } from './listworkflow/listworkflow.component';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceService } from './service.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GojsAngularModule } from 'gojs-angular';
import { SequentialWorkflowDesignerModule } from 'sequential-workflow-designer-angular';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { BranchComponent } from './create-flow/branch/branch.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkflowInterceptor } from './workflow.interceptor';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ExecutorComponent } from './executor/executor.component';
import { WorkflowListComponent } from './executor/workflow-list/workflow-list.component';
import { WorkflowExecuteComponent } from './executor/workflow-execute/workflow-execute.component';
import { DescriptionComponent } from './executor/description/description.component';
import { ExecutionDetailsComponent } from './executor/execution-details/execution-details.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { ProfilComponent } from './profil/profil.component';
import { UpdateProfilComponent } from './profil/update-profil/update-profil.component';
import { ExecutorUserComponent } from './executor-user/executor-user.component';
import { ModelerComponent } from './modeler/modeler.component';
import { HomeComponent } from './executor-user/home/home.component';
import { WorkExdetailsComponent } from './executor-user/work-exdetails/work-exdetails.component';
import { ExecutionComponent } from './executor-user/execution/execution.component';
import { ListWorkflowExComponent } from './executor-user/list-workflow-ex/list-workflow-ex.component';
import { HomeModelerComponent } from './modeler/home-modeler/home-modeler.component';
import { AddworkflowModelerComponent } from './modeler/addworkflow-modeler/addworkflow-modeler.component';
import { ListworkflowModelerComponent } from './modeler/listworkflow-modeler/listworkflow-modeler.component';
import { EditworkflowModelerComponent } from './modeler/editworkflow-modeler/editworkflow-modeler.component';
import { CreatFlowModelerComponent } from './modeler/creat-flow-modeler/creat-flow-modeler.component';
import { AddBranchModelerComponent } from './modeler/creat-flow-modeler/add-branch-modeler/add-branch-modeler.component';
import { BranchModelerComponent } from './modeler/creat-flow-modeler/branch-modeler/branch-modeler.component';
import { CreateWorkflowModelerComponent } from './modeler/creat-flow-modeler/create-workflow-modeler/create-workflow-modeler.component';
import { StepInfoModelerComponent } from './modeler/creat-flow-modeler/step-info-modeler/step-info-modeler.component';
import { StepsModelerComponent } from './modeler/creat-flow-modeler/steps-modeler/steps-modeler.component';
// import { AddBranchComponent } from './create-flow/add-branch/add-branch.component';
// import { DescriptionComponent } from './executor/description/description.component';
// import { ExecutorComponent } from './executor/executor.component';
// import { WorkflowExecuteComponent } from './executor/workflow-execute/workflow-execute.component';
// import { WorkflowListComponent } from './executor/workflow-list/workflow-list.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DashbordComponent,
    AddworkflowComponent,
    CreateWorkflowComponent,
    CreateFlowComponent,
    StepInfoComponent, 
    StepsComponent, 
    ListworkflowComponent,
    EditComponent,
    BranchComponent,
    ExecutorComponent,
    WorkflowListComponent,
    WorkflowExecuteComponent,
    DescriptionComponent,
    ExecutionDetailsComponent,
    ListRoleComponent,
    ProfilComponent,
    UpdateProfilComponent,
    ExecutorUserComponent,
    ModelerComponent,
    HomeComponent,
    WorkExdetailsComponent,
    ExecutionComponent,
    ListWorkflowExComponent,
    HomeModelerComponent,
    AddworkflowModelerComponent,
    ListworkflowModelerComponent,
    EditworkflowModelerComponent,
    CreatFlowModelerComponent,
    AddBranchModelerComponent,
    BranchModelerComponent,
    CreateWorkflowModelerComponent,
    StepInfoModelerComponent,
    StepsModelerComponent,
    // AddBranchComponent,
    // ExecutorComponent,
    // WorkflowListComponent,
    // WorkflowExecuteComponent,
    // DescriptionComponent

  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule,  
    HttpClientModule, 
    ReactiveFormsModule,
    OrderRoutingModule,
    DragDropModule,
    GojsAngularModule,
    SequentialWorkflowDesignerModule,
    DiagramModule,
    MatDialogModule,
    MatPaginatorModule
    

    


  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    DashbordComponent,
    OrderRoutingModule,
    AddworkflowComponent,
    CreateWorkflowComponent,
    CreateFlowComponent,
    StepInfoComponent, 
    StepsComponent, 
    ListworkflowComponent,
    EditComponent,
    BranchComponent,
  //   ExecutorComponent,
  //   WorkflowListComponent,
  //   WorkflowExecuteComponent,
  //   DescriptionComponent
   ],
  providers:[ServiceService,
    // Ajoutez votre intercepteur aux fournisseurs ici
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WorkflowInterceptor,
      multi: true
    }
  ]
})
export class OrderModule { }
