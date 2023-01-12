import React from 'react'
import { Container, Divider, Grid, GridRow, Header, Icon } from 'semantic-ui-react'

//import DropdownExampleSearchDropdown from './component/dropdown.js';
import Example1 from "./component/dropdown";
import Appp from "./component/excel_reader"
// Ported from the amazing codepen by Alexei Popkov.
// https://codepen.io/Reystleen/pen/oydqxz

const AnotherGridLayout = () => (
  <Container>
    {/* Heads up! We apply there some custom styling, you usually will not need it. */}
    <style>
      {`
      p {
        align-content: center;
        background-color: #FFFFFF;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
        margin-left: 10%;
      }

    }
    `}
    </style>

    {/* <Header as='h2' icon inverted textAlign='center'>
      <Icon name='grid layout' />
      Advanced Grid
      <Header.Subheader>
        This page contains some helpful examples that can be usefull for advanced layouts.
      </Header.Subheader>
    </Header>
    <Divider /> */}





<Header as='h2'  textAlign='center'>
Test Cases
</Header>
<Header as='h6'  textAlign='left'>
PROJECTS
</Header>
<Grid columns='equal'>
<Grid.Row columns='equal'>
  <Grid.Column>
    <p>
      <Example1 />
    </p>
  </Grid.Column>
  
  
</Grid.Row>
<GridRow>
  <Appp />
</GridRow>

</Grid>

  </Container>
)

export default AnotherGridLayout
