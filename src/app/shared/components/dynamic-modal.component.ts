import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector:'dynamic-modal',
    templateUrl:'./dynamic-modal.component.html',
    styleUrls:['./dynamic-modal.component.scss']
})

export class DynamicModalComponent{

    @Input() message!: string | any;
    @Output() onClose = new EventEmitter<void>();

    constructor(){

    }
    onCloseHandle(){
        this.onClose.emit();
    }

   
}
