import React from 'react';
import NewPost from '../signedInProfile/NewPost';
import LiveFeed from './LiveFeed';
import styles from '../../scss/styles.scss';
import { Switch, Route } from 'react-router-dom';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Feed extends React.Component{



  render(props){
    return(
      <div className="feed">
        <Route render={()=><NewPost onNewPost={this.handleCreatingNewPost} />} />
        <LiveFeed posts={this.props.posts}/>
      </div>
    );
  }
}


export default(Feed);
