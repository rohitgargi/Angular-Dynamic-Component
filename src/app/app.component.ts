import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DynamicModalComponent } from './shared/components/dynamic-modal.component';
import { AppPlaceholder } from './shared/directives/placeholder.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SampleApp';
  message!:string | any;
  onCloseSub!: Subscription;

  @ViewChild(AppPlaceholder,{static:true}) public modalContainerRef!: AppPlaceholder;
  //@ViewChild('viewContainerRef', { read: ViewContainerRef, static: true })
  //public modalContainerRef!: ViewContainerRef;

  constructor(){

  }

  loadDynamicModal(){
    // load dynamic component
      const componentRef = this.modalContainerRef.viewContainerRef.createComponent(DynamicModalComponent) // this.modalContainerRef.createComponent(DynamicModalComponent);
      componentRef.instance.message = this.message;

    this.onCloseSub = componentRef.instance.onClose.subscribe(()=>{
      this.onCloseSub.unsubscribe();
      componentRef.destroy();
      this.message = '';
    });
  }
  
}
