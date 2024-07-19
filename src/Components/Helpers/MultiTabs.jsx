import React from 'react'
import PagesIndex from '../Pages/PagesIndex'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MultiTabs = () => {
  return (
   <PagesIndex.Main_Containt>
  <Tabs>
    <TabList>
      <Tab>Title 1gggggg</Tab>
      <Tab>Title 2gggggggg</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
   </PagesIndex.Main_Containt>
  )
}

export default MultiTabs