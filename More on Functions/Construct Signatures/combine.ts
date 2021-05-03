/**
 * 等价于
 * type CallOrConstruct = {
 *  (s: string): string;
 *  new (s: string): string;
 * }
 * 不再赘述
 */
interface CallOrConstruct {
	(s: string): string;
	new (s: string): string;
}

export {};