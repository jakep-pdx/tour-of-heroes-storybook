import { moduleMetadata } from '@storybook/angular';
import { HeroSearchComponent } from '../app/hero-search/hero-search.component';
import { MockHeroService } from './mock-hero-service';
import { HeroService } from '../app/hero.service';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'Heroes Search Component',
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

export const HeroSearch1 = () => ({
  component: HeroSearchComponent
});

HeroSearch1.story = {
  name: 'HSearchC Example 1'
};
