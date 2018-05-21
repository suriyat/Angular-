import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MarkssheetComponent } from './markssheet/markssheet.component';
import { DataComponent } from './data/data.component';
import { HttpModule } from '@angular/http';
import GradeService from './service/GradeService';

@NgModule({
  declarations: [
    AppComponent,
    MarkssheetComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [GradeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
