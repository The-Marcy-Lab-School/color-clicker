const LightSwitch = (props) => {
  return (
    <div 
      onDoubleClick={() => props.toggleAllLights()}
      onClick={() => props.toggleLight(props.id)}
      className={props.status ? "light-switch on" : "light-switch off"}
      id={props.id}>
      {props.status ? "On" : "Off"}
     </div>
  );
};