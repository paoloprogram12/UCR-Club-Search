async function send() {
  let search_element = document.getElementById("search");
  let phrase_list = search_element.value.trim().split(",");
  let response = await fetch("http://localhost:8000/scores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(phrase_list),
  });
  let data = await response.json();
  // sort data by score descending
  data.sort((a, b) => b.score - a.score);
  
  let results_div = document.getElementById("results");
  results_div.innerHTML = "";

  data.forEach((item) => {
    let p = document.createElement("p");
    p.textContent = `Club: ${item.name}, Score: ${item.score}, Labels: ${item.labels.join(", ")}`;
    results_div.appendChild(p);
  });
}
