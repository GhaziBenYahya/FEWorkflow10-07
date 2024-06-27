import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-branch-modeler',
  templateUrl: './branch-modeler.component.html',
  styleUrls: ['./branch-modeler.component.css']
})
export class BranchModelerComponent {
  @Input() branch_Type: any;

}
