import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Landingpage } from './landingpage/landingpage';

@NgModule({
  declarations: [App, Landingpage],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient(withFetch()), provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
