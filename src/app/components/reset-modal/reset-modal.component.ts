import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: 'app-reset-modal',
  templateUrl: './reset-modal.component.html',
  styleUrls: ['./reset-modal.component.css']
})
export class ResetModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ResetModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router
  ) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
    this.router.navigate(['/login'])
  }

}
