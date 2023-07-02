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
        link: "https://profile-maker.vercel.app/",
        github: "https://github.com/profile-maker",
        image: "src/lib/assets/profilemaker.png",
        technologies: ["Svelte", "Prisma", "PostgreSQL", "Sass", "Supabase"]
    },
    {
        name: "Synonymz",
        description: "A word game",
        link: "https://synonymz.netlify.app/",
        github: null,
        image: "src/lib/assets/synonymz.png",
        technologies: ["React"]
    },
    {
        name: "Early Bird",
        description: "Multiplayer quiz game",
        link: "https://voluble-zabaione-2be1b6.netlify.app/",
        github: null,
        image: "src/lib/assets/earlybird.png",
        technologies: ["React", "MongoDB", "Tailwind CSS"]
    },
    {
        name: "House Your Plant",
        description: "House plant health and tracking app",
        link: "https://main--fanciful-tarsier-29e66b.netlify.app/",
        github: null,
        image: "src/lib/assets/houseyourplant.png",
        technologies: ["Python", "Flask", "React", "PyTorch", "MongoDB"]
    },
    {
        name: "Habitual",
        description: "Habit tracking web application",
        link: "https://relaxed-speculoos-a7d774.netlify.app/client/login.html",
        github: null,
        image: "src/lib/assets/habitual.png",
        technologies: ["HTML", "CSS", "JavaScript", "PostgreSQL"]
    },
    {
        name: "See It Say It",
        description: "London based community journalling site",
        link: "https://coruscating-dasik-fbf1c6.netlify.app/html/home.html",
        github: "https://github.com/adamminchella/see-it-say-it",
        image: "/src/lib/assets/seeitsayit.png",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Github Tracker",
        description: "A github repository tracker",
        link: null,
        github: "https://github.com/shedp/GithubTrackerReact",
        image: "src/lib/assets/githubtracker.png",
        technologies: []
    },
    {
        name: "Post It",
        description: "Anonymous note taking app. Clone of telegra.ph",
        link: null,
        github: "https://github.com/rnba12/post_it",
        image: "src/lib/assets/postit.png",
        technologies: ["HTML", "CSS", "JavaScript", "MongoDB", "Jest"]
    },
]

export default projectList
