import React, { Component } from 'react';
import styled from 'styled-components';

export class Users extends Component {
  render() {
    return (
      <Bar>
          <>
            <h1> User Lists : </h1>
            <div className = 'userBox'>
                {this.props.users.map(user=> 
                    <div className = 'user' key={user.id}>  {user.username} : {user.department} </div>     
                )}
            </div>
            </>
        
      </Bar>
    )
  }
}
const Bar = styled.div`
      width : 100%;
      h1{
          width : 100%;
      }
      .userBox{
          display:flex;
          flex-wrap:wrap;
          width: 100%;
          text-align: center;
          justify-content: center;
      .user{
           border: 1px solid rgb(24, 229, 229);
           background: rgb(156, 220, 223);
           width: 70%;
           margin: .4%;
           padding: .2%;
           border-radius: 6px;
           font-weight: bold;
           font-size: 18px;
      }
    }
`

export default Users
