import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ExponentialPipe } from './pipes/exponential.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
