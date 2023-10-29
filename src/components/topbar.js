import React, { Component } from "react";
import { connect } from "react-redux";

import ModalContainer from "./AddMovieModalContainer.js";
import Logo from "../../Components/Logo/index";
import Search from "../../Images/search.png";
import { closeFilmBody } from "../../Redux/actions.js";

const mapDispatchStateToProps = (dispatch) => ({
  closeFilmBodyFunc: () => dispatch(closeFilmBody()),
});

class TopBar extends Component {
  render() {
    return (
      <nav>
        {this.props.film ? (
          <img src={Search} onClick={this.props.closeFilmBodyFunc} />
        ) : (
          <ModalContainer />
        )}
        <Logo />
      </nav>
    );
  }
}

export default connect(null, mapDispatchStateToProps)(TopBar);
