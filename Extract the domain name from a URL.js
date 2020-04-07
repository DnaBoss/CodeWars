題目:
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

題意理解:
要把 domain name 切出來，以字串型別回傳
url 有幾種組合，分別為有無? // 跟有無 www
以這為基礎去做拆解

解答第一版
function domainName(url) {
  //your code here
  //先把// 之後的部份切出來
  let part1 = url.split("//")[1];
  let part2;
  if (part1) {
    console.log(part1)
    // 如果有www則把www切出來
    part2 = part1.split("www.").filter(str => str != '')[0];
  } else {
    part2 = url.split("www.").filter(str => str != '')[0];
  }

  console.log(part2)
  let part3 = part2.split('.')[0]
  console.log(part3)
  return part3
}

解答第二版
function domainName(url) {
  //your code here
  //先把 // 之後的部份切出來
  let part1 = url.split("//")[1];
  // 把url 分為有 // 跟沒有 // 的情況
  return part1 ? mySplit(part1) : mySplit(url);
}
function mySplit(str) {
  // 把 www 切出來，然後把第一個 . 之後的部份拾去
  return str.split("www.").filter(str => str != '')[0].split('.')[0];
}
