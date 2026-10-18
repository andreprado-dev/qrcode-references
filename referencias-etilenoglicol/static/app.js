(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll("#list li"));
  var q = document.getElementById("q");
  var count = document.getElementById("count");
  var empty = document.getElementById("empty");

  function norm(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  items.forEach(function (li) {
    var p = li.querySelector("p");
    li._plain = p.textContent;
    li._search = norm(li._plain);

    var b = li.querySelector("button.copy");
    b.addEventListener("click", function () {
      function ok() {
        b.textContent = "Copiado";
        setTimeout(function () { b.textContent = "Copiar referência"; }, 1800);
      }
      function fail() { b.textContent = "Não foi possível copiar"; }
      try {
        navigator.clipboard.writeText(li._plain).then(ok, fail);
      } catch (e) {
        fail();
      }
    });
  });

  function render() {
    var term = norm(q.value).trim();
    var n = 0;
    items.forEach(function (li) {
      var show = !term || li._search.indexOf(term) >= 0;
      li.hidden = !show;
      if (show) n++;
    });
    count.textContent = n + (n === 1 ? " referência" : " referências") + (term ? " encontradas" : "");
    empty.hidden = n > 0;
  }

  q.addEventListener("input", render);
  render();
})();
