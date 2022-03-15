import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablecompComponent } from './tablecomp/tablecomp.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableMainComponent } from './table-main/table-main.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';



@NgModule({
  declarations: [
    TablecompComponent,
    TableHeaderComponent,
    TableMainComponent,
    TablePaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TablecompComponent
  ]
})
export class TablemodModule { }
