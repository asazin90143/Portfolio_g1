/* ===========================
   PROJECTS SECTION
   =========================== */
const projectsData = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for tracking sales, inventory, and user metrics using real-time data visualization.",
        tech: ["React", "Chart.js", "Node.js"],
        link: "https://google.com" // Replace with your link
    },
    {
        title: "Task Management API",
        description: "A RESTful API built for a task manager application handling authentication and CRUD operations.",
        tech: ["Express", "MongoDB", "JWT"],
        link: "#"
    },
    {
        title: "Corporate Landing Page",
        description: "A high-performance landing page designed for a fintech startup, focused on SEO and conversion.",
        tech: ["HTML5", "SASS", "Vanilla JS"],
        link: "#"
    }
];

const projectContainer = document.getElementById('project-container');

function renderProjects() {
    projectContainer.innerHTML = '';
    projectsData.forEach(project => {
        // Create <a> tag for the whole card
        const card = document.createElement('a');
        card.href = project.link;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.classList.add('project-card');

        const tagsHtml = project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
            </div>
            <div class="tech-stack">${tagsHtml}</div>
        `;
        projectContainer.appendChild(card);
    });
}

/* ===========================
   CERTIFICATES SECTION
   =========================== */
const certsData = [
    {
        title: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        date: "2023",
        category: "software",
        link: "#"
    },
    {
        title: "Google Data Analytics",
        issuer: "Google",
        date: "2022",
        category: "data",
        link: "#"
    },
    {
        title: "CompTIA Security+",
        issuer: "CompTIA",
        date: "2023",
        category: "cyber",
        link: "#"
    },
    {
        title: "TensorFlow Developer",
        issuer: "DeepLearning.AI",
        date: "2024",
        category: "ai",
        link: "#"
    }
];

const certGrid = document.getElementById('cert-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderCerts(filter = 'all') {
    certGrid.innerHTML = '';
    const filteredData = filter === 'all' ? certsData : certsData.filter(c => c.category === filter);

    filteredData.forEach(cert => {
        const card = document.createElement('div');
        card.classList.add('cert-card');

        const categoryMap = {
            'software': 'Software Engineering',
            'data': 'Data Science',
            'cyber': 'Cybersecurity',
            'ai': 'AI & Machine Learning'
        };

        card.innerHTML = `
            <span class="cert-category">${categoryMap[cert.category]}</span>
            <h3 class="project-title">${cert.title}</h3>
            <p class="cert-issuer">Issued by: ${cert.issuer} • ${cert.date}</p>
            <a href="${cert.link}" class="project-link" style="margin-top:15px; display:inline-block; border-bottom:1px solid var(--accent);">View Credential</a>
        `;
        certGrid.appendChild(card);
    });
}

// Filter Event Listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCerts(btn.getAttribute('data-filter'));
    });
});

/* ===========================
   INITIALIZATION
   =========================== */
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderCerts();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});