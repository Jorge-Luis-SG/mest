import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mint',
  templateUrl: './mint.component.html',
  styleUrls: ['./mint.component.scss']
})
export class MintComponent implements OnInit {

  value=0;
  amount= 0;

  sum(){
    this.value++
    this.amount= 150 * this.value
    if (this.value>2) {
      this.value=2
    this.amount= 300
    }
  }
  res(){
    this.value--
    this.amount= 150 * this.value
    if (this.value>2) {
      this.value=2
    this.amount= 300
    }
    if (this.value<0) {
      this.value=0
    this.amount= 0


    }
  }




  constructor(private title:Title) {

    title.setTitle("Mest | Meta Streaming | NFT");

    }

  ngOnInit(): void {
  }



}
