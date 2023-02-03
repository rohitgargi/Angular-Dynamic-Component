import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appPlaceholder]'
})
export class AppPlaceholder{
    constructor(public viewContainerRef: ViewContainerRef){

    }
}
