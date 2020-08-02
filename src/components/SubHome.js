import React from 'react';
import PostList from './PostList'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class SubHome extends React.Component{

    componentDidMount(){
        this.props.fetchPosts()
    }


    render(){
        return(
            <div>
                <PostList/>
            </div>
        )
    }
}


export default connect(null, { fetchPosts: fetchPosts}) (SubHome);