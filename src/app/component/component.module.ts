import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { VideoComponent } from './video/video.component';
import { ProdcutComponent } from './prodcut/prodcut.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    VideoComponent
  ],
  declarations: [  
    ProdcutComponent, CardComponent
  ],
})
export class ComponentsModule { }
