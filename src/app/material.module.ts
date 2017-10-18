import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectionList
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,

    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,

    ]
})

export class MaterialModule {}
