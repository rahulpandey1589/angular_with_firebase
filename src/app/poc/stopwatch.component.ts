import {Component, OnInit} from '@angular/core';



@Component({
   selector:'app-stopwatch',
   templateUrl:'./stopwatch.component.html'
})

export class StopWatchComponent implements OnInit{
   
    shouldRun:boolean = false;
    counter:number=0;

    ngOnInit(){
    }


    start(){
          this.shouldRun = true;
          let interval = setInterval(() =>{ 

            if(!this.shouldRun){
                clearInterval(interval);
            }
            this.counter = this.counter+1;
          },1000);
    }

    stop(){
        this.shouldRun = false;
    }

    reset(){
        this.counter = 0;
    }
}