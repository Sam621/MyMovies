import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { Configuration } from './app.configuration';
import { ConfigurationParameters } from './app.configuration';
import { MoviesService } from './movies.service';

export function createMoviesService(httpClient: HttpClient) {
  return new MoviesService(httpClient, new Configuration({
    basePath: environment.baseApiUrl,
  }));
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: MoviesService,
    deps: [HttpClient],
    useFactory: createMoviesService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
