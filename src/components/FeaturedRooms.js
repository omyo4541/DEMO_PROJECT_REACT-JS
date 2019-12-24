import React, { Component } from 'react';
import { RoomContext } from "../context";
import  Loading  from "./Loading";
import Room from "./Room";
import Title from "./Title";
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
  render() {
     let { loading, rooms } = this.context;
     console.log(rooms); 
     rooms = rooms.map(room =>{
       return <Room key={room.id} room={room}></Room>;
     });
    return (
        <section className="Featured Room">
         <Title title="Featured Room"></Title>
      <div className="Featured-Room-center">
         {loading ? <Loading /> : rooms };  
      </div>
      <Loading></Loading>
      </section>
    );
  }
}
