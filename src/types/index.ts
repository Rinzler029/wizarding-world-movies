export type Movie = {
    id: string;
    attributes: Attributes;
}

export type Attributes = {
    title: string;
    running_time: string;
    release_date: string;
    summary: string;
    poster: string;
    rating: string;
    trailer: string;
}