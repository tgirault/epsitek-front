import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentionsComponent } from './mentions/mentions.component';

const routes: Routes = [
    {
        path: '',
        component: MentionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MentionsRoutingModule { }
