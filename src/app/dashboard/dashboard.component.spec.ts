import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    const svcSpy = jasmine.createSpyObj('heroSvc', ['getHeroes']);
    svcSpy.getHeroes.and.returnValue(of([
      {id: 0, name: 'Hero 0'},
      {id: 1, name: 'Hero 1'}
    ]));
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, HeroSearchComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: HeroService, useValue: svcSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
