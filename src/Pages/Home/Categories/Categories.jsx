import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ToyCards from '../ToyCards/ToyCards';

const Categories = () => {
    const toys=useLoaderData();
    
    return (
        <Tabs className="my-8">
            <TabList className="flex justify-center font-bold">
                <Tab className="mr-4 p-2 border-2 rounded-xl">Latest</Tab>
                <Tab className="mr-4 p-2 border-2 rounded-xl">EDUCATION TOY</Tab>
                <Tab className="p-2 border-2 rounded-xl">PUZZLE</Tab>
            </TabList>

            <TabPanel>
                <div className='lg:grid lg:grid-cols-3 gap-4 my-8'>
                    {
                        toys.map(toy=> <ToyCards
                        key={toy._id}
                        toy={toy}
                        ></ToyCards>)
                    }
                </div>
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