import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IputComponent } from './iput/iput.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [IputComponent, InputComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
