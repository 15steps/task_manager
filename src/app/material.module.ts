import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
        MatCheckboxModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatTabsModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
        MatCheckboxModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatTabsModule
    ]
})

export class MaterialModule {}
