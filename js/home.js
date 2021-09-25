fetch(apiTeddies)
  .then(response => {
    return response.json();
  })
  .then(data => {
    const list = document.querySelector('.products__list');

    ////////// AFFICHAGE DES ITEMS DE L'API DANS LE DOM //////////
    // itération dans les data
    for (let i = 0; i < data.length; i++) {
      // création d'une url vers custom contenant un id propre
      let idUrl = new URL(`html/custom.html?id=${data[i]._id}`,urlPath);
      // affichage dans le dom des objets de l'api
      list.innerHTML += `
        <li class="list__item">
            <h2 class="list__item--name">${data[i].name}</h2>
            <span class="list__item--description">${data[i].description}</span>
            <strong class="list__item--price">${data[i].price / 100}€</strong>
            <a class="list__item--link" href="${data[i].imageUrl}">
            <img class="list__item--picture" src="${data[i].imageUrl}"></a>
            <a href="${idUrl}"class="add-product"></a>
        </li>`;
      /* au clic sur le bouton plus l'utilisateur sera redirigé vers la page de personnalisation
        qui contiendra dans son url l'id du produit choisi*/
    }
  });

  