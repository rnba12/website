import type { PageServerLoad } from './$types';
import projectList from '$lib/projects';

export const load = (async () => {
    return {
        projectList
    };
}) satisfies PageServerLoad;
