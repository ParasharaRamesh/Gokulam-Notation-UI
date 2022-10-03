import React, {useState} from 'react';
import './styles/App.css';
import Search from "./components/Search";
import NotationEditor from "./components/NotationEditor";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const App = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Search</Tab>
                <Tab>Notation Editor</Tab>
            </TabList>
            <TabPanel>
                <div>
                    <Search/>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <NotationEditor/>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default App;
