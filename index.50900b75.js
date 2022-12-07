({buttonFetch:document.querySelector(".fetch-pokemon"),pokemonList:document.querySelector(".pokemon-list")}).buttonFetch.addEventListener("click",(function(o){fetch("https://pokeapi.co/api/v2/ability/{id or name}/").then((o=>{if(console.log(o),!o.ok)throw new Error("Ups, something going wrong")}))}));
//# sourceMappingURL=index.50900b75.js.map
