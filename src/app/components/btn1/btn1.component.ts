import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn1',
  templateUrl: './btn1.component.html',
  styleUrls: ['./btn1.component.scss']
})
export class Btn1Component implements OnInit {

  @Input() link:string ="";
  @Input() text="";
  @Input() value=true;


  constructor() { }

  ngOnInit(): void {
  }

}
