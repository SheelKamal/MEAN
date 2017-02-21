import {Component} from '@angular/core';
//import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router';

// import {NavBarComponent} from 'app/angular-src/components/navbar.component';
// import {HomeComponent} from 'app/angular-src/components/home.component';
 import {DonorComponent} from 'app/angular-src/components/donor.component';
// import {NotFoundComponent} from 'app/angular-src/components/notFound.component';
// import {CartComponent} from 'app/angular-src/components/cart.component';


// @RouteConfig([
// 	{ path: '/', name: 'Home', component: HomeComponent },
// 	{ path: '/donate', name: 'Donate', component: DonorComponent },
//     { path: '/cart', name: 'Cart', component: CartComponent },
// 	{ path: '/notFound', name: 'NotFound', component: NotFoundComponent },
// 	{ path: '/*other', name: 'Other', redirectTo: ['Home'] }
// ])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        
    `,
    directives: [DonorComponent]
})
export class AppComponent { 
    
}