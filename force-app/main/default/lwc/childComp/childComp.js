import { LightningElement, api } from 'lwc';

export default class ParentComp extends LightningElement {
    @api passedVal;
    textInserted = '';

    @api
    insertText(passedValue) {
        this.textInserted = `The text - ${passedValue} - was inserted due to button click in parent, using @api method`;
    }

    @api
    clearText() {
       this.textInserted = '';
    }

    counterChange(event){
        console.log('In child',event.target.name);
        const incrCount = new CustomEvent('counterchange', {
            detail: {
                clicked: event.target.name
            }
        });
        this.dispatchEvent(incrCount);
    }
}