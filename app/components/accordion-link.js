import Component from '@ember/component';
import { action } from '@ember/object';

export default Component.extend({

    @action
    toggle() {

        let custAcc = document.getElementsByClassName("customAccordion");
        if (custAcc) {
            this.toggleProperty('panelOpen');
        } 
  
    }
});
