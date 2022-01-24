import React, {useState} from 'react'
import TopBar from '../../components/TopBar'
import MenuContent from "../../components/Sidebar";

import "./MainLayout.scss"

export default function MainLayout() {
    const [Visible, setVisible] = useState(false);
    return (
        <div>
            <div className="topbar">
                <TopBar setVisible={setVisible} />
            </div>
            <div className="content">
                <MenuContent setVisible={setVisible} Visible={Visible} />
            </div>
            <div  className="footer">
                <h2>Footer...</h2>
            </div>
        </div>
    )
}
