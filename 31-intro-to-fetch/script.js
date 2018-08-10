// httpGet(`https://pokeapi.co/api/v2/pokemon/`, function(){
//   let url = //get obj where name is charmander, get url
//   httpGet(url, function(){
//     let abilityURL =//get obj where key abilities, find the hiddle ability, get that
//         //ability's url
//         httpGet(abilityURL, function(){
//           let = description//find the key named "effect_entries", get that value
//           console.log(description)
//           //render description on my DOM
//         })
//   })
// })


var p = new Promise((resolve, reject) => {
	setTimeout(function(){
		resolve("hiiiiiiii")
	}, 5000)
}).then(function(x){
	console.log(x)
})
//console logs "hiiiiiiii" after 5 seconds


fetch(`https://pokeapi.co/api/v2/pokemon/`)
.then(response => response.json())
.then(jsonData => {
    pokemonData = jsonData
})
