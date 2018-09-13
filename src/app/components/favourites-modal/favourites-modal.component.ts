import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-favourites-modal',
  templateUrl: './favourites-modal.component.html',
  styleUrls: ['./favourites-modal.component.css']
})
export class FavouritesModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FavouritesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }


  close(): void {
    this.dialogRef.close();
  }
}
