import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from './services/alert.service';
import { AlertComponent } from './component/alert/alert.component';
/*mis propios servicios encapsulados en este common smodule */


@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AlertComponent
  ],
  providers:[
    AlertService
  ]
})
export class CommonsModule { }
