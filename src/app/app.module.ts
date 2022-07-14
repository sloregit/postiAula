import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentiDBserviceService } from './studenti-dbservice.service';
import { CercaStudenteComponent } from './cerca-studente/cerca-studente.component';
import { HttpClientModule } from '@angular/common/http';
import { CercaSezioneComponent } from './cerca-sezione/cerca-sezione.component';
//Angular Material
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatListModule,
  ],
  declarations: [AppComponent, CercaStudenteComponent, CercaSezioneComponent],
  bootstrap: [AppComponent, CercaStudenteComponent],
  providers: [StudentiDBserviceService],
})
export class AppModule {}
