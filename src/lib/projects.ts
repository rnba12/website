const projectList : {
    name: string,
    description: string,
    link: string | null,
    github: string | null,
    image: string
    technologies: string[]
}[] = [
    {
        name: "Profile Maker",
        description: "A page for displaying coding projects",
        link: "https://profile-maker.vercel.app",
        github: "https://github.com/profile-maker",
        image: "src/lib/assets/profilemaker.png",
        technologies: ["Svelte", "Prisma", "PostgreSQL", "Sass", "Supabase"]
    },
    {
        name: "Synonymz",
        description: "A simple game where you guess synonyms",
        link: "https://synonymz.netlify.app/",
        github: "https://github.com/rnba12/synonymz",
        image: "src/lib/assets/synonymz.png",
        technologies: ["React", "JavaScript"]
    },
    {
        name: "Early Bird",
        description: "A Multiplayer quiz game",
        link: "https://voluble-zabaione-2be1b6.netlify.app/",
        github: "https://github.com/mizupp/thewisequacks",
        image: "src/lib/assets/earlybird.png",
        technologies: ["React", "MongoDB", "TailwindCSS", "Socket.io"]
    },
    {
        name: "House Your Plant",
        description: "House plant health and tracking app",
        link: "https://main--fanciful-tarsier-29e66b.netlify.app/",
        github: "https://github.com/mizupp/plantastic-four",
        image: "src/lib/assets/houseyourplant.png",
        technologies: ["Python", "Flask", "React", "PyTorch", "MongoDB"]
    },
    {
        name: "Habitual",
        description: "Habit tracking web application",
        link: "https://relaxed-speculoos-a7d774.netlify.app/client/login.html",
        github: "https://github.com/JLP2000/habitual-client",
        image: "src/lib/assets/habitual.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "PostgreSQL"]
    },
    {
        name: "See It Say It",
        description: "London based community journalling site",
        link: "https://coruscating-dasik-fbf1c6.netlify.app/html/home.html",
        github: "https://github.com/adamminchella/see-it-say-it",
        image: "/src/lib/assets/seeitsayit.png",
        technologies: ["HTML5", "CSS3", "JavaScript"]
    },
    {
        name: "Github Tracker",
        description: "A github repository tracker",
        link: null,
        github: "https://github.com/shedp/GithubTrackerReact",
        image: "src/lib/assets/githubtracker.png",
        technologies: ["React", "JavaScript", "Redux"]
    },
    {
        name: "Post_It",
        description: "Anonymous note taking app. Clone of telegra.ph",
        link: null,
        github: "https://github.com/rnba12/post_it",
        image: "src/lib/assets/postit.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "MongoDB", "Jest"]
    },
]

export default projectList
