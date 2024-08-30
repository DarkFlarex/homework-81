
export interface LinkType {
    _id: string;
    shortUrl: string;
    originalUrl: string;
}


export type LinkMutation = {
    originalUrl: string;
    shortUrl?: string;
};