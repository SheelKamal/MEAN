import {Component} from '@angular/core';
import {RouterModule, Routes , Router} from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: 'app/angular-src/html/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent {
    constructor(private _router: Router){
    }
    
    isCurrentRoute(route){
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }
 }