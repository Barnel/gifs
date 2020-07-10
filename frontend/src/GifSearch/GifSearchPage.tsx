import React, {useEffect, useState} from "react";
import {GifSearchPageContainer} from "./GifSearchStyledComponents";
import {SearchBox} from "../utils/SearchBox";
import {fetchGifs} from "../apiClient";

export const GifSearchPage: React.FC<any> = (props) => {
    const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)
    const [gifs, setGifs] = useState<any[]>([])

    useEffect(() => {
        if(searchTerm && searchTerm.length) {
            fetchGifs(searchTerm).then((res) => setGifs(res))
        } else {
            setGifs([])
        }
    }, [searchTerm])

    return <GifSearchPageContainer>
        <SearchBox placeholder={"Gif search term"} onConfirm={(searchTerm: string | undefined) => setSearchTerm(searchTerm)}/>
    </GifSearchPageContainer>
}
