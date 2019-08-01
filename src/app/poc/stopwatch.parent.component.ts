import { Component, OnInit, ViewChild } from "@angular/core";
import { StopWatchComponent } from "./stopwatch.component";



@Component({
    selector:'app-parent-stopwatch',
    templateUrl:'./stopwatch.parent.component.html'
})

export class StopWatchParent implements OnInit{

    @ViewChild(StopWatchComponent) private stopwatch : StopWatchComponent;

    ngOnInit(){

    }

    startWatch(){
         this.stopwatch.start();
    }

    stopWatch(){
        this.stopwatch.stop();
    }

    reset(){
        this.stopwatch.reset();
    }
}