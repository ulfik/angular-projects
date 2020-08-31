import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListElementComponent } from './list/list-element/list-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './common/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { ListFormComponent } from './list/list-form/list-form.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EditFormComponent } from './list/edit-form/edit-form.component';
import { ListService } from './list/list.service';
import { FilterPipe } from './common/pipes/filter.pipe';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListElementComponent,
    ModalComponent,
    ListFormComponent,
    EditFormComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
  ],
  entryComponents: [ModalComponent],
  providers: [ListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
