import { moduleMetadata } from '@storybook/angular';
import { HeroesComponent } from '../app/heroes/heroes.component';
import { MockHeroService } from './mock-hero-service';
import { HeroService } from '../app/hero.service';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'Heroes Component',
  decorators: [
    moduleMetadata({
      imports: [ RouterTestingModule.withRoutes([
         { path: 'detail/11', component: HeroesComponent },
         { path: 'detail/12', component: HeroesComponent },
         { path: 'detail/13', component: HeroesComponent },
         { path: 'detail/14', component: HeroesComponent },
         { path: 'detail/15', component: HeroesComponent },
       ])],
      declarations: [],
      providers: [
        { provide: HeroService, useClass: MockHeroService }
      ],
    }),
  ],
};

export const Heroes1 = () => ({
  component: HeroesComponent
});

Heroes1.story = {
  name: 'HeroesC Example 1'
};
