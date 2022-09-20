import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngAfterViewInit(): void {
    var swiper = new Swiper(".cards-carousel", {
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      autoplay:{
        delay:1000
      },
      breakpoints: {
        750: {
          slidesPerView: 3,
        },
      },
    });
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {

  }
}
