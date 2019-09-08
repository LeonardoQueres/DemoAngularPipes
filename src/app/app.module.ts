import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './exemplo-pipes/filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './exemplo-pipes/filtro-array-impuro.pipe';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ SettingsService,
    { provide: LOCALE_ID, deps: [SettingsService], 
      useFactory:(SettingsService) => SettingsService.getLocate() } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
