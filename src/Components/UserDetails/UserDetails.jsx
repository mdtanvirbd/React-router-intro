import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, website, company } = user;

    return (
        <div>
            <h2>Details about user</h2>
            <h2>Name: {name}</h2>
            <p>Website: {website}</p>
            <p>Company Name: {company.name}</p>
            <p>Catch Phrase: {company.catchPhrase}</p>
            <p>BS: {company.bs}</p>
        </div>
    );
};

export default UserDetails;
