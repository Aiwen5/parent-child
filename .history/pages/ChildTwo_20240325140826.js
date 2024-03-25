export default function ChildTwo({childParent}) {
    return(
        <>
            <button onClick={() => childParent(data)}>Click Child to Parent</button>
        </>
    )
}