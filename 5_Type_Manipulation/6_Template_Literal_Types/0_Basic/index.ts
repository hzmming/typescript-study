export {};

// 和js的 template literal strings 类似，只不过是用在type上

type World = "world";
type Greeting = `hello ${World}`; // type Greeting = "hello world"

// 使用union type，会应用乘法分配率
type Header = "header";
type Footer = "footer";
type HeaderFooterIDs = `${Header | Footer}_id`; // type HeaderFooterIDs = "header_id" | "footer_id"

// 使用的type为union type
type NameOrAge = "name" | "age";
type NameOrAgeIds = `${NameOrAge}_id`; // type NameOrAgeIds = "name_id" | "age_id"

// 终极union
type Union1 = "hello" | "world";
type Union2 = "hello2" | "world2";
type AllUnionIds = `${Union1 | Union2}_id`; // type AllUnionIds = "hello_id" | "world_id" | "hello2_id" | "world2_id"

// 多个template literal strings，依然是乘法分配率
type Lang = "en" | "zh";
// type AllLocaleUnionIds = "en_hello_id_id" | "en_world_id_id" | "en_hello2_id_id" | "en_world2_id_id" | "zh_hello_id_id" | "zh_world_id_id" | "zh_hello2_id_id" | "zh_world2_id_id"
type AllLocaleUnionIds = `${Lang}_${AllUnionIds}_id`;
