import { LightningElement } from 'lwc';

export default class GrandParentComp extends LightningElement {
    passVal = '';
    counter = 0;
    slotSwitch = false;

    handleIpChange(event) {
        this.passVal = event.detail.value;
    }

    insertInChild(event) {
        this.template.querySelector('c-child-comp').insertText(this.passVal);
    }

    clearInChild(event) {
        this.template.querySelector('c-child-comp').clearText();
    }

    changeInCounter(event) {
        console.log('event.detail.clicked:', event.detail.clicked);

        if(event.detail.clicked == 'increase') {
            this.counter += 1;
        } else if(event.detail.clicked == 'decrease'){
            this.counter -= 1;
        }
    }

    switchSlot(event) {
        this.slotSwitch = !this.slotSwitch;
    }
}