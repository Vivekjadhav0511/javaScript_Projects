
let evalue

let currancy = document.getElementById("currancy")

currancy.addEventListener('change', function (e) {
    evalue = e.target.value;
    if (e.target.value === "USD") {
        cryptoCurrancy()
    }

    if (e.target.value == "INR") {
        cryptoCurrancy()
    }

    if (e.target.value === "EUR") {
        cryptoCurrancy()
    }
})

async function cryptoCurrancy() {

    let bitcoinValue = document.getElementById('bitcoinValue')
    let EthereumcoinValue = document.getElementById('EthereumcoinValue')
    let DogecoinValue = document.getElementById('DogecoinValue')

    let fetchUrl = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=${evalue}`)
    console.log(fetchUrl);

    let responeFromUrl = await fetchUrl.json()

    console.log(responeFromUrl);

    if (evalue === "USD") {
        
        bitcoinValue.innerHTML = `$ ${responeFromUrl.bitcoin.usd}`
        EthereumcoinValue.innerHTML = `$ ${responeFromUrl.ethereum.usd}`
        DogecoinValue.innerHTML = `$ ${responeFromUrl.dogecoin.usd}`
    }

    if (evalue === "INR") {
        bitcoinValue.innerHTML = `₹ ${responeFromUrl.bitcoin.inr}`
        EthereumcoinValue.innerHTML = `₹ ${responeFromUrl.ethereum.inr}`
        DogecoinValue.innerHTML = `₹ ${responeFromUrl.dogecoin.inr}`
    }


    if (evalue === "EUR") {

        bitcoinValue.innerHTML = `€ ${ responeFromUrl.bitcoin.eur}`
        EthereumcoinValue.innerHTML =`€ ${responeFromUrl.ethereum.eur} `
        DogecoinValue.innerHTML =  `€ ${responeFromUrl.dogecoin.eur}`

    }
}



