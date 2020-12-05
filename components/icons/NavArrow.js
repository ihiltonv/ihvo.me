export default function DownArrow(props) {
    return (
        <>
        <div className="inset-x-0" onClick={() => props.scroll(props.nextElement)}>
            <svg className="h-16 w-16 ml-auto mr-auto mb-3 animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {props.down ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />}
            
            </svg>
        </div>
        </>
    )
}