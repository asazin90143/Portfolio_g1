# Personal Developer Portfolio

A modern, responsive, and minimalist personal portfolio website built with HTML, CSS, and Vanilla JavaScript. Designed with a "Dark Corporate" aesthetic, featuring dynamic project tiles and a filterable certification section.

## 🚀 Features

* **Responsive Design:** Fully responsive layout that adapts to mobile, tablet, and desktop.
* **Minimalist Dark Theme:** Professional deep charcoal and muted teal color palette.
* **Dynamic Content:** Projects and Certificates are rendered via JavaScript, making updates easy without touching HTML.
* **Clickable Project Tiles:** Entire project cards act as links for better UX.
* **Filterable Certificates:** Sort certifications by category (Software, Data, Cybersecurity, AI).
* **Smooth Scrolling:** Native smooth scroll for navigation links.

## 🛠️ Tech Stack

* **HTML5**
* **CSS3** (CSS Variables, Flexbox, Grid)
* **JavaScript** (ES6+)

## 📦 How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/portfolio.git](https://github.com/yourusername/portfolio.git)
    ```
2.  **Open the folder:**
    Navigate to the project directory.
3.  **Launch:**
    Open `index.html` in your web browser.

---

## 📝 Content Management

You do not need to edit the HTML to add new work. All data is managed inside `script.js`.

### 1. Adding Projects
Open `script.js` and locate the `projectsData` array. Add a new object to the list:

```javascript
{
    title: "Project Name",
    description: "Brief description of the project.",
    tech: ["React", "Node.js", "MongoDB"], // Tech stack tags
    link: "[https://your-project-link.com](https://your-project-link.com)"   // The card will link here
},

2. Adding Certificates
Open script.js and locate the certsData array.

Important: You must use specific category keys for the filters to work correctly.

Category Display Name	Key to use in Code (category)
Software Development	'software'
Data Science	'data'
Cybersecurity	'cyber'
AI & Machine Learning	'ai'

Export to Sheets

Example Entry:

JavaScript

{
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    category: "software", // Must match the keys above
    link: "[https://verification-link.com](https://verification-link.com)"
},
🎨 Customization
To change the color scheme, open style.css and modify the CSS Variables at the top of the file:

CSS

:root {
    --accent: #4fd1c5;       /* Change this for the main highlight color */
    --bg-main: #121212;      /* Change this for the background */
    --text-main: #e0e0e0;    /* Change this for text color */
}
📄 License
This project is open source and available under the MIT License.


### Next Step
Would you like me to write a `LICENSE` file (MIT Standard) to go along with this, or help you configure the `<meta>` tags in the HTML for better SEO and social media sharing previews?