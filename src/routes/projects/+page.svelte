<script lang="ts">
    import ProjectCard from '../../lib/components/ProjectCard.svelte';
    import projectList from '../../lib/projects';
    ProjectCard
</script>

<h1>Projects</h1>

<div class="projects">
    {#each projectList as project}
        <ProjectCard {...project}/>
    {/each}
</div>

<style lang="scss">
    .projects {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        gap: 1.2rem 0;
    }
</style>
