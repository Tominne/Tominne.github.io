html = document.childNodes[1]
body = html.childNodes[1]
p = body.childNodes[1]
p.text = 'Welcome to my study blog main page.'

person1 = {
  age: 2,
  name: "jeff",
  last_name: "John"
}

document.getElementById("")




x = "banana"

if (x == "banana") {
  console.log("banana")
}
else if (x == "apple") {
  console.log("apple")
}
else {
  console.log("idk")
}


switch (x) {
  case "banana": 
    console.log("banana")
    break 
  case "apple": 
    console.log("apple")
    break
  default: console.log("idk")
}

// For Each

pets = ["cute", "large", "fluffy", "Snuggly"]

for (num in pets) {
  console.log(pets[num])
  if (pets[num] == "fluffy") {
    break
  }
}

/*
lots 
of 
lines
*/