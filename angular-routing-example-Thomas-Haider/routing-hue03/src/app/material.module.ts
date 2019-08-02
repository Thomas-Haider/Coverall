import { MatTableModule } from '@angular/material/table';

import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatPaginatorModule,
  MatButtonToggleModule,
  MatSnackBarModule,
  MatRippleModule
} from '@angular/material';


@NgModule({
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatStepperModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatRippleModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatStepperModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatRippleModule
  ]
})
export class MaterialModule { }
