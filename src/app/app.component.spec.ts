import { Injectable } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MoviesService } from './movies.service';

//@Injectable()
export class FakeMoviesService {
  public getMovies(): Observable<any[]> {
    return Observable.of(JSON.parse(`[{
      "name": "Axel Foley",
      "actor": "Eddie Murphy",
      "movie": "Beverly Hills Cop"
    },
    {
      "name": "Billy Rosewood",
      "actor": "Judge Reinhold",
      "movie": "Beverly Hills Cop"
    },
    {
      "name": "Sgt. Taggart",
      "actor": "John Ashton",
      "movie": "Beverly Hills Cop"
    },
    {
      "name": "Jenny Summers",
      "actor": "Lisa Eilbacher",
      "movie": "Beverly Hills Cop"
    }]`));
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: MoviesService, useClass: FakeMoviesService}
    ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a valid actors array`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.actors).toBeDefined();
  }));

  it('should render 4 span tags', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('actorName')).toBeDefined();
  }));
});
