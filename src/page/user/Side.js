

export const Side = (props) => {
    const state = props.state
    const setState = props.setState
    return <>
    <h1>
    {state}
    <div onClick={()=> setState('3')}>
        456
    </div>
    </h1>
    </>
}
