import React, { Component} from 'react';
import FeedCards from "./feedcards"
import firebase from "../../../firebase"
class FeedCardsData extends Component {
    constructor(){
        super();
        this.state={
            data:[],
        }
    }

    


    componentDidMount(){
        fetch("https://api.unsplash.com/photos/?client_id=QDqjGKE7ySyUlNJOflFwY_TJ23AofV0agaYvk8RcZQo&per_page=25")
        .then((res)=>res.json())
        .then((data)=>{
            
            this.setState({
                data:data
            })
            this.addtoDB()
            
        })
        
    }

    addtoDB=()=>{
        const db=firebase.firestore()
        this.state.data.map((data)=>{
            db.collection('posts').add({
               img:data.urls.regular,
               caption:data.description||data.alt_description,
                likes:data.likes
            })
        })
        console.log("added")
    } 
    
    
      
      

    render() {
        
        
        
       return (this.state.data.map((c,i)=>{
           return(<FeedCards key={i} profRoute={`profile/${c.user.username}`} profimage={c.user.profile_image.large} location={c.user.location} username={c.user.username} imageURL={c.urls.regular} likes={c.likes} caption={c.description || c.alt_description}/>)
       }))
    }
}

export default FeedCardsData;
