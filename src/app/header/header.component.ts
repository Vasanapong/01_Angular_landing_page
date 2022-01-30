import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() setAlert:any
  @Output() setAlertChange = new EventEmitter

  reserveBtnClick(){
    this.setAlert = true
    this.setAlertChange.emit(this.setAlert)
  }

}
