<script lang="ts">
    import data from '../../lib/about.json'
</script>

<svelte:head>
    <title>About | Russell Ampomah</title>
</svelte:head>

<section class="bio">
    <p style="margin-top: 0;">
        I recently graduated from the <b>University of York</b>. After completing my degree, I decided I wanted to move into software engineering. I took a course at <b>La Fosse Academy</b> in London to improve my knowledge and work on some projects.
     </p><p>
        I like to work across the full development stack, and I'm always looking to learn new tools and technologies. At the moment i'm looking to gain some commercial experience.
        </p>
    <p>
        I've spent a lot of time recently making web apps, to learn and test out new tools. If not, im probably at the gym, watching youtube or being let down by Arsenal.
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
    <a class="cv-link" href="/cv.pdf">
        <span>View my CV</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="19.2" height="19.2" viewBox="0 0 256 256"><g transform="rotate(90 128 128)"><path fill="currentColor" d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17Z"/></g></svg>
    </a>
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
    .cv-link {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-size: 1.2rem;
        margin-top: 2rem;
        color: inherit;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.1s;
        &:hover {
            color: var(--accent-colour);
        }
    }

    @media only screen and (max-width: 600px) {
        .skills {
            grid-template-columns: max-content max-content;
        }
    }

</style>
