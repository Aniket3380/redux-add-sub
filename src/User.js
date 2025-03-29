const User=()=>{
    const Student=[{name:"aniket" ,city:"pune"},
        {name:"ratan",city:"mumbai"}
    ]
    return(
        <div>
            <ol>
         { 
            Student.map((todo)=>(
                <>
                <li>{todo.name}</li>
                <li>{todo.city}</li>
                </>
            ))
           
         }
          </ol>

        </div>
    )
}
export default User;