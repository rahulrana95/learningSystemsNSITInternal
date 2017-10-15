import React, { Component } from 'react';
import axios from 'axios';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import store from '../Stores/index.js';

class StudentDiscussions extends Component {
  constructor(){
    super()
    axios.get('http://192.168.5.1:5000/view_discuss')
    .then(function(response){
      store.dispatch({
        type:'view_discuss',
        payload:response.data[0].data
      });
    });
  }


  showData = () => {

    if(this.props.ViewReducer.payload.length >0){
      return this.props.ViewReducer.payload.map((index,value) => {
        return (<div style={{ padding:'20px',  backgroundColor:'white',marginBottom:'5px' }}>
          <strong>{value+1} </strong>
          <p>{index.query}</p>
          </div>);
      })
    }

  }
  render() {
    return (
      <div className="StudentDiscussions">
        {this.showData()}
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
    ViewReducer:state.View_discuss
	};


	}

function matchDispatchToProps(dispatch){
	return bindActionCreators({},dispatch);


}

export default connect(mapStateToProps,matchDispatchToProps)(StudentDiscussions);
