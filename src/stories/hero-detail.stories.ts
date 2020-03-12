import { moduleMetadata } from '@storybook/angular';
import { HeroDetailComponent } from '../app/hero-detail/hero-detail.component';
import { MockHeroService } from './mock-hero-service';
import { HeroService } from '../app/hero.service';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'Heroes Detail Component',
  decorators: [
    moduleMetadata({
      imports: [ RouterTestingModule ],
      declarations: [],
      providers: [
        { provide: HeroService, useClass: MockHeroService }
      ],
    }),
  ],
};

export const HeroDetail1 = () => ({
  component: HeroDetailComponent
});

HeroDetail1.story = {
  name: 'HDetailC Example 1'
};
