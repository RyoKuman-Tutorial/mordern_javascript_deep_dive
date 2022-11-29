var str1 = "STRING";
var str2 = "STRING";
var str3 = `STRING`;

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3); // 모두 string

var str4 = 'my "name" is yong ';
var str5 = "my 'name' is yong ";

console.log(str4); // '' 안에선 "" 가 문자열로 인식됨
console.log(str5); // "" 안에선 '' 가 문자열로 인식됨

var escapeSequences = "\0\b\f\n\r\t\v\u0041'\"\\"; // escape sequences

var strWithES = "hello\nmy name\nis\nyong";
var strWithOutEs = `hello
my name
is
yong`;

console.log(strWithES);
console.log(strWithOutEs); // 두 문자열의 출력이 같음을 알 수 있다.
