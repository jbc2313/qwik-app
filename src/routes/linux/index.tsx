import { component$ } from '@builder.io/qwik';
import { type DocumentHead, loader$, action$, zod$, z, Form } from '@builder.io/qwik-city';

interface Distro {
  name: string;
  release: string;
  base: string;
  cpus: string[];
}


export const distros: Distro[] = [];


export const useDistroLoader = loader$(() => {
  return distros;
});



export const useAddToDistrosAction = action$(
  (item) => {
    distros.push(item);
    return {
      success: true,
    };
  },
  zod$({
    name: z.string(),
    release: z.string(),
    base: z.string(),
    cpus: z.array(z.string()),
  })
);




export default component$(()=>{


    return(
        <div>
            <h1>Linux Distros worth trying</h1>

        </div>
    )

})
