import React, { useState } from 'react';
import { LinkMutation } from "../../../types";
import { LoadingButton } from "@mui/lab";
import { Grid, TextField } from "@mui/material";

interface Props {
    onSubmit: (link: LinkMutation) => void;
    isLoading: boolean;
}

const LinkForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
    const [state, setState] = useState<LinkMutation>({
        originalUrl: '',
    });

    const submitFormHandler = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({ ...state });
    };

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Grid container direction="column" spacing={2} component="form" onSubmit={submitFormHandler}>
            <Grid item>
                <TextField
                    required
                    label="Enter URL here"
                    id="originalUrl"
                    name="originalUrl"
                    value={state.originalUrl}
                    onChange={inputChangeHandler}
                />
            </Grid>
            <Grid item>
                <LoadingButton
                    type="submit"
                    loading={isLoading}
                    variant="contained"
                >
                    <span>Shorten!</span>
                </LoadingButton>
            </Grid>
        </Grid>
    );
};

export default LinkForm;
