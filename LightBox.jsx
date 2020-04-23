const useState = React.useState;

const LightBox = (props) => {
  const [switchValues, setSwitchValues] = useState(new Array(props.numOfSwitches).fill(false));

  const toggleAllLights = () => {
    if (switchValues.every((light) => light === false)) {
      setSwitchValues(new Array(props.numOfSwitches).fill(true));
    } else {
      setSwitchValues(new Array(props.numOfSwitches).fill(false));
    }
  };

  const toggleLight = (id) => {
    setSwitchValues((prevSwitches) => {
      const newSwitches = [...prevSwitches];
      newSwitches[id] = !prevSwitches[id];
      return newSwitches;
    });
  };

  return (
    <div>
      <p>Click to Toggle a Light</p>
      <p>Double Click to Toggle All Lights</p>
      <div className="light-box">
        {
          switchValues.map((value, index) => {
            return (
              <LightSwitch
                key={index} // This is bad practice. Read here for more: https://reactjs.org/docs/lists-and-keys.html
                id={index}
                status={value}
                toggleLight={toggleLight}
                toggleAllLights={toggleAllLights}
              />
            );
        })
        }
      </div>
    </div>
  );
};