import React from 'react';
import {Grid, Link} from "@mui/material";
import {API_URL} from "../../../constants";
import {LinkType} from "../../../types";
interface Props {
    link: LinkType;
}

const LinkItem: React.FC<Props> = ({link}) => {
    const fullUrl = `${API_URL}/links/${link.shortUrl}`;

    return (
        <Grid>
            <Link href={fullUrl}>
                {fullUrl}
            </Link>
        </Grid>
    );
};

export default LinkItem;