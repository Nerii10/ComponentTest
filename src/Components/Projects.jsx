import { useState, useEffect } from "react";
import { PackageSearch } from "lucide-react";

import Websitelink from "./WebsiteLink"
import './Projects.css'
import data from './projects.json' 

export default function Projects({ Category }) {
    const [filteredData, setFilteredData] = useState(data);
    const [searchName, setSearchName] = useState("");
    const [Projects, setProjects] = useState([])

    useEffect(() => {
        let result = data;

        if (Category) {
            result = result.filter(entry => entry.category === Category);
            setProjects(result)
        } else {
            setProjects(data)
        }

        if (searchName) {
            result = result.filter(project =>
                project.name.toLowerCase().includes(searchName.toLowerCase())
            );
        }

        setFilteredData(result);
    }, [searchName, Category]); 

    return (
        <>
            <div className="ProjectsContainer">
                <div className="ProjectSearchBar">
                    <input
                        type="text"
                        onChange={(event) => setSearchName(event.target.value)}
                        value={searchName}
                    />
                    <PackageSearch className="ProjectSearchBarIcon" size={20} />
                    <p className={searchName.length === 0 ? "ProjectSearchBarText" : "ProjectSearchBarTextActive"}>
                        Search projects
                    </p>
                </div>

                <p>Displaying {filteredData.length} of {Projects.length} projects</p>
                
                {filteredData.length !== 0 ? (
                    <div className="Projects">
                        {filteredData.map((entry, index) => (
                            <Websitelink key={index} data={entry} />
                        ))}
                    </div>
                ) : (
                    <p>No projects found</p>
                )}
            </div>
        </>
    );
}
