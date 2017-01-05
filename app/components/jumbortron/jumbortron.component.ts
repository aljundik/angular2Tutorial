import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbortron',
  templateUrl: 'jumbortron.component.html'
})
export class JumbortronComponent {
    private jbtHeading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;
    
    constructor(){
        this.jbtHeading = "hello world";
        this.jbtText = "I am khaled aljundi and I am learinig angular 2";
        this.jbtBtnText = "Read more";
        this.jbtBtnUrl="/about";

    }

 }
