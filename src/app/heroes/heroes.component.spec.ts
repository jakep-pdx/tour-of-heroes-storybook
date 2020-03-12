import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    const svcSpy = jasmine.createSpyObj('heroSvc', ['getHeroes']);
    svcSpy.getHeroes.and.returnValue(of([]));
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: HeroService, useValue: svcSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
