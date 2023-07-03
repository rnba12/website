<script lang="ts">
    export let name: string
    export let description: string
    export let image: string
    export let technologies: string[] 
    export let link: string | null
    export let github: string | null
</script>

<div class="project-card">
    <img src={image} alt={name}>
    <div class="content">
        <div class="name">{name}</div>
        <div class="description">{description}</div>
        <div class="technologies">
            {#each technologies as item}
                <span>{item}</span>
            {/each}
        </div>
        <div class="links">
            {#if link}     
                <a href={link} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"/></svg>Visit</a>
            {/if}
            {#if github}     
                <a href={github} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>GitHub</a>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    .project-card {
        background: inherit;
        position: relative;
        border-radius: 28px;
        height: 280px;
        box-sizing: border-box;
        
        &:focus-within, &:hover {
            img {
                opacity: 0;
                z-index: -1;
            }
            .content {
                opacity: 1;
            }
        }
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 28px;
        transition: all 0.2s;
    }

    .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        box-sizing: border-box;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        border: 2px solid rgb(200, 200, 200);
        opacity: 0;
    }
    .name {
        font-size: 1.3rem;
        font-weight: 600;
        text-transform: capitalize;
    }
    .technologies {
        display: flex;
        gap: 0.2rem;
        flex-wrap: wrap;
        align-items: center;
        span {
            padding: 0.1rem 0.3rem;
            border-radius: 25px;
            border: 1px solid var(--text-colour);
        }
    }
    .links {
        display: flex;
        flex-direction: column;
        gap: 5px;
       a {
        width: max-content;
        color: inherit;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        &:hover {
            color: var(--accent-colour);
        }
        transition: all 0.1s;
       }
    }
   
</style>
