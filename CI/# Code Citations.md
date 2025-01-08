# Code Citations

## License: unknown
https://github.com/fabricjs/fabric.js/tree/917822409607c85281351970d1d9a91ac8ac3cc0/playwright.config.ts

```
in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ?
```


## License: unknown
https://github.com/jvesala/boozement/tree/e43b2925ac94c48c2af1662b05eeb332d57d6c6b/playwright/playwright.config.ts

```
only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env
```


## License: Apache_2_0
https://github.com/serenity-js/serenity-js/tree/833c33bf7961302f8b3042d66f4604de6e41c091/integration/playwright-test-ct/playwright-ct.config.ts

```
on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'never' }]
```


## License: unknown
https://github.com/ryandraper/my-first-static-web-app/tree/baef0ab3d77527b1717ac916c82e4580d9292d83/playwright.config.ts

```
? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [[
```


## License: unknown
https://github.com/anamariasosam/web-apps-workshop/tree/d3e36d40a58bdfef0276396a1169a28229d36c85/exercises/01.styling/05.problem.css-bundle/playwright.config.ts

```
* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open
```

