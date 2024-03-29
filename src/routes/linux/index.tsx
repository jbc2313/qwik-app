import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead, loader$, action$, zod$, z, Form } from '@builder.io/qwik-city';
import styles from './linux.css?inline'
interface Distro {
  name: string;
  release: string;
  base: string;
 // cpus: string[];
}


export const distros: Distro[] = [
    {
        name: "Fedora",
        release: "36",
        base: "RHEL",
    }
];


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
    useStylesScoped$(styles);
    const distros = useDistroLoader();
    const action = useAddToDistrosAction();

    return(
        <div>
            <h1>Linux Distros worth trying</h1>
            <div class='distroP'>
                {distros.value.map((item)=>(
                    <> 
                    <h4>{item.name}</h4> 
                    <ul >
                        <li>{item.release}</li>
                        <li>{item.base}</li>
                      {/*  <lii>{item.cpus}</lii> */}
                    </ul>
                    </>
                ))}
            </div>  
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
