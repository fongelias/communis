import React, { useState, FormEvent } from 'react';
import { Input } from 'components/presentational/Input/Input';

import './ContributePage.scss';

export const ContributePage = () => {
    const [name, setName] = useState("");
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input label="name" onChange={setName}/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export const CONTRIBUTE_PAGE_PATHNAME = "/contributePage"
