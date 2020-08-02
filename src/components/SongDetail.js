import React from "react";
import { connect } from "react-redux";

const SongDetail = ({selectedSong}) => {

    
  if (!selectedSong) {
    return <div>Select a song</div>;
  }


  return (
    <div>
      <h3>Song Detail</h3>
      <p>
        Title: {selectedSong.title} <br /> Duration: {selectedSong.duration}
      </p>
    </div>
  );
};



const mapStateToProps = (state) => {
  console.log(state);
  return { selectedSong: state.selectedSong };
};


export default connect(mapStateToProps)(SongDetail);









































































































































































// import React from "react";
// import { connect } from "react-redux";

// const SongDetail = (props) => {

    
//   if (!props.selectedSong) {
//     return <div>Select a song</div>;
//   }


//   return (
//     <div>
//       <h3>Song Detail</h3>
//       <p>
//         Title: {props.selectedSong.title} <br /> Duration: {props.selectedSong.duration}
//       </p>
//     </div>
//   );
// };



// const mapStateToProps = (state) => {
//   console.log(state);
//   return { selectedSong: state.selectedSong };
// };


// export default connect(mapStateToProps)(SongDetail);
