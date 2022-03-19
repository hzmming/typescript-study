interface DescribableFunction {
	description: string;
	(someArg: number): boolean;
}

function doSth(fn: DescribableFunction){
	console.log(fn.description);
}

export {};