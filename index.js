const url = "https://striveschool-api.herokuapp.com/books";
let arrayLibri = [];

window.onload = getBooks = () => {
  fetch(url, {})
    .then((risposta) => risposta.json())
    .then((resultLibri) => {
      arrayLibri = resultLibri;
      creaCard(arrayLibri); //richiama la funzione con l'array sopra creato
    })
    .catch((e) => {
      console.log(e);
    });
};

const creaCard = function (libri) {
  const container = document.querySelector("#main_books");
  libri.map((x) => {
    container.innerHTML += `<div class="card p-0 shadow mb-5 bg-body-tertiary rounded border-0" style="width: 18rem">
    <img src="${x.img}" class="card-img-top img-mod" alt="... " />
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title">${x.title}</h5>
      <div class="d-flex justify-content-between align-items-center">
        <p class="card-text text-success fw-bold fs-4 m-0">€${x.price}</p>
        <div>
          <button class="btn bg-success-subtle btn-sm" id="add_btn">Aggiungi</button>
          <button class="btn bg-success-subtle btn-sm" id="del_btn">Rimuovi</button>
        </div>
      </div>
    </div>
  </div>`;
  });
};


