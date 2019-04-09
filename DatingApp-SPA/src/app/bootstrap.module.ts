import { NgModule } from '@angular/core';
import { BsDropdownModule, TabsModule, BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        BsDatepickerModule.forRoot()
    ],
    exports:[
        BsDropdownModule,
        TabsModule,
        BsDatepickerModule
    ]
})

export class BootstrapModule {}