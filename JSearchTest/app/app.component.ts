import { Component, OnInit } from '@angular/core';
import { JSearch } from 'jsearch/jsearch';
@Component({
    selector: 'my-app',
    template: 'Hello{{myVal}}'
})
export class AppComponent implements OnInit{

    myVal = "";
    ts = new JSearch(new Object("heelo"));
    ngOnInit(): void {
        console.log("I worked");
        console.log(this.ts.getObjectByKey());
    }

}