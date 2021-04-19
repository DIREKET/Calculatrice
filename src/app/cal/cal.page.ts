import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.page.html',
  styleUrls: ['./cal.page.scss'],
})
export class CalPage implements OnInit {

  nombre1: any = '';
  nombre2: any = '';
  operateur: any = '';
  ecran: any = '';
  ecranResult: any = '';
  
  //renseigner et afficher les nombre a l'ecran
  insert (element: any) {
    if (element == '+' || element == '-' || element == 'x' || element == '/') {
      this.operateur = element
    } else {
      if (!this.operateur) {
        this.ecranResult = ''
        this.nombre1 += element
      } else {
        this.ecranResult = ''
        this.nombre2 += element
      }
    }
    this.ecran = this.nombre1 + this.operateur + this.nombre2
  }

  //les calcules
  addition () {
    this.ecranResult = eval(this.nombre1 + '+' + this.nombre2)
  }
  soustraction () {
    this.ecranResult = eval(this.nombre1 + '-' + this.nombre2)
  }
  multiplication () {
    this.ecranResult = eval(this.nombre1 + '*' + this.nombre2)
  }
  division () {
    if (parseInt(this.nombre2) != 0) {
      this.ecranResult = eval(this.nombre1 + '/' + this.nombre2)
    } else {
      this.ecranResult = 'Error'
    }
  }
  
  //le resultat
  equal () {
    if (this.operateur == '+') {
      this.addition()
    } else if (this.operateur == '-') {
      this.soustraction()
    } else if (this.operateur == 'x') {
      this.multiplication()
    } else if (this.operateur == '/') {
      this.division()
    }
    
    this.nombre1 = ''
    this.nombre2 = ''
    this.operateur = ''
  }
  
  clean () {
    this.ecran = ''
    this.ecranResult = ''
    this.nombre1 = ''
    this.nombre2 = ''
    this.operateur = ''
  }


  constructor() { }

  ngOnInit() {
  }

}
