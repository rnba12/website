<script lang="ts">
    import '../main.scss'
    import { page } from '$app/stores';
    import ThemeButton from '$lib/components/ThemeButton.svelte';

    $: path = $page.route.id

    let showMenu: boolean = false

</script>

<svelte:head>
    <script>
        let darkTheme = JSON.parse(localStorage.getItem("darkTheme")) || false
        darkTheme 
            ? document.documentElement.classList.add("dark-theme")
            : document.documentElement.classList.remove("dark-theme")
                
    </script>
</svelte:head>

<div class="page">
    <div class="navigation">
        <button class="menu-btn" on:click={() => showMenu = !showMenu}>
            {#if !showMenu}
            <svg xmlns="http://www.w3.org/2000/svg" width="2048" height="2048" viewBox="0 0 2048 2048"><path fill="currentColor" d="M0 1408v-128h1920v128H0zm0-896h1920v128H0V512z"/></svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" width="2048" height="2048" viewBox="0 0 2048 2048"><path fill="currentColor" d="m1115 1024l690 691l-90 90l-691-690l-691 690l-90-90l690-691l-690-691l90-90l691 690l691-690l90 90l-690 691z"/></svg>
            {/if}
        </button>
        <div class="sidebar" class:menu={showMenu}>
            <nav>
                <a href="/" class:active={path === "/"}  on:click={() => showMenu = false}>Home</a>
                <a href="/about" class:active={path === "/about"}  on:click={() => showMenu = false}>About</a>
                <a href="/projects" class:active={path === "/projects"}  on:click={() => showMenu = false}>Projects</a>
            </nav>
            <div class="nav-bottom">
                <div class="links">
                    <a href="mailto:rnba12@yahoo.co.uk">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z"/></svg>
                    </a>
                    <a href="https://github.com/rnba12" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/russell-ampomah-655667217/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor"/><path fill="currentColor" d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/></svg>
                    </a>
                    <ThemeButton/>
                </div>
            </div>
    </div>
    </div>
    
    <div class="content"><slot/></div>
</div>

<style lang="scss">
    .page {
        display: grid;
        grid-template-columns: 20% auto;
        height: 100vh;
    }
    .navigation {
        position: relative;
    }
    .menu-btn {
        padding-left: 2rem;
        padding-top: 2px;
        display: none;
        background: none;
        border: none;
        color: var(--text-colour);
        height: 100%;
        svg {
            width: 30px;
            height: 30px;
        }
    }
    .sidebar {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 2rem;
        min-height: 100%;
        nav {
            display: flex;
            flex-direction: column;
            align-items: start;
        }
        a {
            text-decoration: none;
            color: inherit;
            font-size: 1.5rem;
            font-weight: 600;
            &.active, &:hover {
                color: var(--accent-colour);
            }
            transition: all 0.1s;
        }
    }

    .nav-bottom {
        margin-top: auto;
    }

    .links {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        a {
            width: min-content;
        }
        svg {
            width: 30px;
            height: 30px;
        }
    }

    .content {
        min-height: 100%;
        box-sizing: border-box;
        overflow-y: auto;
        padding: 2.5rem 0;
        padding-right: 2rem;
    }

    @media only screen and (max-width: 600px) {
        .menu {
            display: block !important;
        }
        .menu-btn {
            display: block;
        }
        .page {
            display: grid;
            grid-template-columns: none;
            grid-template-rows: var(--navbar-height) auto;
        }
        .sidebar {
            display: none;
            position: absolute;
            top: calc(var(--navbar-height) - 1px);
            left: 0;
            width: 100%;
            min-height: calc(100vh - var(--navbar-height));
            z-index: 9;
            background-color: var(--background-colour);
        }
        .nav-bottom {
            margin-top: 1.5rem;
        }
        .links {
            flex-direction: row;
            justify-content: start;
            gap: 1rem;
        }
        .content {
            padding-left: 2rem;
        }
    }
</style>
