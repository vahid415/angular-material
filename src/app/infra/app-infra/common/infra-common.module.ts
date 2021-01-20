import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';




@NgModule({
  imports: [
  ],
  exports: [
    ScrollingModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    TranslateModule
  ]
})
export class InfraCommonModule {
}
