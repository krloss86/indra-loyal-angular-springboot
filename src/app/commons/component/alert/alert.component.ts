import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(
    private alertService: AlertService
  ) { }

  message: string | undefined = undefined;
  type: string = ''

  ngOnInit(): void {
    this.alertService.getAlert().subscribe(
      data => {
        this.message = data.text
        this.setClassByErrorType(data.type)
      }
    );
  }

  close(): void {
    this.message = undefined;
  }
  
  setClassByErrorType(type:string) {
    switch(type) {
      case 'error': 
        this.type = 'alert-danger'; break;
      case 'success': 
        this.type = 'alert-success'; break;
      case 'warning': 
        this.type = 'alert-warning'; break;
    }
  }
}
