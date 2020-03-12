import { moduleMetadata } from '@storybook/angular';
import { MessagesComponent } from '../app/messages/messages.component';
import { MockHeroService } from './mock-hero-service';
import { MockHeroMessageService } from './mock-hero-message-service';
import { HeroService } from '../app/hero.service';
import { MessageService } from '../app/message.service';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'Heroes Message Component',
  decorators: [
    moduleMetadata({
      imports: [ RouterTestingModule ],
      declarations: [],
      providers: [
        { provide: HeroService, useClass: MockHeroService },
        { provide: MessageService, useClass: MockHeroMessageService }
      ],
    }),
  ],
};

export const HeroMessage1 = () => ({
  component: MessagesComponent
});

HeroMessage1.story = {
  name: 'HMessageC Example 1'
};
