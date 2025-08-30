async function loadProjects() {
    const projects = await (await fetch('./projects.json')).json()
    
    const list = document.getElementById('projects-list')
    const projectTemplate = document.getElementById('project-template');

    projects.forEach(project => {
        const card = projectTemplate.content.cloneNode(true)
        card.querySelector('.name').textContent = project.name
        card.querySelector('.description').textContent = project.description
        card.querySelector('.github a').href = project.github
        if (project.link) {
            card.querySelector('.link a').href = project.link
        } else {
            card.querySelector('.link').remove()
        }
        list.appendChild(card) 
    })
}

loadProjects()
