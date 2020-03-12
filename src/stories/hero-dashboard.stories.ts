import { moduleMetadata } from '@storybook/angular';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { HeroSearchComponent } from '../app/hero-search/hero-search.component';
import { MockHeroService } from './mock-hero-service';
import { HeroService } from '../app/hero.service';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'Heroes Dashboard Component',
  decorators: [
    moduleMetadata({
      imports: [ RouterTestingModule.withRoutes([
        { path: 'detail/11', component: DashboardComponent },
        { path: 'detail/12', component: DashboardComponent },
        { path: 'detail/13', component: DashboardComponent },
        { path: 'detail/14', component: DashboardComponent },
        { path: 'detail/15', component: DashboardComponent },
      ])],
      declarations: [ HeroSearchComponent ],
      providers: [
        { provide: HeroService, useClass: MockHeroService }
      ],
    }),
  ],
};

export const HeroDetail1 = () => ({
  component: DashboardComponent
});

HeroDetail1.story = {
  name: 'HDashC Example 1'
};
