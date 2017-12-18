import { Routes } from '@angular/router';

/* 
 * Load class/component/directive/enum/guard/interface/module/pipe/service
 *
 * Load components here
 * import { <Component_Name_Here> } from '../where/component/is/here';
 * ...
 */

export const ProductRoutes: Routes = [
  {
    path: '',
    children: [
      /* {
        path: '',
        redirectTo: 'default-redirect-path-here'
      }, {
        path: 'child-path-to-component',
        component: <Child_Component_For_This_Path>
      }, {
        path: 'child-path-to-module',
        loadChildren: './path/to/module#<Module_Name>'
      } */
    ]
  }
];

