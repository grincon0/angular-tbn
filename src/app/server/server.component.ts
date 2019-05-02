import { Component } from '@angular/core';

//decorators enchanced classes/components

//decorators are attached by prefix @ with decoration name


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverID = 10;
    //example of declaring type
    serverStatus: string = 'offline'
 }