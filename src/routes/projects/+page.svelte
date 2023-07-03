<script lang="ts">
    import ProjectCard from '../../lib/components/ProjectCard.svelte';
    import projectList from '../../lib/projects';
</script>

<svelte:head>
    <title>Projects | Russell Ampomah</title>
</svelte:head>

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
        gap: 1.2rem;
    }
</style>
