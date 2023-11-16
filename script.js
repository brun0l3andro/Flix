
var listaFilmes = []
listaFilmes[0] = "https://play-lh.googleusercontent.com/b0bqoD27ib25NwPutF8Kf740iiFQ53CKUz27VBQkCQtvSfhdWQtb8vwFxxn-SzI-5ZATXXkDwf2qPODkNQ";
listaFilmes[1] = "https://play-lh.googleusercontent.com/IpmEDsVGu6kxs1SoSTEF_FZpKQPhrgpjUL50dHRITdTaIN4EHOezfgGK3Qiu5q7FdiQa=w240-h480-rw";
listaFilmes[2] = "https://images.tcdn.com.br/img/img_prod/757946/the_matrix_soundtrack_selections_pf9914_3915_1_fe3ce06a2f3ad9af9c3ff2bcbdf44719.jpg";

for(var i=0; i < 3; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}

