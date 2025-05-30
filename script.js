document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("cursos-container");
  
    fetch("cursos.json")
      .then(res => res.json())
      .then(cursos => {
        container.innerHTML = ""; // Limpa o "Carregando..."
  
        cursos.forEach(curso => {
          const div = document.createElement("div");
          div.classList.add("curso");
  
          div.innerHTML = `
            <h2>${curso.titulo}</h2>
            <p>${curso.descricao}</p>
            <a href="${curso.link}" target="_blank">Acessar</a>
          `;
  
          container.appendChild(div);
        });
      })
      .catch(error => {
        container.innerHTML = "<p>Erro ao carregar os cursos.</p>";
        console.error(error);
      });
  });
  