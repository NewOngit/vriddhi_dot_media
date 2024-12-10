const Options=(props)=>{
console.log(props);
const options=
    [
        {
            text:'Shifting The Narratives',
            handler:props.actionProvider.handleFirst,
            id:1
        },
        {
            text:'Building An Online Presence',
            handler:props.actionProvider.handleSecond,
            id:2
        },
        {
            text:'Building A Personal Brand',
            handler:props.actionProvider.handleThird,
            id:3
        },
        {
            text:'Building Your Content Funnel',
            handler:props.actionProvider.handleFourth,
            id:4
        },
    ];

const floatingButtons=options.map((option)=>{

    return (<button key={option.key} onClick={option.handler} className="float-button" style={{border:"1px solid black",margin:'1px',fontSize:'.7rem'}} >{option.text}</button>)
})

    return(
        <div>
            {floatingButtons}
        </div>
    )
}
export default Options;