import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentiDBserviceService } from './studenti-dbservice.service';
import { CercaStudenteComponent } from './cerca-studente/cerca-studente.component';
import { HttpClientModule } from '@angular/common/http';
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
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { AulaComponent } from './aula/aula.component';
import { AggiungiClasseComponent } from './aggiungi-classe/aggiungi-classe.component';
import { CercaTuttiComponent } from './cerca-tutti/cerca-tutti.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { GeneraMatricolaService } from './aggiungi-studente/genera-matricola.service';
import { GeneraClasseService } from './aggiungi-classe/genera-classe.service';
import { CercaAuleService } from './aula/cerca-aule.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatDialogModule,
    MatExpansionModule,
  ],
  declarations: [
    AppComponent,
    CercaStudenteComponent,
    AggiungiStudenteComponent,
    DialogComponent,
    AulaComponent,
    AggiungiClasseComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    GeneraMatricolaService,
    GeneraClasseService,
    StudentiDBserviceService,
    CercaAuleService,
    { provide: MAT_DATE_LOCALE, useValue: 'it-it' },
    { provide: MatDatepickerModule, useValue: { useUtc: true } },
  ],
  entryComponents: [DialogComponent],
})
export class AppModule {}
