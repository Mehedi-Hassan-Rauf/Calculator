var vtnS = document.querySelectorAll("#button");

for (let i = 0; i < vtnS.length; i++) {
  let vtn = vtnS[i];
  vtn.addEventListener("click", function (event) {
    event.preventDefault();
    var inp = document.getElementById("input");
    switch (vtn.innerText) {
      case "C":
        inp.value = "";
        break;
      case "<":
        inp.value = inp.value.slice(0, -1);
        break;
      case "=":
        try {
          inp.value = eval(inp.value);
        } catch {
          inp.value = "";
        }
        break;
      default:
        inp.value = inp.value + vtn.innerText;
        break;
    }
  });
}
