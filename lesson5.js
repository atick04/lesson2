document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

generate = () => {
  var quotes = {
    "- Михаил Лермонтов":
      '"… И целый мир возненавидел,Чтобы тебя любить сильней."',
    "- Сергей Есенин":
      '"Времени нет. Серьезно? Это желания нет, а время есть всегда."',
    "- Максим Горький": '"В жизни всегда есть место подвигам. "',
    "- Александр Пушкин":
      '"Все женщины прелестны, а красоту им придает любовь мужчин."',
  };

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
};
