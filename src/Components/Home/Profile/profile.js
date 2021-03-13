import React from "react";
import "./profile.css";
import DefaultHeader from "../Feed/header"
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		userInfo:[],
		userImg:{},
		userPhotos:[]
	};
  }

  componentDidMount(){
	this.getUserInfo()
	this.getPhotos()
  }

  getUserInfo=()=>{
	fetch(`https://api.unsplash.com/users/${this.props.match.params.name}/?client_id=QDqjGKE7ySyUlNJOflFwY_TJ23AofV0agaYvk8RcZQo`)
	.then(res=>res.json())
	.then(data=>{
		this.setState({
			userInfo:data,
			userImg:data.profile_image
		})
	})
  }

  getPhotos=()=>{
	  fetch(`https://api.unsplash.com/users/${this.props.match.params.name}/photos/?client_id=QDqjGKE7ySyUlNJOflFwY_TJ23AofV0agaYvk8RcZQo&per_page=48`)
	  .then(res=>res.json())
	  .then(data=>{
		  this.setState({
			  userPhotos:data
		  })
	  })
  }


  header = () => {
	
    return (
		
      <header style={{marginTop:"54px"}}>
        <div class="container">
          <div class="profile">
            <div class="profile-image">
              <img
                src={this.state.userImg.large}
                alt=""
              />
            </div>

            <div class="profile-user-settings">
              <h1 class="profile-user-name">{this.state.userInfo.username}</h1>

              <button class="btn profile-edit-btn">Edit Profile</button>

              <button
                class="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i class="fa fa-cog" aria-hidden="true" style={{color:"black",pointerEvents:"none"}}></i>
              </button>
            </div>

            <div class="profile-stats">
              <ul>
                <li>
					<span class="profile-stat-count">{this.state.userInfo.total_photos}</span> posts
                </li>
                <li>
					<span class="profile-stat-count">{this.state.userInfo.total_likes}</span> followers
                </li>
                <li>
					<span class="profile-stat-count">{this.state.userInfo.total_collections}</span> following
                </li>
              </ul>
            </div>

            <div class="profile-bio">
              <p>
	<span class="profile-real-name">{this.state.userInfo.name}</span> {this.state.userInfo.bio}
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  };
  render() {
    return (
      <div class="profile-container" >
		  {DefaultHeader()}
        {this.header()}
        <main>
          <div className="container">
		  <div class="gallery">
            {this.state.userPhotos.map((n,index)=>{
				var img = String(n.urls.regular)
				var qm = img.indexOf('?')+1
				var url = img.slice(0,qm)+"w=500&h=500&fit=crop"
				return ( 
				<div class="gallery-item" tabindex="0" key={index}>
				  <img
					src={url}
					class="gallery-image"
					alt=""
				  />
  
				  <div class="gallery-item-info">
					<ul>
					  <li class="gallery-item-likes">
						<span class="visually-hidden">Likes:</span>
						<i class="fa fa-heart " aria-hidden="true"></i> {n.likes}
					  </li>
					  <li class="gallery-item-comments">
						<span class="visually-hidden">Comments:</span>
						<i class="fa fa-comment " aria-hidden="true"></i> {Math.floor(Math.random() * 50)}
					  </li>
					</ul>
				  </div>
				</div>
			 )
			})}
 </div>
            
          </div>
        </main>
      </div>
    );
  }
}
