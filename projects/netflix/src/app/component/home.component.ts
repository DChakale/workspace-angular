import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: '<h2>{{title}}</h2><p>Welcome to Angular</p>',
    styles: ['h2{color:red; text-align:center}','p{color:blue; text-align:center}']

    
})
export class HomeComponent{
    public title:string="home page";
}