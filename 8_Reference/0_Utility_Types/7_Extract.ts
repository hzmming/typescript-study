export {};

//
// Extract<Type, Union>
// 做交集

// type T0 = "a"
type T0 = Extract<"a" | "b" | "c", "a" | "f">;

// type T1 = () => void
type T1 = Extract<string | number | (() => void), Function>;
