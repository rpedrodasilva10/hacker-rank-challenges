
function sockMerchant(n, socksArray) {
  //socksArray.reduce(sock => socksArray.filter())
  let count = 0
  const counted = []
  let sum = 0

  for (let i = 0; i < socksArray.length; i++) {
    count = 0
    if (!(counted.find(sock => sock == socksArray[i]))) {
      for (let j = 0; j < socksArray.length; j++) {
        if (socksArray[j] == socksArray[i]) {
          count += 1
        }
      }

      let resp = count % 2 == 0 ? count / 2 : Math.floor(count / 2)
      // console.log(`elemento: ${socksArray[i]} Quantidade: ${count} Pares: ${resp}`)

      counted.push(socksArray[i])
      sum += resp

    }

  }

  console.log(sum)
  return sum
}


const socksArray = [10, 20, 20, 10, 10, 30, 50, 10, 20]

sockMerchant(9, socksArray)
sockMerchant2(9, socksArray)



function sockMerchant2(n, socksArray) {
  //socksArray.reduce(sock => socksArray.filter())
  let count = 0
  const counted = []
  let sum = 0

  socksArray.map(sock => {
    count = 0
    if (!(counted.find(another_sock => another_sock == sock))) {
      socksArray.map(another_sock => {
        if (another_sock == sock) {
          count += 1
        }
      })
      let resp = count % 2 == 0 ? count / 2 : Math.floor(count / 2)
      console.log(`elemento: ${sock} Quantidade: ${count} Pares: ${resp}`)

      counted.push(sock)
      sum += resp
      if (sum == n / 2) {
        return sum
      }
    }
  })
  return sum
}
