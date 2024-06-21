import { useRef } from "react"


export const useRender = (name: string = '') => {

    const render = useRef(0);

    console.log(`renders ${name}: `, render.current++);

    return render.current;

}