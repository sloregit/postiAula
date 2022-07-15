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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AggiungiStudenteComponent } from './aggiungi-studente/aggiungi-studente.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
 
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
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    AppComponent,
    CercaStudenteComponent,
    CercaSezioneComponent,
    AggiungiStudenteComponent,
  ],
  bootstrap: [AppComponent, CercaStudenteComponent],
  providers: [
    StudentiDBserviceService,
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
  ],
})
export class AppModule {}
