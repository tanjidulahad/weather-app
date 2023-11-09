'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import {BsSearch} from "react-icons/bs"
import { useDebounce } from "use-debounce";
import {countries} from "@/utils/countries" 
import toast from 'react-hot-toast';

const Search = ({searchTerm}) => {
    const [searchValue,setSearchValue]=useState(searchTerm)
    const [debouncedValue,cancel] = useDebounce(searchValue, 1000);
    const router=useRouter()

    useEffect(()=>{
        if(debouncedValue){
        const country=countries.filter(item=>item.country.toLowerCase()==debouncedValue.toLowerCase())[0]
        const latitude=country?.latitude
        const longitude=country?.longitude
        console.log("from useEffect",country,latitude,longitude)
        
        

            if(country && latitude && longitude){
    
                handleRoutingChange(country,latitude,longitude)
            }else{
                toast.error('Country not found.')
            }
        }

    },[debouncedValue])

    const handleSearchSubmit=(e)=>{
        e.preventDefault()
        cancel()
        const country=countries.filter(item=>item.country.toLowerCase()==searchValue.toLowerCase())[0]
        const latitude=country?.latitude
        const longitude=country?.longitude
        console.log("from handleSearchSubmit",country,latitude,longitude)
        if(country && latitude && longitude){

            handleRoutingChange(country,latitude,longitude)
        }else{
            toast.error('Country not found.')
        }
    }

    const handleRoutingChange=(country,latitude,longitude)=>{
        router.push(`/?country=${country.country}&lat=${latitude}&long=${longitude}`)
    }

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <div className="flex items-center gap-2">
                <label htmlFor="search"><BsSearch size={22}/></label>
                <input className="py-2 w-[40%] border-none outline-none focus:bg-black/5 rounded-sm pl-1" id="search" type="text" placeholder="Search something here..." defaultValue={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                </div>
            </form>
        </div>
    );
};

export default Search;