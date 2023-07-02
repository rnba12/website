<script lang="ts">
    import '../main.scss'
    import { page } from '$app/stores';

    $: path = $page.route.id

</script>

<div class="page">
    <div class="top-nav">
        <nav>
            <a href="/" class:active={path === "/"}>Home</a>
            <a href="/about" class:active={path === "/about"}>About</a>
            <a href="/projects" class:active={path === "/projects"}>Projects</a>
            <button>*</button>
        </nav>
        <div>
            <a href="mailto:rnba12@yahoo.co.uk">Email</a>
            <a href="https://github.com/rnba12">GitHub</a>
            <a href="https://www.linkedin.com/in/russell-ampomah-655667217/">LinkedIn</a>
        </div>
    </div>
    
    <slot/>
</div>

<style lang="scss">
    .page {
        padding: 0 4rem;
    }
    .top-nav {
        height: var(--navbar-height);

        nav {
            height: 100%;
            float: right;
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
        a {
            text-decoration: none;
            color: black;
            font-size: 1.2rem;
            font-weight: 600;
            &.active, &:hover {
                color: rgb(0, 115, 255);
            }

        }
    }
</style>
