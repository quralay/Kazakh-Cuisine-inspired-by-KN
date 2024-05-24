function performSearch() {
      const input = document.getElementById('search-input').value.toLowerCase();
      const paragraphs = document.querySelectorAll('#content p');
      const resultsContainer = document.getElementById('search-results');
      resultsContainer.innerHTML = '';

      let resultsFound = false;

      paragraphs.forEach(paragraph => {
        const text = paragraph.innerText.toLowerCase();
        if (text.includes(input)) {
          const result = document.createElement('p');
          result.innerText = paragraph.innerText;
          resultsContainer.appendChild(result);
          resultsFound = true;
        }
      });

      if (resultsFound) {
        resultsContainer.style.display = 'block';
      } else {
        resultsContainer.style.display = 'none';
        alert('No results found for: ' + input);
      }
    }
