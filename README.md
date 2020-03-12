# Tour of Heroes Storybook

This project starts from having followed the "Tour of Heroes" [tutorial](https://angular.io/tutorial)

Then got the tests working (not doing particularly useful tests, but at least working) using Jasmine spys following this [video](https://www.youtube.com/watch?v=S0LxogWSMzE) from Oasis Digital (thanks Oasis / Lance Finney!)

Then added [Storybook](https://github.com/storybookjs/storybook)

And finally, added Storybook stories for each of the 5 Tour of Heroes components, creating and providing mock services so the stories could display without requiring the original service implementations used in the tutorial.  Created using Angular 9 and Storybook 5.3 using the newer [Component Story Format](https://storybook.js.org/docs/formats/component-story-format/).

I am a former developer, now Product Owner who occasionally dabbles in code.  Never done anyting with Angular or Storybook prior to this, (warning: n00b code) but was interested to learn as my team develops in Angular and we are exploring Storybook and Design Systems.  Seems like most Storybook examples are in React, so thought I would throw this out here in case anyone else finds it helpful.

## Run Tour of Heroes app

ng serve

## Run Tests

npm run test

*Note - set to use chrome headless

## Run Tour of Heroes Storybook

npm run storybook
