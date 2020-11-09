# renderilka-proof-of-concept

[![Scripts sets up by @solid-soda/scripts v2.2.0](https://img.shields.io/static/v1?label=@solid-soda/scripts&message=2.2.0&color=75ddf4)](https://github.com/solid-soda/scripts)

Developed using Node.js 14.15.0 and yarn@berry (2.2.0) as package manager

Dev mode 
```js
yarn dev
```

Prod mode
```js
yarn build && yarn start
// or
yarn start:prod
```

Or use `npm run` instead of `yarn`

Idea of this project was born from very specific situation - creating and working with view renderings in Sitecore CMS it is really painful.
It feels like part of frontend app is taken hostage and bruttaly tortured.

So idea is something like this:

Move html layout rendering to separate node.js app - which will have api endpoints like `GET /components/hero-banner` and will
accept data to put into the template and returns html string of hero-banner with e.g. specific title.
And Sitecore CMS has support for accepting renderings from other sources via "Url Rendering"
As a framework for components in this project i decided to go with Svelte - because it is an "disappearing framework" and has server-side html string rendering feature built-in.

Pros of this approach:
- completely separated frontend code from cms backend
- it is actually two separated apps now, so there is contact layer and thanks to that it is a lot harder to write heavily bounded code which is hard to refactor
- since it is bases on svelte - frontend DX will be a lot better now
- it is not tied to sitecore or any other cms and can be used to render html parts anywhere

Cons:
- big feature of Sitecore is Expirence Editor which is like WYSIWIG editor, but for whole website pages: will it be possibe to use "Url rendering" of sitecore with expirence editor WYSIWIG - is a big question and need to be researched

