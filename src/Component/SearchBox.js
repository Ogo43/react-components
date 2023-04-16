import "boxicons";
import { search_data } from "../data";
import List from "./List";
import Icon from "./Icon";
import GoogleLogo from "./GoogleLogo";

const SearchBox = ({ user_input, onChangeHandler, onSubmit, data }) => {
  return (
    <>
      <main>
        <section>
          <GoogleLogo />
          <div className="search-general">
            <span className="search-logo">
              <Icon name="search-alt-2" />
            </span>
            <form className="input-form" onSubmit={onSubmit}>
              <input
                type="text"
                className="input-text"
                onChange={onChangeHandler}
                value={user_input}
              />
            </form>
            <span className="microphone-logo">
              <Icon name="microphone" />
            </span>
            <span className="camera-logo">
              <Icon name="camera" />
            </span>
          </div>
          {/* search input will be rendered here */}
          {data.map((el, index) => {
            return <p className="list" key={index}>{el}</p>;
          })}
          <div className="search-below">
            <h4 className="google-search">Google Search</h4>
            <h4 className="excited">I'm Feeling Lucky</h4>
          </div>

          <div className="offering">
            <div>
              <h5>Google offered in:</h5>
            </div>

            <div className="lang">
              <ul className="lang-list">
                {search_data.map((data, index) => {
                  return (
                    <List name={data.name} address={data.address} key={index} />
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SearchBox;
