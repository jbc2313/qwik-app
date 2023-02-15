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

    const distros = useDistroLoader();
    const action = useAddToDistrosAction();

    return(
        <div>
            <h1>Linux Distros worth trying</h1>
            <ul>
                {distros.value.map((item)=>(
                    <p>
                        <li>{item.name}</li>
                        <li>{item.release}</li>
                        <li>{item.base}</li>
                    </p>
                ))}
            </ul>
        </div>
    )

})
