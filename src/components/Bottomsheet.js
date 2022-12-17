import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import Newroom from "./bottom_sheets/Newroom";
import StartRoom from "./bottom_sheets/StartRoom";


const Swipebottom = (props) => {
  return (
    <>
      <SwipeableBottomSheet 
        open={props.sheetVisible}
        onChange={()=>{
          props.setSheetVisible(!props.sheetVisible)
          props.setItemsVisible(true)
        }}
        fullScreen={props.sheetTitle == 'room detail' ? true: false}
        >
        <div style={{backgroundColor: props.sheetTitle == 'profile' ? 'transparent': '' }}>
          
          {props.sheetTitle === 'new room' ? (
            <Newroom
              cardDetail={props.cardDetail}
              setSheetVisible={(item)=>{
                props.setSheetVisible(item);
                props.setItemsVisible(true);
              }}
            />
           
          ): props.sheetTitle === 'start room' ? (
            <StartRoom
              setSheetCreateRoom={props.setSheetCreateRoom}
              setSheetVisible={(item)=>{
                props.setSheetVisible(item);
                props.setItemsVisible(true);
              }}
            />
          ) : ('')}
        </div>
      </SwipeableBottomSheet>
    </>
  );
};

export default Swipebottom;

