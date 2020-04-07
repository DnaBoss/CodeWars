題目:
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

題意
計算一個 n  階乗中會有多少個 0

解題思維:
怎麼乗會有0? 5*任意偶數 or 10 * 任意數

最一開始是對 N 階做質因數分解
再去計算有多少 個5
明顯的，這可能會超出題目的限制

後來想到了，把數字迭代除以5，每除一次可以從中取出 5的因子
只要商還大於5 就繼續把商除以5

例 1~9 階 除以5 都只會得到 1
所以1~9階只有一個0
10~14階除以5 都只會得到2 所以10~14階會有2個0
以此類推
到了25階的時後 會有6個0
25/5 = 5
5/5 = 1
因為25本身是 5*5 所以包含了2個5的因子

最後的解法很簡單，其實這題是在考數學思考
解法如下:

function zeros (n) {
 if(n < 5) return 0 ;

    var count = 0;
    // 算階層內有幾個5出現
    while(n >= 5){
        count += Math.floor(n/5);
        n = parseInt(n/5);
    }

    return count;
}
