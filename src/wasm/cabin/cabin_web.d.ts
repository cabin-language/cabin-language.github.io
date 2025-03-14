/* tslint:disable */
/* eslint-disable */
/**
 * # Example Usage
 *
 * ```ts
 * run_code(`print("Hello world!");`, {
 *     io = {
 *         input: {
 *             read(): string {
 * 					return get_next_line_of_input();
 *             }
 *         },
 *         output: {
 *             write(text: StyledString): void {
 *                 element.textContent = text.value;
 *             }
 *         },
 *         error: {
 *             write(text: StyledString): void {
 *                 element.textContent = text.value;
 *             }
 *         },
 *     }
 * });
 * ```
 */
export function runCode(code: string, input: Function, output: Function, error: Function): void;
export class Color {
  private constructor();
  free(): void;
}
export class Io {
  private constructor();
  free(): void;
}
export class IoReader {
  private constructor();
  free(): void;
}
export class IoWriter {
  private constructor();
  free(): void;
}
export class RunOptions {
  private constructor();
  free(): void;
}
export class StyledString {
  private constructor();
  free(): void;
  get color(): Color | undefined;
  set color(value: Color | null | undefined);
  bold: boolean;
  italic: boolean;
  underline: boolean;
  undercurl: boolean;
  readonly value: string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly runCode: (a: number, b: number, c: any, d: any, e: any) => void;
  readonly __wbg_io_free: (a: number, b: number) => void;
  readonly jsio_new: (a: number, b: number, c: number) => number;
  readonly __wbg_runoptions_free: (a: number, b: number) => void;
  readonly jsrunoptions_new: (a: number) => number;
  readonly __wbg_ioreader_free: (a: number, b: number) => void;
  readonly jsreader_new: (a: any) => number;
  readonly __wbg_iowriter_free: (a: number, b: number) => void;
  readonly jswriter_new: (a: any) => number;
  readonly __wbg_color_free: (a: number, b: number) => void;
  readonly __wbg_styledstring_free: (a: number, b: number) => void;
  readonly __wbg_get_styledstring_color: (a: number) => number;
  readonly __wbg_set_styledstring_color: (a: number, b: number) => void;
  readonly __wbg_get_styledstring_bold: (a: number) => number;
  readonly __wbg_set_styledstring_bold: (a: number, b: number) => void;
  readonly __wbg_get_styledstring_italic: (a: number) => number;
  readonly __wbg_set_styledstring_italic: (a: number, b: number) => void;
  readonly __wbg_get_styledstring_underline: (a: number) => number;
  readonly __wbg_set_styledstring_underline: (a: number, b: number) => void;
  readonly __wbg_get_styledstring_undercurl: (a: number) => number;
  readonly __wbg_set_styledstring_undercurl: (a: number, b: number) => void;
  readonly styledstring_value: (a: number) => [number, number];
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
