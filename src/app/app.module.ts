import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentiDBserviceService } from './studenti-dbservice.service';
import { CercaStudenteComponent } from './cerca-studente/cerca-studente.component';
import { HttpClientModule } from '@angular/common/http';
import { CercaSezioneComponent } from './cerca-sezione/cerca-sezione.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, CercaStudenteComponent, CercaSezioneComponent],
  bootstrap: [AppComponent, CercaStudenteComponent],
  providers: [StudentiDBserviceService],
})
export class AppModule {}
