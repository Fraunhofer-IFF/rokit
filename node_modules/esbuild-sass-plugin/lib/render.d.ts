import { PartialMessage } from 'esbuild';
import { SassPluginOptions } from './index';
import { AsyncCompiler } from 'sass-embedded/dist/types/compile';
export type RenderAsync = (path: string) => Promise<RenderResult>;
export type RenderResult = {
    cssText: string;
    watchFiles: string[];
    warnings?: PartialMessage[];
};
export declare function createRenderer(compiler: AsyncCompiler, options: SassPluginOptions | undefined, sourcemap: boolean): RenderAsync;
