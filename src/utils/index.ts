
export const scrollToBottom = (ref:any) => {

    if (ref.current === null) return;

    let clientHeight:number = ref.current?.clientHeight || 0;
    let scrollHeight = ref.current?.scrollHeight || 0;

    ref.current.scrollTop = (scrollHeight - clientHeight)
    
}