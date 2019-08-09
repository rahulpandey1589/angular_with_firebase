import { Component, 
    OnInit, 
    OnChanges, 
    SimpleChanges, 
    AfterContentInit, 
    AfterContentChecked, 
    AfterViewChecked, 
    AfterViewInit, 
    ViewChild,
    ElementRef} from "@angular/core";



@Component({
    selector:'app-lifecyclehooks',
    templateUrl:'./lifecyclehooks.component.html'
})

export class AngularLifeCycleHooks 
                         implements 
                         OnInit,OnChanges, 
                         AfterContentInit,
                         AfterContentChecked,
                         AfterViewChecked,
                         AfterViewInit{

    @ViewChild('textValue') header: ElementRef
                            
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
    ngAfterContentInit(){
        console.log("After Content Init!!!");
    }

    ngAfterContentChecked(){
        console.log("After Content Checked!!!");
    }

    ngAfterViewInit(){
        console.log("After View Init!!!");
       console.log('Text Content:',this.header.nativeElement.textContent);

    }

    ngAfterViewChecked(){
        console.log("After View Checked!!!");
    }
}