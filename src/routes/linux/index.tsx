import { component$ } from '@builder.io/qwik';
import { type DocumentHead, loader$, action$, zod$, z, Form } from '@builder.io/qwik-city';

interface Distro {
  name: string;
  release: string;
  base: string;
  cpus: string[];
}


export const distros: Distro[] = [];


export default component$(()=>{


    return(
        <div>
            <h1>Linux Distros worth trying</h1>

        </div>
    )

})
