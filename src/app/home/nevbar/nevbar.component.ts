import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-nevbar',
    templateUrl: './nevbar.component.html',
    styleUrls: ['./nevbar.component.css']
})

export class NevbarComponent {
    @Input()
    title: string;
    constructor() {}
}
