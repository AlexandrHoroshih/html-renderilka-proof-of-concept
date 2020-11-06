# svelte-renderilka

Developed using Node.js 14.15.0 and yarn@berry (2.2.0) as package manager

### EXPERIMENTAL PROJECT

Idea of this project was born from very specific situation - working with views in Sitecore CMS is a pain in the ass

So idea is something like this:

Move html layout rendering to separate node.js app - which will have api endpoints like `GET /components/hero-banner` and will
accept data to put into the template.
As a framework for components in this project i decided to go with Svelte - because it is an "disappearing framework" 
