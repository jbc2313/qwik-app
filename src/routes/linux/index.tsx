import { component$ } from '@builder.io/qwik';
import { type DocumentHead, loader$, action$, zod$, z, Form } from '@builder.io/qwik-city';

interface Distro {
  name: string;
  release: string;
  base: string;
 // cpus: string[];
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
  //  cpus: z.string().array(),
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
                      {/*  <lii>{item.cpus}</lii> */}
                    </p>
                ))}
            </ul>  
          <Form action={action} spaReset>
            <input type="text" name="name" placeholder='name' required />
            <input type="text" name="release" placeholder='release' required />
            <input type="text" name="base" placeholder='base' required />
           {/* <input type="text" name="cpus" placeholder='cpus' required /> */}
            <button type="submit">Add item</button>
          </Form>
        </div>
    )

})
