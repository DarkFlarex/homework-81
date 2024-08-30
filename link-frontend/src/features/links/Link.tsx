import React from 'react';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectLinkCreating} from "./LinksSlice";
import { createLink } from "./LinksThunks";
import { Grid, Typography  } from "@mui/material";
import LinkForm from "./componets/LinkForm";
import { LinkMutation } from "../../types";

const Link: React.FC = () => {
    const dispatch = useAppDispatch();
    const isCreating = useAppSelector(selectLinkCreating);

    const onFormSubmit = async (linkMutation: LinkMutation) => {
        try {
           await dispatch(createLink(linkMutation));
        } catch (error) {
            console.error('Error creating link:', error);
        }
    };

    return (
        <Grid container direction="column" spacing={2}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Shorten your link!
            </Typography>

            <Grid item>
                <LinkForm onSubmit={onFormSubmit} isLoading={isCreating} />
            </Grid>
        </Grid>
    );
};

export default Link;
