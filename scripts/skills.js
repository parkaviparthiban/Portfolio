// skills.js

document.addEventListener("DOMContentLoaded", () => {
  const tags = document.querySelectorAll(".skill-tag");
  const contentArea = document.querySelector(".skill-content");

  // Define skill data by category
  const skillData = {
    Frontend: [
      "HTML", "CSS", "JavaScript", "Responsive Design", "Animations", "Portfolio Design"
    ],
    Backend: [
      "Python", "Flask", "Flask-CORS", "Java", "API Design", "Postman Testing", "Deployment with Render"
    ],
    AI_ML: [
      "OpenAI API (gpt-3.5-turbo)", "Prompt Engineering", "Data Handling", "Basic ML Concepts"
    ],
    Tools: [
      "VS Code", "GitHub", "Microsoft Excel", "Ubuntu VM", "VirtualBox"
    ],
    SoftSkills: [
      "Technical Writing", "Skill Development Speeches", "Communication", "Presentation"
    ]
  };

  // Load default content (e.g., Frontend)
  loadSkills("Frontend");

  // Handle tag clicks to filter category
  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      const category = tag.dataset.category;
      if (category && skillData[category]) {
        loadSkills(category);
        highlightTag(tag);
      }
    });
  });

  // Load skill items into content area
  function loadSkills(category) {
    contentArea.innerHTML = ""; // Clear existing content
    const ul = document.createElement("ul");
    ul.className = "skill-list"; // For optional styling
    skillData[category].forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      ul.appendChild(li);
    });
    contentArea.appendChild(ul);
  }

  // Highlight the active tag
  function highlightTag(activeTag) {
    tags.forEach(tag => tag.classList.remove("active"));
    activeTag.classList.add("active");
  }
});