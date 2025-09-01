async function loadProjects() {
    const projects = await (await fetch('./projects.json')).json()
    
    const list = document.getElementById('projects-list')
    const projectTemplate = document.getElementById('project-template');

    projects.forEach(project => {
        const card = projectTemplate.content.cloneNode(true)
        card.querySelector('.name').textContent = project.name
        card.querySelector('.name').href = project.link
        card.querySelector('.description').textContent = project.description
        list.appendChild(card) 
    })
}

loadProjects()
