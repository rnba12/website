<script lang="ts">
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    export let data

    const projects = data.projectList

</script>

<svelte:head>
    <title>Projects | Russell Ampomah</title>
</svelte:head>

{#if projects}
    <div class="projects">
    {#each projects as project}
        <ProjectCard {...project}/>
    {/each}
    </div>
{/if}



<style lang="scss">
    .projects {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;
    }

    @media only screen and (max-width: 768px) {
        .projects {
            grid-template-columns: 1fr;
        }
    }
    @media only screen and (min-width: 1300px) {
        .projects {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>
