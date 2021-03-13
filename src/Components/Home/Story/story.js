import React, { Component } from 'react'


import Zuck from "zuck.js"
import "./snapgram.css"
import "./zuck.css"
import "../home.css";

// import $ from "jquery";
export default class Stories extends Component {
  constructor(props) {
    super();
    this.storiesElement = null;
    this.storiesApi = null;
    this.state = {
      stories: [
        Zuck.buildTimelineItem(
          'cassie',
          'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          'cassie',
          '',
          1575221470504,
          [
            [
              'ramon-1',
              'photo',
              3,
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              '',
              false,
              false,
              1575221470504,
            ],
            [
              'ramon-2',
              'video',
              0,
              'https://static.videezy.com/system/resources/previews/000/033/760/original/Snail18.mp4',
              'https://static.videezy.com/system/resources/previews/000/033/760/original/Snail18.mp4',
              '',
              false,
              false,
              1575221470504,
            ],
            [
              'ramon-3',
              'photo',
              3,
              'https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
              'https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
              '',
              '',
              false,
              1575221470504,
            ],
          ],
        ),
        Zuck.buildTimelineItem(
          'michael',
          'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          'michael',
          '',
          1575221470504,
          [
            [
              'ramon-1',
              'photo',
              3,
              'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              '',
              false,
              false,
              1575221470504,
            ],
            [
              'ramon-1',
              'photo',
              3,
              'https://images.unsplash.com/photo-1544205497-14a3194fe440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              'https://images.unsplash.com/photo-1544205497-14a3194fe440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              '',
              false,
              false,
              1575221470504
            ]
            
          ],
        ),
        Zuck.buildTimelineItem(
          'edward',
          'https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          'edward',
          'https://ramon.codes',
          1575221470504,
          [
            [
              'ramon-1',
              'photo',
              3,
              'https://images.unsplash.com/photo-1481689481678-374244adae6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              'https://images.unsplash.com/photo-1481689481678-374244adae6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              '',
              false,
              false,
              1575221470504,
            ],
            [
              'ramon-1',
              'photo',
              3,
              'https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
              'https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
              '',
              false,
              false,
              1575221470504,

            ],
            [
              'ramon-1',
              'photo',
              5,
              'https://images.unsplash.com/photo-1498979237786-9c35706bd45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
              'https://images.unsplash.com/photo-1498979237786-9c35706bd45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
              '',
              false,
              false,
              1575221470504,

            ]
          ],
        ),
        Zuck.buildTimelineItem(
          'austin',
          'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/02/shutterstock_564516889.jpg?resize=1024%2C683&ssl=1',
          'austin',
          '',
          1575221470504,
          [
            
            [
              'ramon-2',
              'video',
              0,
              'https://static.videezy.com/system/resources/previews/000/000/774/original/father%20teaching%20daughter%20to%20feed%20the%20animals.mp4',
              'https://static.videezy.com/system/resources/previews/000/000/774/original/father%20teaching%20daughter%20to%20feed%20the%20animals.mp4',
              '',
              false,
              false,
              1575221470504,
            ],
            
          ],
        ),
        Zuck.buildTimelineItem(
          'charlotte',
          'https://image.freepik.com/free-photo/portrait-happy-woman-smiling_1303-9953.jpg',
          'charlotte',
          '',
          1575221470504,
          [
            
            [
              'ramon-2',
              'photo',
              5,
              'https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              'https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              '',
              false,
              false,
              1575221470504,
            ],
            [
              'ramon-2',
              'photo',
              5,
              'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              '',
              false,
              false,
              1575221470504,
            ],
            
          ],
        ),
        Zuck.buildTimelineItem(
          'julia',
          'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          'julia',
          '',
          1575221470504,
          [
            
            [
              'ramon-2',
              'photo',
              5,
              'https://images.pexels.com/photos/3662773/pexels-photo-3662773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              'https://images.pexels.com/photos/3662773/pexels-photo-3662773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              '',
              false,
              false,
              1575221470504,
            ],
            [
              'ramon-2',
              'photo',
              5,
              'https://images.pexels.com/photos/3341187/pexels-photo-3341187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              'https://images.pexels.com/photos/3341187/pexels-photo-3341187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              '',
              false,
              false,
              1575221470504,
            ],
            [
              'ramon-2',
              'photo',
              5,
              'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              '',
              false,
              false,
              1575221470504,
            ],
            
          ],
        ),
        Zuck.buildTimelineItem(
          'lucas',
          'https://modelsonly.in/wp-content/uploads/2018/02/6-480x580_t.jpeg',
          'lucas',
          '',
          1575221470504,
          [
            
            [
              'ramon-2',
              'photo',
              5,
              'https://images.pexels.com/photos/1974927/pexels-photo-1974927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              'https://images.pexels.com/photos/1974927/pexels-photo-1974927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              '',
              false,
              false,
              1575221470504,
            ],
            [
              'ramon-2',
              'photo',
              5,
              'https://images.pexels.com/photos/1056497/pexels-photo-1056497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              'https://images.pexels.com/photos/1056497/pexels-photo-1056497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              '',
              false,
              false,
              1575221470504,
            ],
            [
              'ramon-2',
              'photo',
              5,
              'https://images.pexels.com/photos/1528013/pexels-photo-1528013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              'https://images.pexels.com/photos/1528013/pexels-photo-1528013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              '',
              false,
              false,
              1575221470504,
            ],
            
          ],
        ),
        
      ],
    };
  }

  componentDidMount() {
    
    let stories = new Zuck(this.storiesElement, {
      skin: 'snapgram', // container class
      avatars: true, // shows user photo instead of last story item preview
      list: false, // displays a timeline instead of carousel
      openEffect: true, // enables effect when opening story - may decrease performance
      cubeEffect: true, // enables the 3d cube effect when sliding story - may decrease performance
      autoFullScreen: false, // enables fullscreen on mobile browsers
      backButton: true, // adds a back button to close the story viewer
      backNative: false, // uses window history to enable back button on browsers/android
      previousTap: true, // use 1/3 of the screen to navigate to previous item when tap the story
      localStorage: true, // set true to save "seen" position. Element must have a id to save properly.
      reactive: true, // set true if you use frameworks like React to control the timeline (see react.sample.html)
      callbacks: {
        onDataUpdate: function(currentState, callback) {
          this.setState(
            state => {
              state.stories = currentState;

              return state;
            },
            () => {
              callback();
            },
          );
        }.bind(this),
      },
      stories: this.state.stories,
    });
    
  }

  render() {
    const timelineItems = [];
    
  
    this.state.stories.map((story, storyId) => {
      const storyItems = [];

      story.items.map(storyItem => {
        storyItems.push(
          <li
            key={storyItem.id}
            data-id={storyItem.id}
            data-time={storyItem.time}
            className={storyItem.seen}
          >
            <a
              href={storyItem.src}
              data-type={storyItem.type}
              data-length={storyItem.length}
              data-link={storyItem.link}
              data-linkText={storyItem.linkText}
            >
              <img src={storyItem.preview} alt="" />
            </a>
          </li>,
        );
      });

      let arrayFunc = story.seen ? 'push' : 'unshift';
      timelineItems[arrayFunc](
        <div
          className='story'
          key={storyId}
          data-id={storyId}
          data-last-updated={story.lastUpdated}
          data-photo={story.photo}
          style={{width:"80px",height:"106px",marginTop:"8px"}}
        >
          <a className="item-link" href={story.link} >
            <span className="item-preview">
              <img src={story.photo} alt=""/>
            </span>
            <span className="info" itemProp="author" itemScope="" itemType="http://schema.org/Person">
              <strong style={{fontWeight:"200",color:"#262626",fontFamily:"-apple-system",fontSize:"14px"}} className="name" itemProp="name">
                {story.name}
              </strong>
              <span className="time">{story.lastUpdated}</span>
            </span>
          </a>

          <ul className="items">{storyItems}</ul>
        </div>,
      );
    });

    return (
      
        <div className="flr story-container" ref={node => (this.storiesElement = node)} id="stories-react">
          {timelineItems}
        </div>
        
        
      
    );
  }
}