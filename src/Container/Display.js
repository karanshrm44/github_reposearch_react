import React, { Component } from 'react';
import Card from '../Component/Card';


class Display extends Component {



render()
{

    


    let card=null;
    card=this.props.arr.items.map((item,index)=>{
        return <Card  key={index}
        name={item.name}
        score={item.score}
        updated_at={item.updated_at}
        created_at={item.created_at}
        language={item.language}
        avatar={item.owner.avatar_url}
        stars={item.stargazers_count}
        image={item.owner.avatar_url}
        />
    })

    return(
        <div>
        {card}
        </div>
          )
}
}
export default Display;