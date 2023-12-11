<script lang="ts">
    import data from '../../lib/about.json'
</script>

<svelte:head>
    <title>About | Russell Ampomah</title>
</svelte:head>

<section class="bio">
    <p style="margin-top: 0;">
        I graduated in Electronic Engineering from the <b>University of York</b>. After completing my degree, I decided I wanted to move into software engineering. I took a course at <b>La Fosse Academy</b> in London to improve my knowledge and work on some projects.
     </p><p>
        At the moment I'm working on frontend at Smart Communications. I like to work across the full development stack, and I'm always looking to learn new tools and technologies. 
        </p>
</section>


<section>
    <h4 style="margin-bottom: 1rem;">Skills</h4>

    <div class="skills">
        <div class="list">
            <div class="header">Languages</div>
            {#each data.languages as lang}
                <span>{lang}</span>
            {/each}
        </div>
        <div class="list">
            <div class="header">Framworks</div>
            {#each data.frameworks as lang}
                <span>{lang}</span>
            {/each}
        </div>
        <div class="list">
            <div class="header">Tools</div>
            {#each data.tools as lang}
                <span>{lang}</span>
            {/each}
        </div>
    </div>
</section>


<style lang="scss">
    .bio {
        font-size: 1.1rem;
    }
    .list {
        display: flex;
        flex-direction: column;
    }
    .skills {
        display: grid;
        grid-template-columns: repeat(3, max-content);
        gap: 1rem 5rem;
    }
    .header {
        font-weight: 700;
    }

    @media only screen and (max-width: 600px) {
        .skills {
            grid-template-columns: max-content max-content;
        }
    }

</style>
