import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useLoaderData } from 'react-router-dom';
import ToyCard from '../ToyCard/ToyCard';

const ToyGallary = () => {
    const toys = useLoaderData();
    console.log(toys);
    return (
        <div className='lg:my-12'>
            <h2 className='text-7xl font-extrabold text-center'>Toys Gallary</h2>
            <div className='mt-8'>
                <Tabs>
                    <TabList>
                        <div className="flex justify-center gap-4">
                            <Tab className="text-2xl font-bold border-2 rounded-lg px-4 py-2">All Toys</Tab>
                            <Tab className="text-2xl font-bold border-2 rounded-lg px-4 py-2">Education Toy</Tab>
                            <Tab className="text-2xl font-bold border-2 rounded-lg px-4 py-2">Puzzle</Tab>
                            <Tab className="text-2xl font-bold border-2 rounded-lg px-4 py-2">Resin Crafts</Tab>
                        </div>
                    </TabList>

                    <TabPanel>
                        <div className='lg:grid lg:grid-cols-3 gap-4 lg:mt-8'>
                            {
                                toys.map(toy=> <ToyCard
                                key={toy._id}
                                toy={toy}
                                ></ToyCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ToyGallary;