document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const titleInput = document.getElementById("story-title");
  const contentInput = document.getElementById("story-content");
  const storyList = document.getElementById("story-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page from refreshing

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title && content) {
      const storyDiv = document.createElement("div");
      storyDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content.replace(/\n/g, "<br>")}</p>
        <hr>
      `;
      storyList.appendChild(storyDiv);

      // Clear the form
      titleInput.value = "";
      contentInput.value = "";
    } else {
      alert("Please fill in both title and story.");
    }
  });
});
