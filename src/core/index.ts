import type { SvelteComponent } from 'svelte';
import path from 'path';

type Props = {
  [key: string]: unknown;
};

require('svelte/register');

export const compile = async (pathToComp: string, props: Props) => {
  const resolvedPath = path.resolve(__dirname, '../', pathToComp);
  const Comp: SvelteComponent = require(resolvedPath);

  const { html } = Comp.default.render(props);

  return html;
};
