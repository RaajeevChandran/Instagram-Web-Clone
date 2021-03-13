import React from 'react'
import "../home.css"
import "./feedcards.css"
import {Link} from "react-router-dom"
export default class Feedcards extends React.Component {
  constructor(props){
    super(props)
    this.state={
      likes:this.props.likes,
      likeAnim:false,
      liked:false,
      names:[]
    }
  }

  
  render(){
 
  const feedCardHeader = () =>{
    var profURL = this.props.profRoute
        return (
            <div className="flr dummy-card"   style={{margin:"0px",height:"8%",backgroundColor:"#fff"}}>
            <div className="grpli dummy-card-cir-con" style={{width:"10%",pointerEvents:'none'}}>
            <div className="cir">
                    <img
                      src={this.props.profimage}
                      alt=""
                      style={{
                        objectFit: "cover",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
            </div>
            <div className="dummy-card-det" style={{width:"83%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                  <h4
                    style={{
                      fontSize: "14.5px",
                      
                      margin: "4px",
                      
                      textTransform: "lowercase",
                    }}
                  >
                  <Link to={profURL} style={{color:"#262626"}}>{this.props.username}</Link>
                  </h4>
                  <h4
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#8e8e8e",
                      marginLeft: "4px",
                    
                    }}
                  >
                    {this.props.location}
                  </h4>
                </div>
                <div className="grpli follow" style={{width:"7%"}}>
                <svg aria-label="More options" fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clipRule="evenodd" cx="8" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="24" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="40" cy="24" fillRule="evenodd" r="4.5"></circle></svg>
                </div>
          </div>
        )
    }

    const FeedImage = () =>{
      
        return (<div className="feed-image" onDoubleClick={()=>this.setState({liked:true,likeAnim:true})} style={{position:"relative"}}>
          {this.state.likeAnim || this.state.liked ?<div className="instagram-heart"></div>:''}
                <img src={this.props.imageURL}  alt=""/>
        </div>)
    }

   const FeedIcons = () => {
       const icons = ["M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z","M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z","M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"];
        
       const like = () => {
         
         return <svg
         
         className="liked"
         fill="#ed4956"
         height={24}
         viewBox="0 0 48 48"
         width={24}
         
       >
         <path
           clipRule="evenodd"
           d="M35.3 35.6c-9.2 8.2-9.8 8.9-11.3 8.9s-2.1-.7-11.3-8.9C6.5 30.1.5 25.6.5 17.8.5 9.9 6.4 3.5 13.7 3.5 20.8 3.5 24 8.8 24 8.8s3.2-5.3 10.3-5.3c7.3 0 13.2 6.4 13.2 14.3 0 7.8-6.1 12.3-12.2 17.8z"
           fillRule="evenodd"
         />
       </svg>
       }

       const unlike =()=>{
          return (<svg
            
            className="liked"
            fill="#262626"
            height={24}
            viewBox="0 0 48 48"
            width={24}
            
          >
            <path
              clipRule="evenodd"
              d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
              fillRule="evenodd"
            />
          </svg>)
       }


       const handleLike=()=>{
         this.setState({liked:true,likeAnim:true})
         
       }

       const handleUnlike=()=>{
          this.setState({liked:false})
      }

       const onClick = this.state.liked ? handleUnlike: handleLike
       return (
        
        <div className="flr feedicons" style={{}}>
            <div style={{display:"flex",flexBasis:"20%",alignItems:"center",justifyContent:"flex-start"}}>
                {icons.map((n,index)=>{
                    
                    if(n===icons[0])
                    return(<div key={index} onClick={onClick} className="grpli" style={{width:"30px",height:"35px",margin:"4px"}}>
                      {this.state.liked ? like() : unlike() }
                    </div>)
                    else
                  return(<div key={index}  className="grpli" style={{width:"30px",height:"35px",margin:"4px"}}>
                <svg aria-label="Like"  fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d={n}></path></svg>
                    </div>)
                    }
                    
                    )}
                
            </div>
            <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",flexBasis:"80%"}}><svg aria-label="Save" fill="#262626" height="24" viewBox="0 0 48 48" width="24" style={{marginRight:"10px"}}><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg></div>
        </div>
       )
   }


   const Likes =() =>{
     
       return (<div className="flja likes" >
            <h1 style={{color:"#262626",fontSize:"14px",marginLeft:"10px"}}>{this.props.likes +" likes"}</h1>
       </div>)
   }

   const captions= () =>{
       return (<div className="grpli caption">
           <div className="flc" style={{width:"97%",height:"90%"}}>
               <div className="flr" style={{width:"100%",height:"65%"}}>
                   
   <div><h1 style={{textTransform:"capitalize",fontWeight:"400"}}><span style={{fontWeight:"500",fontStyle:"bold",textTransform:"lowercase"}}>{this.props.username} </span>{this.props.caption}</h1></div>
               </div>
               <div className="flja" style={{width:"100%",height:"35%",}}>
                   <h6 style={{fontSize:"12px",color:"#8e8e8e"}}>{"3" + " minutes ago"}</h6>
               </div>
           </div>
       </div>)
   }


   const comments =()=>{
       return (<div className="flr comments">
            <input type="text" className="comment-input" placeholder="Add a comment..." style={{backgroundColor:"#fff",width:"93%",margin:"5px",border:"none"}}/>
            <button className="post-button">Post</button>
       </div>)
   }
    return (
        <div className="flc feed-cards">
          {feedCardHeader()} {/*8%*/}
           {FeedImage()}  {/*73%*/}
            {FeedIcons()} {/*5%*/}
            {Likes()} {/*2.5%*/}  {/*88.5*/}
            {captions()} {/*6.5%*/}
            {comments()}
        </div>
    )
  }
}
