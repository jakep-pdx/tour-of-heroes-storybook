# Tour of Heroes Storybook

This project starts from having followed the "Tour of Heroes" [tutorial](https://angular.io/tutorial)

Then got the tests working (not doing particularly useful tests, but at least working) using Jasmine spys following this [video](https://www.youtube.com/watch?v=S0LxogWSMzE) from Oasis Digital (thanks Oasis / Lance Finney!)

Then added [Storybook](https://github.com/storybookjs/storybook)

And finally, added Storybook stories for each of the 5 Tour of Heroes components, creating and providing mock services so the stories could display without requiring the original service implementations used in the tutorial.  Created using Angular 10 and Storybook 6 using the newer [Component Story Format](https://storybook.js.org/docs/formats/component-story-format/).

## Run Tour of Heroes app

npm run start

## Run Tests

npm run test

*Note - set to use chrome headless

## Run Tour of Heroes Storybook

npm run storybook
