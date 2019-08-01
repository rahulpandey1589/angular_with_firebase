import { Component, OnInit, OnChanges, SimpleChanges, Input } from "@angular/core";



@Component({
    selector:'app-lifecyclehooks',
    templateUrl:'./lifecyclehooks.component.html'
})

export class AngularLifeCycleHooks implements OnInit,OnChanges{
    constructor(){
        console.log('Constructor Called!!!');
    }

    ngOnChanges(changes: SimpleChanges){
        console.log(changes);
      console.log("NgOnChanges Called!!!");
    }

    ngOnInit(){
        console.log('NgOnInit  Called!!!');        
    }

    onchange(){

    }
}