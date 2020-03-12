import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    const svcSpy = jasmine.createSpyObj('heroSvc', ['getHero']);
    svcSpy.getHero.and.returnValue(of());
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: HeroService, useValue: svcSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
