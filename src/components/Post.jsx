import React from 'react';
import PostTopRow from './PostTopRow';
import PostMenu from './PostMenu';
import PostBody from './PostBody';
import PostStatistics from './PostStatistics';
import PostFooter from './PostFooter';
import styles from '../scss/styles.scss';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class Post extends React.Component{
  
  handleLike(){
    console.log(this.props)
      this.props.dispatch({ type: 'LIKE' });
    };
    
  render(props){
    return(
      <div className="post">
        <h1>{props.content}</h1>
        <div>
          <h2 onClick={this.handleLike}>LIKE</h2>
          <p>likes: {this.props.likes}</p>
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  content: PropTypes.string,
}

export default connect()(Post);
