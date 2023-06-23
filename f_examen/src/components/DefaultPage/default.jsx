import React, {Fragment} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Fotter from "../Footer/Fotter";
import { Col, Container, Row, Footer } from 'mdbreact';
import Header from "../Header/Header";
import '../DefaultPage/default.css';

function Default() {
  return (
      <React.Fragment> 
        <Header/>
        <div className="Test">
          <div className="acomodar">
            <div className="numero">
              <h2>400+</h2>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
}

export default Default;