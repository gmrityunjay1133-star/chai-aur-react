import React ,{useEffect , useState}from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {

        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
            
        })
            
    },[])
    return(
        <div className= 'bg-grey p-4 text-center text-3xl'> Github Followers:{data.followers}
        <img className= 'text-center' src = {data.avatar_url } alt = "Git Picture" width={300} />
        </div>

    )
    
}

export default Github;