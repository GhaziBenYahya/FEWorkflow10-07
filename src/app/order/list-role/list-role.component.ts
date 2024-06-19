import { Component, Inject, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Role } from 'src/app/common/models/role';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit{

  roles:any[]=[]

  constructor(
    private srvRole: ServiceService,
    public dialogRef: MatDialogRef<ListRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Assurez-vous que les rôles sont un tableau
    this.roles = data.roles || [];
    console.log("Rôles reçus", this.roles);
  }



   
    ngOnInit(): void {  
    }





    onCancelClick(): void {
      // Fermer la boîte de dialogue sans appliquer de modifications
      this.dialogRef.close();
    }

}
