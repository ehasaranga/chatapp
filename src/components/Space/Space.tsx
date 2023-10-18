
function Space(props: SpaceProps) {

    const { v, h } = props;

    return (
        <div className={`space v${v ? v : ''} h${h ? h : ''}`}></div>
    )
}

export default Space

interface SpaceProps {
    v?: number;
    h?: number;
}