
export type ShowType = {
    title: string,
    thumbnail: any,
    year: number,
    category: 'Movie' | 'TV Series',
    rating: string,
    isBookmarked: boolean,
    isTrending: boolean,
}

export interface ShowContextType {
    shows: ShowType[];
    setShows: React.Dispatch<React.SetStateAction<ShowType[]>>
}

export type PageType = 'Full' | 'Movies' | 'TV series' | 'Bookmarked';

