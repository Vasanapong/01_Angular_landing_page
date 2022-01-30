import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() setAlert:any
  @Output() setAlertChange = new EventEmitter

  closeBtnClick(){
    this.setAlert = false
    this.setAlertChange.emit(this.setAlert)
  }

}
