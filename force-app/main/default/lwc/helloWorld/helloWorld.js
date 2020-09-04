import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
@track dynamicgreeting = 'world';
greetinghandler(event){
this.dynamicgreeting = event.target.value;

}

}