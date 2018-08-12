import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule,
  MatProgressSpinnerModule, MatCardModule, MatIconModule,
  MatSelectModule, MatDividerModule, MatListModule, MatCheckboxModule, 
  MatAutocompleteModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatInputModule,
    MatProgressSpinnerModule, MatCardModule, MatIconModule,
    MatSelectModule, MatDividerModule, MatListModule, MatCheckboxModule,
    MatAutocompleteModule, MatDialogModule ],
  exports: [MatButtonModule, MatToolbarModule, MatInputModule, 
    MatProgressSpinnerModule, MatCardModule, MatIconModule,
    MatSelectModule, MatDividerModule, MatListModule, MatCheckboxModule,
    MatAutocompleteModule, MatDialogModule ],
})
export class MaterialDesignModule { }