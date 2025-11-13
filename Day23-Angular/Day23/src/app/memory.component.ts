import { Component, OnDestroy } from "@angular/core";
import { interval, Subscription } from "rxjs";

@Component({
    selector: 'app-manual-unsubscriber',
    standalone: true,
    template: `<p>Manual Unsubscribe Example - check console logs</p>`
})
export class ManualUnsubscriberComponent implements OnDestroy {
    subscription!: Subscription;

    constructor(){
        this.subscription = interval(1000).subscribe(val =>{
            console.log('value: ', val);
        });
    }

    ngOnDestroy() {
        console.log('Component destroyed, unsubscribing....');
        this.subscription.unsubscribe();
    }
}

export class MemoeryComponent {}