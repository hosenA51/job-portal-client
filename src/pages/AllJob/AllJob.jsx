import React, { useState } from 'react';
import useJobs from '../../hooks/useJobs';
import HotJobCard from '../Home/HotJobCard';
import { BiSearch } from 'react-icons/bi';

const AllJob = () => {
    const [sort, setSort] = useState(false);
    const [minSalary, setMinSalary]=useState("")
    const [maxSalary, setMaxSalary]=useState("")
    const [search, setSearch] = useState("");
    const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);

    if (loading) {
        return <h2>Job is Loading....</h2>
    }

    return (
        <div>
            <h1 className='py-5 text-4xl font-bold text-center'>All Job Here</h1>

            <div className='w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center gap-x-5'>
                <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && "btn-success"}`}
                >
                    {sort == true ? "Sorted by Salary" : "Sort by Salary"}
                </button>
                <BiSearch></BiSearch>
                <input 
                onKeyUp={(e)=>setSearch(e.target.value)}
                className='input w-full max-w-2xl' type="text" placeholder='Search Jobs by location' />

                <div className='space-y-3'>
                <input 
                onKeyUp={(e)=>setMinSalary(e.target.value)}
                className='input w-full max-w-xs' type="text" placeholder='Min Salary' />
                <input 
                onKeyUp={(e)=>setMaxSalary(e.target.value)}
                className='input w-full max-w-xs' type="text" placeholder='Max Salary' />
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default AllJob;