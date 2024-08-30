export interface Link {
    _id: string;
    originalUrl: string;
    shortUrl: string;
}


export type LinkMutation = {
    shortUrl: string;
    originalUrl: string;
};