import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Categories = () => {
    const toys=useLoaderData();
    
    return (
        <Tabs className="my-8">
            <TabList className="flex justify-center font-bold">
                <Tab className="mr-4 p-2 border-2 rounded-xl">FEATURED</Tab>
                <Tab className="mr-4 p-2 border-2 rounded-xl">Doll</Tab>
                <Tab className="p-2 border-2 rounded-xl">Latest</Tab>
            </TabList>

            <TabPanel>
                
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
        </Tabs>
    );
};

export default Categories;