

const ChildComponent = ({sendMsg}) => {
    return (
        <>
            <button
                onClick={() => sendMsg("Hello Parent, it's me!")}
            >
                Send a MSG to Parent Component
            </button>
        </>
    )
}

export default ChildComponent