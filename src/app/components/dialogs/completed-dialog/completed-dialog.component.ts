import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-dialog',
  templateUrl: './completed-dialog.component.html',
  styleUrls: ['./completed-dialog.component.less']
})
export class CompletedDialogComponent {

  constructor(public dialogRef: MatDialogRef<CompletedDialogComponent>, private router: Router) { }

  public onHomePage(): void {
    this.router.navigate(['']);
    this.dialogRef.close();
  }

}
