import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule
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
        MatTabsModule,
        MatIconModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
        MatCheckboxModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatIconModule,
        MatDialogModule
    ]
})

export class MaterialModule {}
