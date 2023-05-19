import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <div className='relative'>
                <img src="../../../public/assets/images/blog/blog.jpg" alt="" />
                <div className='absolute left-1/3 top-2/4 '>
                    <h2 className='text-7xl font-extrabold text-white'>Our Blogs</h2>
                </div>
            </div>
            <div className='lg:grid lg:grid-cols-2 gap-4 my-8'>
                <div className="card w-full bg-base-200 text-gray-600">
                    <div className="card-body">
                        <h2 className="card-title">What is an access token and refresh token?</h2>
                        <p>Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them.</p>
                        <h2 className='card-title'>How do they work and where ?</h2>
                        <p>Normally, a user with an access token can only access protected resources or perform specific actions for a set period of time, which reduces the risk of the token being compromised. A refresh token allows the user to get a new access token without needing to log in again.</p>
                        <div className="card-actions justify-end">
                            <Link to="/"><button className="btn">Back To Home</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-200 text-gray-600">
                    <div className="card-body">
                        <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                        <div className='flex justify-between gap-2'>
                            <div>
                                <h3 className="card-title">SQL Database:</h3>
                                <ul>
                                    <li>1. SQL Database are primary called RDBMS or relational database</li>
                                    <li>2. Structured query language SQL</li>
                                    <li>3. SQL Database are table based database</li>
                                    <li>4. SQL DB have a predefined schema</li>
                                    <li>5. Oracle, Postgres, MySQL and MS-SQL</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="card-title">NO-SQL Database:</h3>
                                <ul>
                                    <li>1. No-SQL Database are primary called Relational or distributed database</li>
                                    <li>2. No declarative query language</li>
                                    <li>3. No-SQL Database can be document based, key-value pairs, graph DB</li>
                                    <li>4. No-SQL DB use dynamic schema for unstructured data</li>
                                    <li>5. MongoDB, Redis, Neo4j, Cassandra, Hbase</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to="/"><button className="btn">Back To Home</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-200 text-gray-600">
                    <div className="card-body">
                        <h2 className="card-title">What is express js? </h2>
                        <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
                        <h2 className="card-title">What is Nest JS </h2>
                        <p>Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
                        <div className="card-actions justify-end">
                            <Link to="/"><button className="btn">Back To Home</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-200 text-gray-600">
                    <div className="card-body">
                        <h2 className="card-title">o	What is MongoDB aggregate and how does it work ? </h2>
                        <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                        <p>MongoDB is a database management system that allows you to store large amounts of data in documents that are held within larger structures known as collections. You can run queries on collections to retrieve a subset of documents matching given conditions, but MongoDB's query mechanism doesn't allow you to group or transform the returned data. This means your options for performing meaningful data analysis with MongoDB's query mechanism alone are limited.</p>
                        <p>As with many other database systems, MongoDB allows you to perform a variety of aggregation operations. These allow you to process data records in a variety of ways, such as grouping data, sorting data into a specific order, or restructuring returned documents, as well as filtering data as one might with a query.</p>
                        <p>MongoDB provides aggregation operations through aggregation pipelines — a series of operations that process data documents sequentially.</p>
                        <div className="card-actions justify-end">
                            <Link to="/"><button className="btn">Back To Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;