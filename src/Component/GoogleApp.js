import { useState } from "react";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";
import Footer from "./Footer";


const GoogleApp = () => {
  const [user_input, setUserInput] = useState("");
  const [all_data, setAllData] = useState([])

  const onChangeHandler = e => {
    setUserInput(e.target.value);
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    setUserInput("");
    setAllData([...all_data, user_input])
  };
  return (
    <div className="GoogleApp">
      <NavBar />
      <SearchBox user_input={user_input} onChangeHandler={onChangeHandler} onSubmit={onSubmitHandler} data={all_data } />
      <Footer />
    </div>
  );
};

export default GoogleApp;
