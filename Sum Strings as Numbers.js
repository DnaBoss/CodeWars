題目:
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

題意理解: 給二個字串型別的數字，相加後回傳字串型別的數字

最一開始直接就是 把字串轉型數數 相加，然後再轉字串回傳
通過了前十個test
接下來就是超長的數字串，我才想到應該是要考大數相加

解題思路:
把字串中每一個字拆開來存在陣列中
逐一把每個數字相加，並建立一個計算進位的變數
將新的值逐一存放在一個新的陣列，最後join再回傳
心想這樣應該就沒問題了

結果沒想到題目有首位數是0的情況
只好再濾一次0

function sumStrings(a,b) { 
    let aArr = a.split('')
    let bArr = b.split('')
    let newArr = []
    let plus = 0;
    while (aArr.length || bArr.length || plus) {
        let add = ~~aArr.pop() +~~bArr.pop() + plus;
        plus = add >= 10 ? 1 : 0;
        let inside = (add % 10).toString();
        newArr.push(inside);
    }
    while (newArr[newArr.length - 1] === '0') {
        newArr.pop();
    }
    return newArr.reverse().join('')
}

