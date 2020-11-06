import type { SvelteComponent } from 'svelte';
import path from 'path';
import fs from 'fs/promises';

require('svelte/register');

const svelte = require('svelte/compiler');

export const compile = async (pathToComp: string, props: any) => {
  const resolvedPath = path.resolve(__dirname, '../', pathToComp);
  const Comp: SvelteComponent = require(resolvedPath);
  const compSource = await fs.readFile(resolvedPath, 'utf-8');

  const { html, css } = Comp.default.render(props);

  console.log(svelte);

  const svelteCompiled = svelte.compile(compSource, {
    generate: 'dom',
    hydratable: true,
  });

  console.log(html, css);

  console.log(svelteCompiled);
};
