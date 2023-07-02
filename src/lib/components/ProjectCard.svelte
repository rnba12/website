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
            <a href={link}>Link</a>
            <a href={github}>GitHub</a>
        </div>
    </div>
</div>

<style lang="scss">
    .project-card {
        background: inherit;
        position: relative;
        border-radius: 15px;
        width: 450px;
        height: 280px;
        
        &:hover {
            .content {
                visibility: visible;
            }
        }
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 25px;
    }

    .content {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        visibility: hidden;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        box-sizing: border-box;
        padding: 1rem;
        color: black;
        background-color: rgba(255, 255, 255, 0.95);
    }
    .name {
        font-size: 1.4rem;
        font-weight: 600;
    }
    .description {
        font-size: 1.1rem;
    }
    .technologies {
        span {
            padding: 0.2rem;
            border-radius: 25px;
            background-color: rgb(154, 154, 154);
            font-weight: 500;
            color: white;
        }
    }
   
</style>
