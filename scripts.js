 async function fetchAnimals() {
      const response = await fetch("/api/animals");
      const animals = await response.json();

      const table = document.getElementById("animal-tbody");
      table.innerHTML = "";

      animals.forEach(a => {
        table.innerHTML += `<tr>
          <td>${a.name}</td>
          <td>${a.species}</td>
          <td>${a.family}</td>
        </tr>`;
      });
    }

    fetchAnimals();