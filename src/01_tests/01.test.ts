import {mul, splitIntoWords, sum} from "./01";

let a:number;
let b:number;
let c:number;

beforeEach(()=>{
    a = 1;
    b = 2;
    c = 3;
});
test('sum must be correct',()=>{
    const result1 = sum(a,b);
    a = 100;
    const result2 = sum(a,c);

    expect(result1).toBe(3);
    expect(result2).toBe(103);

});
test('multiply must be correct',()=>{
    const result1 = mul(a,b);
    const result2 = mul(b,c);

    expect(result1).toBe(2);
    expect(result2).toBe(6);

});

test('splitting into words must be correct',()=>{
    const str1 = 'Hello my friend';
    const str2 = 'JS - the  best ..programming language!!';

    const result1 =splitIntoWords(str1);
    const result2 =splitIntoWords(str2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programming');
    expect(result2[4]).toBe('language');
})