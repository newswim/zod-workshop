# Zod Workshop

This project contains broken test suite and it's your job to fix them.

You're expected to use [Zod's documentation](https://zod.dev), the project's
[github page](https://github.com/colinhacks/zod), and/or intuition to create
schemas which will make each test green.

You should not have to change the content of any tests. But, feel free to
explore the Zod API and create additional test cases if you wish.

Reading the test cases is a great way to get clues about what to write,
especially if a custom error message is expected.

And as always, please do not use `.any` -- thanks!

https://zod.dev

## Instructions

1. Open the `/tests` folder and start with the `01-basic-types` file.
2. Run `npm run test` and change a test or source code to see HMR in action!
3. Run `npm run test:ui` to see the very fancy Vitest UI app. (optional)
4. Initially, the tests are all wrapped in `describe.skip()`, remove `.skip()` to start seeing test failures.
5. Resist the urge to look in the `/solutions` folder unless you are absolutely
   stuck.

More info about the test runner, check out https://vitest.dev
