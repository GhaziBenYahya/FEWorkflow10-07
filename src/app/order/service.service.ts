import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Step, WorkflowDto } from '../common/models/workflow-dto';
import { Rule } from '../common/models/Rule';
import { ObjectDto } from '../common/models/object-dto';
import { ParamDto } from '../common/models/param-dto';
import { Observable } from 'rxjs';
import { Role } from '../common/models/role';
import { User } from '../common/models/user';
import { ConditionalStep, IterativeStep, StepDto1 } from '../common/models/step-dto';
import { RuleObjet } from '../common/models/RuleObjet-dto';
import { Objet } from './executor/models/ruleObjet';
import {StepEx} from './executor/models/stepEx'
import { WorkflowExecution } from './executor/models/workflow-execute';
import { InstanceStepEx } from './executor/models/InstanceStepEx';
import { StepExecution } from './executor/models/step-execute';
import { ChangePassword } from '../common/models/ChangePassword';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }
  url='http://localhost:7080/api/workflow'
  
// Service Workflow

  addWorkflow (workflow:WorkflowDto): Observable<any>{
    return this.http.post(this.url,workflow) 
   }


  getWorkflows(){
    return this.http.get(this.url)
  
   }

   removeWorkflow (id: any ){
    return this.http.delete(this.url+'/withStep/'+id)
  }



  editworkflow(workflow:WorkflowDto , workflowId:any ){
    return this.http.put(this.url+'/'+workflowId,workflow) 
   }


   getWorkflowById(workflowId:any){
    return this.http.get(this.url+'/'+workflowId)
  }

  // addStepsToWorkflow(steps: StepDto1){
  //   return this.http.post(this.url+'/steps', steps)
  // }

  addStepsToWorkflow(step: Step, workflowId : any){
    return this.http.post(this.url+'/steps/addStepInWorkflow/'+workflowId, step)
  }

  addStepIterToWorkflow(step: IterativeStep): Observable<IterativeStep> {
    
    return this.http.post<IterativeStep>(this.url+'/steps/iterative/workflow', step)
  }

  addStepCondiToWorkflow(steps: ConditionalStep): Observable<ConditionalStep> {
    return this.http.post<ConditionalStep>(this.url+'/steps/conditional/workflow', steps)
  }



  editStepOfWorkflow(stepId: any, step: Step) {
    return this.http.put(this.url +'/steps/' + stepId, step);
  }
  

  deleteStepFromWorkflow(stepId: number): Observable<any> {
    return this.http.delete(this.url+'/steps/'+ stepId);
  }

  getStepById(stepId:any): Observable<Step>{
    return this.http.get<Step>(this.url+'/steps/'+stepId)
  }
  

  private urlEx = 'http://localhost:7080/api';
//getAllStepsByWorkflowIdAndRoleId
getAllStepsByWorkflowIdAndRoleId(workflowId: number, roleId: number) {
  return this.http.get(this.urlEx + '/workflow/steps/workflow/'+workflowId+'/role/'+roleId);
  }

  //service Rule 
  url1='http://localhost:7081/api/rule/rules'

  // getRulesByStepId(stepId:any): Observable<any>{
  //   return this.http.get<Step>(this.url1+'/step/'+stepId)
  // }

  addRule (rule:Rule){
    return this.http.post(this.url1,rule) 
   }

  getRuls(stepEntry: any){
    return this.http.get(this.url1+'/stepEntry/'+stepEntry)
  
   }

  //  getRuls(stepEntry: any) {
  //   return this.http.get<Rule[]>(this.url1 + '/stepEntry/' + stepEntry);
  // }

   removeRule (ruleId: any ){
    return this.http.delete(this.url1+ruleId)
  }



  editRule(rule:Rule , ruleId:any ){
    return this.http.put(this.url1+'/'+ruleId,rule) 
   }


   getRuleById(ruleId:any){
    return this.http.get(this.url1+'/'+ruleId)
  }

  //pour l'objet
  addObjet (object:ObjectDto){
    return this.http.post(this.url1+'/objets',object) 
   }

/*    addParam (param:ParamDto){
    return this.http.post(this.url1+'/parameters',param) 
   } */

   addRuleObjet (relation:RuleObjet){
    return this.http.post(this.url1+'/relations',relation) 
   }

   //Parameter
   addParameter (param:ParamDto){
    return this.http.post(this.url1+'/parameters',param) 
   }
   
   //Add Rule With Objects 
   
   addRuleWithObjects (rule:Rule){
    return this.http.post(this.url1+'/rules/addWithObjects',rule) 
   }

   deleteObjet (ObjetId: any ){
    return this.http.delete(this.url1+'/objets/'+ObjetId)
  }

  //EDit Object
  editObject(object:ObjectDto , objtId:any ){
    return this.http.put(this.url1+'/objets/'+objtId,object) 
   }


   //APIRole
url2='http://localhost:8082/api/keycloak'

addRole (role:Role){
  return this.http.post(this.url2+'/roles/',role) 
 }

 getAllRoles(){
  return this.http.get(this.url2+'/roles/')

 }
 getRoleByIdOfStep(id:any){
  return this.http.get(this.url2+'/roles/'+id)

 }
 getRoleById(roleId:any){
  return this.http.get(this.url2+'/roles/'+roleId)
}



 deleteRole (roleId: any ){
  return this.http.delete(this.url2+'/roles/'+roleId)
}

editRole(role:Role , roleId:any ){
  return this.http.post(this.url2+'/roles/'+roleId+'/update',role) 
 }


//APIs User


addUser (user:User){
  return this.http.post(this.url2+'/users/create',user) 
 }

 getAllUsers(){
  return this.http.get(this.url2+'/users/')

 }

 getUserByUserName(userName: string){
  const urluser = `${this.url2}/users/find?username=${userName}`;
  return this.http.get<any>(urluser, {});
}

changePassWord(change: ChangePassword){
  return this.http.post(this.url2+'/auth/changePassword',change) 
}



 deleteUser (userId: any ){
  return this.http.delete(this.url+'/users/'+userId)
}

editUser(user:User){
  return this.http.post(this.url2+'/users/update',user) 
 }




// //APIRole
//  // API pour récupérer tous les workflows par rôle
//  getAllworkflowByRole(role: number) {
//   return this.http.get(this.urlEx + '/workflow/role/' + role, );
// }

// // API pour récupérer toutes les étapes par ID de workflow
// getAllStepByIdWorkflow(workflowId: any) {
//   return this.http.get(this.urlEx + '/workflow/workflowExs/workflow/stpes/' + workflowId);
// }

// // API pour éditer une étape
// editStep(stepEx: WorkflowExecution, id :number) {
//   return this.http.put(this.urlEx + '/workflow/workflowExs/'+id,stepEx);
// }

// // API pour obtenir le résultat d'une règle
// getResultRule(ruleId: any) {
//   return this.http.get(this.urlExRule + '/rules/relation2eme/'+ruleId);
// }
// //api pour obtenir les objets du regle
// getAllObjetByRuleId(ruleId: number) {
// return this.http.get(this.urlExRule + '/rules/ObjectsByIdRule/' + ruleId);
// }
//   // API pour éditer une Objet
//   editObjet(obj: Objet, id :number) {
//     return this.http.put(this.urlExRule + '/objets/'+id,obj);
//   }



// // Votre URL de base pour les API
// private urlEx = 'http://localhost:7080/api';
// private urlExRule = 'http://localhost:7081/api/rule';



// 
/** ghazi api for executor */
//APIRole
 // API pour récupérer tous les workflows par rôle (1)
 getAllworkflowByRole(role: any) {
  return this.http.get(this.urlEx + '/workflow/role/' + role, );
}

//getWorkflowExsByIdWorkflow
getWorkflowExsByIdWorkflow(workflowId: number) {
  return this.http.get(this.urlEx + '/workflow/workflowExs/workflowExByWorkflowId/' + workflowId );
}


//AddWorkflowEx (instance un workflowEx a partir workflow )
  //
  AddWorkflowEx (workflowExecution:WorkflowExecution){
    return this.http.post(this.urlEx+'/workflow/workflowExs',workflowExecution) 
   }

// API pour récupérer toutes les étapes par ID de workflow 
getAllStepByIdWorkflow(workflowId: any) {
  return this.http.get(this.urlEx + '/workflow/workflowExs/workflow/stpes/' + workflowId);
}
// API pour instancer des StepEx a partir Step 
AddStepsInStepsExwithIdWorkflowEx(workflowExecutionId: any,userId: any,  steps: StepEx[]): Observable<any> {

  return this.http.post(this.urlEx+'/workflow/stepExs/addStepsInStepEx/workflowEx/'+workflowExecutionId+'/user/'+userId, steps);
}

// API pour récupérer toutes les étapesEx par ID de workflowEx 
getAllStepExByIdWorkflowEx(workflowExId: any) {
  return this.http.get(this.urlEx + '/workflow/stepExs/stpeExsByIdWorkflowEx/' + workflowExId);
}



// API pour éditer une étapeEx de workflowEx
editStepEx(stepExecution:StepExecution , id :number) {
  return this.http.put(this.urlEx + '/workflow/stepExs/'+id,stepExecution);
}

// API pour éditer workflowExecuter 
editWorkflowEx(workflowExecution:WorkflowExecution , id :number) {
  return this.http.put(this.urlEx + '/workflow/workflowExs/'+id,workflowExecution);
}



// API pour obtenir le résultat d'une règle
getResultRule(ruleId: any) {
  return this.http.get(this.urlExRule + '/rules/relation2eme/'+ruleId);
}
//api pour obtenir les objets du regle
getAllObjetByRuleId(ruleId: number) {
return this.http.get(this.urlExRule + '/rules/ObjectsByIdRule/' + ruleId);
}
  // API pour éditer une Objet
  editObjet(obj: Objet, id :number) {
    return this.http.put(this.urlExRule + '/objets/'+id,obj);
  }




  //AddStepsTobeExecuted
  AddStepsTobeExecuted (userId:number , steps:StepEx[]){
    return this.http.post(this.urlEx+'/workflow/workflowExs/addSteps/'+userId,steps) 
   }
   
// Votre URL de base pour les API
private urlExRule = 'http://localhost:7081/api/rule';



//API Dashbord

   //Get All Workflow
      // getWorkflows()

   //Get All User
      // getAllUsers()

   //Get All Workflow Executed
    getAllWorkflowEx() {
      return this.http.get(this.urlEx + '/workflow/workflowExs');
    }


   //chaque workflow il execute combient de foix
      //getWorkflowExsByIdWorkflow



      //API Access

      getAccessByUserId(userid: any){
        const urluser = `${this.url2}/access/byUser?userId=${userid}`;
        return this.http.get<any>(urluser, {});
      }


}

