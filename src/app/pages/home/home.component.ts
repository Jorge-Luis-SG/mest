import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as Aos from 'aos';
import Swiper from 'swiper';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {




  roapMap(param:string ="one"){
    if(param=='one'){
      document.getElementById('first-info')?.classList.add("oneActive");
      document.getElementById('two-info')?.classList.remove("twoActive");
      document.getElementById('thirty-info')?.classList.remove("thirtyActive");

      document.getElementById('status')?.classList.remove('status2');
      document.getElementById('status')?.classList.remove('status3');
    }
    else if(param=='two'){
      document.getElementById('first-info')?.classList.add("oneActive");
      document.getElementById('two-info')?.classList.add("twoActive");
      document.getElementById('thirty-info')?.classList.remove("thirtyActive");
      document.getElementById('status')?.classList.add('status2');
      document.getElementById('status')?.classList.remove('status3');
    }
    else if(param=='thirty'){
      document.getElementById('first-info')?.classList.add("oneActive");
      document.getElementById('two-info')?.classList.add("twoActive");
      document.getElementById('thirty-info')?.classList.add("thirtyActive");
      document.getElementById('status')?.classList.add('status3');
      document.getElementById('status')?.classList.remove('status2');
    }
  }
  constructor(private title:Title) {
 
    title.setTitle("Mest | Meta Streaming | NFT");
    Aos.init();

    }
  ngAfterViewInit(): void {
    var swiper = new Swiper(".cards-carousel", {
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      autoplay:{
        delay:1000
      },
      breakpoints: {
        720: {
          slidesPerView: 3,
        },
      },
    });
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {

  }

}

