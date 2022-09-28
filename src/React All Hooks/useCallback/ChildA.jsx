import React,{memo} from 'react'

function ChildA({someTask}) {
    console.log("Child Component");
    // const memo = useMemo
    return (
        <div>ChildA</div>
    )
}

export default memo(ChildA)