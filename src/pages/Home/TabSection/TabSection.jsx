import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const TabSection = () => {

    const [activeTab, setActiveTab] = useState('')

    return (
        <div className="w-9/12 mx-auto mt-10">
            <h1 className="text-5xl text-center font-bold mb-10">Find Out Our <span className="text-amber-500">Best Toys</span></h1>
            <Tabs>
                <TabList className="flex justify-between text-4xl font-bold">
                    <Tab onClick={() => setActiveTab('Title 1')} className={
                        activeTab == 'Title 1' ?
                        'cursor-pointer border-b-4 border-r-4 border-amber-300 w-1/3 px-5 text-center bg-amber-300' :
                        'cursor-pointer border-b-4 border-r-4 border-amber-300 w-1/3 px-5 text-center'
                    }>Title 1</Tab>
                    <Tab onClick={() => setActiveTab('Title 2')} className={
                        activeTab == 'Title 2' ?
                        'cursor-pointer border-b-4 border-r-4 border-amber-300 w-1/3 px-5 text-center bg-amber-300' :
                        'cursor-pointer border-b-4 border-r-4 border-amber-300 w-1/3 px-5 text-center'
                    }>Title 2</Tab>
                    <Tab onClick={() => setActiveTab('Title 3')} className={
                        activeTab == 'Title 3' ?
                        'cursor-pointer w-1/3 px-5 border-b-4 border-amber-300 text-center bg-amber-300' :
                        'cursor-pointer w-1/3 px-5 border-b-4 border-amber-300 text-center'
                    }>Title 3</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-center text-4xl">Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2 className="text-center text-4xl">Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2 className="text-center text-4xl">Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabSection;