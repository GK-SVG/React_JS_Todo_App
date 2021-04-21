import React, { useState } from "react"

export default function AddTodo(props) {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    function submit(e){
        e.preventDefault()
        if(!title || !desc){
            alert("Title and Desc Required")
        }else{
        props.addTodo(title,desc)
        }
    }
    return (
         
            <form className="my-4" onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" onChange={(e)=>{settitle(e.target.value)}} aria-describedby="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" id="desc" onChange={(e)=>{setdesc(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
       
    )
}
