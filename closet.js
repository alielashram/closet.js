var closet = new Object()

closet.tops = ['shirt','sweatshirt','turtle neck']
closet.bottoms = ['pants','shorts']
closet["walk-in"] = false

console.log(closet.toppings)
console.log(closet["walk-in"])

function Accessory(name,amount) {
  this.name   = name
  this.amount = amount
}

var belt = new Accessory('belt','one')
var shoes = new Accessory('mocassins','one')

console.log(belt)

closet.accessories = [belt, shoes]
console.log(closet)
