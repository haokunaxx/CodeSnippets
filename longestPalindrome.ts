function longestPalindrome(s: string): string {
  let len = s.length,
    res = '',
    maxLen = 0
  for (let start = 0; start < len - maxLen; start++) {
    for (let end = start + maxLen; end < len; end++) {
      let strTemp = s.slice(start, end + 1)
      if (isPalindrome(strTemp)) {
        maxLen = end - start
        res = strTemp
      }
    }
  }
  return res
};

function isPalindrome(s: string): boolean {
  // return s.split('').reverse().join('') === s
  // for (let i = 0, len = s.length; i < len << 1; i++) {
  //   if (s[i] !== s[len - 1 - i]) {
  //     return false
  //   }
  // }
  // return true

  let i = 0, len = s.length
  while (i < len << 1) {
    if (s[i] !== s[len - 1 - i]) {
      return false
    }
    i++
  }
  return true
}


console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome("babad"))
console.log(longestPalindrome('ccc'))
console.time('longestPalindrome')
console.log(longestPalindrome("anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg"))
console.timeEnd('longestPalindrome')