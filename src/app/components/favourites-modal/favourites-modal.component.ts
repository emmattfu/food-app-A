import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-favourites-modal',
  templateUrl: './favourites-modal.component.html',
  styleUrls: ['./favourites-modal.component.css']
})
export class FavouritesModalComponent implements OnInit {

  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public dialogRef: MatDialogRef<FavouritesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  onClick(unswear: boolean) {
    this.dialogRef.close(unswear)
  }

  close(): void {
    this.dialogRef.close();
  }
}
