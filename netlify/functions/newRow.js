const JSONDATA  = {{ $.Site.Data.priceAndHash.data }}

$.ajax({
  url: 'https://api.blockchain.info/stats',
  success: data => {

    JSONDATA.push({
      price: data.market_price_usd,
      hash_rate: data.hash_rate
    })

    console.log(JSONDATA)
  }
})
