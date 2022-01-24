import React from 'react'
import {Icon, Segment, Sidebar, Menu} from "semantic-ui-react"
import {BrowserRouter as Router, Link} from "react-router-dom"
import Routes from "../../routes/Routes";
import "./MenuContent.scss"

export default function MenuContent(props) {
  const {setVisible, Visible} = props;
    return (
        <div>
          <Router>
            <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={Visible}
            width='thin'
          >
            <Menu.Item as={Link} to="/">
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/page1">
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as={Link} to="/page2"> 
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={Visible}>
            <Segment basic>
              <div className="content-page">
                <Routes />
              </div>
              
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
          </Router>
            
        </div>
    )
}
