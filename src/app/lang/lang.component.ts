import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss'],
})
export class LangComponent implements OnInit {
  ngOnInit(): void {}
  lange = ' ';
  value = ' ';
  code1 = "";
  code2 = "";




  en() {
    localStorage.setItem('value', 'en');
    this.code1="active";
    this.code2="";
  }
  es() {
    localStorage.setItem('value', 'es');
    this.code1="";
    this.code2="active";
  }

  constructor(public translate: TranslateService) {
    this.value = localStorage.getItem('value');
    console.log(this.value);

    if (this.value == null) {
      this.lange= 'es';
      this.code1="";
      this.code2="active";

    } else {
      this.lange = localStorage.getItem('value');
      if (this.value == 'es') {
        this.code1="";
        this.code2="active";

      }else{
        this.code1="active";
        this.code2="";
      }

    }





    translate.addLangs(['en', 'es']);
    const lang = translate.getBrowserLang();
    if (lang !== 'es' && lang !== 'en') {
      translate.setDefaultLang(this.lange);
    }
    translate.setDefaultLang(this.lange);
  }
}
