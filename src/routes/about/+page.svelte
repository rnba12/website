<script lang="ts">
    import data from '../../lib/about.json'
</script>

<section>
    <p>
        I graduated last year from the University of York in Electronic Engineering. After completing my degree, I decided I wanted to move into software engineering. I took a course at La Fosse Academy in London to improve my knowledge and work on some <a href="/projects">projects</a>.
     </p><p>
        I can work across the development stack, and I'm always looking to learn new tools and technologies. At the moment i'm looking to gain some commercial experience.
        </p>
    <p>
        I've spent a lot of time recently making web apps, to learn and test out new tools. If not, im probably watching youtube or being let down by Arsenal.
    </p>
</section>

<h3>Skills</h3>

<section class="skills">
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
</section>

<a class="cv-link" href="/cv.pdf">View my CV</a>

<style lang="scss">
    .list {
        display: flex;
        flex-direction: column;
    }
    .skills {
        display: grid;
        grid-template-columns: repeat(3, max-content);
        gap: 0 5rem;
    }
    .header {
        font-weight: 700;
    }
    .cv-link {
        display: block;
        text-decoration: none;
        margin: 1rem 0;
    }
</style>
